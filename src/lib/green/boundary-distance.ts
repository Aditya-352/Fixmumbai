/**
 * boundaryDistance.ts
 *
 * Accurate nearest-boundary distance calculation using Turf.js.
 *
 * SQLite has no PostGIS, so all spatial operations run server-side in Node.js
 * via @turf/turf.
 *
 * Supported geometry types:
 *   - Polygon
 *   - MultiPolygon
 *   - Point (falls back to point-to-point distance, labelled as approximate)
 *   - GeometryCollection (processes first polygon/multipolygon found)
 *
 * Returns:
 *   distanceM          — metres to nearest polygon boundary (0 if inside)
 *   nearestPoint       — closest point on boundary {lat, lon}
 *   isInside           — true when user is inside the polygon
 *   geometryType       — GeoJSON type of the space geometry
 *   distanceMethod     — description of how distance was calculated
 *   distanceLabel      — human-readable label for UI display
 */

import type { GeoJSON } from 'geojson';

const R = 6371000; // Earth radius metres

/** Haversine distance in metres between two [lon, lat] points */
function haversineM(lon1: number, lat1: number, lon2: number, lat2: number): number {
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export interface BoundaryDistanceResult {
  /** Metres — 0 if inside polygon */
  distanceM: number;
  /** Closest point on geometry boundary */
  nearestPoint: { lat: number; lon: number } | null;
  /** True when user location is inside the polygon */
  isInside: boolean;
  /** GeoJSON geometry type of the space */
  geometryType: string;
  /** How distance was calculated */
  distanceMethod:
    | 'POLYGON_BOUNDARY'
    | 'MULTIPOLYGON_BOUNDARY'
    | 'INSIDE_POLYGON'
    | 'POINT_TO_POINT'
    | 'CENTROID_FALLBACK'
    | 'NO_GEOMETRY';
  /** User-facing distance label */
  distanceLabel: string;
}

/**
 * Check if point [lon, lat] is inside a polygon ring using ray-casting.
 */
function pointInRing(pLon: number, pLat: number, ring: number[][]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const intersect =
      yi > pLat !== yj > pLat && pLon < ((xj - xi) * (pLat - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Find nearest point on a polygon ring to [pLon, pLat],
 * returning [lon, lat] of nearest boundary point and distance in metres.
 */
function nearestOnRing(
  pLon: number,
  pLat: number,
  ring: number[][]
): { lon: number; lat: number; distM: number } {
  let best = { lon: ring[0][0], lat: ring[0][1], distM: Infinity };

  for (let i = 0; i < ring.length - 1; i++) {
    const [ax, ay] = ring[i];
    const [bx, by] = ring[i + 1];

    // Project point onto segment [A→B]
    const abx = bx - ax;
    const aby = by - ay;
    const apx = pLon - ax;
    const apy = pLat - ay;
    const abLenSq = abx * abx + aby * aby;
    const t = abLenSq === 0 ? 0 : Math.max(0, Math.min(1, (apx * abx + apy * aby) / abLenSq));

    const nearLon = ax + t * abx;
    const nearLat = ay + t * aby;
    const dist = haversineM(pLon, pLat, nearLon, nearLat);

    if (dist < best.distM) {
      best = { lon: nearLon, lat: nearLat, distM: dist };
    }
  }
  return best;
}

/**
 * Process a single Polygon geometry.
 */
function processPolygon(
  pLon: number,
  pLat: number,
  coordinates: number[][][]
): { distM: number; nearLon: number; nearLat: number; inside: boolean } {
  const outerRing = coordinates[0];

  // 1. Check if inside outer ring
  const insideOuter = pointInRing(pLon, pLat, outerRing);

  if (insideOuter) {
    // 2. Check if inside any hole (would exclude from polygon)
    let inHole = false;
    for (let h = 1; h < coordinates.length; h++) {
      if (pointInRing(pLon, pLat, coordinates[h])) {
        inHole = true;
        break;
      }
    }

    if (!inHole) {
      return { distM: 0, nearLon: pLon, nearLat: pLat, inside: true };
    }
  }

  // 3. Nearest point on outer ring
  const n = nearestOnRing(pLon, pLat, outerRing);
  return { distM: n.distM, nearLon: n.lon, nearLat: n.lat, inside: false };
}

/**
 * Main entry point: calculate nearest-boundary distance from user's location
 * to the green-space geometry.
 *
 * @param userLat  User's latitude
 * @param userLon  User's longitude
 * @param geometry GeoJSON geometry from the database (or null)
 * @param centroidLat fallback centroid latitude
 * @param centroidLon fallback centroid longitude
 */
export function nearestBoundaryDistance(
  userLat: number,
  userLon: number,
  geometry: GeoJSON.Geometry | null | undefined,
  centroidLat: number,
  centroidLon: number
): BoundaryDistanceResult {
  // ── No geometry — centroid fallback ─────────────────────────────────────────
  if (!geometry || !geometry.type) {
    const distM = haversineM(userLon, userLat, centroidLon, centroidLat);
    return {
      distanceM: distM,
      nearestPoint: { lat: centroidLat, lon: centroidLon },
      isInside: false,
      geometryType: 'Unknown',
      distanceMethod: 'CENTROID_FALLBACK',
      distanceLabel: `${formatDistance(distM)} · centroid estimate`,
    };
  }

  // ── Point geometry ───────────────────────────────────────────────────────────
  if (geometry.type === 'Point') {
    const [lon, lat] = (geometry as GeoJSON.Point).coordinates;
    const distM = haversineM(userLon, userLat, lon, lat);
    return {
      distanceM: distM,
      nearestPoint: { lat, lon },
      isInside: false,
      geometryType: 'Point',
      distanceMethod: 'POINT_TO_POINT',
      distanceLabel: `${formatDistance(distM)} · point-to-point`,
    };
  }

  // ── Polygon ──────────────────────────────────────────────────────────────────
  if (geometry.type === 'Polygon') {
    const coords = (geometry as GeoJSON.Polygon).coordinates;
    const { distM, nearLon, nearLat, inside } = processPolygon(userLon, userLat, coords);
    return {
      distanceM: distM,
      nearestPoint: { lat: nearLat, lon: nearLon },
      isInside: inside,
      geometryType: 'Polygon',
      distanceMethod: inside ? 'INSIDE_POLYGON' : 'POLYGON_BOUNDARY',
      distanceLabel: inside
        ? 'Inside this green space'
        : `${formatDistance(distM)} to nearest boundary`,
    };
  }

  // ── MultiPolygon ─────────────────────────────────────────────────────────────
  if (geometry.type === 'MultiPolygon') {
    const polygons = (geometry as GeoJSON.MultiPolygon).coordinates;
    let best = { distM: Infinity, nearLon: centroidLon, nearLat: centroidLat, inside: false };

    for (const polyCoords of polygons) {
      const result = processPolygon(userLon, userLat, polyCoords);
      if (result.inside) {
        best = { distM: 0, nearLon: userLon, nearLat: userLat, inside: true };
        break;
      }
      if (result.distM < best.distM) {
        best = result;
      }
    }

    return {
      distanceM: best.distM,
      nearestPoint: { lat: best.nearLat, lon: best.nearLon },
      isInside: best.inside,
      geometryType: 'MultiPolygon',
      distanceMethod: best.inside ? 'INSIDE_POLYGON' : 'MULTIPOLYGON_BOUNDARY',
      distanceLabel: best.inside
        ? 'Inside this green space'
        : `${formatDistance(best.distM)} to nearest boundary`,
    };
  }

  // ── GeometryCollection — use first polygon found ─────────────────────────────
  if (geometry.type === 'GeometryCollection') {
    const col = geometry as GeoJSON.GeometryCollection;
    const poly = col.geometries.find(
      (g) => g.type === 'Polygon' || g.type === 'MultiPolygon'
    );
    if (poly) {
      return nearestBoundaryDistance(userLat, userLon, poly, centroidLat, centroidLon);
    }
  }

  // ── Unsupported type — centroid fallback ─────────────────────────────────────
  const distM = haversineM(userLon, userLat, centroidLon, centroidLat);
  return {
    distanceM: distM,
    nearestPoint: { lat: centroidLat, lon: centroidLon },
    isInside: false,
    geometryType: geometry.type,
    distanceMethod: 'CENTROID_FALLBACK',
    distanceLabel: `${formatDistance(distM)} · centroid estimate`,
  };
}

/** Format metres as "X m" or "X.X km" */
export function formatDistance(distM: number): string {
  if (distM < 1000) return `${Math.round(distM)} m`;
  return `${(distM / 1000).toFixed(1)} km`;
}
