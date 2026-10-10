import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';

export interface ReverseGeocodeResult {
  /** "Bengaluru, Karnataka" — null when the provider could not resolve a name. */
  label: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
}

/**
 * GET /api/vegetation/reverse?lat&lon
 *
 * Resolves a coordinate to a human-readable place name so the UI can display the
 * visitor's ACTUAL location ("Bengaluru, Karnataka") instead of the coverage
 * city. This is a naming service only — it never widens the green-density data
 * footprint, which stays limited to Mumbai.
 *
 * Results are cached per ~1.1 km cell (2 decimal degrees) in-process so a crowd
 * of visitors in one area produces a single upstream request.
 */
const cache = new Map<string, ReverseGeocodeResult>();
const CACHE_MAX_ENTRIES = 500;

function cacheKey(lat: number, lon: number): string {
  return `${lat.toFixed(2)},${lon.toFixed(2)}`;
}

function remember(key: string, value: ReverseGeocodeResult): ReverseGeocodeResult {
  if (cache.size >= CACHE_MAX_ENTRIES) {
    const oldest = cache.keys().next().value;
    if (oldest !== undefined) cache.delete(oldest);
  }
  cache.set(key, value);
  return value;
}

/** Pick the most specific settlement level Nominatim returned. */
function pickCity(address: Record<string, string>): string | null {
  return (
    address.city ||
    address.town ||
    address.village ||
    address.municipality ||
    address.county ||
    null
  );
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const lat = parseFloat(searchParams.get('lat') ?? '');
  const lon = parseFloat(searchParams.get('lon') ?? '');

  if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    const err: ApiResponse<null> = {
      ok: false,
      data: null,
      error: { code: 'INVALID_PARAMS', message: 'lat and lon must be valid coordinates.' },
    };
    return NextResponse.json(err, { status: 400 });
  }

  const key = cacheKey(lat, lon);
  const cached = cache.get(key);
  if (cached) {
    const res: ApiResponse<ReverseGeocodeResult> = {
      ok: true,
      data: cached,
      meta: {
        sources: ['nominatim', 'memory-cache'],
        fetchedAt: new Date().toISOString(),
        cache: 'HIT',
        partial: false,
        warnings: [],
      },
      error: null,
    };
    return NextResponse.json(res);
  }

  const userAgent =
    process.env.OPENSTREETMAP_USER_AGENT || 'FixMumbai-CivicApp/1.0 (contact@fixmumbai.org)';

  const warnings: string[] = [];
  let result: ReverseGeocodeResult = { label: null, city: null, state: null, country: null };

  try {
    const url =
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}` +
      `&zoom=10&addressdetails=1&accept-language=en`;

    const upstream = await fetch(url, {
      headers: { 'User-Agent': userAgent, 'Accept-Language': 'en' },
      // Place names do not change often; a day of caching keeps us well inside
      // the Nominatim usage policy while staying accurate enough for a label.
      next: { revalidate: 86_400 },
    });

    if (upstream.ok) {
      const body = await upstream.json();
      const address: Record<string, string> = body?.address ?? {};
      const city = pickCity(address);
      const state = address.state ?? null;
      const country = address.country ?? null;
      // Suburb/city is the most useful granularity — "Bandra West, Mumbai".
      const locality = address.suburb || address.neighbourhood || address.quarter || city;
      const label = [locality, state === locality ? null : state].filter(Boolean).join(', ') || null;
      result = { label, city, state, country };
    } else {
      warnings.push(`Reverse geocoding unavailable upstream (HTTP ${upstream.status}).`);
    }
  } catch (e: any) {
    warnings.push(`Reverse geocoding failed: ${e?.message ?? 'unknown error'}.`);
  }

  // Only cache successful resolutions so a transient upstream failure is retried.
  if (result.label) remember(key, result);

  const res: ApiResponse<ReverseGeocodeResult> = {
    ok: true,
    data: result,
    meta: {
      sources: ['nominatim'],
      fetchedAt: new Date().toISOString(),
      cache: 'MISS',
      partial: result.label === null,
      warnings,
    },
    error: null,
  };

  return NextResponse.json(res, { headers: { 'Cache-Control': 'private, s-maxage=3600' } });
}
