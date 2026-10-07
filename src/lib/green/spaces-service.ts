/**
 * Green space DB query service.
 *
 * Reads from the local SQLite database (ingested by osm-ingest.ts).
 * Computes NEAREST-BOUNDARY distances using our pure-JS spatial library
 * (boundary-distance.ts). This replaces the centroid-distance bug.
 *
 * Distance calculation strategy:
 *  - Polygon / MultiPolygon: shortest distance from user to polygon boundary.
 *    Returns 0 m when the user is inside the polygon.
 *  - Point geometry (e.g. nursery records): point-to-point haversine, labelled
 *    as "approximate location-based distance".
 *  - No geometry: haversine to centroid, labelled as centroid estimate.
 *
 * Never calls Overpass per user request.
 */

import type { GreenSpaceSummary, GreenSpaceDetail, FilterType, AccessStatus, WalkClass } from '@/lib/green/types';
import { ACTIVE_CITY, WALK_SPEED_KMH } from '@/lib/green/config';
import { recommendationScore } from './classifier';
import { nearestBoundaryDistance } from './boundary-distance';

const R = 6371000; // Earth radius in metres

/** Haversine distance (metres) between two lat/lon points — used only for bbox pre-filter */
function haversineM(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Estimated walk minutes (straight-line, clearly labelled as estimated) */
function estimatedWalkMin(distM: number): number {
  return Math.round((distM / 1000 / WALK_SPEED_KMH) * 60);
}

interface NearbyOptions {
  lat: number;
  lon: number;
  radiusM: number;
  type?: FilterType;
  verifiedOnly?: boolean;
  limit?: number;
  allCity?: boolean;
}

export async function getNearbyGreenSpaces(opts: NearbyOptions): Promise<GreenSpaceSummary[]> {
  const { lat, lon, radiusM, type = 'all', verifiedOnly = false, limit = 50, allCity = false } = opts;

  let db: any;
  try {
    const mod = await import('@/lib/db');
    db = mod.db;
  } catch {
    return [];
  }

  // Fetch all spaces from DB (SQLite doesn't support spatial queries)
  let spaces: any[] = [];
  try {
    spaces = await (db as any).greenSpace.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 500, // reasonable cap
    });
  } catch {
    return [];
  }

  const results: GreenSpaceSummary[] = [];

  for (const space of spaces) {
    const centroidLat: number = space.centroidLat;
    const centroidLon: number = space.centroidLon;

    // Pre-filter: use centroid haversine as a quick bbox check before computing
    // the more expensive polygon-boundary distance. We expand by 20% to avoid
    // missing large polygons whose centroid is farther than the boundary.
    const centroidDistM = haversineM(lat, lon, centroidLat, centroidLon);
    if (!allCity && centroidDistM > radiusM * 1.2) continue;

    // Accurate nearest-boundary distance (replaces centroid-only bug)
    const geometry = tryParseJson(space.geometryJson, null);
    const bdResult = nearestBoundaryDistance(lat, lon, geometry, centroidLat, centroidLon);
    const distM = bdResult.distanceM;

    // Apply radius filter to the accurate boundary distance
    if (!allCity && distM > radiusM) continue;

    const tags: Record<string, string> = tryParseJson(space.tags, {});
    const accessEvidence = tryParseJson(space.accessEvidence, []);
    const accessStatus: AccessStatus = space.accessStatus;
    const walkClass: WalkClass = space.walkClass;

    // Filter by verifiedOnly
    if (verifiedOnly && walkClass !== 'WALKABLE_VERIFIED') continue;

    // Filter by type
    if (type !== 'all') {
      if (type === 'parks' && space.category !== 'Park') continue;
      if (type === 'walkable' && walkClass !== 'WALKABLE_VERIFIED' && walkClass !== 'PATHS_PRESENT_ACCESS_UNVERIFIED') continue;
      if (type === 'trails' && space.category !== 'Nature Reserve' && space.category !== 'Forest') continue;
    }

    // NDVI — try to load latest observation
    let ndvi: GreenSpaceSummary['ndvi'] = null;
    try {
      const obs = await (db as any).greenVegetationObservation?.findFirst({
        where: { greenSpaceId: space.id },
        orderBy: { processedAt: 'desc' },
      });
      if (obs) {
        ndvi = {
          mean: obs.ndviMean,
          min: obs.ndviMin,
          max: obs.ndviMax,
          pixelCount: obs.pixelCount,
          densityClass: obs.densityClass,
          confidence: obs.confidence,
          compositeType: obs.compositeType,
          observationStart: obs.observationStart?.toISOString?.() ?? null,
          observationEnd: obs.observationEnd?.toISOString?.() ?? null,
          imageCount: obs.imageCount,
          cloudCoverage: obs.cloudCoverage,
          satelliteSource: obs.satelliteSource,
        };
      }
    } catch {
      // No observations yet — GEE not configured
    }

    if (!ndvi) {
      ndvi = {
        mean: null, min: null, max: null, pixelCount: null,
        densityClass: 'UNAVAILABLE', confidence: null,
        compositeType: null, observationStart: null, observationEnd: null,
        imageCount: null, cloudCoverage: null, satelliteSource: null,
        reason: 'SATELLITE_UNAVAILABLE',
      };
    }

    // Image
    let image: GreenSpaceSummary['image'] = null;
    try {
      const img = await (db as any).greenSpaceImage?.findFirst({
        where: { greenSpaceId: space.id },
        orderBy: { createdAt: 'desc' },
      });
      if (img) {
        image = {
          imageUrl: img.imageUrl,
          thumbUrl: img.thumbUrl ?? undefined,
          sourceUrl: img.sourceUrl,
          attribution: img.attribution,
          licence: img.licence,
          verificationTier: img.verificationTier,
          source: img.source,
          caption: img.caption ?? undefined,
        };
      }
    } catch {
      // No images yet
    }

    const summary: GreenSpaceSummary = {
      id: space.id,
      osmType: space.osmType,
      osmId: space.osmId,
      name: space.name,
      category: space.category,
      geometry,
      centroid: { lat: centroidLat, lon: centroidLon },
      areaM2: space.areaM2,
      tags,
      accessStatus,
      walkClass,
      accessEvidence,
      ndvi,
      image,
      distanceM: distM,
      distanceLabel: bdResult.distanceLabel,
      distanceMethod: bdResult.distanceMethod,
      nearestBoundaryPoint: bdResult.nearestPoint,
      isInsidePolygon: bdResult.isInside,
      walkMinutes: distM === 0 ? 0 : estimatedWalkMin(distM),
      walkMinutesEstimated: true, // straight-line estimate until ORS is called
      source: space.source,
      updatedAt: space.updatedAt?.toISOString?.() ?? new Date().toISOString(),
    };

    results.push(summary);
  }

  // Sort: verified evidence > NDVI class > distance
  results.sort((a, b) => {
    const scoreA = recommendationScore(a.walkClass, a.ndvi?.mean ?? null);
    const scoreB = recommendationScore(b.walkClass, b.ndvi?.mean ?? null);
    if (scoreB !== scoreA) return scoreB - scoreA;
    return a.distanceM - b.distanceM;
  });

  return results.slice(0, limit);
}

