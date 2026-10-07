/**
 * NDVI Provider — AgroMonitoring satellite observation service.
 *
 * SCOPE AND HONESTY RULES (enforced throughout):
 *  - A configured API key NEVER implies data availability. Status is derived
 *    from actual provider responses only.
 *  - The NDVI *tile* endpoint returns a COLOUR-RENDERED PNG. Its RGB values are
 *    NOT numerical NDVI and are never decoded into NDVI. Numerical values come
 *    only from the provider's `stats` endpoint (documented JSON statistics).
 *  - Scene-level cloud coverage is metadata about the whole granule; it does not
 *    guarantee every pixel inside the AOI is clear. That is reported separately.
 *  - Coverage is reported as the polygon(s) actually registered on the account.
 *    A single-polygon account must never be described as city-wide.
 *  - When a numeric observation is unavailable it is `null`, never a stand-in.
 */

import {
  NDVI_SEARCH_WINDOW_DAYS,
  NDVI_MAX_SCENE_CLOUD_PCT,
  NDVI_ALLOW_CLOUD_FALLBACK,
  ACTIVE_CITY,
} from './config';

export const AGRO_API_BASE = 'https://api.agromonitoring.com';

/**
 * Verified provider status model.
 * NOT_CONFIGURED -> CONFIGURED -> AUTHENTICATION_FAILED | AUTHENTICATED
 * AUTHENTICATED -> IMAGERY_UNAVAILABLE | IMAGERY_AVAILABLE | TILE_FETCH_FAILED
 * PARTIAL_COVERAGE indicates imagery exists but only for part of the study area.
 */
export type NdviProviderStatus =
  | 'NOT_CONFIGURED'
  | 'CONFIGURED'
  | 'AUTHENTICATION_FAILED'
  | 'AUTHENTICATED'
  | 'IMAGERY_UNAVAILABLE'
  | 'IMAGERY_AVAILABLE'
  | 'TILE_FETCH_FAILED'
  | 'PARTIAL_COVERAGE';

export interface NdviNumericStats {
  mean: number;
  median: number;
  min: number;
  max: number;
  std: number;
  p25: number;
  p75: number;
  /** Number of valid (unmasked) pixels contributing to these statistics. */
  num: number;
}

export interface NdviSceneRecord {
  provider: 'AGROMONITORING';
  dataset: string;
  sceneId: string;
  satelliteType: string;
  /** UTC ISO-8601 acquisition timestamp derived from the provider's `dt`. */
  acquisitionDateUtc: string;
  /** Provider-reported whole-granule cloud coverage, percent. */
  cloudCoveragePct: number;
  hasNdviTile: boolean;
  hasNumericalStats: boolean;
  /** AOI (polygon id) this observation applies to. */
  aoiPolygonId: string;
  spatialResolutionM: number | null;
  /** Why this scene was chosen, for provenance display. */
  selectionReason: string;
}

export interface NdviSelection {
  status: NdviProviderStatus;
  /** Human-readable explanation of the current state. */
  message: string;
  scene: NdviSceneRecord | null;
  /** Numerical NDVI statistics for the AOI, when the provider exposes them. */
  numeric: NdviNumericStats | null;
  /** Registered polygons that make up the real coverage. */
  coverage: {
    aoiName: string;
    polygonId: string;
    bounds: [number, number, number, number]; // [minLon, minLat, maxLon, maxLat]
    /** True when this polygon alone does not cover the study area. */
    partialStudyArea: boolean;
  }[];
  /** True when coverage does not span the configured study area. */
  coverageIsPartial: boolean;
  searchWindowDays: number;
  cloudThresholdPct: number;
  /** Number of scenes examined, and how many passed the cloud threshold. */
  scenesExamined: number;
  scenesPassingCloudFilter: number;
  /** Upstream layer id embedded in tile URLs (server-side only). */
  tileLayerId: string | null;
  warnings: string[];
}

// ── Cache ────────────────────────────────────────────────────────────────────
// Separate lifetimes: a polygon list changes rarely, scene discovery changes
// hourly, the chosen scene is pinned for the cache window so a stable tile is
// served for a consistent AOI + layer + tile coordinate.
interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}
const polygonCache = new Map<string, CacheEntry<any[]>>();
const sceneCache = new Map<string, CacheEntry<any[]>>();
const selectionCache = new Map<string, CacheEntry<NdviSelection>>();

