import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { getNearbyGreenSpaces } from '@/lib/green/spaces-service';
import { ACTIVE_CITY } from '@/lib/green/config';

/**
 * GET /api/vegetation/nearby?lat&lon&radius&type&verifiedOnly
 *
 * Returns green spaces near the given point, sorted by walkability evidence
 * then NDVI class then distance. Reads from DB only — never calls Overpass.
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

  const [south, west, north, east] = ACTIVE_CITY.bbox;
  const pad = 0.5;

  if (isNaN(lat) || isNaN(lon)) {
    const err: ApiResponse<null> = {
      ok: false, data: null,
      error: { code: 'INVALID_PARAMS', message: 'lat and lon must be numeric.' },
    };
    return NextResponse.json(err, { status: 400 });
  }

  if (lat < south - pad || lat > north + pad || lon < west - pad || lon > east + pad) {
    const err: ApiResponse<null> = {
      ok: false, data: null,
      error: { code: 'OUT_OF_BOUNDS', message: `Coordinates outside ${ACTIVE_CITY.name} service area.` },
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

  // ── Query ────────────────────────────────────────────────────────────────
  const warnings: string[] = [];
  let spaces: any[] = [];
  let partial = false;

  try {
    spaces = await getNearbyGreenSpaces({ lat, lon, radiusM, type, verifiedOnly, allCity });
  } catch (err: any) {
    partial = true;
    warnings.push(`Space query failed: ${err.message}`);
  }

  const response: ApiResponse<typeof spaces> = {
    ok: true,
    data: spaces,
    meta: {
      sources: ['osm-db'],
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
