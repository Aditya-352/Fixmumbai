/**
 * Which Green Density endpoints receive `?city=`.
 *
 * This is the single documented source of truth for that decision, mirroring
 * what the server actually resolves. Adding a parameter to an endpoint that
 * ignores it would advertise a capability that does not exist; omitting one that
 * requires it would serve the wrong city.
 *
 * SERVER-SIDE DECISIONS (established in Phase C)
 *   CITY-AWARE       — the handler calls resolveCity() and scopes its response.
 *   CITY-AGNOSTIC    — the handler deliberately takes no city.
 *   CITY-BLOCKED     — the data source does not exist yet for non-Mumbai cities.
 */

import type { CityId } from './config';
import { APP_BASE_PATH } from '@/lib/base-path';

/** Handlers that resolve `?city=` and scope their response accordingly. */
export const CITY_AWARE_ENDPOINTS = [
  'nearby',
  'search',
  'areas/{id}',
  'metrics',
  'nurseries',
  'sml',
] as const;

/**
 * Handlers that deliberately ignore `?city=`.
 *
 *   reverse      — global geocoding; works anywhere, has no city scope.
 *   route        — takes explicit from/to coordinates and calls OSRM.
 *   photos       — a greenSpaceId already implies its city.
 *   status       — global feature/DB flags.
 *   tiles        — AgroMonitoring serves per registered polygon; only a Mumbai
 *                  AOI exists, so the parameter would be ignored.
 *   ndvi-tile    — same proxy, same reason.
 */
export const CITY_AGNOSTIC_ENDPOINTS = [
  'reverse',
  'route',
  'photos',
  'status',
  'tiles',
  'ndvi-tile',
] as const;

/**
 * Cities with a registered Sentinel-2 AOI polygon for the vegetation raster.
 *
 * AgroMonitoring imagery is addressed by registered polygon id, and only one
 * polygon is registered. Until more exist, the NDVI layer must be disabled for
 * every other city rather than rendering another city's tiles or a blank overlay.
 */
export const CITIES_WITH_REGISTERED_NDVI_AOI: readonly CityId[] = ['mumbai'];

export function hasRegisteredNdviAoi(cityId: CityId): boolean {
  return CITIES_WITH_REGISTERED_NDVI_AOI.includes(cityId);
}

const BASE = `${APP_BASE_PATH}/api/vegetation`;

/**
 * Build a request URL for a Green Density endpoint.
 *
 * A city parameter is attached only to the city-aware endpoints. Passing a city
 * to an agnostic endpoint is therefore impossible by construction, which is what
 * stops a future call site from implying support that does not exist.
 */
type UrlParams = Record<string, string | number | boolean | undefined | null>;

export function buildVegetationUrl(
  endpoint: (typeof CITY_AWARE_ENDPOINTS)[number] | (string & {}),
  params?: UrlParams,
  cityId?: CityId
): string;

export function buildVegetationUrl(
  endpoint: string,
  params: UrlParams = {},
  cityId?: CityId
): string {
  // Path-shaped endpoints (`areas/{id}`) substitute their value into the path.
  // Those parameters must then be excluded from the query string, otherwise the
  // id is sent twice — once as `/areas/<id>` and again as `?id=<id>`.
  const consumed = new Set<string>();
  let path = endpoint;
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') continue;
    if (!path.includes(`{${key}}`)) continue;
    path = path.replace(`{${key}}`, encodeURIComponent(String(value)));
    consumed.add(key);
  }

  const parts: string[] = [];
  for (const [key, value] of Object.entries(params)) {
    if (consumed.has(key)) continue;
    if (value === undefined || value === null || value === '') continue;
    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  }

  const isCityAware = (CITY_AWARE_ENDPOINTS as readonly string[]).includes(endpoint);
  if (isCityAware && cityId) parts.push(`city=${encodeURIComponent(cityId)}`);

  const query = parts.length ? `?${parts.join('&')}` : '';
  return `${BASE}/${path}${query}`;
}
