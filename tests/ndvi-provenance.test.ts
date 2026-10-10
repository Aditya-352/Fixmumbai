import { describe, it, expect } from 'vitest';
import {
  classifyObservation,
  normaliseNdvi,
  unavailableNdvi,
  isSyntheticMarker,
} from '@/lib/green/ndvi-provenance';

describe('isSyntheticMarker', () => {
  it('detects explicit and prefixed synthetic markers', () => {
    expect(isSyntheticMarker('SYNTHETIC')).toBe(true);
    expect(isSyntheticMarker('synthetic')).toBe(true);
    expect(isSyntheticMarker('SEED_DATA_ESTIMATE')).toBe(true);
    expect(isSyntheticMarker('STATIC_SEED')).toBe(true);
    expect(isSyntheticMarker(null)).toBe(false);
    expect(isSyntheticMarker('MEDIAN_COMPOSITE')).toBe(false);
  });
});

describe('classifyObservation — fails closed', () => {
  it('treats the legacy seed rows as synthetic', () => {
    // The exact shape written by the original seed script.
    expect(
      classifyObservation({
        compositeType: 'COMPOSITE_90D',
        satelliteSource: 'Sentinel-2 MSI Level-2A',
        observationStart: new Date('2026-07-05'),
        observationEnd: new Date('2026-10-03'),
      })
    ).toBe('SYNTHETIC_ESTIMATE');

    expect(
      classifyObservation({
        compositeType: 'MEDIAN_COMPOSITE',
        satelliteSource: 'COPERNICUS_SENTINEL_2',
        observationStart: new Date('2026-07-04'),
        observationEnd: new Date('2026-10-02'),
      })
    ).toBe('SYNTHETIC_ESTIMATE');
  });

  it('rejects an explicitly synthetic row even with a plausible product string', () => {
    expect(
      classifyObservation({
        compositeType: 'SYNTHETIC',
        satelliteSource: 'COPERNICUS/S2_SR_HARMONIZED',
        observationStart: new Date('2026-07-04'),
      })
    ).toBe('SYNTHETIC_ESTIMATE');
  });

  it('rejects a row with no acquisition window', () => {
    expect(
      classifyObservation({
        compositeType: 'MEDIAN_COMPOSITE',
        satelliteSource: 'COPERNICUS/S2_SR_HARMONIZED',
        observationStart: null,
      })
    ).toBe('SYNTHETIC_ESTIMATE');
  });

  it('rejects a row with an unrecognised composite type', () => {
    expect(
      classifyObservation({
        compositeType: 'SOMETHING_ELSE',
        satelliteSource: 'COPERNICUS/S2_SR_HARMONIZED',
        observationStart: new Date('2026-07-04'),
      })
    ).toBe('SYNTHETIC_ESTIMATE');
  });

  it('rejects a hand-typed product string that merely looks like a real source', () => {
    // The legacy seed wrote these free-text strings by hand. They assert a real
    // product but were never produced by a measurement pipeline.
    for (const satelliteSource of [
      'Sentinel-2 MSI Level-2A',
      'COPERNICUS_SENTINEL_2',
      'Sentinel-2',
    ]) {
      expect(
        classifyObservation({
          compositeType: 'MEDIAN_COMPOSITE',
          satelliteSource,
          observationStart: new Date('2026-07-04'),
          observationEnd: new Date('2026-10-02'),
        })
      ).toBe('SYNTHETIC_ESTIMATE');
    }
  });

  it('accepts only exact source identifiers emitted by our own pipeline', () => {
    expect(
      classifyObservation({
        compositeType: 'MEDIAN_COMPOSITE',
        satelliteSource: 'SENTINEL2_COG_AWS',
        observationStart: new Date('2026-07-04'),
        observationEnd: new Date('2026-10-02'),
      })
    ).toBe('MEASURED');
  });

  it('accepts a genuine measurement', () => {
    expect(
      classifyObservation({
        compositeType: 'MEDIAN_COMPOSITE',
        satelliteSource: 'COPERNICUS/S2_SR_HARMONIZED',
        observationStart: new Date('2026-07-04'),
        observationEnd: new Date('2026-10-02'),
      })
    ).toBe('MEASURED');
  });
});

