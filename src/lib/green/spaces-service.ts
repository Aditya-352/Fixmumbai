/**
 * Green space DB query service.
 *
 * Reads from the local SQLite/PostgreSQL database (ingested by osm-ingest.ts).
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
 * Production fallback:
 *  When the DB has zero GreenSpace records (e.g. production was never seeded),
 *  the service transparently falls back to the embedded static seed dataset.
 *  This prevents the "0 locations" failure that occurs when the DB is empty.
 *  The fallback is labelled in the response meta so operators can tell.
 *
 * Never calls Overpass per user request.
 */

import type { GreenSpaceSummary, GreenSpaceDetail, FilterType, AccessStatus, WalkClass } from '@/lib/green/types';
import { CityId, WALK_SPEED_KMH } from '@/lib/green/config';
import { recommendationScore } from './classifier';
import { nearestBoundaryDistance } from './boundary-distance';
import { normaliseNdvi, unavailableNdvi } from './ndvi-provenance';
import { verifiedImageFor, GREEN_SPACE_IMAGE_PLACEHOLDER } from '@/data/verified-green-space-images';
import { STATIC_GREEN_SPACES_FALLBACK, type StaticGreenSpaceSeed } from './static-spaces-fallback';
import { PUNA_BOUNDARIES_STATIC } from './puna-boundaries-static';
import { PUNA_LOCATIONS_STATIC } from './puna-locations-static';
import { BENGALURU_STATIC } from './bengaluru-static';
import { getCity, type CityConfig } from '@/lib/green/config';

/**
 * The static green-space dataset registered for each city.
 *
 * Shared by the list path and the detail path so both resolve the same records.
 */
const STATIC_SPACES_BY_CITY: Record<CityId, unknown[]> = {
  mumbai: STATIC_GREEN_SPACES_FALLBACK,
  pune: [...PUNA_BOUNDARIES_STATIC, ...PUNA_LOCATIONS_STATIC],
  bengaluru: BENGALURU_STATIC,
};

/** True when an id was minted from a static dataset rather than a database row. */
export function isStaticSpaceId(id: string): boolean {
  return typeof id === 'string' && id.startsWith('static_');
}

/**
 * Resolve a static id to the record and the city that owns it.
 *
 * The `static_` prefix does NOT imply Mumbai: `staticToDbShape` mints ids from
 * each city's own dataset, so a Pune park is `static_way_<osmId>` and a
 * Bengaluru one is `static_node_<osmId>`. Ownership is therefore resolved from
 * the data itself, never inferred from the prefix.
 */
export function findStaticSpace(
  id: string
): { city: CityId; seed: any } | null {
  if (!isStaticSpaceId(id)) return null;
  for (const city of Object.keys(STATIC_SPACES_BY_CITY) as CityId[]) {
    const list = STATIC_SPACES_BY_CITY[city] as any[];
    const seed = list.find((s) => staticSpaceId(s.osmType, s.osmId) === id);
    if (seed) return { city, seed };
  }
  return null;
}

/** The id `staticToDbShape` mints for a static seed. */
function staticSpaceId(osmType: string, osmId: string): string {
  return `static_${osmType}_${osmId}`;
}

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
  /** Zero-based page offset. Defaults to 0, preserving previous behaviour. */
  offset?: number;
  /** Max rows pulled from the database in one query. */
  candidateLimit?: number;
  /** When DB has zero records, use this city's static dataset instead of Mumbai's. */
  city?: CityId;
}

/**
 * Maximum rows read from the database in a single query.
 *
 * Replaces the previous hard-coded `take: 500`, which truncated silently. When
 * this ceiling is reached the response reports `truncated: true` so a list is
 * never presented as a complete city.
 */
export const DEFAULT_CANDIDATE_LIMIT = 2000;

