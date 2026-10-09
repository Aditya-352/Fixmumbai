/**
 * Shared types for the FixMumbai Air Quality service layer.
 *
 * Design notes:
 * - CPCB and OpenAQ values are NEVER averaged or merged into a single number.
 *   Each is carried through with its own provenance (`source`) so the caller
 *   (API route + frontend) can always tell which authority a figure came from.
 * - Everything here is scoped to a single "service area" (Mumbai, for now),
 *   but nothing is Mumbai-specific by *type* — city-wide expansion later
 *   should only require a new ServiceArea entry + station datasets, not new
 *   shapes.
 */

export type AqiSource = 'CPCB' | 'OPENAQ' | 'AQICN' | 'OPENWEATHER';

/** Standard CPCB National AQI category buckets. */
export type AqiCategory =
  | 'Good'
  | 'Satisfactory'
  | 'Moderate'
  | 'Poor'
  | 'Very Poor'
  | 'Severe';

/** Pollutant identifiers, normalized to a common vocabulary across sources. */
export type PollutantId =
  | 'PM2.5'
  | 'PM10'
  | 'NO2'
  | 'NH3'
  | 'SO2'
  | 'CO'
  | 'OZONE';

export interface PollutantReading {
  pollutantId: PollutantId;
  /** Concentration unit as reported by the source (e.g. "µg/m³", "ppm"). */
  unit: string;
  /** Average/representative value for the reporting window, if available. */
  avg: number | null;
  min: number | null;
  max: number | null;
}

/** A single upstream monitoring station, before merging with other sources. */
export interface RawStationReading {
  source: AqiSource;
  stationId: string;
  stationName: string;
  latitude: number | null;
  longitude: number | null;
  city: string | null;
  state: string | null;
  /** ISO 8601 timestamp of the last observation update reported upstream. */
  lastUpdated: string | null;
  pollutants: PollutantReading[];
  /** Precomputed AQI from the source, when the upstream feed reports one. */
  measuredAqi?: number | null;
  /** Dominant pollutant reported or inferred by the source, when available. */
  dominantPollutant?: PollutantId | null;
  /**
   * Distance in km from the requested location to this station.
   * Populated by the station resolver once the location is known.
   */
  distanceKm: number | null;
  /**
   * True when the station's coordinates come from a known reference table
   * rather than being returned directly by the upstream API (this applies to
   * CPCB's real-time resource, which does not include station lat/lon).
   */
  coordinatesResolvedFrom?: 'upstream' | 'reference-table' | 'unknown';
}

export interface CalculatedAqi {
  value: number;
  category: AqiCategory;
  /** The pollutant whose sub-index produced the overall AQI value. */
  dominantPollutant: PollutantId | null;
  /**
   * Number of pollutants that had enough data to compute a sub-index.
   * CPCB methodology requires a minimum of 3 including at least one of
   * PM10/PM2.5 for the AQI to be considered valid; below that we still
   * return a value but flag it as low-confidence.
   */
  pollutantsUsed: PollutantId[];
  method: 'CPCB_NATIONAL_AQI_FORMULA';
}

export interface StationSummary {
  name: string;
  source: AqiSource;
  distanceKm: number | null;
  latitude: number | null;
  longitude: number | null;
  lastUpdated: string | null;
}

export interface AirQualityResponse {
  location: {
    latitude: number;
    longitude: number;
  };
  /**
   * The headline AQI. Always CPCB when a valid CPCB-derived AQI exists for a
   * nearby station; falls back to an OpenAQ-derived indicative AQI only when
   * no CPCB station is available. `null` when neither source has enough data.
   */
  aqi: {
    value: number;
    category: AqiCategory;
    source: AqiSource;
    dominantPollutant: PollutantId | null;
    /**
     * 'measured' would mean the source itself returned a precomputed AQI;
     * 'calculated' means we derived it from raw pollutant concentrations
     * using the standard CPCB breakpoint formula. Both CPCB's and OpenAQ's
     * public feeds return raw concentrations rather than a precomputed AQI,
     * so today this is always 'calculated' — the field exists so a future
     * source that does return a precomputed value is represented honestly.
     */
    valueType: 'measured' | 'calculated';
  } | null;
  station: StationSummary | null;
  /** Every pollutant reading contributing to `aqi`, from the same station. */
  pollutants: Partial<Record<PollutantId, PollutantReading>>;
  /** Supplementary OpenAQ stations/pollutants near the location, kept separate from CPCB. */
  supplementary: {
    source: AqiSource;
    station: StationSummary;
    pollutants: Partial<Record<PollutantId, PollutantReading>>;
    aqi: CalculatedAqi | null;
  }[];
  timestamp: string;
  dataQuality: {
    /** How far the nearest usable station is from the requested point. */
    nearestStationDistanceKm: number | null;
    /** Age of the underlying observation, in minutes, if known. */
    dataAgeMinutes: number | null;
    /** True if the underlying reading is older than STALE_DATA_THRESHOLD_MINUTES. */
    isStale: boolean;
    /** Human-readable caveat always surfaced to the frontend. */
    note: string;
  };
  sources: {
    name: AqiSource;
    stationsFound: number;
    available: boolean;
    error?: string;
  }[];
}

export interface ServiceAreaBounds {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

export class AirQualityServiceError extends Error {
  constructor(
    message: string,
    public code:
      | 'INVALID_COORDINATES'
      | 'OUT_OF_SERVICE_AREA'
      | 'NO_DATA_AVAILABLE'
      | 'UPSTREAM_ERROR',
    public statusCode: number
  ) {
    super(message);
    this.name = 'AirQualityServiceError';
  }
}