export async function getGreenSpaceDetail(id: string, fromLat: number, fromLon: number): Promise<GreenSpaceDetail | null> {
  let db: any;
  try {
    const mod = await import('@/lib/db');
    db = mod.db;
  } catch {
    return null;
  }

  let space: any;
  try {
    space = await (db as any).greenSpace.findUnique({ where: { id } });
  } catch {
    return null;
  }

  if (!space) return null;

  const tags: Record<string, string> = tryParseJson(space.tags, {});
  const accessEvidence = tryParseJson(space.accessEvidence, []);
  const entrances = tryParseJson(space.entrances, []);
  const geometry = tryParseJson(space.geometryJson, null);

  // Accurate boundary distance for the detail view
  const geometryForDetail = tryParseJson(space.geometryJson, null);
  const bdDetail = nearestBoundaryDistance(
    fromLat, fromLon,
    geometryForDetail,
    space.centroidLat, space.centroidLon
  );
  const distanceM = bdDetail.distanceM;

  let ndviFull: GreenSpaceDetail['ndviFull'] = null;
  try {
    const obs = await (db as any).greenVegetationObservation?.findFirst({
      where: { greenSpaceId: id },
      orderBy: { processedAt: 'desc' },
    });
    if (obs) {
      ndviFull = {
        mean: obs.ndviMean,
        min: obs.ndviMin,
        max: obs.ndviMax,
        pixelCount: obs.pixelCount,
        densityClass: obs.densityClass,
        confidence: obs.confidence,
        compositeType: obs.compositeType,
        observationStart: obs.observationStart?.toISOString?.() ?? null,
        observationEnd: obs.observationEnd?.toISOString?.() ?? null,
        imageCount: obs.imageCount,
        cloudCoverage: obs.cloudCoverage,
        satelliteSource: obs.satelliteSource,
      };
    }
  } catch { /* no GEE data */ }

  let images: GreenSpaceDetail['images'] = [];
  try {
    const imgs = await (db as any).greenSpaceImage?.findMany({
      where: { greenSpaceId: id },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });
    images = (imgs ?? []).map((img: any) => ({
      imageUrl: img.imageUrl,
      thumbUrl: img.thumbUrl ?? undefined,
      sourceUrl: img.sourceUrl,
      attribution: img.attribution,
      licence: img.licence,
      verificationTier: img.verificationTier,
      source: img.source,
      caption: img.caption ?? undefined,
    }));
  } catch { /* no images */ }

  // Build verified OSM URL — use coordinate fallback when IDs are synthetic/missing
  const osmUrl = buildOsmUrl(space.osmType, space.osmId, space.centroidLat, space.centroidLon);

  return {
    id: space.id,
    osmType: space.osmType,
    osmId: space.osmId,
    osmVersion: space.osmVersion,
    name: space.name,
    category: space.category,
    geometry,
    centroid: { lat: space.centroidLat, lon: space.centroidLon },
    areaM2: space.areaM2,
    tags,
    accessStatus: space.accessStatus,
    walkClass: space.walkClass,
    accessEvidence,
    ndvi: ndviFull,
    ndviFull,
    image: images[0] ?? null,
    images,
    distanceM,
    distanceLabel: bdDetail.distanceLabel,
    distanceMethod: bdDetail.distanceMethod,
    nearestBoundaryPoint: bdDetail.nearestPoint,
    isInsidePolygon: bdDetail.isInside,
    walkMinutes: distanceM === 0 ? 0 : estimatedWalkMin(distanceM),
    walkMinutesEstimated: true,
    pathCount: space.pathCount ?? 0,
    totalPathLengthM: space.totalPathLengthM ?? 0,
    entrances,
    routeGeojson: null, // populated by /route endpoint
    osmUrl,
    source: space.source,
    updatedAt: space.updatedAt?.toISOString?.() ?? new Date().toISOString(),
    fetchedAt: new Date().toISOString(),
  };
}

