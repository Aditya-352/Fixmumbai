/**
 * Shared TypeScript types for the Green Density Explorer.
 * Kept separate from config so they can be imported on the client
 * without pulling in server-only env vars.
 */

export type AccessStatus =
  | 'PUBLIC_TAGGED'
  | 'RESTRICTED'
  | 'UNKNOWN';

export type WalkClass =
  | 'WALKABLE_VERIFIED'
  | 'PATHS_PRESENT_ACCESS_UNVERIFIED'
  | 'ACCESS_UNVERIFIED'
  | 'RESTRICTED'
  | 'ROADSIDE_VEGETATION';

export type DensityClass = 'HIGH' | 'MEDIUM' | 'LOW' | 'UNAVAILABLE';

export type NdviConfidence = 'HIGH' | 'MEDIUM' | 'LOW';

/**
 * Provenance of an NDVI figure. This is the single field the UI must branch on.
 *
 *  MEASURED          — computed from real satellite pixels (Sentinel-2 B8/B4).
 *  SYNTHETIC_ESTIMATE — a hand-authored / illustrative number. NOT a measurement.
 *                       Never present an acquisition date, pixel count, cloud
 *                       coverage or confidence alongside one of these.
 *  UNAVAILABLE       — no value at all.
 */
export type NdviProvenance = 'MEASURED' | 'SYNTHETIC_ESTIMATE' | 'UNAVAILABLE';

export type ImageVerificationTier =
  | 'VERIFIED'
  | 'VERIFIED_NAME_MATCH'
  | 'TAKEN_IN_AREA'
  | 'STREET_LEVEL'
  | 'SATELLITE'
  | 'NONE';

/**
 * Composite product used to build the observation.
 * SYNTHETIC is the documented marker for non-measurement values (see the
 * GreenVegetationObservation model in prisma/schema.prisma).
 */
export type CompositeType =
  | 'TRAILING_90D'
  | 'DRY_SEASON'
  | 'MEDIAN_COMPOSITE'
  | 'SINGLE_SCENE'
  | 'SYNTHETIC';

// ── API response envelope ────────────────────────────────────────────────────
export interface ApiMeta {
  sources: string[];
  fetchedAt: string;
  cache: 'HIT' | 'MISS' | 'NONE';
  partial: boolean;
  warnings: string[];
}

export interface ApiOk<T> {
  ok: true;
  data: T;
  meta: ApiMeta;
  error: null;
}

export interface ApiErr {
  ok: false;
  data: null;
  meta?: Partial<ApiMeta>;
  error: { code: string; message: string };
}

export type ApiResponse<T> = ApiOk<T> | ApiErr;

// ── Green space ──────────────────────────────────────────────────────────────
export interface GreenSpaceImage {
  imageUrl: string;
  thumbUrl?: string;
  sourceUrl: string;
  attribution: string;
  licence: string;
  verificationTier: ImageVerificationTier;
  source: string;
  caption?: string;
}

export interface NdviSummary {
  mean: number | null;
  min: number | null;
  max: number | null;
  pixelCount: number | null;
  densityClass: DensityClass;
  confidence: NdviConfidence | null;
  compositeType: CompositeType | null;
  observationStart: string | null;
  observationEnd: string | null;
  imageCount: number | null;
  cloudCoverage: number | null;
  satelliteSource: string | null;
  /**
   * Whether these numbers came from real satellite pixels. Consumers MUST use
   * this to decide whether it is legitimate to show an observation window,
   * pixel count, cloud coverage or confidence. Defaults to UNAVAILABLE so a
   * missing value fails closed rather than being assumed genuine.
   */
  provenance: NdviProvenance;
  reason?: string; // 'SATELLITE_UNAVAILABLE', 'SYNTHETIC_ESTIMATE_NOT_SATELLITE' etc.
}

export interface AccessEvidence {
  type: 'OSM_TAG' | 'PATH_COUNT' | 'ENTRANCE_COUNT' | 'GEOMETRY_SHAPE';
  key?: string;
  value?: string;
  description: string;
}

export interface GreenSpaceSummary {
  id: string;
  osmType: string;
  osmId: string;
  name: string;
  category: string;
  /** GeoJSON geometry (MultiPolygon or Polygon) */
  geometry: GeoJSON.Geometry | null;
  centroid: { lat: number; lon: number };
  areaM2: number | null;
  areaHectares?: number;
  tags: Record<string, string>;
  accessStatus: AccessStatus;
  walkClass: WalkClass;
  accessEvidence: AccessEvidence[];
  ndvi: NdviSummary | null;
  image: GreenSpaceImage | null;
  /** Shortest distance from search centre to nearest polygon boundary (m). 0 if inside. */
  distanceM: number;
  /** Human-readable distance label e.g. "2.0 km to nearest boundary" */
  distanceLabel?: string;
  /** How distanceM was calculated */
  distanceMethod?: string;
  /** Nearest point on the polygon boundary */
  nearestBoundaryPoint?: { lat: number; lon: number } | null;
  /** True when the user's selected location is inside the polygon */
  isInsidePolygon?: boolean;
  /** Walking minutes via ORS/OSRM pedestrian router; null if unavailable */
  walkMinutes: number | null;
  walkMinutesEstimated: boolean;
  source: string;
  updatedAt: string;
}

