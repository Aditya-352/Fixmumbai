/**
 * 100-Metre Hexagonal Grid Mapping Service for Mumbai.
 *
 * Requirements & Dimensional Interpretation:
 * - 100m across opposite parallel sides (short diameter d = 100m):
 *     Side length s = d / sqrt(3) ~= 57.735 m (0.057735 km).
 *     Area of regular hexagon A = (3 * sqrt(3) / 2) * s^2 ~= 8,660.25 m² (0.866 ha).
 * - Stable cell IDs based on fixed centroid coordinates.
 * - Intersection calculation with real OSM green space geometries.
 * - Real vegetation classification and coverage percentage.
 * - Precomputed / cached grid cells with memory memoization.
 */

import * as turf from '@turf/turf';
import type { GreenSpaceSummary } from './types';

export type HexGridInterpretation = 'PARALLEL_SIDES_100M' | 'OPPOSITE_VERTICES_100M';

export interface HexCellMetric {
  hexId: string;
  centerLat: number;
  centerLon: number;
  dimensionAcrossM: number;
  interpretation: HexGridInterpretation;
  totalAreaM2: number;
  ndviMean: number | null;
  ndviMin: number | null;
  ndviMax: number | null;
  vegetationClass: 'HIGH' | 'MEDIUM' | 'LOW' | 'WATER_BARREN' | 'UNAVAILABLE';
  intersectingAreaM2: number;
  greenCoveragePercent: number;
  mappedFeaturesCount: number;
  intersectingFeatureNames: string[];
  /** Real satellite acquisition date (YYYY-MM-DD), or null when unknown. */
  observationDate: string | null;
  /**
   * COMPLETE = numerical NDVI measured for this cell.
   * NO_NDVI_OBSERVATION = no satellite measurement available (NOT zero vegetation).
   */
  dataCompleteness: 'COMPLETE' | 'PARTIAL' | 'UNAVAILABLE' | 'NO_NDVI_OBSERVATION';
  geometry: GeoJSON.Polygon;
}

export interface HexGridResult {
  type: 'FeatureCollection';
  features: Array<GeoJSON.Feature<GeoJSON.Polygon, HexCellMetric>>;
  totalCells: number;
  populatedCells: number;
  averageCoveragePercent: number;
  interpretation: HexGridInterpretation;
  cellDimensionM: number;
}

// In-memory cache keyed by bounds string and space count
const GRID_CACHE = new Map<string, HexGridResult>();

/**
 * Generates or retrieves cached 100m hexagonal cells for a given geographic bounding box.
 * Computes exact intersection with provided green spaces using Turf.js.
 */
