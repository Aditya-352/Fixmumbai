/**
 * NDVI provenance normalisation — the single choke point for every NDVI figure
 * that leaves the server.
 *
 * WHY THIS EXISTS
 * The seeded dataset originally wrote hand-authored constants (e.g. 0.69) into
 * GreenVegetationObservation with `satelliteSource: 'Sentinel-2 MSI Level-2A'`,
 * `observationStart: now - 90d`, `observationEnd: now`, `pixelCount: area/100`
 * and `confidence: 0.95`. Because the observation window was computed from the
 * wall clock, those rows looked perpetually fresh and were rendered to users as
 * a live Sentinel-2 acquisition.
 *
 * Rather than trusting the database to be clean, every value is re-classified
 * here on the way out. A row that is not explicitly marked as a measurement is
 * treated as a synthetic estimate, and a synthetic estimate NEVER carries an
 * acquisition window, pixel count, cloud coverage or confidence — those fields
 * are fabricated for such rows and are suppressed rather than merely relabelled.
 *
 * Genuine measurements are passed through untouched.
 */

import type { DensityClass } from './config';
import type { NdviProvenance, NdviSummary } from './types';

/** `compositeType` / `satelliteSource` values that identify a real measurement. */
const MEASURED_COMPOSITE_TYPES = new Set([
  'TRAILING_90D',
  'DRY_SEASON',
  'MEDIAN_COMPOSITE',
  'SINGLE_SCENE',
]);

/**
 * EXACT allowlist of `satelliteSource` identifiers that this application's own
 * measurement pipeline emits.
 *
 * A pattern match is deliberately NOT used here. The historical seed wrote
 * free-text strings such as 'Sentinel-2 MSI Level-2A' and 'COPERNICUS_SENTINEL_2'
 * that assert a real spaceborne product but were hand-typed by a human, and a
 * regex such as /SENTINEL[\s_-]?2/i happily accepts both. Only identifiers our
 * own code writes can be trusted, so a new source must be added here explicitly
 * when a real pipeline starts emitting it.
 */
const MEASURED_SOURCE_IDS = new Set([
  'SENTINEL2_COG_AWS', // Sentinel-2 L2A COGs, AWS Open Data (sentinel-cogs)
  'AGROMONITORING_SENTINEL_2', // persisted from an AgroMonitoring scene selection
  'COPERNICUS/S2_SR_HARMONIZED', // Google Earth Engine collection id
  'GOOGLE_EARTH_ENGINE_S2',
]);

/** Explicit, documented non-measurement markers. */
const SYNTHETIC_MARKERS = new Set(['SYNTHETIC', 'SEED', 'SEED_DATA', 'STATIC', 'SIMULATED']);

export function isSyntheticMarker(value: string | null | undefined): boolean {
  if (!value) return false;
  const v = String(value).trim().toUpperCase();
  if (SYNTHETIC_MARKERS.has(v)) return true;
  // e.g. 'SEED_DATA_ESTIMATE', 'SYNTHETIC_ESTIMATE', 'STATIC_SEED'
  return /^(SYNTHETIC|SEED|STATIC|SIMULATED|ILLUSTRATIVE)/.test(v);
}

/**
 * Decide whether an observation row represents a genuine satellite measurement.
 *
 * Fails CLOSED: a row qualifies as measured only when it carries BOTH a
 * recognised composite type AND a recognisable satellite source AND a real
 * observation window. Anything else is a synthetic estimate.
 */
export function classifyObservation(row: {
  compositeType?: string | null;
  satelliteSource?: string | null;
  observationStart?: Date | string | null;
  observationEnd?: Date | string | null;
}): NdviProvenance {
  if (isSyntheticMarker(row.compositeType) || isSyntheticMarker(row.satelliteSource)) {
    return 'SYNTHETIC_ESTIMATE';
  }

  const compositeOk =
    !!row.compositeType &&
    MEASURED_COMPOSITE_TYPES.has(String(row.compositeType).trim().toUpperCase());
  const sourceOk =
    !!row.satelliteSource &&
    MEASURED_SOURCE_IDS.has(String(row.satelliteSource).trim().toUpperCase());

  if (!compositeOk || !sourceOk) return 'SYNTHETIC_ESTIMATE';

  // A measurement without an acquisition window is not attributable to a date.
  if (!row.observationStart) return 'SYNTHETIC_ESTIMATE';

  return 'MEASURED';
}

