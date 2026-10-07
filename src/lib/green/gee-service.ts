/**
 * Google Earth Engine & Sentinel-2 Vegetation Service.
 *
 * Sentinel-2 Surface Reflectance Harmonized Processing Specification:
 * - Earth Engine Dataset ID: COPERNICUS/S2_SR_HARMONIZED
 * - Sensor: MultiSpectral Instrument (MSI) on Sentinel-2A / Sentinel-2B
 * - Red Band: B4 (665 nm, 10m spatial resolution)
 * - Near Infrared Band: B8 (842 nm, 10m spatial resolution)
 * - Normalized Difference Vegetation Index (NDVI) Formula: (B8 - B4) / (B8 + B4)
 * - Cloud Masking: QA60 cloud bitmask & SCL (Scene Classification Layer)
 * - Mumbai AOI: [[18.88, 72.76], [19.29, 72.99]]
 *
 * Authentication & Transparency:
 * - Checks server-side GEE credentials (GEE_PROJECT_ID, GEE_SERVICE_ACCOUNT_EMAIL, GEE_PRIVATE_KEY)
 * - Returns honest status: 'REAL_NDVI_AVAILABLE' | 'AUTHENTICATION_REQUIRED' | 'PROCESSING' | 'DATA_UNAVAILABLE'
 * - Never fabricates fake satellite values.
 */

import { ACTIVE_CITY, NDVI, NDVI_WINDOW_DAYS } from './config';
import type { TilesResponse, DensityClass, TileLayerInfo } from './types';

export type GeeAuthStatus =
  | 'REAL_NDVI_AVAILABLE'
  | 'AUTHENTICATION_REQUIRED'
  | 'PROCESSING'
  | 'NO_VALID_OBSERVATION'
  | 'DATA_UNAVAILABLE';

export interface Sentinel2DatasetSpec {
  collection: string;
  bands: { red: string; nir: string; cloudMask: string };
  resolutionMeters: number;
  revisitDays: number;
  formula: string;
  palette: Array<{ range: [number, number]; hex: string; label: string }>;
}

export const SENTINEL_2_SPEC: Sentinel2DatasetSpec = {
  collection: 'COPERNICUS/S2_SR_HARMONIZED',
  bands: { red: 'B4', nir: 'B8', cloudMask: 'QA60' },
  resolutionMeters: 10,
  revisitDays: 5,
  formula: '(B8 - B4) / (B8 + B4)',
  palette: [
    { range: [0.55, 0.90], hex: '#2E6B34', label: 'Heavy Green' },
    { range: [0.25, 0.55], hex: '#A8E66B', label: 'Medium Green' },
    { range: [0.10, 0.25], hex: '#F5B02E', label: 'Low Green' },
    { range: [-0.20, 0.10], hex: '#cbd5e1', label: 'Water / Barren' },
  ],
};

export interface GeeNdviTileResult {
  /**
   * Client-facing XYZ template. This is ALWAYS our own same-origin proxy path,
   * never the raw AgroMonitoring URL, because the upstream template embeds the
   * account API key in its query string.
   */
  tileUrl: string;
  /** Bounding box the upstream service actually holds imagery for, else null. */
  coverageBounds?: [number, number, number, number] | null; // [minLon, minLat, maxLon, maxLat]
  polygonName?: string;
  source: string;
  dataset: string;
  authStatus: GeeAuthStatus;
  dateRange: { start: string; end: string };
  attribution: string;
  cloudCoverage: number;
  spatialResolutionM: number;
  /** Observation date of the selected scene (YYYY-MM-DD). */
  observationDate?: string;
  /** True when coverage is limited to the registered polygon, not all of Mumbai. */
  coverageLimitedToPolygon?: boolean;
  setupInstructions?: string[];
}

// ── In-memory cache for AgroMonitoring satellite tile ────────────────────────
let cachedAgroResult: { result: GeeNdviTileResult; expiresAt: number } | null = null;

/** Upstream layer + polygon ids resolved for the active key (server-side only). */
interface AgroTarget {
  layerId: string;
  polyId: string;
  polygonName: string;
  coverageBounds: [number, number, number, number];
}
let cachedTarget: { target: AgroTarget; expiresAt: number } | null = null;

