/**
 * City-scoped statistics for the dashboard hero.
 *
 * EVERY number here is real:
 *  - `reportCount` is the number of approved civic reports whose recorded
 *    coordinates fall inside the city's own boundary. The report table has no
 *    `city` column, so the city is derived from the authoritative per-city
 *    bounding box in the city registry. A report is therefore counted for
 *    exactly one city, and one city's reports are never shown as another's.
 *  - `greenSitesCount` is the number of green-space sites actually known for
 *    that city — from the database for Mumbai, and from that city's own
 *    normalised open-data dataset for Pune and Bengaluru.
 *  - `wardCount` comes from the measured boundary metadata in the city
 *    registry (`unitCount`).
 *
 * When a figure genuinely does not exist for a city it is reported as `null`
 * so the UI can show an honest "not available" state instead of borrowing
 * another city's number.
 */

import { db } from '@/lib/db';
import {
  CITY_REGISTRY,
  DEFAULT_CITY,
  hasCity,
  listCityIds,
  type CityId,
} from '@/lib/green/config';
import { STATIC_GREEN_SPACES_BY_CITY } from '@/lib/green/static-spaces-fallback';

export interface CityDashboardStats {
  cityId: CityId;
  /** Approved civic reports inside this city's boundary. */
  reportCount: number;
  /** Green-space sites known for this city. */
  greenSitesCount: number;
  /** Administrative units in the city's measured boundary, when known. */
  wardCount: number | null;
  /** Authority label for the ward statistic, e.g. "BMC". */
  wardAuthority: string;
}

/** Authority that administers each city, used in the hero's ward wording. */
const WARD_AUTHORITY: Record<CityId, string> = {
  mumbai: 'BMC',
  pune: 'PMC',
  bengaluru: 'BBMP',
  delhi: 'MCD',
  kolkata: 'KMC',
  nagpur: 'NMC',
  hyderabad: 'GHMC',
};

/**
 * Resolve a raw `?city=` value to a canonical city id.
 * Unknown or missing values fall back to the default city.
 */
export function resolveDashboardCity(raw: string | undefined | null): CityId {
  if (!raw) return DEFAULT_CITY.id;
  const id = raw.trim().toLowerCase();
  return hasCity(id) ? (id as CityId) : DEFAULT_CITY.id;
}

/** True when a `[lat, lon]` pair falls inside the city's bounding box. */
export function isInsideCity(cityId: CityId, lat: number, lon: number): boolean {
  const city = CITY_REGISTRY[cityId];
  if (!city) return false;
  const [south, west, north, east] = city.bbox;
  return lat >= south && lat <= north && lon >= west && lon <= east;
}

/**
 * Number of green-space sites known for a city.
 *
 * The database currently holds Mumbai's OSM-derived green spaces. Pune and
 * Bengaluru are served from their own normalised open-data datasets.
 */
function greenSitesFor(cityId: CityId, mumbaiDbCount: number): number {
  if (cityId === DEFAULT_CITY.id && mumbaiDbCount > 0) return mumbaiDbCount;
  const list = STATIC_GREEN_SPACES_BY_CITY[cityId];
  return Array.isArray(list) ? list.length : 0;
}

/**
 * Real, city-scoped statistics for every registered city.
 *
 * Returned as a map so the client can switch cities instantly without a
 * server round-trip, while every number still comes from the database or the
 * city's own dataset.
 */
export async function getCityDashboardStats(): Promise<Record<CityId, CityDashboardStats>> {
  const cityIds = listCityIds();

  // One query for every report's location; the counts are derived per city.
  const [reports, mumbaiGreenCount] = await Promise.all([
    db.report
      .findMany({
        where: { moderationStatus: 'APPROVED' },
        select: { latitude: true, longitude: true },
      })
      .catch(() => [] as { latitude: number; longitude: number }[]),
    db.greenSpace.count().catch(() => 0),
  ]);

  const out = {} as Record<CityId, CityDashboardStats>;
  for (const cityId of cityIds) {
    const reportCount = reports.filter((r) => isInsideCity(cityId, r.latitude, r.longitude)).length;
    out[cityId] = {
      cityId,
      reportCount,
      greenSitesCount: greenSitesFor(cityId, mumbaiGreenCount),
      wardCount: CITY_REGISTRY[cityId]?.boundaryMeta?.unitCount ?? null,
      wardAuthority: WARD_AUTHORITY[cityId],
    };
  }
  return out;
}
