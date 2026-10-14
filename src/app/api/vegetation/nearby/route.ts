import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { getNearbyGreenSpacesPaged, type NearbyPageMeta } from '@/lib/green/spaces-service';
import {
  CityParamError,
  cityMeta,
  emptyCityWarnings,
  resolveCity,
  toErrorBody,
  type ResolvedCity,
} from '@/lib/green/city-param';

/**
 * GET /api/vegetation/nearby?lat&lon&radius&type&verifiedOnly&city
 *
 * Returns green spaces near the given point, sorted by walkability evidence
 * then NDVI class then distance. Reads from DB only — never calls Overpass.
 *
 * `?city=` selects the city. Omitting it preserves Mumbai behaviour. The
 * selected city drives the bbox check, the distance reference point and the
 * service itself, so a Pune or Bengaluru request can never be answered with
 * Mumbai records.
 *
 * Out-of-bounds behaviour (fix for Issue D — non-Mumbai visitors):
 * When the visitor's coordinates are outside the selected city's service area,
 * we still return ALL of that city's green spaces (allCity=true) so the map and
 * sidebar remain functional. The distance values will be large but accurate. A
 * warning is added to the response so the frontend can display a helpful
 * message.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const fetchedAt = new Date().toISOString();

  // ── Validation ────────────────────────────────────────────────────────────
  const latRaw = searchParams.get('lat');
  const lonRaw = searchParams.get('lon');
  const radiusRaw = searchParams.get('radius') ?? '5000';
  const type = (searchParams.get('type') ?? 'all') as any;
  const verifiedOnly = searchParams.get('verifiedOnly') === 'true';
  const allCity = searchParams.get('allCity') === 'true';

  // ── City resolution ───────────────────────────────────────────────────────
  // Must happen before any bbox/centre maths, otherwise a non-Mumbai request
  // is measured against Mumbai's bbox and silently served Mumbai's data.
  let resolved: ResolvedCity;
  try {
    resolved = resolveCity(searchParams);
  } catch (e) {
    if (e instanceof CityParamError) {
      return NextResponse.json(toErrorBody(e), { status: e.status });
    }
    throw e;
  }
  const city = resolved.city;

  // A city with no registered records must return an explicitly labelled empty
  // response. It must never fall through to another city's data.
  if (resolved.dataStatus === 'EMPTY') {
    return NextResponse.json({
      ok: true,
      data: [],
      meta: {
        sources: [],
        fetchedAt,
        cache: 'NONE',
        partial: false,
        warnings: emptyCityWarnings(resolved),
        city: cityMeta(resolved),
      },
      error: null,
    } satisfies ApiResponse<never[]>);
  }

  if (latRaw === null || lonRaw === null) {
    const err: ApiResponse<null> = {
      ok: false, data: null,
      error: { code: 'MISSING_PARAMS', message: 'lat and lon are required query parameters.' },
    };
    return NextResponse.json(err, { status: 400 });
  }

  const lat = parseFloat(latRaw);
  const lon = parseFloat(lonRaw);
  const radiusM = parseInt(radiusRaw, 10);

  if (isNaN(lat) || isNaN(lon)) {
    const err: ApiResponse<null> = {
      ok: false, data: null,
      error: { code: 'INVALID_PARAMS', message: 'lat and lon must be numeric.' },
    };
    return NextResponse.json(err, { status: 400 });
  }

  if (isNaN(radiusM) || radiusM < 100 || radiusM > city.maxRadiusM) {
    const err: ApiResponse<null> = {
      ok: false, data: null,
      error: { code: 'INVALID_RADIUS', message: `radius must be between 100 and ${city.maxRadiusM} metres.` },
    };
    return NextResponse.json(err, { status: 400 });
  }

  // ── Out-of-bounds detection (non-blocking) ────────────────────────────────
  // Visitors outside Mumbai can still explore the map — we show all city data
  // rather than returning an error that breaks the entire interface.
  const [south, west, north, east] = city.bbox;
  const pad = 0.5;
  const isOutsideCity =
    lat < south - pad || lat > north + pad || lon < west - pad || lon > east + pad;

  const warnings: string[] = [];
  if (isOutsideCity) {
    warnings.push(
      `Your location (${lat.toFixed(4)}, ${lon.toFixed(4)}) is outside the ${city.name} service area. ` +
      `Showing all ${city.name} green spaces. Distance values are from the ${city.name} city centre.`
    );
  }

  // ── Query ────────────────────────────────────────────────────────────────
  let spaces: any[] = [];
  let partial = false;
  // Carries the true match count so the UI can distinguish "50 returned" from
  // "50 exist" when the page limit truncates the result.
  let pageMeta: NearbyPageMeta | null = null;

  // When user is outside the city, show all of that city's spaces rather than nearby-only
  const effectiveAllCity = allCity || isOutsideCity;

  // When outside the city, use the city centre as distance reference point
  const queryLat = isOutsideCity ? city.centre[0] : lat;
  const queryLon = isOutsideCity ? city.centre[1] : lon;

  try {
    const page = await getNearbyGreenSpacesPaged({
      lat: queryLat,
      lon: queryLon,
      radiusM,
      type,
      verifiedOnly,
      allCity: effectiveAllCity,
      city: city.id,
    });
    spaces = page.spaces;
    pageMeta = page.meta;
  } catch (err: any) {
    partial = true;
    warnings.push(`Space query failed: ${err.message}`);
  }

  const sources: string[] = ['osm-db'];

  // If DB returned nothing, report it honestly — do NOT silently show fake data.
  // The frontend should surface a "seed required" message for operators.
  if (spaces.length === 0 && !partial) {
    warnings.push(
      'No green space records found in the database. ' +
      'Run the green space seeding script to populate: ' +
      'npx ts-node scripts/green/seed-mumbai-spaces.ts'
    );
    sources.push('db-empty');
  }

  const response: ApiResponse<typeof spaces> = {
    ok: true,
    data: spaces,
    meta: {
      sources,
      fetchedAt,
      cache: 'NONE',
      partial,
      warnings,
      city: cityMeta(resolved),
      ...(pageMeta
        ? {
            total: pageMeta.total,
            returned: pageMeta.returned,
            limit: pageMeta.limit,
            hasMore: pageMeta.hasMore,
          }
        : {}),
    },
    error: null,
  };

  return NextResponse.json(response, {
    headers: { 'Cache-Control': 'private, s-maxage=60' },
  });
}
