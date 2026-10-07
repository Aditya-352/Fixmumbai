import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import {
  BMC_SML_DEFINITIONS,
  SAMPLE_CITIZEN_INITIATIVES,
  type BmcSmlScale,
  type CitizenGreeningInitiative,
  type BmcSmlDefinition,
} from '@/lib/green/sml-framework';
import { GREEN_EXPLORER_ENABLED } from '@/lib/green/config';

interface SmlApiResponse {
  definitions: Record<BmcSmlScale, BmcSmlDefinition>;
  initiatives: CitizenGreeningInitiative[];
  handbookCitation: string;
}

/**
 * GET /api/vegetation/sml
 *
 * Returns BMC S-M-L greening definitions and citizen-led initiatives.
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
  const scale = searchParams.get('scale') as BmcSmlScale | null;

  let initiatives = [...SAMPLE_CITIZEN_INITIATIVES];
  if (scale && scale !== ('ALL' as any)) {
    initiatives = initiatives.filter((i) => i.scale === scale);
  }

  const data: SmlApiResponse = {
    definitions: BMC_SML_DEFINITIONS,
    initiatives,
    handbookCitation:
      'GREENING MUMBAI — Citizen\'s Handbook for Greening Initiatives: From Balcony Gardens to Large Scale Plots (BMC & WRI India)',
  };

  return NextResponse.json<ApiResponse<SmlApiResponse>>({
    ok: true,
    data,
    meta: {
      sources: [
        'GREENING MUMBAI — Citizen\'s Handbook for Greening Initiatives (BMC & WRI India)',
      ],
      fetchedAt: new Date().toISOString(),
      cache: 'HIT',
      partial: false,
      warnings: [
        'S-M-L describes citizen intervention context and scale; strictly separate from satellite NDVI density.',
      ],
    },
    error: null,
  });
}
