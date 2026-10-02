import { calculateAqi } from './aqi-calculator';
import { getCpcbStationsForMumbai } from './cpcb-client';
import { getOpenAqStationsNear } from './openaq-client';
import { isLocationInMumbai, rankStationsByDistance } from './station-resolver';
import type {
  AirQualityResponse,
  PollutantId,
  PollutantReading,
  RawStationReading,
} from './types';
import { AirQualityServiceError } from './types';

const STALE_DATA_THRESHOLD_MINUTES = 180; // CPCB/OpenAQ both nominally update hourly
const CPCB_MAX_DISTANCE_KM = 25; // Mumbai's CAAQMS network is sparse; too tight a radius yields no data
const OPENAQ_MAX_DISTANCE_KM = 20;

function toPollutantMap(
  pollutants: PollutantReading[]
): Partial<Record<PollutantId, PollutantReading>> {
  const map: Partial<Record<PollutantId, PollutantReading>> = {};
  for (const p of pollutants) map[p.pollutantId] = p;
  return map;
}

function stationSummary(station: RawStationReading) {
  return {
    name: station.stationName,
    source: station.source,
    distanceKm: station.distanceKm === null ? null : Math.round(station.distanceKm * 10) / 10,
    latitude: station.latitude,
    longitude: station.longitude,
    lastUpdated: station.lastUpdated,
  };
}

function ageInMinutes(isoTimestamp: string | null): number | null {
  if (!isoTimestamp) return null;
  const then = new Date(isoTimestamp).getTime();
  if (Number.isNaN(then)) return null;
  return Math.round((Date.now() - then) / 60000);
}

export function validateCoordinates(lat: unknown, lon: unknown): { lat: number; lon: number } {
  const latNum = typeof lat === 'string' ? Number(lat) : (lat as number);
  const lonNum = typeof lon === 'string' ? Number(lon) : (lon as number);

  if (
    typeof latNum !== 'number' ||
    typeof lonNum !== 'number' ||
    !Number.isFinite(latNum) ||
    !Number.isFinite(lonNum) ||
    latNum < -90 ||
    latNum > 90 ||
    lonNum < -180 ||
    lonNum > 180
  ) {
    throw new AirQualityServiceError(
      'lat and lon must be valid numbers (lat in [-90, 90], lon in [-180, 180])',
      'INVALID_COORDINATES',
      400
    );
  }

  return { lat: latNum, lon: lonNum };
}

/**
 * Fetches CPCB (primary) and OpenAQ (secondary) data for a location, resolves
 * the nearest usable station from each, computes AQI where possible, and
 * returns a single normalized response. CPCB and OpenAQ values are never
 * averaged together — each keeps its own `source` label throughout.
 */
