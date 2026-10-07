/**
 * OSM green-space ingest service.
 *
 * Downloads green polygons, footpaths, and entrance nodes from Overpass
 * in ~0.1° tiles over the Mumbai bbox, then upserts into the local
 * GreenSpace store (SQLite JSON fallback when PostGIS is unavailable).
 *
 * Run via: POST /api/vegetation/process?task=ingest
 * Or CLI:  npx ts-node scripts/green/ingest-osm.ts
 *
 * Design principles:
 * - Never call Overpass per user request — reads from DB only.
 * - POST with data= (not GET), descriptive User-Agent, mirror fallback.
 * - Exponential backoff on 429/504.
 * - Separate queries for polygons / paths / entrances (avoids timeout).
 */

import type { GeoJSON } from 'geojson';
import { OVERPASS_URLS, ACTIVE_CITY, MIN_PATH_LENGTH_M } from '@/lib/green/config';
import type { AccessStatus, WalkClass, AccessEvidence } from '@/lib/green/types';
import { classifyAccess, classifyWalkClass } from './classifier';

const USER_AGENT =
  process.env.OVERPASS_USER_AGENT ??
  'FixMumbai/1.0 (civic green-space data; contact@fixmumbai.org)';

// ── Types ───────────────────────────────────────────────────────────────────

export interface OsmElement {
  type: 'node' | 'way' | 'relation';
  id: number;
  tags?: Record<string, string>;
  lat?: number;
  lon?: number;
  geometry?: Array<{ lat: number; lon: number }>;
  members?: any[];
}

export interface IngestedSpace {
  osmType: string;
  osmId: string;
  osmVersion: number;
  name: string;
  category: string;
  tags: Record<string, string>;
  geometry: GeoJSON.Geometry | null;
  centroid: { lat: number; lon: number };
  areaM2: number | null;
  accessStatus: AccessStatus;
  walkClass: WalkClass;
  accessEvidence: AccessEvidence[];
  pathCount: number;
  totalPathLengthM: number;
  entrances: Array<{ lat: number; lon: number; tags: Record<string, string> }>;
}

export interface IngestResult {
  spacesUpserted: number;
  errors: string[];
  warnings: string[];
  durationMs: number;
}

// ── Overpass helpers ─────────────────────────────────────────────────────────

async function overpassQuery(ql: string, attempt = 0): Promise<any> {
  const urls = OVERPASS_URLS;
  const url = urls[attempt % urls.length];

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25_000);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': USER_AGENT,
      },
      body: `data=${encodeURIComponent(ql)}`,
      signal: ctrl.signal,
    });
    clearTimeout(timer);

    if (res.status === 429 || res.status === 504) {
      if (attempt >= urls.length * 2) throw new Error(`Overpass rate-limited after ${attempt} attempts`);
      const delay = Math.min(2 ** attempt * 1000, 30_000);
      console.warn(`[overpass] ${res.status} on ${url} — retry in ${delay}ms`);
      await new Promise((r) => setTimeout(r, delay));
      return overpassQuery(ql, attempt + 1);
    }

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Overpass HTTP ${res.status} from ${url}: ${body.slice(0, 200)}`);
    }

    return res.json();
  } catch (err: any) {
    if (err.name === 'AbortError') throw new Error(`Overpass timeout on ${url}`);
    // Try next mirror
    if (attempt < urls.length - 1) {
      console.warn(`[overpass] error on ${url} — trying next mirror`);
      return overpassQuery(ql, attempt + 1);
    }
    throw err;
  }
}

// ── Green polygon query (ways + relations) ────────────────────────────────────

function greenPolygonQuery(s: number, w: number, n: number, e: number): string {
  const bbox = `${s},${w},${n},${e}`;
  return `[out:json][timeout:25];
(
  way["leisure"~"^(park|garden|recreation_ground|nature_reserve)$"](${bbox});
  way["landuse"~"^(grass|forest|village_green|recreation_ground)$"](${bbox});
  way["natural"~"^(wood|scrub|grassland)$"](${bbox});
  way["boundary"="national_park"](${bbox});
  relation["leisure"~"^(park|garden|recreation_ground|nature_reserve)$"](${bbox});
  relation["landuse"~"^(grass|forest|village_green|recreation_ground)$"](${bbox});
  relation["natural"~"^(wood|scrub|grassland)$"](${bbox});
  relation["boundary"="national_park"](${bbox});
);
out tags geom;`;
}

// ── Footpath query (exclude sidewalks and crossings) ─────────────────────────

function footpathQuery(s: number, w: number, n: number, e: number): string {
  const bbox = `${s},${w},${n},${e}`;
  return `[out:json][timeout:25];
