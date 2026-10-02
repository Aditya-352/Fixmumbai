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

// ── NDVI observation window (days) ──────────────────────────────────────────
export const NDVI_WINDOW_DAYS = Number(process.env.GREEN_NDVI_WINDOW_DAYS ?? 90);

// ── Minimum internal-path length to qualify as WALKABLE_VERIFIED ────────────
export const MIN_PATH_LENGTH_M = Number(process.env.GREEN_MIN_PATH_LENGTH_M ?? 100);

// ── Default search radius ────────────────────────────────────────────────────
export const DEFAULT_RADIUS_M = Number(process.env.GREEN_EXPLORER_DEFAULT_RADIUS_METERS ?? 5000);

// ── Mumbai city config ───────────────────────────────────────────────────────
export const MUMBAI: CityConfig = {
  name: 'Bandra West, Mumbai',
  country: 'India',
  // Brihanmumbai Municipal Corporation outer envelope (padded slightly)
  bbox: [18.87, 72.76, 19.31, 73.00],
  centre: [19.0596, 72.8295],
  defaultZoom: 12,
  // Jun(5) Jul(6) Aug(7) Sep(8) — monsoon months
  monsoonMonths: [5, 6, 7, 8],
  maxRadiusM: Number(process.env.GREEN_EXPLORER_MAX_RADIUS_METERS ?? 10_000),
};

// ── Active city (swap for multi-city support) ────────────────────────────────
export const ACTIVE_CITY = MUMBAI;

// ── Feature flag ────────────────────────────────────────────────────
export const GREEN_EXPLORER_ENABLED =
  (process.env.GREEN_EXPLORER_ENABLED ?? 'true') === 'true';

// ── Density class labels and colours ────────────────────────────────────────
export type DensityClass = 'HIGH' | 'MEDIUM' | 'LOW' | 'UNAVAILABLE';

export const DENSITY_META: Record<DensityClass, { label: string; colour: string; range?: string }> = {
  HIGH:        { label: 'Heavy Green',  colour: '#166534', range: `${NDVI.highMin}–0.90` },
  MEDIUM:      { label: 'Medium Green', colour: '#4ade80', range: `${NDVI.mediumMin}–${NDVI.highMin}` },
  LOW:         { label: 'Low Green',    colour: '#fbbf24', range: `${NDVI.lowMin}–${NDVI.mediumMin}` },
  UNAVAILABLE: { label: 'NDVI unavailable', colour: '#94a3b8', range: undefined },
};

// ── Basemap tile templates (Esri World Light Gray Canvas & Esri World Imagery - Zero watermarks) ──
export const BASEMAP_LIGHT_URL =
  process.env.BASEMAP_LIGHT_URL ??
  'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';

export const BASEMAP_LIGHT_REF_URL =
  'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}';

export const BASEMAP_SAT_URL =
  process.env.ESRI_IMAGERY_URL ??
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

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