export interface GreenSpaceDetail extends GreenSpaceSummary {
  osmVersion: number | null;
  osmUrl: string;
  pathCount: number;
  totalPathLengthM: number;
  entrances: Array<{ lat: number; lon: number; tags: Record<string, string> }>;
  ndviFull: NdviSummary | null;
  images: GreenSpaceImage[];
  routeGeojson: GeoJSON.Feature | null;
  fetchedAt: string;
}

// ── Search / geocode ─────────────────────────────────────────────────────────
export interface GeocodeResult {
  name: string;
  lat: number;
  lon: number;
  displayName: string;
  category?: 'LOCALITY' | 'PARK' | 'FOREST' | 'NATURE_RESERVE' | 'WARD' | 'LANDMARK' | 'STREET';
  ward?: string;
  source: 'photon' | 'nominatim' | 'local' | 'green_space';
}

// ── Tile layer ────────────────────────────────────────────────────────────────
export interface TileLayerInfo {
  /** Same-origin proxy template. Never a provider URL containing an API key. */
  urlTemplate: string;
  densityClass: DensityClass;
  label: string;
  colour: string;
  opacity: number;
  expiresAt: string;
}

/**
 * Numerical NDVI statistics as reported by the provider's statistics endpoint.
 * Distinct from the rendered display tiles, which are colour images.
 */
export interface NumericalNdvi {
  mean: number;
  median: number;
  min: number;
  max: number;
  std: number;
  p25: number;
  p75: number;
  /** Valid (unmasked) pixels contributing to the statistics. */
  validPixelCount: number;
}

export interface NdviAoiCoverage {
  name: string;
  polygonId: string;
  bounds: [number, number, number, number];
  /** True when this AOI alone does not cover the whole study area. */
  partialStudyArea: boolean;
}

/** Full provenance for a satellite observation, for transparency in the UI. */
export interface TileProvenance {
  providerStatus: string;
  providerMessage: string;
  provider: string;
  dataset: string | null;
  sceneId: string | null;
  satelliteType: string | null;
  acquisitionDateUtc: string | null;
  sceneCloudCoveragePct: number | null;
  cloudThresholdPct: number;
  selectionReason: string | null;
  spatialResolutionM: number | null;
  searchWindowDays: number;
  scenesExamined: number;
  scenesPassingCloudFilter: number;
  aoi: NdviAoiCoverage[];
  coverageIsPartial: boolean;
  studyAreaName: string;
  numerical: NumericalNdvi | null;
  /** Always true: display tiles are colour renders, not raw measurements. */
  displayTilesAreColourRenders: boolean;
  disclaimer: string;
}

export interface TilesResponse {
  layers: TileLayerInfo[];
  /**
   * Bounding box the provider actually holds imagery for.
   * [minLon, minLat, maxLon, maxLat]. Null when coverage is unbounded.
   */
  coverageBounds?: [number, number, number, number] | null;
  polygonName?: string;
  provider?: string;
  observationStart: string | null;
  observationEnd: string | null;
  isMonsoon: boolean;
  /** True when NDVI exists only inside the registered polygon, not city-wide. */
  coverageLimitedToPolygon?: boolean;
  /** Measured numerical NDVI for the AOI, when the provider exposes it. */
  numerical?: NumericalNdvi | null;
  provenance?: TileProvenance;
  warnings: string[];
}

// ── Status ────────────────────────────────────────────────────────────────────
export interface GreenStatusResponse {
  featureEnabled: boolean;
  postGisOk: boolean;
  geeReachable: boolean;
  lastIngest: string | null;
  lastNdviWindow: { start: string; end: string } | null;
  tileCacheExpiry: string | null;
}

// ── Explorer UI state ─────────────────────────────────────────────────────────
export interface SearchCentre {
  name: string;
  lat: number;
  lon: number;
  source: 'geolocation' | 'search' | 'default';
  accuracyM?: number;
}

export type FilterType = 'all' | 'parks' | 'walkable' | 'trails';

export type RightPanelTab = 'METRICS' | 'SPACES' | 'NURSERIES' | 'HEXAGON';

export type InfrastructureCategory =
  | 'Park'
  | 'Public Garden'
  | 'Mangrove'
  | 'Wetland'
  | 'Community Garden'
  | 'Botanical Garden'
  | 'Nursery'
  | 'Green Corridor'
  | 'Meadow'
  | 'Rooftop Garden'
  | 'Vertical Garden'
  | 'Nature Reserve'
  | 'Forest';

export interface LayerVisibilityState {
  basemap: 'light' | 'satellite';
  ndvi: boolean;
  hexGrid: boolean;
  greenSpaces: boolean;
  nurseries: boolean;
}

export interface ExplorerFilters {
  type: FilterType;
  categoryFilter?: string;
  nurseryWard?: string;
  verifiedOnly: boolean;
  radiusM: number;
  ndviLayers: { HIGH: boolean; MEDIUM: boolean; LOW: boolean };
  layerVisibility: LayerVisibilityState;
}

