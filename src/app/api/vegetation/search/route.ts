import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, GeocodeResult } from '@/lib/green/types';
import { GREEN_EXPLORER_ENABLED } from '@/lib/green/config';
import {
  resolveCity,
  cityMeta,
  emptyCityWarnings,
  toErrorBody,
  CityParamError,
  type ResolvedCity,
} from '@/lib/green/city-param';

// Load static local Mumbai places and administrative wards
const mumbaiPlaces = require('@/data/mumbai-places.json');
const mumbaiWards = require('@/data/mumbai-wards.json');

const SYNONYMS: Record<string, string> = {
  sgnp: 'Sanjay Gandhi National Park',
  bkc: 'Bandra Kurla Complex',
  cst: 'Chhatrapati Shivaji Maharaj Terminus',
  vjti: 'Matunga',
  iit: 'IIT Bombay Powai',
  aarey: 'Aarey Milk Colony',
  mahim: 'Maharashtra Nature Park Mahim',
  rc: 'Mahalaxmi Racecourse',
  bpgc: 'Bombay Presidency Golf Club Chembur',
};

/**
 * GET /api/vegetation/search?q=bandra&city=mumbai
 *
 * CITY PARAMETER
 * `?city=` selects the city; omitting it preserves Mumbai behaviour. A city with
 * no registered records returns HTTP 200 with `data: []` and
 * `meta.sources: []` — never another city's results.
 *
 * The Tier 1 local gazetteers (Mumbai localities and BMC wards) are applied only
 * to Mumbai. For other cities Tier 1 is skipped rather than returning Mumbai
 * names for a Pune or Bengaluru query.
 *
 * Multi-Tier Authentic Search Architecture for Mumbai:
 * 1. Fast local indexed match (Mumbai localities, neighbourhoods, 24 BMC Wards)
 * 2. Database Green Spaces & Nature Reserves (Sanjay Gandhi National Park, Aarey, Shivaji Park, etc.)
 * 3. Live OpenStreetMap Geocoding (Photon & Nominatim bounded to Mumbai MMR)
 */
