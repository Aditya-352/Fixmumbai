import { calculateAqi } from './aqi-calculator';
import { getAqicnStationsForLocation, getAqicnStationsForMumbai } from './aqicn-client';
import { getOpenWeatherAirQualityForLocation } from './openweather-client';
import { getCpcbStationsForMumbai } from './cpcb-client';
import { getOpenAqStationsNear } from './openaq-client';
import { isLocationInMumbai, isLocationInIndia, rankStationsByDistance } from './station-resolver';
import type {
  AirQualityResponse,
  PollutantId,
  PollutantReading,
  RawStationReading,
  AqiCategory,
  AqiSource,
  CalculatedAqi,
} from './types';
import { AirQualityServiceError } from './types';

const STALE_DATA_THRESHOLD_MINUTES = 180;

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

function getAqiCategory(value: number): AqiCategory {
  // Weather API Air Quality Index scale (1 to 5):
  // 1 = Good, 2 = Fair (Satisfactory), 3 = Moderate, 4 = Poor, 5 = Very Poor
  if (value === 1) return 'Good';
  if (value === 2) return 'Satisfactory';
  if (value === 3) return 'Moderate';
  if (value === 4) return 'Poor';
  if (value === 5) return 'Very Poor';

  // Continuous fallback for legacy readings (> 5)
  if (value <= 50) return 'Good';
  if (value <= 100) return 'Satisfactory';
  if (value <= 200) return 'Moderate';
  if (value <= 300) return 'Poor';
  if (value <= 400) return 'Very Poor';
  return 'Severe';
}

