/**
 * Green Density Explorer — city-agnostic configuration.
 * All thresholds, bboxes and defaults live here.
 * To support another city, add a new CityConfig entry and pass it through context.
 */

export interface NdviThresholds {
  lowMin: number;
  mediumMin: number;
  highMin: number;
}

export interface CityConfig {
  name: string;
  country: string;
  /** [south, west, north, east] — WGS-84 */
  bbox: [number, number, number, number];
  /** Leaflet default centre [lat, lon] */
  centre: [number, number];
  defaultZoom: number;
  /** Monsoon months (0-indexed Jan=0). Used for composite-type warning. */
  monsoonMonths: number[];
  /** Max radius the UI allows (metres) */
  maxRadiusM: number;
}

// ── NDVI thresholds (configurable, not scientific definitions) ──────────────
export const NDVI: NdviThresholds = {
  lowMin:    Number(process.env.GREEN_NDVI_LOW_MIN    ?? 0.10),
  mediumMin: Number(process.env.GREEN_NDVI_MEDIUM_MIN ?? 0.25),
  highMin:   Number(process.env.GREEN_NDVI_HIGH_MIN   ?? 0.55),
};

// ── NDVI observation window (single source of truth) ─────────────────────────
// Every satellite-facing service MUST use this value so that no two services
// claim different observation periods. It replaced the previous mix of
// NDVI_WINDOW_DAYS (90, config) and a hardcoded 180-day search (gee-service).
export const NDVI_SEARCH_WINDOW_DAYS = Number(
  process.env.GREEN_NDVI_WINDOW_DAYS ?? 180
);

// Backwards-compatible alias retained for existing imports.
export const NDVI_WINDOW_DAYS = NDVI_SEARCH_WINDOW_DAYS;

/**
 * Maximum scene-level cloud coverage (%) for a granule to be accepted as a
 * clean observation. Mumbai's monsoon season produces many 98-100% cloud
 * granules; accepting those as "observations" would misrepresent cloud as
 * vegetation. Configurable.
 */
export const NDVI_MAX_SCENE_CLOUD_PCT = Number(
  process.env.GREEN_NDVI_MAX_SCENE_CLOUD_PCT ?? 20
);

/**
 * When no scene meets NDVI_MAX_SCENE_CLOUD_PCT, fall back to the least-cloudy
 * granule and label it explicitly as cloud-affected. Default OFF so a
 * 99-100% cloud granule is never silently presented as a clear observation.
 */
export const NDVI_ALLOW_CLOUD_FALLBACK =
  (process.env.GREEN_NDVI_ALLOW_CLOUD_FALLBACK ?? 'false') === 'true';

// ── Minimum internal-path length to qualify as WALKABLE_VERIFIED ────────────
export const MIN_PATH_LENGTH_M = Number(process.env.GREEN_MIN_PATH_LENGTH_M ?? 100);

// ── Default search radius ────────────────────────────────────────────────────
export const DEFAULT_RADIUS_M = Number(process.env.GREEN_EXPLORER_DEFAULT_RADIUS_METERS ?? 5000);

// ── Mumbai city config ───────────────────────────────────────────────────────
export const MUMBAI: CityConfig = {
  name: 'Bandra West, Mumbai',
  country: 'India',
  // Mumbai island [[18.88, 72.76], [19.29, 72.99]] (Colaba to Dahisar, creek on the east)
  bbox: [18.88, 72.76, 19.29, 72.99],
  centre: [19.0596, 72.8295],
  defaultZoom: 12,
  // Jun(5) Jul(6) Aug(7) Sep(8) — monsoon months
  monsoonMonths: [5, 6, 7, 8],
  maxRadiusM: Number(process.env.GREEN_EXPLORER_MAX_RADIUS_METERS ?? 50_000),
};

// ── Active city (swap for multi-city support) ────────────────────────────────
export const ACTIVE_CITY = MUMBAI;