/**
 * Convert a static fallback record into the DB-shaped object the loop below
 * expects. Keeps the normalization logic in one place.
 *
 * IMAGES: the inline `imageUrl` / `thumbUrl` fields that used to live on these
 * records were hand-written Wikimedia thumbnail paths whose MD5 hash
 * directories were invented — all 60 returned HTTP 400, and every row was
 * labelled `CC BY-SA 4.0` / `VERIFIED` regardless of the real file. They are
 * now ignored entirely. An image is attached only when
 * `src/data/green-space-images.json` contains a record resolved from the
 * Commons API for this `${osmType}/${osmId}`; otherwise the image is null and
 * the UI shows the neutral placeholder.
 */
/**
 * Repair an over-nested GeoJSON `Polygon`.
 *
 * A valid Polygon is `coordinates = [ ring, ring, ... ]` where each ring is
 * `[ [lon, lat], ... ]`, i.e. depth 3 to the coordinate pair. The Bengaluru CSV
 * export carries one extra wrapper level (`coordinates = [ [ ring, ... ] ]`,
 * depth 4) while still declaring `"type": "Polygon"`.
 *
 * Left uncorrected, `processPolygon()` reads a ring whose members are arrays
 * rather than numbers, every segment distance becomes NaN, and
 * `nearestBoundaryDistance()` returns Infinity. That made every Bengaluru record
 * fail the radius filter, so the city silently returned nothing even though it
 * holds 1,272 genuine records.
 *
 * Only the redundant wrapper is removed; every ring and vertex is preserved, so
 * this corrects the nesting without altering or discarding any geometry.
 */
function normalisePolygonNesting(geometry: any): any {
  if (!geometry || geometry.type !== 'Polygon' || !Array.isArray(geometry.coordinates)) {
    return geometry;
  }
  const coords = geometry.coordinates;
  const first = coords[0];
  if (!Array.isArray(first) || first.length === 0) return geometry;

  // Well-formed: coordinates[0] is a ring of [lon, lat] pairs.
  if (Array.isArray(first[0]) && typeof first[0][0] === 'number') return geometry;

  // Over-nested: coordinates[0][0] is itself a ring.
  if (Array.isArray(first[0]) && Array.isArray(first[0][0])) {
    return { ...geometry, coordinates: first };
  }
  return geometry;
}

function staticToDbShape(s: (typeof STATIC_GREEN_SPACES_FALLBACK)[number]): any {
  const verified = verifiedImageFor(s.osmType, String(s.osmId), s.name);
  return {
    id: `static_${s.osmType}_${s.osmId}`,
    osmType: s.osmType,
    osmId: String(s.osmId),
    osmVersion: 1,
    name: s.name,
    category: s.category,
    tags: JSON.stringify(s.tags),
    geometryJson: JSON.stringify(normalisePolygonNesting(s.geometry)),
    centroidLat: s.centroidLat,
    centroidLon: s.centroidLon,
    areaM2: s.areaM2,
    accessStatus: s.accessStatus === 'PUBLIC_TAGGED' ? 'PUBLIC_TAGGED' : 'UNKNOWN',
    walkClass: s.walkClass === 'WALKABLE_VERIFIED' ? 'WALKABLE_VERIFIED'
      : s.walkClass === 'PATHS_PRESENT_ACCESS_UNVERIFIED' ? 'PATHS_PRESENT_ACCESS_UNVERIFIED'
      : 'ACCESS_UNVERIFIED',
    accessEvidence: JSON.stringify(
      (s.accessEvidence ?? []).map((e: any) => ({
        type: 'OSM_TAG',
        key: e.tag?.split('=')?.[0] ?? 'access',
        value: e.tag?.split('=')?.[1] ?? 'yes',
        description: e.note ?? e.source ?? '',
      }))
    ),
    pathCount: s.pathCount ?? 0,
    totalPathLengthM: s.totalPathLengthM ?? 0,
    entrances: JSON.stringify(s.entrances ?? []),
    source: 'STATIC_SEED',
    updatedAt: new Date(),
    // NDVI from seed (illustrative estimate, never a measurement)
    _staticNdvi: {
      mean: s.ndviMean ?? null,
      min: s.ndviMin ?? null,
      max: s.ndviMax ?? null,
      densityClass: s.densityClass ?? 'UNAVAILABLE',
    },
    // Image from the generated, API-verified Commons records only
    _staticImage: verified
      ? {
          imageUrl: verified.imageUrl,
          thumbUrl: verified.thumbUrl,
          sourceUrl: verified.sourceUrl,
          attribution: verified.attribution,
          licence: verified.licence,
          verificationTier: verified.verificationTier,
          source: verified.source,
          caption: verified.caption ?? undefined,
        }
      : null,
  };
}