function aqiToLevel(value: number): number {
  if (value <= 5) return value;
  if (value <= 50) return 1;
  if (value <= 100) return 2;
  if (value <= 200) return 3;
  if (value <= 300) return 4;
  return 5;
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
 * Returns comprehensive air quality data for ANY location across India.
 * Integrates OpenWeather atmospheric observations, AQICN ground monitoring
 * network, CPCB data (via data.gov.in), and OpenAQ.
 */
export async function getAirQualityForLocation(
  rawLat: unknown,
  rawLon: unknown
): Promise<AirQualityResponse> {
  const { lat, lon } = validateCoordinates(rawLat, rawLon);

  if (!isLocationInIndia(lat, lon)) {
    throw new AirQualityServiceError(
      'The requested location is outside the India service area covered by this feature.',
      'OUT_OF_SERVICE_AREA',
      422
    );
  }

  const inMumbai = isLocationInMumbai(lat, lon);

  const [cpcbResult, openAqResult, aqicnResult, openWeatherResult] = await Promise.allSettled([
    inMumbai ? getCpcbStationsForMumbai(lat, lon) : Promise.resolve([]),
    getOpenAqStationsNear(lat, lon),
    inMumbai ? getAqicnStationsForMumbai() : getAqicnStationsForLocation(lat, lon),
    getOpenWeatherAirQualityForLocation(lat, lon),
  ]);

  const cpcbStationsRaw = cpcbResult.status === 'fulfilled' ? cpcbResult.value : [];
  const openAqStationsRaw = openAqResult.status === 'fulfilled' ? openAqResult.value : [];
  const aqicnStationsRaw = aqicnResult.status === 'fulfilled' ? aqicnResult.value : [];
  const openWeatherReading = openWeatherResult.status === 'fulfilled' ? openWeatherResult.value : null;

  // Rank monitoring stations by distance to user coordinates
  const cpcbStations = rankStationsByDistance(cpcbStationsRaw, lat, lon, 50);
  const openAqStations = rankStationsByDistance(openAqStationsRaw, lat, lon, 50);
  const aqicnStations = rankStationsByDistance(aqicnStationsRaw, lat, lon, 150);

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
      stationsFound: openWeatherReading ? 1 : 0,
      available: openWeatherResult.status === 'fulfilled',
      ...(openWeatherResult.status === 'rejected' ? { error: String(openWeatherResult.reason) } : {}),
    },
  ];

  if (
    cpcbStations.length === 0 &&
    openAqStations.length === 0 &&
    aqicnStations.length === 0 &&
    !openWeatherReading
  ) {
    throw new AirQualityServiceError(
      'No air quality monitoring data could be found near this location in India.',
      'NO_DATA_AVAILABLE',
      404
    );
  }

  // --- Primary Provider Resolution ---
  let primaryStation: RawStationReading | null = null;
  let primaryAqi: {
    value: number;
    category: AqiCategory;
    dominantPollutant: PollutantId | null;
    valueType: 'measured' | 'calculated';
    openWeatherIndex?: number;
  } | null = null;
  let primarySource: AqiSource | null = null;

  // 1. Prioritize real ground monitoring stations (AQICN / CPCB ground sensor network)
  // when available near the user coordinates (e.g. within urban MMR / city boundaries)
  if (aqicnStations.length > 0) {
    for (const station of aqicnStations) {
      if (typeof station.measuredAqi === 'number' && station.measuredAqi > 0) {
        primaryStation = station;
        primarySource = 'AQICN';
        primaryAqi = {
          value: Math.round(station.measuredAqi),
          category: getAqiCategory(station.measuredAqi),
          dominantPollutant: station.dominantPollutant ?? 'PM2.5',
          valueType: 'measured',
          openWeatherIndex: aqiToLevel(station.measuredAqi),
        };
        break;
      }
      const calculated = calculateAqi(toPollutantMap(station.pollutants));
      if (calculated) {
        primaryStation = station;
        primarySource = 'AQICN';
        primaryAqi = {
          value: calculated.value,
          category: calculated.category,
          dominantPollutant: calculated.dominantPollutant,
          valueType: 'calculated',
          openWeatherIndex: aqiToLevel(calculated.value),
        };
        break;
      }
    }
  }

  // 2. Fall back to OpenWeather coordinate-level atmospheric observation when no physical ground station is found
  if (!primaryStation && openWeatherReading && typeof openWeatherReading.measuredAqi === 'number') {
    primaryStation = openWeatherReading;
    primarySource = 'OPENWEATHER';
    primaryAqi = {
      value: openWeatherReading.measuredAqi,
      category: getAqiCategory(openWeatherReading.measuredAqi),
      dominantPollutant: openWeatherReading.dominantPollutant ?? 'PM2.5',
      valueType: 'measured',
      openWeatherIndex: openWeatherReading.openWeatherIndex,
    };
  }

  // 3. Fall back to OpenAQ if neither AQICN nor OpenWeather returned a usable reading
  if (!primaryStation && openAqStations.length > 0) {
    for (const station of openAqStations) {
      const calculated = calculateAqi(toPollutantMap(station.pollutants));
      if (calculated) {
        primaryStation = station;
        primarySource = 'OPENAQ';
        primaryAqi = {
          value: calculated.value,
          category: calculated.category,
          dominantPollutant: calculated.dominantPollutant,
          valueType: 'calculated',
          openWeatherIndex: aqiToLevel(calculated.value),
        };
        break;
      }
    }
  }

  // Build pollutant map: combine ground station pollutants and OpenWeather atmospheric pollutants
  let pollutantsData: Partial<Record<PollutantId, PollutantReading>> = {};
  if (primaryStation && primaryStation.pollutants.length > 0) {
    pollutantsData = toPollutantMap(primaryStation.pollutants);
  }
  if (openWeatherReading && openWeatherReading.pollutants.length > 0) {
    for (const p of openWeatherReading.pollutants) {
      if (!pollutantsData[p.pollutantId]) {
        pollutantsData[p.pollutantId] = p;
      }
    }
  }

  // Supplementary stations (OpenAQ and AQICN stations excluding primary)
  const supplementary = [
    ...openAqStations.filter((s) => s.stationId !== primaryStation?.stationId),
    ...aqicnStations.filter((s) => s.stationId !== primaryStation?.stationId),
  ].map((s) => ({
    source: s.source,
    station: stationSummary(s),
    pollutants: toPollutantMap(s.pollutants),
    aqi:
      typeof s.measuredAqi === 'number'
        ? ({
            value: s.measuredAqi,
            category: getAqiCategory(s.measuredAqi),
            dominantPollutant: s.dominantPollutant ?? null,
            pollutantsUsed: s.pollutants.map((p) => p.pollutantId),
            method: 'CPCB_NATIONAL_AQI_FORMULA',
          } satisfies CalculatedAqi)
        : calculateAqi(toPollutantMap(s.pollutants)),
  }));

  const nearestOverall =
    primaryStation ?? openWeatherReading ?? aqicnStations[0] ?? cpcbStations[0] ?? openAqStations[0] ?? null;
  const dataAgeMinutes = ageInMinutes(primaryStation?.lastUpdated ?? nearestOverall?.lastUpdated ?? null);
  const isStale = dataAgeMinutes !== null && dataAgeMinutes > STALE_DATA_THRESHOLD_MINUTES;

  const noteParts = [
    (primarySource as AqiSource) === 'AQICN' || (primarySource as AqiSource) === 'CPCB'
      ? `Real-time physical ground monitoring sensor (${primaryStation?.stationName || 'Ground Station'})${primaryStation?.distanceKm !== null ? ` located ${primaryStation?.distanceKm} km away` : ''}.`
      : primarySource === 'OPENWEATHER'
      ? 'Direct Air Quality Index provided by OpenWeather real-time atmospheric model for your exact GPS coordinates.'
      : 'This value reflects the nearest available monitoring station, not a sensor at your exact GPS coordinate.',
  ];

  if (!openWeatherReading && ((primarySource as AqiSource) === 'CPCB' || (primarySource as AqiSource) === 'AQICN')) {
    noteParts.push(
      'OpenWeather did not return a usable reading, so this uses an operational fallback source.'
    );
  }

  if (isStale) {
    noteParts.push('The underlying reading is more than 3 hours old and may not reflect current conditions.');
  }

  if (primaryStation?.coordinatesResolvedFrom === 'reference-table') {
    noteParts.push(
      `Station location approximated from the "${primaryStation.stationName}" locality.`
    );
  }

  return {
    location: { latitude: lat, longitude: lon },
    aqi:
      primaryAqi && primarySource
        ? {
            value: primaryAqi.value,
            category: primaryAqi.category,
            source: primarySource,
            dominantPollutant: primaryAqi.dominantPollutant,
            valueType: primaryAqi.valueType,
            openWeatherIndex: primaryAqi.openWeatherIndex,
          }
        : null,
    station: primaryStation
      ? stationSummary(primaryStation)
      : aqicnStations[0]
      ? stationSummary(aqicnStations[0])
      : openWeatherReading
      ? stationSummary(openWeatherReading)
      : null,
    pollutants: pollutantsData,
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
