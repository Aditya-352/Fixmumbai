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

/**
 * Stable, closed set of supported cities.
 *
 * This is a closed union on purpose: an identifier that is not listed here is
 * an error, never a silent fallback to Mumbai. A typo in a `?city=` parameter
 * must not cause the wrong city's data to be served.
 */
export type CityId = 'mumbai' | 'pune' | 'bengaluru';

/**
 * Lifecycle of a city's boundary metadata.
 *
 *  APPROVED    — validated and signed off for publication.
 *  PROVISIONAL — measured from a candidate source that is not yet cleared
 *                (licence and/or vintage unresolved). NOT a municipal boundary.
 *  ABSENT      — nothing measured yet.
 */
export type BoundaryStatus = 'APPROVED' | 'PROVISIONAL' | 'ABSENT';

/**
 * Geographic level a population figure is published at. Mixing levels silently
 * is the single easiest way to publish a wrong density, so the level travels
 * with the number and is checked against the boundary before use.
 */
export type PopulationLevel =
  | 'municipal_corporation'
  | 'urban_agglomeration'
  | 'ward';

/**
 * What we know about a city's boundary, and how much we trust it.
 *
 * `bbox` here is a QUERY ENVELOPE derived from measured ward geometry. It is
 * explicitly NOT an administrative boundary polygon. No municipal boundary
 * polygon has been obtained for any supported city; obtaining and approving one
 * is a prerequisite for publishing boundary-derived statistics.
 */
export interface CityBoundaryMeta {
  status: BoundaryStatus;
  /** [south, west, north, east] — WGS-84, measured extent of the candidate wards. */
  bbox: [number, number, number, number];
  /** Spherical-excess area of the measured geometry, km². */
  measuredAreaKm2: number | null;
  /** Human-readable name of the dataset the measurement came from. */
  sourceName: string;
  sourceUrl: string | null;
  /** Authority that issued the underlying boundary. */
  publisher: string;
  /** True only when we can evidence an official government release. */
  isOfficial: boolean;
  /** Date the boundary refers to, if the source states one. */
  vintage: string | null;
  /** Administrative level the geometry represents. */
  adminLevel: 'municipal_corporation' | 'ward_collection' | 'none';
  featureCount: number | null;
  /** Number of administrative units in the geometry. */
  unitCount: number | null;
  /** True when `bbox` is a bounding box rather than a real boundary polygon. */
  isBoundingBoxOnly: boolean;
  /** Anything a reader must know before quoting a figure derived from this. */
  caveat: string | null;
}

export interface CityPopulationMeta {
  value: number;
  level: PopulationLevel;
  referenceYear: string;
  sourceName: string;
  sourceUrl: string;
  publisher: string;
  isOfficial: boolean;
}

