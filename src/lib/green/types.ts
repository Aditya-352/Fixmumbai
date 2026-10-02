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

export type ImageVerificationTier =
  | 'VERIFIED'
  | 'VERIFIED_NAME_MATCH'
  | 'TAKEN_IN_AREA'
  | 'STREET_LEVEL'
  | 'SATELLITE'
  | 'NONE';

export type CompositeType = 'TRAILING_90D' | 'DRY_SEASON';

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
  reason?: string; // 'SATELLITE_UNAVAILABLE' etc.
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
  tags: Record<string, string>;
  accessStatus: AccessStatus;
  walkClass: WalkClass;
  accessEvidence: AccessEvidence[];
  ndvi: NdviSummary | null;
  image: GreenSpaceImage | null;
  /** Straight-line from search centre to nearest boundary/centroid (m) */
  distanceM: number;
  /** Walking minutes via ORS/OSRM; null if unavailable */
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
  source: 'photon' | 'nominatim' | 'local';
}

// ── Tile layer ────────────────────────────────────────────────────────────────
export interface TileLayerInfo {
  urlTemplate: string;
  densityClass: DensityClass;
  label: string;
  colour: string;
  opacity: number;
  expiresAt: string;
}

export interface TilesResponse {
  layers: TileLayerInfo[];
  observationStart: string | null;
  observationEnd: string | null;
  compositeType: CompositeType | null;
  isMonsoon: boolean;
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

export interface ExplorerFilters {
  type: FilterType;
  verifiedOnly: boolean;
  radiusM: number;
  ndviLayers: { HIGH: boolean; MEDIUM: boolean; LOW: boolean };
}
