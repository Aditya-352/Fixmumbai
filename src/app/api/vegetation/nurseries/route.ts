import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { getBmcNurseries, type BmcNurseryRecord } from '@/lib/green/nurseries-service';
import { GREEN_EXPLORER_ENABLED } from '@/lib/green/config';

/**
 * GET /api/vegetation/nurseries
 *
 * Returns all 27 BMC Wardwise Nurseries from Greening Mumbai Handbook Annexure pp. 82-83.
 * Supports filtering by ward (?ward=A) and spatial distance sorting (?lat=...&lon=...).
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
    },
    error: null,
  });
}