export interface NearbyPageMeta {
  /** True when records came from the embedded fallback dataset, not the database. */
  usedStaticFallback: boolean;
  /** Records examined before pagination was applied. */
  candidateCount: number;
  /** Records returned in this page. */
  returned: number;
  /** Records matching the city, filters and radius in total, before the limit slice. */
  total: number;
  limit: number;
  offset: number;
  /** True when more records exist beyond this page. Never claim completeness when true. */
  hasMore: boolean;
  /** True when the candidate set itself was capped and is therefore incomplete. */
  truncated: boolean;
  /** The cap that truncated the candidate set, when `truncated` is true. */
  candidateLimit: number | null;
}

/**
 * City-aware green-space query with honest provenance and pagination metadata.
 *
 * Two defects this fixes:
 *  1. The original function computed `usingStaticFallback` and then discarded
 *     it (`void usingStaticFallback; // consumed by caller via meta.sources`) —
 *     except the caller had no way to receive it, so `/nearby` always reported
 *     `sources: ['osm-db']` even when serving the fallback dataset in
 *     production. That mislabel is now reported honestly.
 *  2. Results were silently cut at `limit` with no indication that a list was
 *     incomplete. `hasMore` / `truncated` now make that explicit.
 *
 * ORDERING AND PAGINATION SAFETY
 * The database read uses a deterministic total order (`updatedAt DESC, id ASC`)
 * because `updatedAt` alone is not unique — without a tiebreaker, rows sharing a
 * timestamp could be returned in different orders on different requests and an
 * offset-paginated client would skip or duplicate records. The in-memory sort
 * (`recommendationScore DESC, distanceM ASC`) is applied before slicing, so page
 * boundaries are stable for an unchanged input set. V8's `Array.prototype.sort`
 * is stable, so equal keys preserve the deterministic database order.
 *
 * `candidateLimit` bounds the number of rows pulled from the database in one
 * query. When it is hit the result set is genuinely incomplete and is reported
 * as such rather than presented as a full city.
 */
