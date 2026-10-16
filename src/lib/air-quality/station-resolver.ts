import mumbaiPlaces from '@/data/mumbai-places.json';
import { isLocationInMumbai, MUMBAI_GEOFENCE, isLocationInIndia, INDIA_GEOFENCE } from '@/lib/gis';
import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import type { RawStationReading } from './types';

export { MUMBAI_GEOFENCE, isLocationInMumbai, INDIA_GEOFENCE, isLocationInIndia };

/**
 * Reverse geocodes coordinates within India to find the nearest city/district/state.
 * Caches results in memory to avoid repeated external calls.
 */
export async function reverseGeocodeLocation(
  lat: number,
  lon: number
): Promise<{ city: string; state: string }> {
  if (isLocationInMumbai(lat, lon)) {
    return { city: 'Mumbai', state: 'Maharashtra' };
  }

  const cacheKey = coordinateCacheKey('reverse-geocode', lat, lon);
  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.OPENWEATHER_MS, async () => {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        {
          headers: {
            'User-Agent': process.env.OPENSTREETMAP_USER_AGENT || 'PriSEHAT-Pulse/1.0 (healthrytixtech@gmail.com)',
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
  });
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

/**
 * Extracts the likely locality/area name from a CPCB station label, e.g.
 * "Bandra, Mumbai - MPCB" -> "bandra", "Sion, Mumbai - IITM" -> "sion".
 */
function extractLocalityToken(stationName: string): string {
  const firstSegment = stationName.split(',')[0] || stationName;
  return normalize(firstSegment);
}

export interface ResolvedCoordinates {
  latitude: number;
  longitude: number;
  matchedPlaceName: string;
}

/**
 * Best-effort match of a CPCB station name against known Mumbai localities.
 * Returns null when no reasonable match is found — callers must treat that
 * as "location unknown", never guess a fallback coordinate.
 */
export function resolveCpcbStationCoordinates(stationName: string): ResolvedCoordinates | null {
  const token = extractLocalityToken(stationName);
  if (!token) return null;

  let best: (typeof mumbaiPlaces)[number] | null = null;
  let bestScore = 0;

  for (const place of mumbaiPlaces) {
    const placeName = normalize(place.name);
    const region = normalize(place.region);
    let score = 0;

    if (placeName.includes(token) || token.includes(placeName)) score += 3;
    // Match on individual words too (place names include parenthetical sub-areas)
    for (const word of token.split(' ')) {
      if (word.length < 3) continue;
      if (placeName.includes(word)) score += 1;
      if (region.includes(word)) score += 0.5;
    }

    if (score > bestScore) {
      bestScore = score;
      best = place;
    }
  }

  if (!best || bestScore < 1) return null;

  return {
    latitude: best.lat,
    longitude: best.lng,
    matchedPlaceName: best.name,
  };
}

/** Haversine distance in kilometers. */
export function distanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Attaches distanceKm to each station relative to (lat, lon), dropping
 * stations whose coordinates can't be determined at all, and sorts nearest
 * first. Stations beyond `maxDistanceKm` are excluded — a station 40km away
 * is not "nearby" even if it's the closest one CPCB reports for the city.
 */
export function rankStationsByDistance(
  stations: RawStationReading[],
  lat: number,
  lon: number,
  maxDistanceKm = 25
): RawStationReading[] {
  return stations
    .map((s) => {
      if (s.latitude === null || s.longitude === null) {
        return { ...s, distanceKm: null };
      }
      return { ...s, distanceKm: distanceKm(lat, lon, s.latitude, s.longitude) };
    })
    .filter((s) => s.distanceKm !== null && s.distanceKm <= maxDistanceKm)
    .sort((a, b) => (a.distanceKm as number) - (b.distanceKm as number));
}