way["highway"~"^(footway|path|pedestrian|steps)$"]
   ["footway"!~"^(sidewalk|crossing)$"]
   (${bbox});
out geom;`;
}

// ── Entrance node query ───────────────────────────────────────────────────────

function entranceQuery(s: number, w: number, n: number, e: number): string {
  const bbox = `${s},${w},${n},${e}`;
  return `[out:json][timeout:25];
(
  node["entrance"](${bbox});
  node["barrier"~"^(gate|entrance)$"](${bbox});
);
out body;`;
}

// ── Geometry helpers ──────────────────────────────────────────────────────────

function wayToPolygon(geom: Array<{ lat: number; lon: number }>): GeoJSON.Polygon | null {
  if (!geom || geom.length < 4) return null;
  const coords = geom.map((p) => [p.lon, p.lat] as [number, number]);
  if (
    coords[0][0] !== coords[coords.length - 1][0] ||
    coords[0][1] !== coords[coords.length - 1][1]
  ) {
    coords.push(coords[0]);
  }
  return { type: 'Polygon', coordinates: [coords] };
}

function centroidOfPolygon(poly: GeoJSON.Polygon): { lat: number; lon: number } {
  const ring = poly.coordinates[0];
  let lat = 0, lon = 0;
  for (const [x, y] of ring) { lon += x; lat += y; }
  return { lat: lat / ring.length, lon: lon / ring.length };
}

function areaOfPolygon(poly: GeoJSON.Polygon): number {
  // Shoelace formula (approximate m²)
  const ring = poly.coordinates[0];
  let area = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    area += (ring[j][0] + ring[i][0]) * (ring[j][1] - ring[i][1]);
  }
  // Convert deg² to m² (rough: 1 deg lat ≈ 111320 m)
  return Math.abs(area * 0.5 * 111320 * 111320 * Math.cos((ACTIVE_CITY.centre[0] * Math.PI) / 180));
}

function pathLengthM(geom: Array<{ lat: number; lon: number }>): number {
  let len = 0;
  for (let i = 1; i < geom.length; i++) {
    const dLat = (geom[i].lat - geom[i - 1].lat) * (Math.PI / 180);
    const dLon = (geom[i].lon - geom[i - 1].lon) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((geom[i - 1].lat * Math.PI) / 180) *
        Math.cos((geom[i].lat * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    len += 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  return len;
}

/** Point-in-polygon (ray casting) */
function pointInPolygon(
  lat: number,
  lon: number,
  poly: GeoJSON.Polygon
): boolean {
  const ring = poly.coordinates[0];
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

/** Distance from point to polygon boundary (approximate, metres) */
function distPointToPolygon(lat: number, lon: number, poly: GeoJSON.Polygon): number {
  const ring = poly.coordinates[0];
  let minDist = Infinity;
  for (let i = 1; i < ring.length; i++) {
    const [x1, y1] = ring[i - 1];
    const [x2, y2] = ring[i];
    const dx = x2 - x1, dy = y2 - y1;
    const len2 = dx * dx + dy * dy;
    let t = len2 > 0 ? ((lon - x1) * dx + (lat - y1) * dy) / len2 : 0;
    t = Math.max(0, Math.min(1, t));
    const nx = x1 + t * dx, ny = y1 + t * dy;
    const dLat = (lat - ny) * 111320;
    const dLon = (lon - nx) * 111320 * Math.cos((lat * Math.PI) / 180);
    const d = Math.sqrt(dLat * dLat + dLon * dLon);
    if (d < minDist) minDist = d;
  }
  return minDist;
}

/** Does a path segment intersect a polygon (approx: any point inside or within 50m of boundary) */
function pathIntersectsPolygon(
  geom: Array<{ lat: number; lon: number }>,
  poly: GeoJSON.Polygon
): boolean {
  for (const p of geom) {
    if (pointInPolygon(p.lat, p.lon, poly)) return true;
    if (distPointToPolygon(p.lat, p.lon, poly) < 50) return true;
  }
  return false;
}

// ── Determine category from tags ──────────────────────────────────────────────

function categoryFromTags(tags: Record<string, string>): string {
  if (tags.leisure === 'park') return 'Park';
  if (tags.leisure === 'garden') return 'Garden';
  if (tags.leisure === 'nature_reserve') return 'Nature Reserve';
  if (tags.leisure === 'recreation_ground') return 'Recreation Ground';
  if (tags.landuse === 'forest' || tags.natural === 'wood') return 'Forest';
  if (tags.landuse === 'grass' || tags.natural === 'grassland') return 'Grassland';
  if (tags.natural === 'scrub') return 'Scrubland';
  if (tags.boundary === 'national_park') return 'National Park';
  if (tags.landuse === 'village_green') return 'Village Green';
  return 'Green Space';
}

// ── Main ingest function ──────────────────────────────────────────────────────

export async function ingestOsmGreenSpaces(
  bbox: [number, number, number, number] = ACTIVE_CITY.bbox
): Promise<IngestResult> {
  const t0 = Date.now();
  const [south, west, north, east] = bbox;
  const errors: string[] = [];
  const warnings: string[] = [];
  let spacesUpserted = 0;

  // Tile the bbox in ~0.1° increments
  const TILE_SIZE = 0.1;
  const tiles: Array<[number, number, number, number]> = [];
  for (let s = south; s < north; s += TILE_SIZE) {
    for (let w = west; w < east; w += TILE_SIZE) {
      tiles.push([s, w, Math.min(s + TILE_SIZE, north), Math.min(w + TILE_SIZE, east)]);
    }
  }

  console.info(`[osm-ingest] Starting ingest of ${tiles.length} tiles over bbox ${bbox}`);

  for (const tile of tiles) {
    const [ts, tw, tn, te] = tile;
    let polygonElements: OsmElement[] = [];
    let pathElements: OsmElement[] = [];
    let entranceElements: OsmElement[] = [];

    // Fetch polygons
    try {
      const data = await overpassQuery(greenPolygonQuery(ts, tw, tn, te));
      polygonElements = (data.elements ?? []) as OsmElement[];
    } catch (err: any) {
      errors.push(`Polygon query failed for tile ${tile}: ${err.message}`);
      console.error(`[osm-ingest] ${errors[errors.length - 1]}`);
      continue;
    }

    // Fetch paths
    try {
      const data = await overpassQuery(footpathQuery(ts, tw, tn, te));
      pathElements = (data.elements ?? []) as OsmElement[];
    } catch (err: any) {
      warnings.push(`Path query failed for tile ${tile}: ${err.message}`);
      console.warn(`[osm-ingest] ${warnings[warnings.length - 1]}`);
    }

    // Fetch entrances
    try {
      const data = await overpassQuery(entranceQuery(ts, tw, tn, te));
      entranceElements = (data.elements ?? []) as OsmElement[];
    } catch (err: any) {
      warnings.push(`Entrance query failed for tile ${tile}: ${err.message}`);
    }

    // Process each polygon element
    for (const el of polygonElements) {
      if (el.type !== 'way' && el.type !== 'relation') continue;
      if (!el.geometry && el.type === 'way') continue;

      const tags = el.tags ?? {};
      const name = tags.name ?? tags['name:en'] ?? '';
      const osmType = el.type;
      const osmId = String(el.id);

      // Build geometry
      let geom: GeoJSON.Geometry | null = null;
      let centroid: { lat: number; lon: number } = { lat: 0, lon: 0 };
      let areaM2: number | null = null;

      if (el.type === 'way' && el.geometry) {
        const poly = wayToPolygon(el.geometry);
        if (poly) {
          geom = poly;
          centroid = centroidOfPolygon(poly);
          areaM2 = areaOfPolygon(poly);
        }
      }
      // Relations (multipolygon) — use bounding box centre as centroid fallback
      if (el.type === 'relation' && el.members) {
        const outerCoords = el.members
          .filter((m: any) => m.role === 'outer' && m.geometry)
          .flatMap((m: any) => m.geometry as Array<{ lat: number; lon: number }>);
        if (outerCoords.length > 0) {
          const poly = wayToPolygon(outerCoords);
          if (poly) {
            geom = poly;
            centroid = centroidOfPolygon(poly);
            areaM2 = areaOfPolygon(poly);
          }
        }
      }

      if (!geom) {
        warnings.push(`Skipping ${osmType}/${osmId} — could not build geometry`);
        continue;
      }

      // Find intersecting paths
      const intersectingPaths = pathElements.filter((p) => {
        if (!p.geometry) return false;
        return pathIntersectsPolygon(p.geometry, geom as GeoJSON.Polygon);
      });

      let totalPathLengthM = 0;
      for (const p of intersectingPaths) {
        if (p.geometry) totalPathLengthM += pathLengthM(p.geometry);
      }

      // Find nearby entrances (within 15 m of polygon boundary)
      const nearbyEntrances = entranceElements.filter((e) => {
        if (e.lat === undefined || e.lon === undefined) return false;
        return distPointToPolygon(e.lat, e.lon, geom as GeoJSON.Polygon) <= 15;
      });

      // Classify
      const accessStatus = classifyAccess(tags);
      const { walkClass, evidence } = classifyWalkClass(
        accessStatus,
        intersectingPaths.length,
        totalPathLengthM,
        tags,
        areaM2
      );

      const space: IngestedSpace = {
        osmType,
        osmId,
        osmVersion: (el as any).version ?? 0,
        name,
        category: categoryFromTags(tags),
        tags,
        geometry: geom,
        centroid,
        areaM2,
        accessStatus,
        walkClass,
        accessEvidence: evidence,
        pathCount: intersectingPaths.length,
        totalPathLengthM,
        entrances: nearbyEntrances
          .filter((e) => e.lat !== undefined && e.lon !== undefined)
          .map((e) => ({ lat: e.lat!, lon: e.lon!, tags: e.tags ?? {} })),
      };

      try {
        await upsertGreenSpace(space);
        spacesUpserted++;
      } catch (err: any) {
        errors.push(`Failed to upsert ${osmType}/${osmId}: ${err.message}`);
      }
    }

    // Rate-limit between tiles
    await new Promise((r) => setTimeout(r, 500));
  }

  return {
    spacesUpserted,
    errors,
    warnings,
    durationMs: Date.now() - t0,
  };
}

// ── Upsert into Prisma (SQLite JSON storage) ──────────────────────────────────

async function upsertGreenSpace(space: IngestedSpace): Promise<void> {
  const { db } = await import('@/lib/db');

  // Use Prisma's raw SQLite upsert (no PostGIS)
  await (db as any).greenSpace.upsert({
    where: {
      osmType_osmId: { osmType: space.osmType, osmId: space.osmId },
    },
    create: {
      osmType: space.osmType,
      osmId: space.osmId,
      osmVersion: space.osmVersion,
      name: space.name,
      category: space.category,
      tags: JSON.stringify(space.tags),
      geometryJson: JSON.stringify(space.geometry),
      centroidLat: space.centroid.lat,
      centroidLon: space.centroid.lon,
      areaM2: space.areaM2,
      accessStatus: space.accessStatus,
      walkClass: space.walkClass,
      accessEvidence: JSON.stringify(space.accessEvidence),
      pathCount: space.pathCount,
      totalPathLengthM: space.totalPathLengthM,
      entrances: JSON.stringify(space.entrances),
      source: 'OSM_OVERPASS',
      updatedAt: new Date(),
    },
    update: {
      osmVersion: space.osmVersion,
      name: space.name,
      category: space.category,
      tags: JSON.stringify(space.tags),
      geometryJson: JSON.stringify(space.geometry),
      centroidLat: space.centroid.lat,
      centroidLon: space.centroid.lon,
      areaM2: space.areaM2,
      accessStatus: space.accessStatus,
      walkClass: space.walkClass,
      accessEvidence: JSON.stringify(space.accessEvidence),
      pathCount: space.pathCount,
      totalPathLengthM: space.totalPathLengthM,
      entrances: JSON.stringify(space.entrances),
      source: 'OSM_OVERPASS',
      updatedAt: new Date(),
    },
  });
}