const TTL_POLYGONS = 12 * 3600 * 1000; // 12h
const TTL_SCENES = 3600 * 1000; // 1h
const TTL_SELECTION = 15 * 60 * 1000; // 15m

function cachedGet<T>(store: Map<string, CacheEntry<T>>, key: string): T | null {
  const hit = store.get(key);
  if (hit && hit.expiresAt > Date.now()) return hit.value;
  return null;
}
function cachedSet<T>(store: Map<string, CacheEntry<T>>, key: string, value: T, ttl: number) {
  store.set(key, { value, expiresAt: Date.now() + ttl });
}

/** Test seam: clears every cache so suites never observe stale provider state. */
export function __resetNdviCaches() {
  polygonCache.clear();
  sceneCache.clear();
  selectionCache.clear();
}

const USER_AGENT = 'FixMumbai/1.0 (civic green-space NDVI; contact@fixmumbai.org)';

/** Never log or echo the key. */
function withKey(path: string, key: string): string {
  const sep = path.includes('?') ? '&' : '?';
  return `${AGRO_API_BASE}${path}${sep}appid=${encodeURIComponent(key)}`;
}

async function fetchJson(url: string, timeoutMs = 20000): Promise<{ status: number; body: any }> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' },
      signal: ctrl.signal,
      cache: 'no-store',
    });
    if (res.status === 429) return { status: 429, body: { error: 'rate_limited' } };
    if (res.status === 401 || res.status === 403) {
      return { status: res.status, body: { error: 'authentication_failed' } };
    }
    if (!res.ok) return { status: res.status, body: null };
    return { status: res.status, body: await res.json() };
  } catch {
    return { status: 0, body: null };
  } finally {
    clearTimeout(timer);
  }
}

// ── Polygon discovery (AOI validation) ────────────────────────────────────────

export interface AgroPolygon {
  id: string;
  name: string;
  /** [minLon, minLat, maxLon, maxLat] derived from the validated ring. */
  bounds: [number, number, number, number];
  ringLength: number;
}

/**
 * Fetch registered polygons and keep only those with usable geometry.
 * Invalid geometry is dropped rather than silently substituted.
 */
export async function fetchPolygons(key: string): Promise<{ polygons: AgroPolygon[]; status: number }> {
  const cacheKey = `polys:${key.slice(-6)}`;
  const hit = cachedGet(polygonCache, cacheKey);
  if (hit) return { polygons: hit, status: 200 };

  const res = await fetchJson(withKey('/agro/1.0/polygons', key));
  if (res.status !== 200 || !Array.isArray(res.body)) {
    return { polygons: [], status: res.status };
  }

  const polygons: AgroPolygon[] = [];
  for (const raw of res.body) {
    const ring = raw?.geo_json?.geometry?.coordinates?.[0];
    if (!Array.isArray(ring) || ring.length < 3) continue; // reject invalid geometry
    let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
    let valid = true;
    for (const pt of ring) {
      const lon = Number(pt?.[0]);
      const lat = Number(pt?.[1]);
      if (!Number.isFinite(lon) || !Number.isFinite(lat)) { valid = false; break; }
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }
    if (!valid) continue;
    polygons.push({
      id: String(raw.id),
      name: String(raw?.name ?? 'Unnamed polygon'),
      bounds: [minLon, minLat, maxLon, maxLat],
      ringLength: ring.length,
    });
  }

  if (polygons.length > 0) cachedSet(polygonCache, cacheKey, polygons, TTL_POLYGONS);
  return { polygons, status: 200 };
}

/**
 * Choose which polygon(s) form the study area.
 *
 * Deliberately NO silent "take the first polygon" fallback and NO hardcoded SGNP
 * id. When nothing matches the requested area we return an empty selection and
 * report it, rather than quietly substituting an unrelated polygon.
 */