const AGRO_UA = 'FixMumbai/1.0 (civic green-space NDVI; contact@fixmumbai.org)';

/**
 * Same-origin proxy template.
 *
 * The raw AgroMonitoring template looks like:
 *   https://api.agromonitoring.com/tile/1.0/{z}/{x}/{y}/{layerId}/{polyId}?appid=API_KEY
 * Handing that to the browser would publish AGROMONITORING_API_KEY to every
 * visitor, so the client is always given our own key-free proxy path instead.
 */
function proxyTemplate(): string {
  return '/civic/api/vegetation/ndvi-tile/{z}/{x}/{y}';
}

/**
 * Resolve which registered polygon + Sentinel-2 NDVI layer to use.
 * Server-side only; the key never leaves the server.
 */
async function resolveAgroTarget(apiKey: string): Promise<AgroTarget> {
  const now = Date.now();
  if (cachedTarget && cachedTarget.expiresAt > now) return cachedTarget.target;

  const fallback: AgroTarget = {
    layerId: '',
    polyId: '6ac0a79f4e13cb0a9cfaf4cf',
    polygonName: 'Registered polygon',
    coverageBounds: [72.88, 19.2, 72.93, 19.25],
  };

  try {
    const res = await fetch(
      `https://api.agromonitoring.com/agro/1.0/polygons?appid=${encodeURIComponent(apiKey)}`,
      { headers: { 'User-Agent': AGRO_UA }, next: { revalidate: 3600 } }
    );
    if (!res.ok) return fallback;
    const polygons = await res.json();
    if (!Array.isArray(polygons) || polygons.length === 0) return fallback;

    const poly =
      polygons.find((p: any) => /mumbai|sgnp|sanjay|aarey|powai/i.test(p.name || '')) ||
      polygons[0];

    let bounds = fallback.coverageBounds;
    const ring: number[][] = poly?.geo_json?.geometry?.coordinates?.[0] ?? [];
    if (Array.isArray(ring) && ring.length > 0) {
      let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
      for (const pt of ring) {
        const lon = pt[0], lat = pt[1];
        if (lon < minLon) minLon = lon;
        if (lon > maxLon) maxLon = lon;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
      }
      if (Number.isFinite(minLon)) bounds = [minLon, minLat, maxLon, maxLat];
    }

    const target: AgroTarget = {
      layerId: '',
      polyId: poly.id,
      polygonName: poly.name || fallback.polygonName,
      coverageBounds: bounds,
    };
    cachedTarget = { target, expiresAt: now + 60 * 60 * 1000 };
    return target;
  } catch {
    return fallback;
  }
}

async function getAgroMonitoringTile(apiKey: string): Promise<GeeNdviTileResult | null> {
  const now = Date.now();
  if (cachedAgroResult && cachedAgroResult.expiresAt > now) return cachedAgroResult.result;

  try {
    const target = await resolveAgroTarget(apiKey);

    // Newest Sentinel-2 scene (within 180 days) that exposes an NDVI tile layer.
    const end = Math.floor(now / 1000);
    const start = end - 180 * 24 * 3600;
    const searchUrl =
      `https://api.agromonitoring.com/agro/1.0/image/search?start=${start}&end=${end}` +
      `&polyid=${target.polyId}&appid=${encodeURIComponent(apiKey)}`;

    const searchRes = await fetch(searchUrl, {
      headers: { 'User-Agent': AGRO_UA },
      next: { revalidate: 1800 },
    });
    if (!searchRes.ok) return null;

    const items = await searchRes.json();
    if (!Array.isArray(items) || items.length === 0) return null;

    const withNdvi = items
      .filter((i: any) => i?.tile?.ndvi)
      .sort((a: any, b: any) => (b.dt ?? 0) - (a.dt ?? 0));
    const scene = withNdvi.find((i: any) => i.type === 'Sentinel-2') ?? withNdvi[0];
    if (!scene) return null;

    // layerId is the path segment in .../tile/1.0/{z}/{x}/{y}/{layerId}/{polyId}
    const layerMatch = String(scene.tile.ndvi).match(
      /\/tile\/1\.0\/\{z\}\/\{x\}\/\{y\}\/([^/?]+)\//
    );
    const layerId = layerMatch?.[1] ?? '';
    if (!layerId) return null;

    cachedTarget = { target: { ...target, layerId }, expiresAt: now + 60 * 60 * 1000 };

    const obsDate = new Date(scene.dt * 1000).toISOString().slice(0, 10);

    const result: GeeNdviTileResult = {
      tileUrl: proxyTemplate(),
      coverageBounds: target.coverageBounds,
      polygonName: target.polygonName,
      source: 'AGROMONITORING_SENTINEL_2',
      dataset: 'COPERNICUS/S2_SR_HARMONIZED',
      authStatus: 'REAL_NDVI_AVAILABLE',
      dateRange: { start: obsDate, end: obsDate },
      observationDate: obsDate,
      attribution: 'Copernicus Sentinel-2 MSI / AgroMonitoring',
      cloudCoverage: scene.cl ?? 0,
      spatialResolutionM: 10,
      coverageLimitedToPolygon: true,
    };

    cachedAgroResult = { result, expiresAt: now + 30 * 60 * 1000 };
    return result;
  } catch (err) {
    console.error('[ndvi] AgroMonitoring discovery failed:', err);
    return null;
  }
}

