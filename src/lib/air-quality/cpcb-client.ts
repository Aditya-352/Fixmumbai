import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import { resolveCpcbStationCoordinates } from './station-resolver';
import type { PollutantId, PollutantReading, RawStationReading } from './types';

const CPCB_RESOURCE_ID = '3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69';
const CPCB_BASE_URL = `https://api.data.gov.in/resource/${CPCB_RESOURCE_ID}`;

/**
 * CPCB's real-time feed reports raw pollutant concentrations, not a
 * precomputed station AQI, and does not include a units field. It reports
 * PM2.5/PM10/NO2/NH3/SO2/OZONE in µg/m³ and CO in mg/m³ — this is CPCB's own
 * standard reporting convention (see CPCB National Air Quality Index
 * methodology), used consistently across its public tools.
 */
const CPCB_UNITS: Record<PollutantId, string> = {
  'PM2.5': 'µg/m³',
  PM10: 'µg/m³',
  NO2: 'µg/m³',
  NH3: 'µg/m³',
  SO2: 'µg/m³',
  CO: 'mg/m³',
  OZONE: 'µg/m³',
};

/** Maps CPCB's `pollutant_id` values onto our normalized PollutantId type. */
function normalizePollutantId(raw: string): PollutantId | null {
  const key = raw.trim().toUpperCase();
  switch (key) {
    case 'PM2.5':
    case 'PM2_5':
      return 'PM2.5';
    case 'PM10':
      return 'PM10';
    case 'NO2':
      return 'NO2';
    case 'NH3':
      return 'NH3';
    case 'SO2':
      return 'SO2';
    case 'CO':
      return 'CO';
    case 'OZONE':
    case 'O3':
      return 'OZONE';
    default:
      return null;
  }
}

interface CpcbRecord {
  id?: string;
  country?: string;
  state?: string;
  city?: string;
  station?: string;
  last_update?: string;
  pollutant_id?: string;
  pollutant_min?: string;
  pollutant_max?: string;
  pollutant_avg?: string;
}

interface CpcbApiResponse {
  records?: CpcbRecord[];
  message?: string;
}

function toNumberOrNull(value: string | undefined): number | null {
  if (value === undefined || value === null || value === '') return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

/**
 * Parses CPCB's `last_update` format ("DD-MM-YYYY HH:mm:ss", IST) into ISO 8601.
 */
function parseCpcbTimestamp(raw: string | undefined): string | null {
  if (!raw) return null;
  const match = raw.match(/^(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/);
  if (!match) return null;
  const [, dd, mm, yyyy, hh, min, ss] = match;
  // CPCB timestamps are in IST (UTC+5:30).
  const iso = `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}+05:30`;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

async function fetchCpcbRecordsForCity(apiKey: string, city: string): Promise<CpcbRecord[]> {
  const url = new URL(CPCB_BASE_URL);
  url.searchParams.set('api-key', apiKey);
  url.searchParams.set('format', 'json');
  // One row per (station, pollutant) pair; comfortably covers all Mumbai stations.
  url.searchParams.set('limit', '500');
  url.searchParams.set('filters[city]', city);

  const res = await fetch(url.toString(), {
    // CPCB's feed refreshes roughly hourly; Next's own fetch cache is
    // disabled here because we manage caching ourselves (see cache.ts) with
    // an explicit, inspectable TTL.
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`CPCB API responded with ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as CpcbApiResponse;
  if (!Array.isArray(data.records)) {
    throw new Error(data.message || 'CPCB API returned an unexpected response shape');
  }
  return data.records;
}

/**
 * Fetches and groups CPCB's real-time records for Mumbai into one
 * RawStationReading per monitoring station, with pollutant readings nested
 * underneath. Results are cached in-memory to respect CPCB's update cadence
 * and avoid unnecessary load on data.gov.in.
 */
export async function getCpcbStationsForMumbai(
  lat: number,
  lon: number
): Promise<RawStationReading[]> {
  const apiKey = process.env.CPCB_API_KEY;
  if (!apiKey) {
    throw new Error('CPCB_API_KEY is not configured');
  }

  const cacheKey = coordinateCacheKey('cpcb:mumbai', lat, lon);
  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.CPCB_MS, async () => {
    const records = await fetchCpcbRecordsForCity(apiKey, 'Mumbai');

    const byStation = new Map<string, RawStationReading>();

    for (const record of records) {
      const stationName = record.station?.trim();
      if (!stationName) continue;

      const pollutantId = normalizePollutantId(record.pollutant_id || '');
      if (!pollutantId) continue; // Unknown pollutant code — skip rather than mislabel it.

      let station = byStation.get(stationName);
      if (!station) {
        const resolved = resolveCpcbStationCoordinates(stationName);
        station = {
          source: 'CPCB',
          stationId: stationName,
          stationName,
          latitude: resolved?.latitude ?? null,
          longitude: resolved?.longitude ?? null,
          city: record.city ?? null,
          state: record.state ?? null,
          lastUpdated: null,
          pollutants: [],
          distanceKm: null,
          coordinatesResolvedFrom: resolved ? 'reference-table' : 'unknown',
        };
        byStation.set(stationName, station);
      }

      const timestamp = parseCpcbTimestamp(record.last_update);
      if (timestamp && (!station.lastUpdated || timestamp > station.lastUpdated)) {
        station.lastUpdated = timestamp;
      }

      const reading: PollutantReading = {
        pollutantId,
        unit: CPCB_UNITS[pollutantId],
        avg: toNumberOrNull(record.pollutant_avg),
        min: toNumberOrNull(record.pollutant_min),
        max: toNumberOrNull(record.pollutant_max),
      };
      station.pollutants.push(reading);
    }

    return Array.from(byStation.values());
  });
}