type NdviConfidenceAlias = 'HIGH' | 'MEDIUM' | 'LOW';

/**
 * Build the client-facing NDVI summary, suppressing fabricated metadata for
 * anything that is not a real measurement.
 */
export function normaliseNdvi(input: {
  mean: number | null | undefined;
  min: number | null | undefined;
  max: number | null | undefined;
  pixelCount: number | null | undefined;
  densityClass: DensityClass;
  confidence: NdviConfidenceAlias | null | undefined;
  compositeType: string | null | undefined;
  observationStart: Date | string | null | undefined;
  observationEnd: Date | string | null | undefined;
  imageCount: number | null | undefined;
  cloudCoverage: number | null | undefined;
  satelliteSource: string | null | undefined;
}): NdviSummary {
  const provenance = classifyObservation(input);
  const mean = numberOrNull(input.mean);

  if (mean === null) {
    return {
      mean: null,
      min: null,
      max: null,
      pixelCount: null,
      densityClass: 'UNAVAILABLE',
      confidence: null,
      compositeType: null,
      observationStart: null,
      observationEnd: null,
      imageCount: null,
      cloudCoverage: null,
      satelliteSource: null,
      provenance: 'UNAVAILABLE',
      reason: 'NO_MEASURED_VALUE',
    };
  }

  const observationStart = isoOrNull(input.observationStart);
  const observationEnd = isoOrNull(input.observationEnd);

  if (provenance === 'SYNTHETIC_ESTIMATE') {
    // The number itself may still be displayed as an illustrative estimate, but
    // every field that implies a satellite acquisition is dropped.
    return {
      mean,
      min: numberOrNull(input.min),
      max: numberOrNull(input.max),
      pixelCount: null,
      densityClass: input.densityClass ?? 'UNAVAILABLE',
      confidence: null,
      compositeType: 'SYNTHETIC',
      observationStart: null,
      observationEnd: null,
      imageCount: null,
      cloudCoverage: null,
      satelliteSource: null,
      provenance: 'SYNTHETIC_ESTIMATE',
      reason: 'SYNTHETIC_ESTIMATE_NOT_SATELLITE',
    };
  }

  return {
    mean,
    min: numberOrNull(input.min),
    max: numberOrNull(input.max),
    pixelCount: numberOrNull(input.pixelCount),
    densityClass: input.densityClass ?? 'UNAVAILABLE',
    confidence: (input.confidence as NdviConfidenceAlias) ?? null,
    compositeType: (input.compositeType as NdviSummary['compositeType']) ?? null,
    observationStart,
    observationEnd,
    imageCount: numberOrNull(input.imageCount),
    cloudCoverage: numberOrNull(input.cloudCoverage),
    satelliteSource: input.satelliteSource ?? null,
    provenance: 'MEASURED',
  };
}

/** An explicitly unavailable NDVI summary. */
export function unavailableNdvi(reason: string): NdviSummary {
  return {
    mean: null,
    min: null,
    max: null,
    pixelCount: null,
    densityClass: 'UNAVAILABLE',
    confidence: null,
    compositeType: null,
    observationStart: null,
    observationEnd: null,
    imageCount: null,
    cloudCoverage: null,
    satelliteSource: null,
    provenance: 'UNAVAILABLE',
    reason,
  };
}

function numberOrNull(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function isoOrNull(v: Date | string | null | undefined): string | null {
  if (!v) return null;
  if (v instanceof Date) return Number.isNaN(v.getTime()) ? null : v.toISOString();
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}