export function generate100mHexGrid(
  bbox: [number, number, number, number], // [minLon, minLat, maxLon, maxLat]
  spaces: GreenSpaceSummary[],
  interpretation: HexGridInterpretation = 'PARALLEL_SIDES_100M'
): HexGridResult {
  // Cache key MUST fingerprint the inputs that actually affect the output.
  //
  // The previous key was `bbox + spaces.length + interpretation`, which meant two
  // different queries over the same bbox with the same NUMBER of spaces collided.
  // A refreshed satellite observation (same polygons, new NDVI) therefore served
  // the stale grid, presenting an old observation as current. The key now includes
  // each contributing polygon's identity, geometry and NDVI payload.
  const fingerprint = spaces
    .filter((s) => s.geometry && (s.geometry.type === 'Polygon' || s.geometry.type === 'MultiPolygon'))
    .map((s) => `${s.id}:${s.osmType}/${s.osmId}:${s.ndvi?.mean ?? 'x'}:${s.ndvi?.observationStart ?? 'x'}`)
    .sort()
    .join('|');
  const cacheKey = `${bbox.map((n) => n.toFixed(3)).join(',')}_${interpretation}_${fingerprint}`;
  const cached = GRID_CACHE.get(cacheKey);
  if (cached) return cached;

  // Turf.js hexGrid takes cellSide (edge length of the hexagon) in kilometers
  // For parallel sides d = 100m (0.1km): s = 0.1 / sqrt(3) ~= 0.057735 km
  // For opposite vertices d = 100m (0.1km): s = 0.1 / 2 = 0.05 km
  const cellSideKm =
    interpretation === 'PARALLEL_SIDES_100M'
      ? 0.1 / Math.sqrt(3) // ~0.057735 km (57.735 m)
      : 0.05; // 50 m

  const hexCellAreaM2 =
    interpretation === 'PARALLEL_SIDES_100M'
      ? (3 * Math.sqrt(3) * Math.pow(57.735, 2)) / 2 // ~8660.25 m²
      : (3 * Math.sqrt(3) * Math.pow(50, 2)) / 2; // ~6495.19 m²

  // Generate hex grid
  const rawHexCollection = turf.hexGrid(bbox, cellSideKm, { units: 'kilometers' });

  // Filter valid spaces with geometry
  const polygonSpaces = spaces.filter(
    (s) => s.geometry && (s.geometry.type === 'Polygon' || s.geometry.type === 'MultiPolygon')
  );

  const features: Array<GeoJSON.Feature<GeoJSON.Polygon, HexCellMetric>> = [];
  let populatedCount = 0;
  let totalCoverageSum = 0;

  for (let i = 0; i < rawHexCollection.features.length; i++) {
    const hex = rawHexCollection.features[i];
    if (!hex.geometry) continue;

    const center = turf.centroid(hex);
    const centerLon = center.geometry.coordinates[0];
    const centerLat = center.geometry.coordinates[1];

    // Stable ID based on centroid grid coordinate
    const hexId = `HEX_100M_${centerLat.toFixed(4)}_${centerLon.toFixed(4)}`;

    let intersectingAreaM2 = 0;
    const intersectingNames: string[] = [];
    let ndviValues: number[] = [];
    // Acquisition dates of the measurements actually contributing to ndviValues.
    const ndviObservationDates: (string | null)[] = [];

    // Check intersection with active green spaces
    for (const space of polygonSpaces) {
      try {
        const spacePoly = space.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
        const intersection = turf.intersect(
          turf.featureCollection([hex, turf.feature(spacePoly)])
        );

        if (intersection) {
          const area = turf.area(intersection);
          if (area > 5) {
            // threshold of 5 m² to filter boundary slivers
            intersectingAreaM2 += area;
            intersectingNames.push(space.name || space.category);
            // Only a value that carries a genuine observation window counts.
            // A mean without its acquisition window is not attributable, so it is
            // excluded rather than reported with an invented date.
            if (
              space.ndvi?.mean !== null &&
              space.ndvi?.mean !== undefined &&
              space.ndvi?.observationStart
            ) {
              ndviValues.push(space.ndvi.mean);
              ndviObservationDates.push(space.ndvi.observationStart);
            }
          }
        }
      } catch (_) {
        // Skip spatial topology errors safely
      }
    }

    // Clamp green coverage between 0% and 100%
    const greenCoveragePercent = Math.min(
      100,
      Math.round((intersectingAreaM2 / hexCellAreaM2) * 1000) / 10
    );

    // SCIENTIFIC INTEGRITY: numerical NDVI is reported ONLY when it derives from a
    // real satellite observation. It is never inferred from green-space coverage,
    // land-use category, polygon area, or any heuristic.
    //
    // The previous implementation assigned 0.58 / 0.35 / 0.18 from
    // greenCoveragePercent thresholds and labelled the result as measured NDVI.
    // Those values were fabricated. They are removed.
    //
    // `ndviValues` only contains entries from a measured observation joined in
    // from GreenVegetationObservation. When the provider exposes polygon-level
    // statistics only (not a per-cell raster), that array is empty and NDVI is
    // correctly reported as unavailable for the cell.
    let ndviMean: number | null = null;
    let ndviMin: number | null = null;
    let ndviMax: number | null = null;
    let vegClass: HexCellMetric['vegetationClass'] = 'UNAVAILABLE';
    let observationDate: string | null = null;

    if (ndviValues.length > 0) {
      ndviMean = Math.round((ndviValues.reduce((a, b) => a + b, 0) / ndviValues.length) * 100) / 100;
      ndviMin = Math.min(...ndviValues);
      ndviMax = Math.max(...ndviValues);
      observationDate = ndviObservationDates.find((d) => d != null) ?? null;
      if (ndviMean >= 0.55) vegClass = 'HIGH';
      else if (ndviMean >= 0.25) vegClass = 'MEDIUM';
      else if (ndviMean >= 0.1) vegClass = 'LOW';
      else vegClass = 'WATER_BARREN';
    }
    // else: NDVI stays null / UNAVAILABLE. greenCoveragePercent is still reported
    // below as an INDEPENDENT mapped-feature metric — it is not an NDVI substitute.

    if (greenCoveragePercent > 0) {
      populatedCount++;
      totalCoverageSum += greenCoveragePercent;
    }

    const metric: HexCellMetric = {
      hexId,
      centerLat: Math.round(centerLat * 100000) / 100000,
      centerLon: Math.round(centerLon * 100000) / 100000,
      dimensionAcrossM: 100,
      interpretation,
      totalAreaM2: Math.round(hexCellAreaM2),
      ndviMean,
      ndviMin,
      ndviMax,
      vegetationClass: vegClass,
      intersectingAreaM2: Math.round(intersectingAreaM2),
      greenCoveragePercent,
      mappedFeaturesCount: intersectingNames.length,
      intersectingFeatureNames: Array.from(new Set(intersectingNames)),
      // Real acquisition date when a measurement exists; otherwise explicitly
      // unknown. Never "today".
      observationDate,
      dataCompleteness: ndviMean !== null ? 'COMPLETE' : 'NO_NDVI_OBSERVATION',
      geometry: hex.geometry,
    };

    features.push(turf.feature(hex.geometry, metric));
  }

  const result: HexGridResult = {
    type: 'FeatureCollection',
    features,
    totalCells: features.length,
    populatedCells: populatedCount,
    averageCoveragePercent:
      populatedCount > 0 ? Math.round((totalCoverageSum / populatedCount) * 10) / 10 : 0,
    interpretation,
    cellDimensionM: 100,
  };

  // Cache up to 10 results
  if (GRID_CACHE.size > 10) {
    const firstKey = GRID_CACHE.keys().next().value;
    if (firstKey) GRID_CACHE.delete(firstKey);
  }
  GRID_CACHE.set(cacheKey, result);

  return result;
}
