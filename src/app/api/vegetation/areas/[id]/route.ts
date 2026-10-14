import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, GreenSpaceDetail } from '@/lib/green/types';
import { getGreenSpaceDetail, findStaticSpace, isStaticSpaceId } from '@/lib/green/spaces-service';
import { getCity } from '@/lib/green/config';
import {
  resolveCity,
  cityMeta,
  emptyCityWarnings,
  toErrorBody,
  CityParamError,
  type ResolvedCity,
} from '@/lib/green/city-param';

/**
 * GET /api/vegetation/areas/[id]?fromLat=&fromLon=&city=mumbai
 *
 * Returns full detail for a single green space, including NDVI, paths,
 * entrances, access evidence and image data.
 *
 * CITY PARAMETER
 * `?city=` scopes the lookup; omitting it preserves Mumbai behaviour exactly.
 * Two protections prevent a record being served for the wrong city:
 *   1. A city with no registered records cannot resolve any id, so the lookup
 *      is never attempted — it cannot borrow another city's record.
 *   2. Ids minted from the embedded fallback dataset carry the `static_` prefix
 *      and belong to the city whose fallback produced them, so a `static_*` id
 *      is rejected for any other city.
 *
 * NOTE: GreenSpace has no `city` column yet, so protection 2 is prefix-based
 * rather than a stored column. When a `city` column is added it must be used
 * here instead.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const fetchedAt = new Date().toISOString();
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { ok: false, data: null, error: { code: 'MISSING_ID', message: 'Space ID is required.' } },
      { status: 400 }
    );
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

  const fromLat = parseFloat(searchParams.get('fromLat') ?? String(city.centre[0]));
  const fromLon = parseFloat(searchParams.get('fromLon') ?? String(city.centre[1]));

  // A city with no records cannot own this id.
  if (resolved.dataStatus === 'EMPTY') {
    return NextResponse.json(
      {
        ok: true,
        data: null,
        meta: {
          sources: [],
          fetchedAt,
          cache: 'NONE',
          partial: false,
          warnings: emptyCityWarnings(resolved),
          city: cityMeta(resolved),
        },
        error: null,
      } as any,
      { status: 404 }
    );
  }

  // A static id belongs to whichever city's dataset minted it — NOT to Mumbai by
  // virtue of the `static_` prefix. Ownership is read from the data so a Pune
  // park is not misreported as a Mumbai record.
  if (isStaticSpaceId(id)) {
    const owner = findStaticSpace(id);
    if (owner && owner.city !== city.id) {
      return NextResponse.json(
        {
          ok: false,
          data: null,
          meta: { city: cityMeta(resolved) },
          error: {
            code: 'CITY_SCOPE_VIOLATION',
            message:
              `Green space "${id}" belongs to ${getCity(owner.city).name} ` +
              `and cannot be opened for ${city.name}.`,
          },
        } as any,
        { status: 404 }
      );
    }
  }

  let space: GreenSpaceDetail | null = null;
  try {
    space = await getGreenSpaceDetail(id, fromLat, fromLon, city.id);
  } catch (err: any) {
    return NextResponse.json(
      {
        ok: false, data: null,
        error: { code: 'DB_ERROR', message: `Failed to load space: ${err.message}` },
      },
      { status: 502 }
    );
  }

  if (!space) {
    return NextResponse.json(
      {
        ok: false,
        data: null,
        meta: { city: cityMeta(resolved) },
        error: { code: 'NOT_FOUND', message: `Green space ${id} not found in ${city.name}.` },
      } as any,
      { status: 404 }
    );
  }

  const response: ApiResponse<GreenSpaceDetail> = {
    ok: true,
    data: space,
    meta: {
      sources: ['osm-db', 'ndvi-db', 'images-db'],
      fetchedAt,
      cache: 'NONE',
      partial: false,
      warnings: [],
      city: cityMeta(resolved),
    } as any,
    error: null,
  };

  return NextResponse.json(response, {
    headers: { 'Cache-Control': 'private, s-maxage=300' },
  });
}