export function selectAoiPolygons(
  polygons: AgroPolygon[],
  studyBbox: [number, number, number, number] = ACTIVE_CITY.bbox
): { selected: AgroPolygon[]; warnings: string[] } {
  const warnings: string[] = [];
  const [w, s, e, n] = studyBbox;

  // Prefer polygons explicitly related to the study area.
  const named = polygons.filter((p) =>
    /mumbai|sgnp|sanjay|aarey|powai|thane|borivali|andheri|colaba|dadar|bandra/i.test(p.name)
  );

  // Otherwise accept polygons that actually intersect the study bbox.
  const intersecting = polygons.filter((p) => {
    const [plon0, plat0, plon1, plat1] = p.bounds;
    return plon1 >= w && plon0 <= e && plat1 >= s && plat0 <= n;
  });

  const selected = named.length > 0 ? named : intersecting;

  if (selected.length === 0) {
    warnings.push(
      'No registered polygon intersects the configured study area. Imagery cannot be attributed to this AOI.'
    );
    return { selected: [], warnings };
  }

  if (selected.length < polygons.length) {
    warnings.push(
      `${polygons.length - selected.length} registered polygon(s) fall outside the study area and were ignored.`
    );
  }
  return { selected, warnings };
}

// ── Scene discovery + cloud-aware selection ───────────────────────────────────

export interface AgroScene {
  id?: string;
  dt: number;
  type: string;
  cl?: number;
  dc?: number;
  tile?: Record<string, string>;
  image?: Record<string, string>;
  stats?: Record<string, string>;
}

/**
 * Deterministic scene selection.
 *
 * 1. Sentinel-2 only (when Sentinel-2 is required).
 * 2. Must expose an NDVI tile layer.
 * 3. Newest-first ordering by acquisition time (UTC).
 * 4. Configurable maximum scene cloud coverage (default 20%).
 * 5. If nothing qualifies, report it — an explicitly labelled fallback policy may
 *    be enabled via NDVI_ALLOW_CLOUD_FALLBACK, but a 99-100% cloud granule is
 *    never presented as a clear observation.
 */
export function selectScene(
  scenes: AgroScene[],
  opts: {
    aoiPolygonId: string;
    maxCloudPct: number;
    allowCloudFallback: boolean;
    requireSentinel2: boolean;
  }
): { scene: AgroScene | null; reason: string; passingCount: number } {
  let candidates = scenes.filter((s) => s?.tile?.ndvi);
  if (opts.requireSentinel2) {
    candidates = candidates.filter((s) => /sentinel-2/i.test(s.type ?? ''));
  }

  // Newest first. `dt` is a UNIX timestamp in seconds (UTC).
  candidates.sort((a, b) => (b.dt ?? 0) - (a.dt ?? 0));

  const withinThreshold = candidates.filter(
    (s) => typeof s.cl === 'number' && s.cl <= opts.maxCloudPct
  );
  if (withinThreshold.length > 0) {
    return {
      scene: withinThreshold[0],
      reason: `newest Sentinel-2 scene at or below ${opts.maxCloudPct}% scene cloud coverage`,
      passingCount: withinThreshold.length,
    };
  }

  if (opts.allowCloudFallback && candidates.length > 0) {
    const leastCloudy = [...candidates].sort((a, b) => (a.cl ?? 101) - (b.cl ?? 101))[0];
    return {
      scene: leastCloudy,
      reason:
        `CLOUD FALLBACK: no scene at or below ${opts.maxCloudPct}% cloud; using least-cloudy scene ` +
        `(${(leastCloudy.cl ?? 0).toFixed(2)}% scene cloud). Treat as cloud-affected.`,
      passingCount: 0,
    };
  }

  return {
    scene: null,
    reason:
      candidates.length === 0
        ? 'No Sentinel-2 scene with an NDVI tile layer was found in the search window.'
        : `No Sentinel-2 scene met the ${opts.maxCloudPct}% scene cloud threshold ` +
          `(least cloudy available: ${Math.min(...candidates.map((s) => s.cl ?? 101)).toFixed(2)}%).`,
    passingCount: 0,
  };
}