describe('normaliseNdvi — fabricated metadata suppression', () => {
  const legacySeedRow = {
    mean: 0.69,
    min: 0.52,
    max: 0.84,
    pixelCount: 1420,
    densityClass: 'HIGH' as const,
    confidence: 0.95 as const,
    compositeType: 'COMPOSITE_90D',
    observationStart: new Date('2026-07-05'),
    observationEnd: new Date('2026-10-03'),
    imageCount: 18,
    cloudCoverage: 9.2,
    satelliteSource: 'Sentinel-2 MSI Level-2A',
  };

  it('strips observation window, pixel count, cloud coverage and confidence', () => {
    const out = normaliseNdvi(legacySeedRow);
    expect(out.provenance).toBe('SYNTHETIC_ESTIMATE');
    expect(out.observationStart).toBeNull();
    expect(out.observationEnd).toBeNull();
    expect(out.pixelCount).toBeNull();
    expect(out.cloudCoverage).toBeNull();
    expect(out.imageCount).toBeNull();
    expect(out.confidence).toBeNull();
    expect(out.satelliteSource).toBeNull();
    expect(out.compositeType).toBe('SYNTHETIC');
    expect(out.reason).toBe('SYNTHETIC_ESTIMATE_NOT_SATELLITE');
  });

  it('retains the curated value so information is not destroyed', () => {
    const out = normaliseNdvi(legacySeedRow);
    expect(out.mean).toBe(0.69);
    expect(out.min).toBe(0.52);
    expect(out.max).toBe(0.84);
  });

  it('passes a genuine measurement through untouched', () => {
    const out = normaliseNdvi({
      mean: 0.61,
      min: 0.4,
      max: 0.79,
      pixelCount: 5123,
      densityClass: 'HIGH',
      confidence: 'HIGH',
      compositeType: 'MEDIAN_COMPOSITE',
      observationStart: new Date('2026-07-04T00:00:00.000Z'),
      observationEnd: new Date('2026-10-02T00:00:00.000Z'),
      imageCount: 2,
      cloudCoverage: 3.1,
      satelliteSource: 'COPERNICUS/S2_SR_HARMONIZED',
    });
    expect(out.provenance).toBe('MEASURED');
    expect(out.pixelCount).toBe(5123);
    expect(out.cloudCoverage).toBe(3.1);
    expect(out.confidence).toBe('HIGH');
    expect(out.observationStart).toBe('2026-07-04T00:00:00.000Z');
    expect(out.observationEnd).toBe('2026-10-02T00:00:00.000Z');
    expect(out.satelliteSource).toBe('COPERNICUS/S2_SR_HARMONIZED');
  });

  it('normalises a null value to an explicit unavailable state', () => {
    const out = normaliseNdvi({
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
    });
    expect(out.provenance).toBe('UNAVAILABLE');
    expect(out.mean).toBeNull();
    expect(out.densityClass).toBe('UNAVAILABLE');
  });

  it('never emits metadata for a null value even if the row claims otherwise', () => {
    const out = normaliseNdvi({ ...legacySeedRow, mean: null });
    expect(out.provenance).toBe('UNAVAILABLE');
    expect(out.observationStart).toBeNull();
    expect(out.pixelCount).toBeNull();
  });
});

describe('unavailableNdvi', () => {
  it('carries a reason and no fabricated fields', () => {
    const out = unavailableNdvi('SATELLITE_UNAVAILABLE');
    expect(out.provenance).toBe('UNAVAILABLE');
    expect(out.reason).toBe('SATELLITE_UNAVAILABLE');
    expect(out.observationStart).toBeNull();
    expect(out.pixelCount).toBeNull();
    expect(out.cloudCoverage).toBeNull();
  });
});