export async function GET(req: NextRequest) {
  if (!GREEN_EXPLORER_ENABLED) {
    return NextResponse.json<ApiResponse<never>>(
      {
        ok: false,
        data: null,
        error: { code: 'FEATURE_DISABLED', message: 'Green Density Explorer is disabled' },
      },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(req.url);
  const rawQuery = searchParams.get('q')?.trim();

  if (!rawQuery || rawQuery.length < 2) {
    return NextResponse.json<ApiResponse<GeocodeResult[]>>({
      ok: true,
      data: [],
      meta: {
        sources: ['local'],
        fetchedAt: new Date().toISOString(),
        cache: 'NONE',
        partial: false,
        warnings: [],
      },
      error: null,
    });
  }

  // ── City resolution ───────────────────────────────────────────────────────
  let resolved: ResolvedCity;
  try {
    resolved = resolveCity(req.nextUrl.searchParams);
  } catch (e) {
    if (e instanceof CityParamError) {
      return NextResponse.json(toErrorBody(e), { status: e.status });
    }
    throw e;
  }
  const city = resolved.city;

  if (resolved.dataStatus === 'EMPTY') {
    return NextResponse.json({
      ok: true,
      data: [],
      meta: {
        sources: [],
        fetchedAt: new Date().toISOString(),
        cache: 'NONE',
        partial: false,
        warnings: emptyCityWarnings(resolved),
        city: cityMeta(resolved),
      },
      error: null,
    } as any);
  }

  // Tier 1 is a Mumbai-only gazetteer.
  const useLocalGazetteer = city.id === 'mumbai';

  const query = SYNONYMS[rawQuery.toLowerCase()] || rawQuery;
  const qLower = query.toLowerCase();
  const results: GeocodeResult[] = [];
  const seenKeys = new Set<string>();

  const addResult = (res: GeocodeResult) => {
    // Deduplicate by close geographic coordinate & name
    const key = `${res.name.toLowerCase()}_${res.lat.toFixed(3)}_${res.lon.toFixed(3)}`;
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      results.push(res);
    }
  };

  // ── Tier 1: Local Mumbai Places & Wards (Instant 0ms match) ─────────────────
  // Mumbai only — returning "Bandra West" for ?city=pune would be cross-city
  // contamination, so the loop is skipped entirely for other cities.
  // A. Mumbai Places / Localities
  for (const p of useLocalGazetteer ? mumbaiPlaces : []) {
    if (
      p.name.toLowerCase().includes(qLower) ||
      (p.wardCode && p.wardCode.toLowerCase().includes(qLower)) ||
      (p.region && p.region.toLowerCase().includes(qLower))
    ) {
      const cleanName = p.name.split('(')[0].trim();
      addResult({
        name: cleanName,
        displayName: `${p.name} · Ward ${p.wardCode}, ${p.region}`,
        lat: p.lat,
        lon: p.lng,
        category: 'LOCALITY',
        ward: p.wardCode,
        source: 'local',
      });
    }
  }

  // B. BMC Administrative Wards
  for (const w of useLocalGazetteer ? mumbaiWards : []) {
    if (
      w.wardCode.toLowerCase().includes(qLower) ||
      w.wardName.toLowerCase().includes(qLower) ||
      (w.regionZone && w.regionZone.toLowerCase().includes(qLower))
    ) {
      addResult({
        name: `Ward ${w.wardCode}`,
        displayName: `${w.wardName} · ${w.regionZone}`,
        lat: w.centerLatitude || 19.076,
        lon: w.centerLongitude || 72.877,
        category: 'WARD',
        ward: w.wardCode,
        source: 'local',
      });
    }
  }

  // ── Tier 2: Database Green Spaces & Nature Reserves ─────────────────────────
  // GreenSpace currently holds Mumbai records only, so this tier is Mumbai-only
  // for the same anti-contamination reason as Tier 1.
  try {
    if (!useLocalGazetteer) throw new Error('skip-local-tiers');
    const { db } = await import('@/lib/db');
    const spaces = await (db as any).greenSpace.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { category: { contains: query } },
          { name: { contains: rawQuery } },
        ],
      },
      take: 8,
    });

    for (const s of spaces) {
      const areaHa = s.areaM2 ? (s.areaM2 / 10000).toFixed(1) : null;
      addResult({
        name: s.name,
        displayName: `${s.name} · ${s.category}${areaHa ? ` · ${areaHa} ha` : ''}`,
        lat: s.centroidLat,
        lon: s.centroidLon,
        category: s.category === 'Forest' ? 'FOREST' : s.category === 'Nature Reserve' ? 'NATURE_RESERVE' : 'PARK',
        source: 'green_space',
      });
    }
  } catch {
    // Local DB query fallback / tier intentionally skipped for this city
  }

  // ── Tier 3: Live OpenStreetMap Geocoding (Photon & Nominatim bounded) ───────
  const [south, west, north, east] = city.bbox;
  const userAgent = process.env.OPENSTREETMAP_USER_AGENT || 'FixMumbai-CivicApp/1.0 (contact@fixmumbai.org)';

  try {
    const photonUrl = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&bbox=${west},${south},${east},${north}&limit=6`;
    const photonRes = await fetch(photonUrl, {
      headers: { 'User-Agent': userAgent },
      next: { revalidate: 3600 },
    });

    if (photonRes.ok) {
      const data = await photonRes.json();
      const features = data.features ?? [];
      for (const f of features) {
        const p = f.properties;
        const name = p.name || p.street || query;
        // The query bbox is already scoped to the selected city, so the
        // coordinates are correct; only a missing `city` property needs a
        // fallback. That fallback must name the SELECTED city — hardcoding
        // 'Mumbai' labelled every Pune and Bengaluru result as being in
        // Mumbai. For Mumbai the output is unchanged.
        const cityLabel = city.name.replace(/,\s*India$/, '');
        const displayName = [p.name, p.street, p.district, p.city || cityLabel]
          .filter(Boolean)
          .join(', ');

        addResult({
          name,
          displayName,
          lat: f.geometry.coordinates[1],
          lon: f.geometry.coordinates[0],
          category: p.osm_value === 'park' ? 'PARK' : p.osm_value === 'forest' ? 'FOREST' : 'LANDMARK',
          source: 'photon',
        });
      }
    }
  } catch {
    // Photon error fallback to existing results
  }

  return NextResponse.json<ApiResponse<GeocodeResult[]>>({
    ok: true,
    data: results.slice(0, 10),
    meta: {
      sources: useLocalGazetteer
        ? ['local', 'prisma_green_spaces', 'photon']
        : ['photon'],
      fetchedAt: new Date().toISOString(),
      cache: 'HIT',
      partial: false,
      warnings: [],
      city: cityMeta(resolved),
    } as any,
    error: null,
  });
}