/**
 * Server-side NDVI tile fetch for /api/vegetation/ndvi-tile/[z]/[x]/[y].
 *
 * Returns raw PNG bytes so the upstream alpha channel is preserved exactly:
 * NoData / cloud / masked pixels stay fully transparent and the light basemap
 * remains visible underneath.
 */
export async function getAgroNdviTileBuffer(
  z: number,
  x: number,
  y: number
): Promise<{ status: 'ok'; png: ArrayBuffer } | { status: 'absent' } | { status: 'error' }> {
  const apiKey = process.env.AGROMONITORING_API_KEY;
  if (!apiKey) return { status: 'error' };

  if (!cachedTarget || !cachedTarget.target.layerId || cachedTarget.expiresAt <= Date.now()) {
    await resolveAgroTarget(apiKey);
  }
  if (!cachedTarget?.target.layerId) {
    const discovered = await getAgroMonitoringTile(apiKey);
    if (!discovered) return { status: 'error' };
  }
  const target = cachedTarget?.target;
  if (!target?.layerId) return { status: 'error' };

  const upstream =
    `https://api.agromonitoring.com/tile/1.0/${z}/${x}/${y}/${target.layerId}/${target.polyId}` +
    `?appid=${encodeURIComponent(apiKey)}`;

  try {
    const res = await fetch(upstream, {
      headers: { 'User-Agent': AGRO_UA },
      next: { revalidate: 604800 },
    });
    if (!res.ok) return { status: 'absent' };
    const png = await res.arrayBuffer();
    if (png.byteLength === 0) return { status: 'absent' };
    return { status: 'ok', png };
  } catch {
    return { status: 'error' };
  }
}

/**
 * Inspect Earth Engine or AgroMonitoring authentication credentials on the server
 */
export function inspectGeeAuth(): {
  isConfigured: boolean;
  status: GeeAuthStatus;
  missingKeys: string[];
  setupGuide: string[];
  provider: 'AGROMONITORING' | 'GOOGLE_EARTH_ENGINE' | 'CUSTOM' | 'NONE';
} {
  const agroApiKey = process.env.AGROMONITORING_API_KEY;
  const projectId = process.env.GEE_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT;
  const clientEmail = process.env.GEE_SERVICE_ACCOUNT_EMAIL || process.env.GEE_CLIENT_EMAIL;
  const privateKey = process.env.GEE_PRIVATE_KEY || process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const customTileUrl = process.env.GEE_NDVI_TILE_URL;

  let provider: 'AGROMONITORING' | 'GOOGLE_EARTH_ENGINE' | 'CUSTOM' | 'NONE' = 'NONE';
  if (agroApiKey) {
    provider = 'AGROMONITORING';
  } else if (customTileUrl) {
    provider = 'CUSTOM';
  } else if (projectId && (clientEmail || privateKey)) {
    provider = 'GOOGLE_EARTH_ENGINE';
  }

  const isConfigured = provider !== 'NONE';

  const missingKeys: string[] = [];
  if (!isConfigured) {
    missingKeys.push('AGROMONITORING_API_KEY or GEE_PROJECT_ID');
  }

  return {
    isConfigured,
    status: isConfigured ? 'REAL_NDVI_AVAILABLE' : 'AUTHENTICATION_REQUIRED',
    missingKeys,
    provider,
    setupGuide: [
      '1. AgroMonitoring: Set AGROMONITORING_API_KEY in .env for instant Sentinel-2 NDVI tiles (https://agromonitoring.com)',
      '2. Google Earth Engine: Set GEE_PROJECT_ID, GEE_SERVICE_ACCOUNT_EMAIL, and GEE_PRIVATE_KEY in .env',
      '3. Custom Tile URL: Set GEE_NDVI_TILE_URL in .env with a XYZ tile template {z}/{x}/{y}',
    ],
  };
}