// ── App base path ────────────────────────────────────────────────────────────
// Mirrors `basePath` in next.config.js. The app is served under /civic, so any
// absolute URL handed to the browser must include it or it 404s in production.
export const APP_BASE_PATH = '/civic';

/** Join a root-relative path onto the app base path (idempotent). */
export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = APP_BASE_PATH;
  if (path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}

// ── Feature flag ────────────────────────────────────────────────────
export const GREEN_EXPLORER_ENABLED =
  (process.env.GREEN_EXPLORER_ENABLED ?? 'true') === 'true';

// ── Density class labels and colours ────────────────────────────────────────
// IMPORTANT: these are *display* thresholds for this application's styling.
// NDVI is a spectral vegetation-response index. It is not a direct measurement of
// tree count, canopy closure, biodiversity, park accessibility or ecological
// quality, and these cut-offs are not universal scientific definitions.
export type DensityClass = 'HIGH' | 'MEDIUM' | 'LOW' | 'UNAVAILABLE';

export const DENSITY_META: Record<DensityClass, { label: string; colour: string; fillColour: string; range?: string }> = {
  HIGH:        { label: 'Heavy Green',  colour: '#2E6B34', fillColour: '#2E6B34', range: '0.55 – 0.90' },
  MEDIUM:      { label: 'Medium Green', colour: '#A8E66B', fillColour: '#A8E66B', range: '0.25 – 0.55' },
  LOW:         { label: 'Low Green',    colour: '#F5B02E', fillColour: '#F5B02E', range: '0.10 – 0.25' },
  UNAVAILABLE: { label: 'NDVI unavailable', colour: '#94a3b8', fillColour: '#cbd5e1', range: undefined },
};

// ── Basemap tile templates ────────────────────────────────────────────────────
// "Light" mode: Esri World Light Gray Canvas — white / light-grey background,
// subtle grey roads & boundaries, pale water. Key-free, no watermark, and it is
// a RASTER service so it works natively with Leaflet.
//
// NOTE: OpenFreeMap "Positron" was evaluated and REJECTED — its style is a
// MapLibre vector style (sources: openmaptiles type=vector) which Leaflet
// cannot render, and it publishes no raster Positron endpoint.
// NOTE: CARTO `basemaps.cartocdn.com/light_all` was evaluated and REJECTED —
// it now stamps an "API KEY REQUIRED" watermark on keyless requests.
export const BASEMAP_LIGHT_URL =
  'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';

/** Transparent label/reference overlay drawn above the light grey canvas. */
export const BASEMAP_LIGHT_REF_URL =
  'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}';

export const BASEMAP_LIGHT_ATTRIBUTION =
  'Tiles &copy; Esri &mdash; Esri, DeLorme, HERE, Garmin, &copy; OpenStreetMap contributors';

// "Satellite" mode: Esri World Imagery (genuine true-colour satellite imagery).
// No CSS filter / grayscale / opacity filter is ever applied to this layer.
export const BASEMAP_SAT_URL =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

export const BASEMAP_SAT_ATTRIBUTION =
  'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics';

// ── Radius selector chips ────────────────────────────────────────────────────
export const RADIUS_OPTIONS_M = [1000, 3000, 5000, 10_000] as const;

// ── Overpass mirrors ─────────────────────────────────────────────────────────
export const OVERPASS_URLS: string[] =
  (process.env.OVERPASS_API_URLS ?? 'https://overpass-api.de/api/interpreter,https://overpass.kumi.systems/api/interpreter')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

// ── Routing ─────────────────────────────────────────────────────────────────
export const FOOT_ROUTING_FALLBACK_URL =
  process.env.FOOT_ROUTING_FALLBACK_URL ?? 'https://routing.openstreetmap.de/routed-foot';

// ── Walk speed for estimated time ────────────────────────────────────────────
export const WALK_SPEED_KMH = 4.8;
