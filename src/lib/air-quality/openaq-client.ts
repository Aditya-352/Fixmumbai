import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import type { PollutantId, PollutantReading, RawStationReading } from './types';

const OPENAQ_BASE_URL = 'https://api.openaq.org/v3';
const SEARCH_RADIUS_METERS = 15000; // 15km — OpenAQ's max is 25,000m
const MAX_LOCATIONS = 6;

/** OpenAQ parameter names we care about, mapped onto our normalized PollutantId type. */
function normalizeParameterName(name: string): PollutantId | null {
  const key = name.trim().toLowerCase();
  switch (key) {
    case 'pm25':
    case 'pm2.5':
      return 'PM2.5';
    case 'pm10':
      return 'PM10';
    case 'no2':
      return 'NO2';
    case 'nh3':
      return 'NH3';
    case 'so2':
      return 'SO2';
    case 'co':
      return 'CO';
    case 'o3':
    case 'ozone':
      return 'OZONE';
    default:
      return null;
  }
}

interface OpenAqLocationSensor {
  id: number;
  name?: string;
  parameter?: { id: number; name: string; units: string; displayName?: string };
}

interface OpenAqLocation {
  id: number;
  name: string;
  locality?: string | null;
  timezone?: string;
  coordinates?: { latitude: number; longitude: number };
  sensors?: OpenAqLocationSensor[];
  datetimeLast?: { utc?: string; local?: string } | null;
}

interface OpenAqLocationsResponse {
  results?: OpenAqLocation[];
}

interface OpenAqLatestResult {
  sensorsId: number;
  value: number;
  datetime?: { utc?: string; local?: string };
}

interface OpenAqLatestResponse {
  results?: OpenAqLatestResult[];
}

async function openAqFetch<T>(path: string, apiKey: string): Promise<T> {
  const res = await fetch(`${OPENAQ_BASE_URL}${path}`, {
    cache: 'no-store',
    headers: { 'X-API-Key': apiKey, Accept: 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`OpenAQ API responded with ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}

/**
 * Finds OpenAQ locations near (lat, lon) and fetches each one's latest
 * sensor readings, returning one RawStationReading per location.
 *
 * Note on coordinate order: OpenAQ's `coordinates` query parameter is
 * `longitude,latitude` (confirmed against OpenAQ's own official R client,
 * which maps the same query to named `latitude`/`longitude` values in that
 * order) — this is easy to get backwards, so it's called out explicitly here.
 */
export async function getOpenAqStationsNear(lat: number, lon: number): Promise<RawStationReading[]> {
  const apiKey = process.env.OPENAQ_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAQ_API_KEY is not configured');
  }

  const cacheKey = coordinateCacheKey('openaq:stations', lat, lon);
  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.OPENAQ_MS, async () => {
    const locationsPath =
      `/locations?coordinates=${lon},${lat}&radius=${SEARCH_RADIUS_METERS}` +
      `&limit=${MAX_LOCATIONS}&order_by=distance`;
    const locationsRes = await openAqFetch<OpenAqLocationsResponse>(locationsPath, apiKey);
    const locations = locationsRes.results ?? [];

    const stations = await Promise.all(
      locations.map(async (location) => {
        const sensorsById = new Map<number, OpenAqLocationSensor>();
        for (const sensor of location.sensors ?? []) sensorsById.set(sensor.id, sensor);

        let latest: OpenAqLatestResult[] = [];
        try {
          const latestRes = await openAqFetch<OpenAqLatestResponse>(
            `/locations/${location.id}/latest`,
            apiKey
          );
          latest = latestRes.results ?? [];
        } catch {
          // A single location failing to return latest readings shouldn't
          // take down the whole nearby-stations list.
          latest = [];
        }

        const pollutants: PollutantReading[] = [];
        for (const reading of latest) {
          const sensor = sensorsById.get(reading.sensorsId);
          const parameterName = sensor?.parameter?.name;
          if (!parameterName) continue;
          const pollutantId = normalizeParameterName(parameterName);
          if (!pollutantId) continue;

          pollutants.push({
            pollutantId,
            unit: sensor?.parameter?.units || 'unknown',
            avg: Number.isFinite(reading.value) ? reading.value : null,
            min: null,
            max: null,
          });
        }

        const station: RawStationReading = {
          source: 'OPENAQ',
          stationId: String(location.id),
          stationName: location.name || location.locality || `OpenAQ Location ${location.id}`,
          latitude: location.coordinates?.latitude ?? null,
          longitude: location.coordinates?.longitude ?? null,
          city: location.locality ?? null,
          state: null,
          lastUpdated: location.datetimeLast?.utc ?? null,
          pollutants,
          distanceKm: null,
          coordinatesResolvedFrom: location.coordinates ? 'upstream' : 'unknown',
        };
        return station;
      })
    );

    // Only keep stations that actually returned at least one pollutant reading.
    return stations.filter((s) => s.pollutants.length > 0);
  });
}
