import { calculateAqi } from './aqi-calculator';
import { getAqicnStationsForMumbai } from './aqicn-client';
import { getCpcbStationsForMumbai } from './cpcb-client';
import { getOpenAqStationsNear } from './openaq-client';
import { getOpenWeatherAirQualityForLocation } from './openweather-client';
import { isLocationInMumbai, rankStationsByDistance } from './station-resolver';
import type {
  AqiSource,
  AirQualityResponse,
  CalculatedAqi,
  PollutantId,
  PollutantReading,
  RawStationReading,
} from './types';
import { AirQualityServiceError } from './types';

const STALE_DATA_THRESHOLD_MINUTES = 180; // CPCB/OpenAQ both nominally update hourly
const CPCB_MAX_DISTANCE_KM = 25; // Mumbai's CAAQMS network is sparse; too tight a radius yields no data
const OPENAQ_MAX_DISTANCE_KM = 20;
const AQICN_MAX_DISTANCE_KM = 35; // WAQI search can return MMR stations; keep only Mumbai-near results.

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

function aqiForStation(station: RawStationReading): CalculatedAqi | null {
  if (typeof station.measuredAqi === 'number' && Number.isFinite(station.measuredAqi)) {
    return {
      value: Math.round(station.measuredAqi),
      category: station.measuredAqi <= 50
        ? 'Good'
        : station.measuredAqi <= 100
          ? 'Satisfactory'
          : station.measuredAqi <= 200
            ? 'Moderate'
            : station.measuredAqi <= 300
              ? 'Poor'
              : station.measuredAqi <= 400
                ? 'Very Poor'
                : 'Severe',
      dominantPollutant: station.dominantPollutant ?? null,
      pollutantsUsed: station.dominantPollutant ? [station.dominantPollutant] : [],
      method: 'CPCB_NATIONAL_AQI_FORMULA',
    };
  }

  return calculateAqi(toPollutantMap(station.pollutants));
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
 * Fetches OpenWeather (primary), CPCB, OpenAQ, and AQICN data for a location,
 * resolves the nearest usable station from each, computes AQI where possible,
 * and returns a single normalized response. Values from different sources are
 * never averaged together — each keeps its own `source` label throughout.
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

  const [cpcbResult, openAqResult, aqicnResult, openWeatherResult] = await Promise.allSettled([
    getCpcbStationsForMumbai(lat, lon),
    getOpenAqStationsNear(lat, lon),
    getAqicnStationsForMumbai(),
    getOpenWeatherAirQualityForLocation(lat, lon),
  ]);

  const cpcbStationsRaw = cpcbResult.status === 'fulfilled' ? cpcbResult.value : [];
  const openAqStationsRaw = openAqResult.status === 'fulfilled' ? openAqResult.value : [];
  const aqicnStationsRaw = aqicnResult.status === 'fulfilled' ? aqicnResult.value : [];
  const openWeatherStation = openWeatherResult.status === 'fulfilled' ? openWeatherResult.value : null;

  const cpcbStations = rankStationsByDistance(cpcbStationsRaw, lat, lon, CPCB_MAX_DISTANCE_KM);
  const openAqStations = rankStationsByDistance(
    openAqStationsRaw,
    lat,
    lon,
    OPENAQ_MAX_DISTANCE_KM
  );
  const aqicnStations = rankStationsByDistance(aqicnStationsRaw, lat, lon, AQICN_MAX_DISTANCE_KM);
  const openWeatherStations = openWeatherStation ? [openWeatherStation] : [];

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
    {
      name: 'AQICN',
      stationsFound: aqicnStations.length,
      available: aqicnResult.status === 'fulfilled',
      ...(aqicnResult.status === 'rejected' ? { error: String(aqicnResult.reason) } : {}),
    },
    {
      name: 'OPENWEATHER',
      stationsFound: openWeatherStations.length,
      available: openWeatherResult.status === 'fulfilled',
      ...(openWeatherResult.status === 'rejected' ? { error: String(openWeatherResult.reason) } : {}),
    },
  ];

  if (
    cpcbStations.length === 0 &&
    openAqStations.length === 0 &&
    aqicnStations.length === 0 &&
    openWeatherStations.length === 0
  ) {
    throw new AirQualityServiceError(
      'No air-quality monitoring stations with usable data were found near this Mumbai location.',
      'NO_DATA_AVAILABLE',
      404
    );
  }

  // --- Primary: OpenWeather coordinate-level atmospheric data ---
  let primaryStation: RawStationReading | null = null;
  let primaryAqi: CalculatedAqi | null = null;
  let primarySource: AqiSource | null = null;

  for (const station of openWeatherStations) {
    const aqi = aqiForStation(station);
    if (aqi) {
      primaryStation = station;
      primaryAqi = aqi;
      primarySource = 'OPENWEATHER';
      break;
    }
  }

  // Fall back to CPCB, OpenAQ, and AQICN only when OpenWeather is unavailable.
  if (!primaryStation) {
    for (const station of cpcbStations) {
      const aqi = aqiForStation(station);
      if (aqi) {
        primaryStation = station;
        primaryAqi = aqi;
        primarySource = 'CPCB';
        break;
      }
    }
  }

  if (!primaryStation) {
    for (const station of openAqStations) {
      const aqi = aqiForStation(station);
      if (aqi) {
        primaryStation = station;
        primaryAqi = aqi;
        primarySource = 'OPENAQ';
        break;
      }
    }
  }

  if (!primaryStation) {
    for (const station of aqicnStations) {
      const aqi = aqiForStation(station);
      if (aqi) {
        primaryStation = station;
        primaryAqi = aqi;
        primarySource = 'AQICN';
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
      aqi: aqiForStation(station),
    }));

  const nearestOverall =
    primaryStation ?? openWeatherStations[0] ?? cpcbStations[0] ?? openAqStations[0] ?? aqicnStations[0] ?? null;
  const dataAgeMinutes = ageInMinutes(primaryStation?.lastUpdated ?? nearestOverall?.lastUpdated ?? null);
  const isStale = dataAgeMinutes !== null && dataAgeMinutes > STALE_DATA_THRESHOLD_MINUTES;

  const noteParts = [
    'This value reflects the nearest available monitoring station, not a sensor at your exact GPS coordinate.',
  ];
  if (primarySource === 'OPENAQ') {
    noteParts.push('OpenWeather was unavailable, so this is an OpenAQ-derived indicative AQI.');
  }
  if (primarySource === 'CPCB' || primarySource === 'AQICN') {
    noteParts.push(
      'OpenWeather did not return a usable reading, so this uses an operational fallback source.'
    );
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
          source: primarySource as AqiSource,
          dominantPollutant: primaryAqi.dominantPollutant,
          valueType: typeof primaryStation.measuredAqi === 'number' ? 'measured' : 'calculated',
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