export interface CityConfig {
  /** Stable identifier used in API parameters and storage. */
  id: CityId;
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
  /** Boundary provenance. Absent until a candidate has been measured. */
  boundaryMeta?: CityBoundaryMeta;
  /** Population provenance. Absent when no figure has been cleared. */
  populationMeta?: CityPopulationMeta;
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

// ── City configurations ──────────────────────────────────────────────────────
//
// PROVENANCE NOTE — read before trusting any figure below.
//
// Population figures come from the Census of India 2011 Primary Census Abstract
// (Urban Agglomeration), file PCA11-UA-0000.xlsx, published by the Office of
// the Registrar General & Census Commissioner. That file publishes an
// Urban-Agglomeration total AND, separately, a municipal-corporation component.
// For Mumbai and Pune we use the MUNICIPAL-CORPORATION component, because it is
// the only figure whose geography matches a municipal boundary. For Bengaluru no
// municipal-corporation component is published, so no population figure is
// registered at all — inventing one, or borrowing the UA total, would overstate
// or misalign the density.
//
// Boundary figures are MEASURED (spherical-excess area, R = 6371.0088 km) from
// ward geometry republished on a third-party portal. None is an official
// government release, and none is a municipal boundary polygon. Every one is
// therefore marked PROVISIONAL and `isOfficial: false`.

// ── Mumbai ───────────────────────────────────────────────────────────────────
export const MUMBAI: CityConfig = {
  id: 'mumbai',
  // City-wide label. This is the DEFAULT centre shown before/without GPS, so it
  // must never name a single locality — a visitor in another city would
  // otherwise be told they are in Bandra West.
  name: 'Mumbai, India',
  country: 'India',
  // Mumbai island [[18.88, 72.76], [19.29, 72.99]] (Colaba to Dahisar, creek on the east)
  bbox: [18.88, 72.76, 19.29, 72.99],
  // Geographic centroid of the island (near Fort) — the neutral fallback point
  // used for distance references and out-of-coverage queries.
  centre: [19.076, 72.8777],
  defaultZoom: 12,
  // Jun(5) Jul(6) Aug(7) Sep(8) — monsoon months
  monsoonMonths: [5, 6, 7, 8],
  maxRadiusM: Number(process.env.GREEN_EXPLORER_MAX_RADIUS_METERS ?? 50_000),
  boundaryMeta: {
    status: 'PROVISIONAL',
    // Query envelope only. NOT an administrative boundary.
    bbox: [18.894, 72.7763, 19.2702, 72.9806],
    measuredAreaKm2: 475.6,
    sourceName: 'Mumbai Wards Map (MCGM) — 24 ward polygons',
    sourceUrl:
      'https://data.opencity.in/dataset/60f27371-717e-40b6-8554-fdc7e6c10437',
    publisher: 'Brihanmumbai Municipal Corporation (MCGM), republished by OpenCity',
    isOfficial: false,
    vintage: null, // the source states no vintage — unresolved
    adminLevel: 'ward_collection',
    featureCount: 24,
    unitCount: 24,
    isBoundingBoxOnly: true,
    caveat:
      'Third-party republication with no stated vintage. Measured ward area (475.6 km²) ' +
      'conflicts with the 603.4 km² figure hardcoded in hugsi-metrics BMC_WARD_DATA; that ' +
      'discrepancy is unresolved and predates multi-city work.',
  },
  populationMeta: {
    value: 12_442_373,
    level: 'municipal_corporation',
    referenceYear: '2011',
    sourceName: 'Primary Census Abstract — Urban Agglomeration, India 2011 (PCA11-UA-00)',
    sourceUrl:
      'https://censusindia.gov.in/nada/index.php/catalog/45261/download/48987/PCA11-UA-0000.xlsx',
    publisher: 'Office of the Registrar General & Census Commissioner, India',
    isOfficial: true,
  },
};

// ── Pune (registered, NOT published) ─────────────────────────────────────────
export const PUNE: CityConfig = {
  id: 'pune',
  name: 'Pune, India',
  country: 'India',
  // PROVISIONAL query envelope: measured extent of the PMC electoral wards.
  // NOT the Pune Municipal Corporation boundary.
  bbox: [18.3854, 73.7319, 18.6218, 74.0184],
  centre: [18.5036, 73.8752],
  defaultZoom: 12,
  // ASSUMPTION — same Jun–Sep window as Mumbai. Not researched per city; this
  // drives only a composite-type warning, never a measurement.
  monsoonMonths: [5, 6, 7, 8],
  maxRadiusM: Number(process.env.GREEN_EXPLORER_MAX_RADIUS_METERS ?? 50_000),
  boundaryMeta: {
    status: 'PROVISIONAL',
    bbox: [18.3854, 73.7319, 18.6218, 74.0184],
    measuredAreaKm2: 509.9,
    sourceName: 'PMC Electoral Wards 2022 — 58 ward polygons',
    sourceUrl: 'https://data.opencity.in/dataset/98f28dac-9158-46ee-a91e-a514d9af427c',
    publisher: 'Pune Municipal Corporation, republished by OpenCity',
    isOfficial: false,
    vintage: '2022',
    adminLevel: 'ward_collection',
    featureCount: 58,
    unitCount: 58,
    isBoundingBoxOnly: true,
    caveat:
      'Third-party republication. A later 2025 delimitation (41 wards, measured 484.4 km²) ' +
      'exists and differs materially in area; the vintage must be chosen deliberately. ' +
      'Some vectors in the wider ecosystem were digitised by tracing PMC PDF maps.',
  },
  populationMeta: {
    value: 3_124_458,
    level: 'municipal_corporation',
    referenceYear: '2011',
    sourceName: 'Primary Census Abstract — Urban Agglomeration, India 2011 (PCA11-UA-00)',
    sourceUrl:
      'https://censusindia.gov.in/nada/index.php/catalog/45261/download/48987/PCA11-UA-0000.xlsx',
    publisher: 'Office of the Registrar General & Census Commissioner, India',
    isOfficial: true,
  },
};

// ── Bengaluru (registered, NOT published) ────────────────────────────────────
// Governance note: the Bruhat Bengaluru Mahanagara Palike (BBMP) was dissolved
// under the Greater Bengaluru Governance Act, 2024 (Karnataka Act 36 of 2025).
// The current authority is the Greater Bengaluru Authority, with five city
// corporations (Central, East, West, North, South). BBMP ward files must not be
// presented as current.
export const BENGALURU: CityConfig = {
  id: 'bengaluru',
  name: 'Bengaluru, India',
  country: 'India',
  // PROVISIONAL query envelope: measured extent of the GBA 2025 ward map.
  // NOT a Greater Bengaluru Authority administrative boundary.
  bbox: [12.8335, 77.4599, 13.1426, 77.7841],
  centre: [12.9881, 77.622],
  defaultZoom: 12,
  // ASSUMPTION — same Jun–Sep window as Mumbai. Not researched per city.
  monsoonMonths: [5, 6, 7, 8],
  maxRadiusM: Number(process.env.GREEN_EXPLORER_MAX_RADIUS_METERS ?? 50_000),
  boundaryMeta: {
    status: 'PROVISIONAL',
    bbox: [12.8335, 77.4599, 13.1426, 77.7841],
    measuredAreaKm2: 719.9,
    sourceName: 'GBA Final Wards Map (December 2025) — 369 wards',
    sourceUrl: 'https://data.opencity.in/dataset/863209cb-4ced-4f51-b5c5-156939c50922',
    publisher: 'Greater Bengaluru Authority, republished by OpenCity',
    isOfficial: false,
    vintage: '2025-12',
    adminLevel: 'ward_collection',
    featureCount: 369,
    unitCount: 369,
    isBoundingBoxOnly: true,
    caveat:
      'Third-party republication. Replaces BBMP, which was dissolved in 2025; the widely ' +
      'cited "BBMP = 440 km²" figure is wrong and superseded. Territorial expansion beyond ' +
      'the former BBMP limit was reportedly paused, which is why BBMP-era ward files measure ' +
      '713–720 km² rather than 440 km².',
  },
  // Intentionally absent: Census 2011 publishes no municipal-corporation
  // component for Bengaluru. Registering the Urban Agglomeration total (8,520,435)
  // here would pair a metro-scale population with a city-corporation boundary and
  // produce a density that is wrong in both numerator and denominator.
};

// ── Registry ─────────────────────────────────────────────────────────────────

/** The default city. Every existing caller that omits a city id gets this. */
export const DEFAULT_CITY: CityConfig = MUMBAI;

/** Every registered city, keyed by its stable id. */
export const CITY_REGISTRY: Record<CityId, CityConfig> = {
  mumbai: MUMBAI,
  pune: PUNE,
  bengaluru: BENGALURU,
};

/** Ids of every registered city. */
export function listCityIds(): CityId[] {
  return Object.keys(CITY_REGISTRY) as CityId[];
}

/** Every registered city configuration, in registration order. */
export function listCities(): CityConfig[] {
  return listCityIds().map((id) => CITY_REGISTRY[id]);
}

/**
 * Raised when an explicitly supplied city id is not in the registry.
 *
 * This error exists so that an unknown id NEVER degrades into Mumbai. Silently
 * falling back would let a typo, a stale link or an un-migrated caller serve the
 * wrong city's data while appearing to succeed.
 */
export class UnknownCityError extends Error {
  readonly code = 'UNKNOWN_CITY' as const;
  readonly requestedId: string;
  readonly validCityIds: CityId[];