export async function getAirQualityForLocation(
  rawLat: unknown,
  rawLon: unknown
): Promise<AirQualityResponse> {
  const { lat, lon } = validateCoordinates(rawLat, rawLon);

  if (!isLocationInMumbai(lat, lon)) {
    throw new AirQualityServiceError(
      'The requested location is outside the Mumbai service area covered by this feature.',
      'OUT_OF_SERVICE_AREA',
      422
    );
  }

  const [cpcbResult, openAqResult] = await Promise.allSettled([
    getCpcbStationsForMumbai(lat, lon),
    getOpenAqStationsNear(lat, lon),
  ]);

  const cpcbStationsRaw = cpcbResult.status === 'fulfilled' ? cpcbResult.value : [];
  const openAqStationsRaw = openAqResult.status === 'fulfilled' ? openAqResult.value : [];

  const cpcbStations = rankStationsByDistance(cpcbStationsRaw, lat, lon, CPCB_MAX_DISTANCE_KM);
  const openAqStations = rankStationsByDistance(
    openAqStationsRaw,
    lat,
    lon,
    OPENAQ_MAX_DISTANCE_KM
  );

  const sources: AirQualityResponse['sources'] = [
    {
      name: 'CPCB',
      stationsFound: cpcbStations.length,
      available: cpcbResult.status === 'fulfilled',
      ...(cpcbResult.status === 'rejected' ? { error: String(cpcbResult.reason) } : {}),
    },
    {
      name: 'OPENAQ',
      stationsFound: openAqStations.length,
      available: openAqResult.status === 'fulfilled',
      ...(openAqResult.status === 'rejected' ? { error: String(openAqResult.reason) } : {}),
    },
  ];

  if (cpcbStations.length === 0 && openAqStations.length === 0) {
    throw new AirQualityServiceError(
      'No CPCB or OpenAQ monitoring stations with usable data were found near this location.',
      'NO_DATA_AVAILABLE',
      404
    );
  }

  // --- Primary: nearest CPCB station with a computable AQI ---
  let primaryStation: RawStationReading | null = null;
  let primaryAqi: ReturnType<typeof calculateAqi> = null;
  let primarySource: 'CPCB' | 'OPENAQ' | null = null;

  for (const station of cpcbStations) {
    const aqi = calculateAqi(toPollutantMap(station.pollutants));
    if (aqi) {
      primaryStation = station;
      primaryAqi = aqi;
      primarySource = 'CPCB';
      break;
    }
  }

  // Fall back to OpenAQ only when CPCB has no usable station nearby at all.
  if (!primaryStation) {
    for (const station of openAqStations) {
      const aqi = calculateAqi(toPollutantMap(station.pollutants));
      if (aqi) {
        primaryStation = station;
        primaryAqi = aqi;
        primarySource = 'OPENAQ';
        break;
      }
    }
  }

  // Supplementary: every OpenAQ station near the location, kept fully
  // separate from whatever backs the primary AQI figure above.
  const supplementary = openAqStations
    .filter((s) => primarySource !== 'OPENAQ' || s.stationId !== primaryStation?.stationId)
    .map((station) => ({
      source: 'OPENAQ' as const,
      station: stationSummary(station),
      pollutants: toPollutantMap(station.pollutants),
      aqi: calculateAqi(toPollutantMap(station.pollutants)),
    }));

  const nearestOverall = primaryStation ?? cpcbStations[0] ?? openAqStations[0] ?? null;
  const dataAgeMinutes = ageInMinutes(primaryStation?.lastUpdated ?? nearestOverall?.lastUpdated ?? null);
  const isStale = dataAgeMinutes !== null && dataAgeMinutes > STALE_DATA_THRESHOLD_MINUTES;

  const noteParts = [
    'This value reflects the nearest available monitoring station, not a sensor at your exact GPS coordinate.',
  ];
  if (primarySource === 'OPENAQ') {
    noteParts.push('No CPCB station was available nearby, so this is an OpenAQ-derived indicative AQI.');
  }
  if (isStale) {
    noteParts.push('The underlying reading is more than 3 hours old and may not reflect current conditions.');
  }
  if (primaryStation?.coordinatesResolvedFrom === 'reference-table') {
    noteParts.push(
      `Station location approximated from the "${primaryStation.stationName}" locality (CPCB does not publish exact station coordinates).`
    );
  }

  return {
    location: { latitude: lat, longitude: lon },
    aqi: primaryAqi && primaryStation
      ? {
          value: primaryAqi.value,
          category: primaryAqi.category,
          source: primarySource as 'CPCB' | 'OPENAQ',
          dominantPollutant: primaryAqi.dominantPollutant,
          valueType: 'calculated',
        }
      : null,
    station: primaryStation ? stationSummary(primaryStation) : null,
    pollutants: primaryStation ? toPollutantMap(primaryStation.pollutants) : {},
    supplementary,
    timestamp: new Date().toISOString(),
    dataQuality: {
      nearestStationDistanceKm:
        nearestOverall?.distanceKm === null || nearestOverall?.distanceKm === undefined
          ? null
          : Math.round(nearestOverall.distanceKm * 10) / 10,
      dataAgeMinutes,
      isStale,
      note: noteParts.join(' '),
    },
    sources,
  };
}