function tryParseJson<T>(val: any, fallback: T): T {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'object') return val as T;
  try { return JSON.parse(val) as T; } catch { return fallback; }
}

/**
 * Build a verified OpenStreetMap URL for a green space.
 *
 * Strategy:
 *  1. If osmType ∈ {node, way, relation} and osmId is a valid numeric string,
 *     use the canonical feature URL: openstreetmap.org/{type}/{id}
 *  2. Otherwise (synthetic IDs, nursery records without OSM ID, etc.),
 *     use coordinate-based URL with a zoom-17 pin.
 *
 * Never returns a URL pointing to a random location or the city centre.
 */
export function buildOsmUrl(
  osmType: string,
  osmId: string,
  lat: number,
  lon: number
): string {
  const validTypes = ['node', 'way', 'relation'];
  const isValidOsmId = /^[1-9][0-9]{0,15}$/.test(osmId ?? '');

  if (validTypes.includes(osmType) && isValidOsmId) {
    return `https://www.openstreetmap.org/${osmType}/${osmId}`;
  }

  // Coordinate-based fallback — zoom 17 shows individual park features clearly
  const latF = lat.toFixed(6);
  const lonF = lon.toFixed(6);
  return `https://www.openstreetmap.org/?mlat=${latF}&mlon=${lonF}#map=17/${latF}/${lonF}`;
}
