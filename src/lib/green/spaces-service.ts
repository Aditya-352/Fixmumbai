/**
 * Green space DB query service.
 *
 * Reads from the local SQLite database (ingested by osm-ingest.ts).
 * Computes straight-line distances using Turf.js (PostGIS fallback when PostGIS unavailable).
 * Never calls Overpass per user request.
 */

import type { GreenSpaceSummary, GreenSpaceDetail, FilterType, AccessStatus, WalkClass } from '@/lib/green/types';
import { ACTIVE_CITY, WALK_SPEED_KMH } from '@/lib/green/config';
import { recommendationScore } from './classifier';

const R = 6371000; // Earth radius in metres

/** Haversine distance (metres) between two lat/lon points */
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
}

export async function getNearbyGreenSpaces(opts: NearbyOptions): Promise<GreenSpaceSummary[]> {
  const { lat, lon, radiusM, type = 'all', verifiedOnly = false, limit = 50 } = opts;

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

    // Filter by radius
    const distM = haversineM(lat, lon, centroidLat, centroidLon);
    if (distM > radiusM) continue;

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
      geometry: tryParseJson(space.geometryJson, null),
      centroid: { lat: centroidLat, lon: centroidLon },
      areaM2: space.areaM2,
      tags,
      accessStatus,
      walkClass,
      accessEvidence,
      ndvi,
      image,
      distanceM: distM,
      walkMinutes: estimatedWalkMin(distM),
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

  const distanceM = haversineM(fromLat, fromLon, space.centroidLat, space.centroidLon);

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

  const osmUrl = `https://www.openstreetmap.org/${space.osmType}/${space.osmId}`;

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
    walkMinutes: estimatedWalkMin(distanceM),
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
