/**
 * Scientific-integrity tests for the 100m hex grid.
 *
 * These lock in the removal of fabricated NDVI. The previous implementation
 * assigned NDVI 0.58 / 0.35 / 0.18 from green-coverage thresholds and stamped
 * every cell with today's date. Both behaviours misrepresented modelled numbers
 * as satellite measurements, so they are now explicitly forbidden.
 */
import { describe, it, expect } from 'vitest';
import { generate100mHexGrid } from '@/lib/green/hex-grid-service';
import type { GreenSpaceSummary } from '@/lib/green/types';

function space(over: Partial<GreenSpaceSummary> = {}): GreenSpaceSummary {
  // A ~2.9 km square polygon straddling the hex grid centre, so a cell always
  // intersects it and green coverage is non-zero.
  const geometry = {
    type: 'Polygon' as const,
    coordinates: [[[72.8295, 19.0596], 72.8395, 19.0596].map((v) => v) as [number, number]].flat(0) as any,
  };
  return {
    id: 'sp-1',
    osmType: 'way',
    osmId: '1',
    name: 'Test Park',
    category: 'Park',
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [72.8295, 19.0546],
        [72.8395, 19.0546],
        [72.8395, 19.0646],
        [72.8295, 19.0646],
        [72.8295, 19.0546],
      ]],
    } as any,
    centroid: { lat: 19.0596, lon: 72.8345 },
    areaM2: 1_000_000,
    tags: {},
    accessStatus: 'PUBLIC_TAGGED',
    walkClass: 'ACCESS_UNVERIFIED',
    accessEvidence: [],
    ndvi: null,
    image: null,
    distanceM: 0,
    walkMinutes: 0,
    walkMinutesEstimated: true,
    source: 'TEST',
    updatedAt: new Date(0).toISOString(),
    ...over,
  } as GreenSpaceSummary;
}

describe('hex grid: no fabricated NDVI', () => {
  const bbox: [number, number, number, number] = [72.83, 19.055, 72.84, 19.065];

  it('reports NDVI as null when no satellite observation exists', () => {
    const fc = generate100mHexGrid(bbox, [space()], 'PARALLEL_SIDES_100M') as any;
    const withGreen = fc.features.filter(
      (f: any) => (f.properties.greenCoveragePercent ?? 0) > 0
    );
    expect(withGreen.length).toBeGreaterThan(0);
    for (const f of withGreen) {
      expect(f.properties.ndviMean).toBeNull();
      expect(f.properties.ndviMin).toBeNull();
      expect(f.properties.ndviMax).toBeNull();
      expect(f.properties.vegetationClass).toBe('UNAVAILABLE');
    }
  });

  it('never emits the legacy synthetic constants', () => {
    const fc = generate100mHexGrid(bbox, [space()], 'PARALLEL_SIDES_100M') as any;
    for (const f of fc.features) {
      expect(f.properties.ndviMean).not.toBe(0.58);
      expect(f.properties.ndviMean).not.toBe(0.35);
      expect(f.properties.ndviMean).not.toBe(0.18);
    }
  });

  it('does not fabricate a measurement date', () => {
    const fc = generate100mHexGrid(bbox, [space()], 'PARALLEL_SIDES_100M') as any;
    const today = new Date().toISOString().slice(0, 10);
    for (const f of fc.features) {
      expect(f.properties.observationDate).toBeNull();
      expect(f.properties.observationDate).not.toBe(today);
    }
  });

  it('flags missing observation distinctly from barren land', () => {
    const fc = generate100mHexGrid(bbox, [space()], 'PARALLEL_SIDES_100M') as any;
    const f = fc.features[0];
    expect(f.properties.dataCompleteness).toBe('NO_NDVI_OBSERVATION');
    // Unavailable must never be presented as a measured low/water value.
    expect(f.properties.vegetationClass).not.toBe('WATER_BARREN');
  });

  it('keeps green coverage as an independent metric even with no NDVI', () => {
    const fc = generate100mHexGrid(bbox, [space()], 'PARALLEL_SIDES_100M') as any;
    const withGreen = fc.features.filter((f: any) => f.properties.greenCoveragePercent > 0);
    expect(withGreen.length).toBeGreaterThan(0);
    for (const f of withGreen) {
      expect(f.properties.greenCoveragePercent).toBeGreaterThan(0);
      expect(f.properties.ndviMean).toBeNull();
    }
  });

  it('uses NDVI only when a real observation window accompanies it', () => {
    // A mean WITHOUT observationStart is not attributable -> must be ignored.
    const unattributed = space({
      ndvi: { mean: 0.62, min: 0.2, max: 0.9, pixelCount: 10, densityClass: 'HIGH', confidence: null, compositeType: null, observationStart: null as any, observationEnd: null, imageCount: null, cloudCoverage: null, satelliteSource: null },
    });
    const fc = generate100mHexGrid(bbox, [unattributed], 'PARALLEL_SIDES_100M') as any;
    for (const f of fc.features) expect(f.properties.ndviMean).toBeNull();

    // With a genuine acquisition window the measured value is retained.
    const attributed = space({
      ndvi: { mean: 0.62, min: 0.2, max: 0.9, pixelCount: 10, densityClass: 'HIGH', confidence: 'HIGH', compositeType: null, observationStart: '2026-06-20', observationEnd: '2026-06-20', imageCount: null, cloudCoverage: null, satelliteSource: 'Sentinel-2' },
    });
    const fc2 = generate100mHexGrid(bbox, [attributed], 'PARALLEL_SIDES_100M') as any;
    const measured = fc2.features.filter((f: any) => f.properties.ndviMean !== null);
    expect(measured.length).toBeGreaterThan(0);
    expect(measured[0].properties.observationDate).toBe('2026-06-20');
  });
});

describe('hex grid cache does not serve stale observations', () => {
  const bbox: [number, number, number, number] = [72.83, 19.055, 72.84, 19.065];

  const withNdvi = (mean: number, date: string) =>
    space({
      ndvi: { mean, min: 0.1, max: 0.9, pixelCount: 10, densityClass: 'HIGH', confidence: 'HIGH', compositeType: null, observationStart: date, observationEnd: date, imageCount: null, cloudCoverage: null, satelliteSource: 'Sentinel-2' },
    });

  it('recomputes when a new observation arrives for the same polygon count', () => {
    // Same bbox, same NUMBER of spaces, different NDVI + date.
    const first = generate100mHexGrid(bbox, [withNdvi(0.30, '2026-06-20')], 'PARALLEL_SIDES_100M') as any;
    const second = generate100mHexGrid(bbox, [withNdvi(0.77, '2026-09-01')], 'PARALLEL_SIDES_100M') as any;

    const firstVal = first.features.find((f: any) => f.properties.ndviMean !== null)?.properties.ndviMean;
    const secondVal = second.features.find((f: any) => f.properties.ndviMean !== null)?.properties.ndviMean;

    // A stale cache would have returned 0.3 for both.
    expect(firstVal).toBe(0.3);
    expect(secondVal).toBe(0.77);
  });

  it('still returns a cached result for genuinely identical input', () => {
    const a = generate100mHexGrid(bbox, [withNdvi(0.42, '2026-06-20')], 'PARALLEL_SIDES_100M');
    const b = generate100mHexGrid(bbox, [withNdvi(0.42, '2026-06-20')], 'PARALLEL_SIDES_100M');
    expect(b).toBe(a); // identical reference
  });
});