export async function getNearbyGreenSpacesPaged(opts: NearbyOptions): Promise<{
  spaces: GreenSpaceSummary[];
  meta: NearbyPageMeta;
}> {
  const {
    lat, lon, radiusM, type = 'all', verifiedOnly = false, limit = 1500,
    allCity = false, offset = 0, candidateLimit = DEFAULT_CANDIDATE_LIMIT,
  } = opts;

  let dbSpaces: any[] | null = null;
  let usingStaticFallback = false;

  // ── City scoping ─────────────────────────────────────────────────────────
  // `GreenSpace` has no city column, so every row in the database is a Mumbai
  // record. Consulting it for a Pune or Bengaluru request would answer that
  // city with another city's records — and because those rows are then filtered
  // by distance from the Pune centre, it returns zero while having silently used
  // the wrong dataset. The DB is therefore only read for the city it holds.
  const requestedCity: CityId = opts.city ?? 'mumbai';
  const dbHoldsCity: CityId = 'mumbai';

  // ── Try DB first (only for the city the DB actually contains) ────────────
  if (requestedCity === dbHoldsCity) {
    try {
      const mod = await import('@/lib/db');
      const db = mod.db;
      const rows = await (db as any).greenSpace.findMany({
        // Deterministic total order. `updatedAt` alone is not unique, so two rows
        // sharing a timestamp could come back in either order between requests,
        // which would let offset pagination skip or duplicate a record across
        // pages. `id` is the unique tiebreaker.
        orderBy: [{ updatedAt: 'desc' }, { id: 'asc' }],
        // Pull one extra row so truncation is detectable rather than silent.
        take: candidateLimit + 1,
      });
      dbSpaces = rows;
    } catch (dbErr: any) {
      // DB unreachable — fall through to static fallback
      console.error('[spaces-service] DB query failed, using static fallback:', dbErr?.message);
    }
  } else {
    // Another city's records are not in this database. Go straight to that
    // city's own static dataset rather than distance-filtering Mumbai's rows.
    usingStaticFallback = true;
    dbSpaces = [];
  }

  // ── If DB returned zero records, use static fallback ─────────────────────
  // When a city is explicitly selected (via ?city=) and the DB has no records
  // for it, serve that city's own registered static dataset rather than always
  // borrowing Mumbai's. When no city is specified, fall back to Mumbai's dataset
  // so existing callers that omit `?city=` continue to work unchanged.
  //
  // A separate city‑fallback map is used here so that `STATIC_GREEN_SPACES_BY_CITY`
  // (used by cityDataStatus/assessMetrics) stays unchanged — Pune and Bengaluru
  // remain EMPTY for metrics and city‑status purposes, even though their static
  // space datasets are served when the city is explicitly requested.
  // A separate city‑fallback map is used here so that `STATIC_GREEN_SPACES_BY_CITY`
  // (used by cityDataStatus/assessMetrics) stays unchanged — Pune and Bengaluru
  // remain EMPTY for metrics and city‑status purposes, even though their static
  // space datasets are served when the city is explicitly requested.
  //
  // The type is kept compatible with `staticToDbShape` mapping; the actual values
  // are the normalized GeoJSON datasets from Phase D.
  // A separate city‑fallback map is used here so that `STATIC_GREEN_SPACES_BY_CITY`
  // (used by cityDataStatus/assessMetrics) stays unchanged — Pune and Bengaluru
  // remain EMPTY for metrics and city‑status purposes, even though their static
  // space datasets are served when the city is explicitly requested.
  //
  // The values are the normalized GeoJSON datasets from Phase D; they are mapped
  // through `staticToDbShape` just like Mumbai's fallback.
  const fallbackForCity = opts.city
    ? (STATIC_SPACES_BY_CITY[opts.city] ?? STATIC_GREEN_SPACES_FALLBACK)
    : STATIC_GREEN_SPACES_FALLBACK;

  if (!dbSpaces || dbSpaces.length === 0) {
    usingStaticFallback = true;
    dbSpaces = fallbackForCity.map((s: any) => staticToDbShape(s)) as any[];
  }

  const candidateTruncated = dbSpaces.length > candidateLimit;
  const candidateCount = candidateTruncated ? candidateLimit : dbSpaces.length;
  const spaces = candidateTruncated ? dbSpaces.slice(0, candidateLimit) : dbSpaces;

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

    // NDVI — static seed values are illustrative estimates, never measurements.
    let ndvi: GreenSpaceSummary['ndvi'] = null;
    if (space._staticNdvi && space._staticNdvi.mean !== null) {
      ndvi = normaliseNdvi({
        mean: space._staticNdvi.mean,
        min: space._staticNdvi.min,
        max: space._staticNdvi.max,
        pixelCount: null,
        densityClass: space._staticNdvi.densityClass ?? 'UNAVAILABLE',
        confidence: null,
        compositeType: 'SYNTHETIC',
        observationStart: null,
        observationEnd: null,
        imageCount: null,
        cloudCoverage: null,
        satelliteSource: null,
      });
    } else {
      try {
        const { db } = await import('@/lib/db');
        const obs = await (db as any).greenVegetationObservation?.findFirst({
          where: { greenSpaceId: space.id },
          orderBy: { processedAt: 'desc' },
        });
        if (obs) {
          ndvi = normaliseNdvi({
            mean: obs.ndviMean,
            min: obs.ndviMin,
            max: obs.ndviMax,
            pixelCount: obs.pixelCount,
            densityClass: obs.densityClass,
            confidence: obs.confidence,
            compositeType: obs.compositeType,
            observationStart: obs.observationStart,
            observationEnd: obs.observationEnd,
            imageCount: obs.imageCount,
            cloudCoverage: obs.cloudCoverage,
            satelliteSource: obs.satelliteSource,
          });
        }
      } catch {
        // No observations yet — provider unavailable or DB unreachable
      }
    }

    if (!ndvi) {
      ndvi = unavailableNdvi('SATELLITE_UNAVAILABLE');
    }

    // Image — use static seed data if available, otherwise try DB
    let image: GreenSpaceSummary['image'] = null;
    if (space._staticImage) {
      image = space._staticImage;
    } else {
      try {
        const { db } = await import('@/lib/db');
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

  // Paginate after ordering so page boundaries are stable for a given input.
  const page = results.slice(offset, offset + limit);

  return {
    spaces: page,
    meta: {
      usedStaticFallback: usingStaticFallback,
      candidateCount,
      returned: page.length,
      // True number of records matching this city, filter set and radius — before
      // the `limit` slice. Without this the UI can only show the page size, which
      // makes 50 returned records look like 50 records exist.
      total: results.length,
      limit,
      offset,
      hasMore: offset + page.length < results.length,
      truncated: candidateTruncated,
      candidateLimit: candidateTruncated ? candidateLimit : null,
    },
  };
}

/**
 * Backwards-compatible wrapper.
 *
 * Preserves the original signature and behaviour exactly: same records, same
 * ordering, same `limit` slice. New callers that need provenance or pagination
 * metadata should use {@link getNearbyGreenSpacesPaged}.
 */
export async function getNearbyGreenSpaces(opts: NearbyOptions): Promise<GreenSpaceSummary[]> {
  const { spaces } = await getNearbyGreenSpacesPaged(opts);
  return spaces;
}

export async function getGreenSpaceDetail(
  id: string,
  fromLat: number,
  fromLon: number,
  // The city whose static dataset an id may be resolved against. Callers pass the
  // selected city so a record is never served for a city it does not belong to.
  city: CityId = 'mumbai'
): Promise<GreenSpaceDetail | null> {
  // A static-backed record is not a database row, so the DB lookup cannot find
  // it. Pune and Bengaluru are served entirely from static datasets, so without
  // this branch every detail request for those cities 404s. Ids are resolved
  // from the selected city's own dataset only.
  if (isStaticSpaceId(id)) {
    const hit = findStaticSpace(id);
    if (!hit || hit.city !== city) return null;
    return dbShapeToDetail(staticToDbShape(hit.seed as any), fromLat, fromLon);
  }

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

  // Carry the Prisma handle so the detail builder can read observation and image
  // rows for this database record.
  return dbShapeToDetail({ ...space, __dbHandle: db, __fromDatabase: true }, fromLat, fromLon);
}

/**
 * Build the detail view from a database-shaped row.
 *
 * Shared by the database and static resolution paths so both produce identical
 * detail payloads.
 */
async function dbShapeToDetail(
  space: any,
  fromLat: number,
  fromLon: number
): Promise<GreenSpaceDetail> {
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

  // Observation and image rows are keyed to a database `greenSpaceId`. A static
  // record has neither, so these enrichments are skipped for it rather than
  // queried with an id that cannot exist.
  const id = space?.id;
  const db = space?.__dbHandle;
  const isDbRow = !!space?.__fromDatabase;

  let ndviFull: GreenSpaceDetail['ndviFull'] = null;
  try {
    const obs = isDbRow ? await (db as any).greenVegetationObservation?.findFirst({
      where: { greenSpaceId: id },
      orderBy: { processedAt: 'desc' },
    }) : null;
    if (obs) {
      ndviFull = normaliseNdvi({
        mean: obs.ndviMean,
        min: obs.ndviMin,
        max: obs.ndviMax,
        pixelCount: obs.pixelCount,
        densityClass: obs.densityClass,
        confidence: obs.confidence,
        compositeType: obs.compositeType,
        observationStart: obs.observationStart,
        observationEnd: obs.observationEnd,
        imageCount: obs.imageCount,
        cloudCoverage: obs.cloudCoverage,
        satelliteSource: obs.satelliteSource,
      });
    }
  } catch { /* no vegetation observation available */ }

  let images: GreenSpaceDetail['images'] = [];
  try {
    const imgs = isDbRow ? await (db as any).greenSpaceImage?.findMany({
      where: { greenSpaceId: id },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }) : null;
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
