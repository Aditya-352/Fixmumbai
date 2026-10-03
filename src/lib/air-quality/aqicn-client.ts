import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import { distanceKm, isLocationInMumbai } from './station-resolver';
import type { PollutantId, PollutantReading, RawStationReading } from './types';

const AQICN_BASE_URL = 'https://api.waqi.info';

function normalizePollutantId(raw: string): PollutantId | null {
  if (!raw) return null;
  const key = raw.trim().toLowerCase();
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

const POLLUTANT_UNITS: Record<PollutantId, string> = {
  'PM2.5': 'µg/m³',
  PM10: 'µg/m³',
  NO2: 'µg/m³',
  NH3: 'µg/m³',
  SO2: 'µg/m³',
  CO: 'mg/m³',
  OZONE: 'µg/m³',
};

interface WaqiSearchItem {
  uid: number;
  aqi: string | number;
  time?: {
    tz?: string;
    stime?: string;
    vtime?: number;
  };
  station: {
    name: string;
    geo: [number, number];
    url?: string;
    country?: string;
  };
}

interface WaqiFeedData {
  aqi: number;
  idx: number;
  attributions?: Array<{ url: string; name: string }>;
  city?: {
    geo?: [number, number];
    name?: string;
    url?: string;
  };
  dominentpol?: string;
  iaqi?: Record<string, { v: number }>;
  time?: {
    s?: string;
    tz?: string;
    v?: number;
    iso?: string;
  };
}

interface WaqiResponse<T> {
  status: string;
  data: T;
  message?: string;
}

function getAqicnToken(): string {
  const token = process.env.AQICN_API_TOKEN || process.env.AQICN_API_KEY;
  if (!token) {
    throw new Error('AQICN_API_TOKEN is not configured');
  }
  return token;
}

async function fetchStationFeed(uid: number, token: string): Promise<WaqiFeedData | null> {
  const cacheKey = `aqicn:feed:${uid}`;
  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.AQICN_MS, async () => {
    try {
      const url = `${AQICN_BASE_URL}/feed/@${uid}/?token=${token}`;
      const res = await fetch(url, {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) return null;
      const json = (await res.json()) as WaqiResponse<WaqiFeedData>;
      if (json.status !== 'ok' || !json.data) return null;
      return json.data;
    } catch {
      return null;
    }
  });
}

function mapFeedToRawStation(
  item: WaqiSearchItem,
  feed: WaqiFeedData | null,
  cityFallback = 'India',
  stateFallback = 'India'
): RawStationReading {
  const lat = feed?.city?.geo?.[0] ?? item.station.geo[0];
  const lon = feed?.city?.geo?.[1] ?? item.station.geo[1];
  const stationName = feed?.city?.name ?? item.station.name;
  const lastUpdated = feed?.time?.iso ?? item.time?.stime ?? null;

  const pollutants: PollutantReading[] = [];
  if (feed?.iaqi) {
    for (const [key, val] of Object.entries(feed.iaqi)) {
      const pollutantId = normalizePollutantId(key);
      if (pollutantId && typeof val?.v === 'number') {
        pollutants.push({
          pollutantId,
          unit: POLLUTANT_UNITS[pollutantId] || 'µg/m³',
          avg: val.v,
          min: null,
          max: null,
        });
      }
    }
  }

  const measuredAqi =
    typeof feed?.aqi === 'number' && feed.aqi > 0 && feed.aqi < 900 ? feed.aqi : null;
  const dominantPollutant = feed?.dominentpol ? normalizePollutantId(feed.dominentpol) : null;

  return {
    source: 'AQICN',
    stationId: String(item.uid),
    stationName,
    latitude: lat,
    longitude: lon,
    city: cityFallback,
    state: stateFallback,
    lastUpdated,
    pollutants,
    measuredAqi,
    dominantPollutant,
    distanceKm: null,
    coordinatesResolvedFrom: 'upstream',
  };
}

/**
 * Reverse geocodes coordinates within India to find the nearest city/district/state.
 */
async function reverseGeocodeLocation(lat: number, lon: number): Promise<{ city: string; state: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
      {
        headers: {
          'User-Agent': process.env.OPENSTREETMAP_USER_AGENT || 'FixMumbai-CivicApp/1.0 (contact@fixmumbai.org)',
          'Accept-Language': 'en',
        },
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);
    if (!res.ok) return { city: '', state: '' };
    const data = await res.json();
    const city =
      data.address?.city ||
      data.address?.town ||
      data.address?.state_district ||
      data.address?.county ||
      data.address?.village ||
      '';
    const state = data.address?.state || '';
    return { city, state };
  } catch {
    return { city: '', state: '' };
  }
}