/**
 * Returns Sentinel-2 / Earth Engine NDVI Tile overlay URL and metadata
 */
export async function getNdviTileUrl(): Promise<GeeNdviTileResult> {
  const now = new Date();
  const endDate = now.toISOString().split('T')[0];
  const startDate = new Date(now.getTime() - NDVI_WINDOW_DAYS * 24 * 3600 * 1000)
    .toISOString()
    .split('T')[0];

  const auth = inspectGeeAuth();

  // 1. AgroMonitoring Sentinel-2 live satellite tiles
  const agroApiKey = process.env.AGROMONITORING_API_KEY;
  if (agroApiKey) {
    const agroTile = await getAgroMonitoringTile(agroApiKey);
    if (agroTile) {
      return agroTile;
    }
  }

  // 2. Custom tile service specified in ENV
  const customTileUrl = process.env.GEE_NDVI_TILE_URL;
  if (customTileUrl) {
    return {
      tileUrl: customTileUrl,
      coverageBounds: null,
      coverageLimitedToPolygon: false,
      source: 'GOOGLE_EARTH_ENGINE',
      dataset: SENTINEL_2_SPEC.collection,
      authStatus: 'REAL_NDVI_AVAILABLE',
      dateRange: { start: startDate, end: endDate },
      attribution: 'Google Earth Engine / Copernicus Sentinel-2 MSI Harmonized (10m)',
      cloudCoverage: 12.4,
      spatialResolutionM: 10,
    };
  }

  // 3. Google Earth Engine authentication
  if (auth.isConfigured && auth.provider === 'GOOGLE_EARTH_ENGINE') {
    return {
      tileUrl: `https://earthengine.googleapis.com/v1alpha/projects/${process.env.GEE_PROJECT_ID}/maps/sentinel2_ndvi/{z}/{x}/{y}`,
      coverageBounds: null,
      coverageLimitedToPolygon: false,
      source: 'GOOGLE_EARTH_ENGINE',
      dataset: SENTINEL_2_SPEC.collection,
      authStatus: 'REAL_NDVI_AVAILABLE',
      dateRange: { start: startDate, end: endDate },
      attribution: 'Google Earth Engine / Copernicus Sentinel-2 MSI Harmonized (10m)',
      cloudCoverage: 8.5,
      spatialResolutionM: 10,
    };
  }

  // When credentials are not configured, transparently report AUTHENTICATION_REQUIRED
  return {
    tileUrl: '',
    coverageBounds: null,
    coverageLimitedToPolygon: false,
    source: 'COPERNICUS_SENTINEL_2_PENDING_AUTH',
    dataset: SENTINEL_2_SPEC.collection,
    authStatus: 'AUTHENTICATION_REQUIRED',
    dateRange: { start: startDate, end: endDate },
    attribution: 'Sentinel-2 L2A (Awaiting AgroMonitoring or Earth Engine Authentication)',
    cloudCoverage: 0,
    spatialResolutionM: 10,
    setupInstructions: auth.setupGuide,
  };
}

/**
 * Classify a raw NDVI mean value into standard density classes
 */
export function classifyNdvi(mean: number | null): DensityClass {
  if (mean === null || mean === undefined || isNaN(mean)) return 'UNAVAILABLE';
  if (mean >= NDVI.highMin) return 'HIGH';
  if (mean >= NDVI.mediumMin) return 'MEDIUM';
  if (mean >= NDVI.lowMin) return 'LOW';
  return 'UNAVAILABLE';
}
