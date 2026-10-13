import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { getBmcNurseries, type BmcNurseryRecord } from '@/lib/green/nurseries-service';
import { GREEN_EXPLORER_ENABLED } from '@/lib/green/config';
import { resolveCity, cityMeta, toErrorBody, CityParamError, NOT_AVAILABLE_WARNING } from '@/lib/green/city-param';

/**
 * GET /api/vegetation/nurseries?city=mumbai
 *
 * Returns all 27 BMC Wardwise Nurseries from Greening Mumbai Handbook Annexure pp. 82-83.
 * Supports filtering by ward (?ward=A) and spatial distance sorting (?lat=...&lon=...).
 *
 * CITY PARAMETER
 * This dataset is Mumbai-specific: it is transcribed from the BMC & WRI India
 * "Greening Mumbai" handbook and has no analogue for Pune or Bengaluru. An
 * explicit non-Mumbai request therefore returns HTTP 200 with `data: []` and a
 * NOT_AVAILABLE_FOR_CITY warning, so BMC ward names and addresses are never
 * presented as belonging to another city. No equivalent dataset has been
 * invented for the other cities.
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

  let resolved;
  try {
    resolved = resolveCity(req.nextUrl.searchParams);
  } catch (e) {
    if (e instanceof CityParamError) {
      return NextResponse.json(toErrorBody(e), { status: e.status });
    }
    throw e;
  }
  const city = resolved.city;

  if (city.id !== 'mumbai') {
    return NextResponse.json({
      ok: true,
      data: [],
      meta: {
        sources: [],
        fetchedAt: new Date().toISOString(),
        cache: 'HIT',
        partial: false,
        warnings: [
          `${NOT_AVAILABLE_WARNING}: municipal nursery records are published only for Mumbai, ` +
            `from the BMC & WRI India "Greening Mumbai" handbook annexure. No dataset has been ` +
            `established for ${city.name}.`,
        ],
        city: cityMeta(resolved),
      },
      error: null,
    } as any);
  }

  const { searchParams } = new URL(req.url);
  const ward = searchParams.get('ward') || undefined;
  const search = searchParams.get('search') || undefined;
  const latStr = searchParams.get('lat');
  const lonStr = searchParams.get('lon');

  const userLat = latStr ? parseFloat(latStr) : undefined;
  const userLon = lonStr ? parseFloat(lonStr) : undefined;

  const nurseries = getBmcNurseries({
    ward,
    search,
    userLat: !isNaN(userLat!) ? userLat : undefined,
    userLon: !isNaN(userLon!) ? userLon : undefined,
  });

  return NextResponse.json<ApiResponse<BmcNurseryRecord[]>>({
    ok: true,
    data: nurseries,
    meta: {
      sources: [
        'GREENING MUMBAI — Citizen\'s Handbook for Greening Initiatives: From Balcony Gardens to Large Scale Plots (Annexure pp. 82–83)',
        'Brihanmumbai Municipal Corporation (BMC) & WRI India',
      ],
      fetchedAt: new Date().toISOString(),
      cache: 'HIT',
      partial: false,
      warnings: [],
      city: cityMeta(resolved),
      recordCount: nurseries.length,
      complete: true,
    } as any,
    error: null,
  });
}