/**
 * Searches AQICN for stations matching a keyword.
 */
async function searchWaqi(keyword: string, token: string): Promise<WaqiSearchItem[]> {
  try {
    const searchUrl = `${AQICN_BASE_URL}/search/?keyword=${encodeURIComponent(keyword)}&token=${token}`;
    const searchRes = await fetch(searchUrl, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    });
    if (!searchRes.ok) return [];
    const searchJson = (await searchRes.json()) as WaqiResponse<WaqiSearchItem[]>;
    if (searchJson.status !== 'ok' || !Array.isArray(searchJson.data)) return [];
    return searchJson.data.filter(
      (item) => Array.isArray(item.station?.geo) && item.station.geo.length === 2
    );
  } catch {
    return [];
  }
}

/**
 * Fetches all active AQICN air quality monitoring stations in Mumbai and MMR.
 * Results are cached in-memory with a 15-minute TTL.
 */
export async function getAqicnStationsForMumbai(): Promise<RawStationReading[]> {
  const token = getAqicnToken();
  const cacheKey = 'aqicn:mumbai:all_stations';

  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.AQICN_MS, async () => {
    const stationsWithCoords = await searchWaqi('Mumbai', token);

    const stationFeeds = await Promise.all(
      stationsWithCoords.map(async (item) => {
        const feed = await fetchStationFeed(item.uid, token);
        return { item, feed };
      })
    );

    return stationFeeds.map(({ item, feed }) =>
      mapFeedToRawStation(item, feed, 'Mumbai', 'Maharashtra')
    );
  });
}

/**
 * Fetches real-time AQICN stations for ANY location in India.
 * First determines the locality via reverse geocoding, queries AQICN for that region,
 * and fetches live readings for the closest stations.
 */
export async function getAqicnStationsForLocation(
  lat: number,
  lon: number
): Promise<RawStationReading[]> {
  const token = getAqicnToken();

  if (isLocationInMumbai(lat, lon)) {
    return getAqicnStationsForMumbai();
  }

  const cacheKey = coordinateCacheKey('aqicn:india:location', lat, lon);
  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.AQICN_MS, async () => {
    const { city, state } = await reverseGeocodeLocation(lat, lon);

    let items: WaqiSearchItem[] = [];
    if (city) {
      items = await searchWaqi(city, token);
    }
    if (items.length === 0 && state) {
      items = await searchWaqi(state, token);
    }
    if (items.length === 0) {
      items = await searchWaqi('India', token);
    }

    if (items.length === 0) {
      return [];
    }

    // Rank candidate stations by distance to (lat, lon)
    const ranked = items
      .map((s) => ({
        item: s,
        distance: distanceKm(lat, lon, s.station.geo[0], s.station.geo[1]),
      }))
      .sort((a, b) => a.distance - b.distance);

    // Fetch details for the top 5 closest stations
    const topCandidates = ranked.slice(0, 5);
    const stationFeeds = await Promise.all(
      topCandidates.map(async ({ item, distance }) => {
        const feed = await fetchStationFeed(item.uid, token);
        const rawStation = mapFeedToRawStation(item, feed, city || 'India', state || 'India');
        rawStation.distanceKm = distance;
        return rawStation;
      })
    );

    return stationFeeds;
  });
}
