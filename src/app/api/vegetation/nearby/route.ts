import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { getNearbyGreenSpaces } from '@/lib/green/spaces-service';
import { ACTIVE_CITY } from '@/lib/green/config';

/**
 * GET /api/vegetation/nearby?lat&lon&radius&type&verifiedOnly
 *
 * Returns green spaces near the given point, sorted by walkability evidence
 * then NDVI class then distance. Reads from DB only — never calls Overpass.
 *
 * Out-of-bounds behaviour (fix for Issue D — non-Mumbai visitors):
 * When the visitor's coordinates are outside the Mumbai service area, we still
 * return ALL city green spaces (allCity=true) so the map and sidebar remain
 * functional. The distance values will be large but accurate. A warning is
 * added to the response so the frontend can display a helpful message.
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

  if (isNaN(radiusM) || radiusM < 100 || radiusM > ACTIVE_CITY.maxRadiusM) {
    const err: ApiResponse<null> = {
      ok: false, data: null,
      error: { code: 'INVALID_RADIUS', message: `radius must be between 100 and ${ACTIVE_CITY.maxRadiusM} metres.` },
    };
    return NextResponse.json(err, { status: 400 });
  }

  // ── Out-of-bounds detection (non-blocking) ────────────────────────────────
  // Visitors outside Mumbai can still explore the map — we show all city data
  // rather than returning an error that breaks the entire interface.
  const [south, west, north, east] = ACTIVE_CITY.bbox;
  const pad = 0.5;
  const isOutsideMumbai =
    lat < south - pad || lat > north + pad || lon < west - pad || lon > east + pad;

  const warnings: string[] = [];
  if (isOutsideMumbai) {
    warnings.push(
      `Your location (${lat.toFixed(4)}, ${lon.toFixed(4)}) is outside the Mumbai service area. ` +
      `Showing all Mumbai green spaces. Distance values are from Mumbai city centre.`
    );
  }

  // ── Query ────────────────────────────────────────────────────────────────
  let spaces: any[] = [];
  let partial = false;

  // When user is outside Mumbai, show all city spaces rather than nearby-only
  const effectiveAllCity = allCity || isOutsideMumbai;

  // When outside Mumbai, use city centre as distance reference point
  const queryLat = isOutsideMumbai ? ACTIVE_CITY.centre[0] : lat;
  const queryLon = isOutsideMumbai ? ACTIVE_CITY.centre[1] : lon;

  try {
    spaces = await getNearbyGreenSpaces({
      lat: queryLat,
      lon: queryLon,
      radiusM,
      type,
      verifiedOnly,
      allCity: effectiveAllCity,
    });
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
    },
    error: null,
  };

  return NextResponse.json(response, {
    headers: { 'Cache-Control': 'private, s-maxage=60' },
  });
}
