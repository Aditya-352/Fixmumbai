import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, GreenSpaceDetail } from '@/lib/green/types';
import { getGreenSpaceDetail } from '@/lib/green/spaces-service';
import { ACTIVE_CITY } from '@/lib/green/config';

/**
 * GET /api/vegetation/areas/[id]?fromLat=&fromLon=
 *
 * Returns full detail for a single green space, including NDVI, paths,
 * entrances, access evidence and image data.
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

  const fromLat = parseFloat(searchParams.get('fromLat') ?? String(ACTIVE_CITY.centre[0]));
  const fromLon = parseFloat(searchParams.get('fromLon') ?? String(ACTIVE_CITY.centre[1]));

  let space: GreenSpaceDetail | null = null;
  try {
    space = await getGreenSpaceDetail(id, fromLat, fromLon);
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
      { ok: false, data: null, error: { code: 'NOT_FOUND', message: `Green space ${id} not found.` } },
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
    },
    error: null,
  };

  return NextResponse.json(response, {
    headers: { 'Cache-Control': 'private, s-maxage=300' },
  });
}