/** Extract the upstream layer id from an NDVI tile template. Server-side only. */
export function extractLayerId(tileTemplate: string): string | null {
  const m = tileTemplate?.match(/\/tile\/1\.0\/\{z\}\/\{x\}\/\{y\}\/([^/?]+)\//);
  return m?.[1] ?? null;
}

/** Parse the provider's documented JSON statistics payload. */
export function parseNumericStats(raw: any): NdviNumericStats | null {
  if (!raw || typeof raw !== 'object') return null;
  const num = Number(raw.num);
  if (!Number.isFinite(num)) return null;
  const fields = ['mean', 'median', 'min', 'max', 'std', 'p25', 'p75'] as const;
  const out: any = { num };
  for (const f of fields) {
    const v = Number(raw[f]);
    if (!Number.isFinite(v)) return null;
    out[f] = v;
  }
  return out as NdviNumericStats;
}

// ── Orchestration ────────────────────────────────────────────────────────────

/**
 * Resolve the current NDVI observation with full provenance.
 * Never throws; every failure mode maps to an explicit status.
 */
export async function resolveNdviObservation(): Promise<NdviSelection> {
  const key = process.env.AGROMONITORING_API_KEY;
  const base: NdviSelection = {
    status: 'NOT_CONFIGURED',
    message: 'AGROMONITORING_API_KEY is not set.',
    scene: null,
    numeric: null,
    coverage: [],
    coverageIsPartial: true,
    searchWindowDays: NDVI_SEARCH_WINDOW_DAYS,
    cloudThresholdPct: NDVI_MAX_SCENE_CLOUD_PCT,
    scenesExamined: 0,
    scenesPassingCloudFilter: 0,
    tileLayerId: null,
    warnings: [],
  };

  if (!key) return base;

  // 1. Provider authentication (proven by a real polygons call).
  const { polygons, status: polyStatus } = await fetchPolygons(key);
  if (polyStatus === 401 || polyStatus === 403) {
    return { ...base, status: 'AUTHENTICATION_FAILED', message: 'AgroMonitoring rejected the API key.' };
  }
  if (polyStatus === 429) {
    return { ...base, status: 'AUTHENTICATION_FAILED', message: 'AgroMonitoring rate limit reached during polygon discovery.' };
  }
  if (polyStatus !== 200) {
    return { ...base, status: 'AUTHENTICATION_FAILED', message: `AgroMonitoring polygon discovery failed (HTTP ${polyStatus}).` };
  }
  if (polygons.length === 0) {
    return { ...base, status: 'AUTHENTICATED', message: 'Authenticated, but no polygon with valid geometry is registered.' };
  }

  // 2. AOI selection (explicit; no silent substitution).
  const { selected, warnings: aoiWarnings } = selectAoiPolygons(polygons, ACTIVE_CITY.bbox);
  const warnings = [...aoiWarnings];
  if (selected.length === 0) {
    return { ...base, status: 'IMAGERY_UNAVAILABLE', message: aoiWarnings[0] ?? 'No usable AOI polygon.', warnings };
  }

  const [sW, sS, sE, sN] = ACTIVE_CITY.bbox;
  const coverage = selected.map((p) => {
    const [pW, pS, pE, pN] = p.bounds;
    const coversStudyArea = pW <= sW && pS <= sS && pE >= sE && pN >= sN;
    return {
      aoiName: p.name,
      polygonId: p.id,
      bounds: p.bounds,
      partialStudyArea: !coversStudyArea,
    };
  });
  const coverageIsPartial = coverage.some((c) => c.partialStudyArea);
  if (coverageIsPartial) {
    warnings.push(
      `Registered AOI covers only part of the configured study area ` +
        `(${ACTIVE_CITY.name} bbox ${sW},${sS},${sE},${sN}). Coverage is NOT city-wide.`
    );
  }

  // 3. Scene discovery for the primary (largest) AOI polygon.
  const primary = [...selected].sort(
    (a, b) =>
      (b.bounds[2] - b.bounds[0]) * (b.bounds[3] - b.bounds[1]) -
      (a.bounds[2] - a.bounds[0]) * (a.bounds[3] - a.bounds[1])
  )[0];

  const end = Math.floor(Date.now() / 1000);
  const start = end - NDVI_SEARCH_WINDOW_DAYS * 24 * 3600;
  const sceneCacheKey = `scenes:${primary.id}:${start}`;
  let scenes = cachedGet(sceneCache, sceneCacheKey);
  if (!scenes) {
    const res = await fetchJson(
      withKey(
        `/agro/1.0/image/search?start=${start}&end=${end}&polyid=${encodeURIComponent(primary.id)}`,
        key
      )
    );
    if (res.status === 429) {
      return { ...base, status: 'AUTHENTICATED', message: 'AgroMonitoring rate limit reached during scene discovery.', coverage, coverageIsPartial, warnings };
    }
    if (res.status !== 200 || !Array.isArray(res.body)) {
      return {
        ...base,
        status: 'AUTHENTICATED',
        message: `AgroMonitoring scene discovery failed (HTTP ${res.status}).`,
        coverage,
        coverageIsPartial,
        warnings,
      };
    }
    scenes = res.body as AgroScene[];
    cachedSet(sceneCache, sceneCacheKey, scenes, TTL_SCENES);
  }

  // 4. Deterministic cloud-aware selection.
  const picked = selectScene(scenes, {
    aoiPolygonId: primary.id,
    maxCloudPct: NDVI_MAX_SCENE_CLOUD_PCT,
    allowCloudFallback: NDVI_ALLOW_CLOUD_FALLBACK,
    requireSentinel2: true,
  });

  if (!picked.scene) {
    return {
      ...base,
      status: 'IMAGERY_UNAVAILABLE',
      message: picked.reason,
      coverage,
      coverageIsPartial,
      scenesExamined: scenes.length,
      scenesPassingCloudFilter: 0,
      warnings,
    };
  }

  const s = picked.scene;
  const layerId = extractLayerId(s.tile!.ndvi);
  const acquisition = new Date((s.dt ?? 0) * 1000).toISOString();

  const sceneRecord: NdviSceneRecord = {
    provider: 'AGROMONITORING',
    dataset: 'Sentinel-2 L2A Surface Reflectance (Copernicus)',
    sceneId: s.id ?? `${layerId ?? 'unknown'}-${primary.id}`,
    satelliteType: s.type ?? 'unknown',
    acquisitionDateUtc: acquisition,
    cloudCoveragePct: Number.isFinite(s.cl) ? (s.cl as number) : NaN,
    hasNdviTile: Boolean(s.tile?.ndvi),
    hasNumericalStats: Boolean(s.stats?.ndvi),
    aoiPolygonId: primary.id,
    // Documented provider resolution for the L2A product; not inferred per-scene.
    spatialResolutionM: 10,
    selectionReason: picked.reason,
  };

  // 5. Numerical statistics from the documented stats endpoint (never from PNG RGB).
  let numeric: NdviNumericStats | null = null;
  if (s.stats?.ndvi) {
    const st = await fetchJson(s.stats.ndvi.replace(/^http:\/\//, 'https://'));
    if (st.status === 200) numeric = parseNumericStats(st.body);
  }

  const cloudAffected = !Number.isFinite(sceneRecord.cloudCoveragePct)
    ? true
    : sceneRecord.cloudCoveragePct > NDVI_MAX_SCENE_CLOUD_PCT;
  if (cloudAffected) {
    warnings.push(
      'Selected observation exceeds the configured scene cloud threshold; treat values as cloud-affected.'
    );
  }
  if (numeric === null) {
    warnings.push('Provider did not return numerical NDVI statistics for this scene.');
  }

  const selection: NdviSelection = {
    status: coverageIsPartial ? 'PARTIAL_COVERAGE' : 'IMAGERY_AVAILABLE',
    searchWindowDays: NDVI_SEARCH_WINDOW_DAYS,
    cloudThresholdPct: NDVI_MAX_SCENE_CLOUD_PCT,
    message: coverageIsPartial
      ? 'Imagery available for the registered AOI only; it does not cover the full study area.'
      : 'Satellite NDVI observation available for the study area.',
    scene: sceneRecord,
    numeric,
    coverage,
    coverageIsPartial,
    scenesExamined: scenes.length,
    scenesPassingCloudFilter: picked.passingCount,
    tileLayerId: layerId,
    warnings,
  };

  cachedSet(selectionCache, `sel:${primary.id}:${sceneRecord.sceneId}`, selection, TTL_SELECTION);
  return selection;
}