  constructor(requestedId: string, validCityIds: CityId[]) {
    super(
      `Unknown city id "${requestedId}". Expected one of: ${validCityIds.join(', ')}. ` +
        `This is an error rather than a fallback so that an invalid city never ` +
        `silently returns ${DEFAULT_CITY.name} data.`
    );
    this.name = 'UnknownCityError';
    this.requestedId = requestedId;
    this.validCityIds = validCityIds;
  }
}

/** Non-throwing existence check. */
export function hasCity(id: unknown): id is CityId {
  if (typeof id !== 'string') return false;
  const key = id.trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(CITY_REGISTRY, key);
}

/**
 * Resolve a city configuration by id.
 *
 * Omitting the id (undefined / null / empty string) returns DEFAULT_CITY, which
 * is what preserves today's behaviour for every existing caller. Supplying an
 * id that is not registered throws {@link UnknownCityError}.
 */
export function getCity(id?: string | null): CityConfig {
  if (id === undefined || id === null) return DEFAULT_CITY;
  if (typeof id !== 'string') {
    throw new UnknownCityError(String(id), listCityIds());
  }
  const key = id.trim().toLowerCase();
  if (key === '') return DEFAULT_CITY;
  if (!hasCity(key)) {
    throw new UnknownCityError(id, listCityIds());
  }
  return CITY_REGISTRY[key as CityId];
}

/**
 * Publication guard.
 *
 * A city may only be presented as fully supported once BOTH hold:
 *   1. its boundary metadata is APPROVED (a real, cleared boundary — not a
 *      measured bounding box standing in for one), and
 *   2. it carries a population figure whose geographic level is compatible with
 *      that boundary, so a density is never formed by pairing, say, an
 *      urban-agglomeration population with a municipal-corporation area.
 *
 * NOTE FOR PHASE E: this currently returns FALSE for every registered city,
 * Mumbai included — no approved boundary polygon has been obtained for any of
 * them. A city switcher must therefore NOT gate solely on `isPublished`, or
 * Mumbai (the working default) would disappear from the UI. Gate on operational
 * availability instead and use this as the data-completeness guard.
 */
export function isPublished(city: CityConfig): boolean {
  const boundary = city.boundaryMeta;
  const population = city.populationMeta;
  if (!boundary || boundary.status !== 'APPROVED') return false;
  if (boundary.isBoundingBoxOnly) return false;
  if (!population) return false;
  if (boundary.adminLevel !== 'municipal_corporation') return false;
  return population.level === 'municipal_corporation';
}

/**
 * Explain why a city is or is not publishable. Intended for diagnostics and for
 * the data-sources UI, never for silently hiding a city.
 */
export function describeCityPublication(city: CityConfig): {
  published: boolean;
  reasons: string[];
} {
  const reasons: string[] = [];
  const boundary = city.boundaryMeta;
  const population = city.populationMeta;

  if (!boundary) {
    reasons.push('No boundary metadata.');
  } else {
    if (boundary.status !== 'APPROVED') {
      reasons.push(`Boundary status is ${boundary.status}, not APPROVED.`);
    }
    if (boundary.isBoundingBoxOnly) {
      reasons.push('Only a measured bounding box is available; no boundary polygon.');
    }
    if (boundary.adminLevel !== 'municipal_corporation') {
      reasons.push(`Boundary admin level is ${boundary.adminLevel}, not municipal_corporation.`);
    }
    if (boundary.vintage === null) {
      reasons.push('Boundary source states no vintage.');
    }
    if (!boundary.isOfficial) {
      reasons.push('Boundary is a third-party republication, not an official release.');
    }
  }

  if (!population) {
    reasons.push('No population figure has been cleared for this city.');
  } else if (population.level !== 'municipal_corporation') {
    reasons.push(`Population level is ${population.level}, not municipal_corporation.`);
  }

  return { published: reasons.length === 0, reasons };
}

// ── Backwards-compatible alias ───────────────────────────────────────────────
// ACTIVE_CITY is retained as an alias of DEFAULT_CITY so every existing route,
// service and hook keeps compiling and behaving exactly as before. It is removed
// only in the final contract phase, once all callers take an explicit city.
// New code should use getCity() / DEFAULT_CITY instead.
export const ACTIVE_CITY = DEFAULT_CITY;

// ── App base path ────────────────────────────────────────────────────────────
export { APP_BASE_PATH, withBasePath } from '@/lib/base-path';

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
