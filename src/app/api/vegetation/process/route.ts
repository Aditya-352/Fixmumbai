import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { ingestOsmGreenSpaces } from '@/lib/green/osm-ingest';
import { ACTIVE_CITY } from '@/lib/green/config';

/**
 * POST /api/vegetation/process?task=ingest
 *
 * Runs the OSM ingestion pipeline for Mumbai green spaces and footpaths.
 */
export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const task = searchParams.get('task');

  // Simple token / secret auth check or local execution
  const authHeader = req.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    // allow localhost/dev
    const host = req.headers.get('host') || '';
    if (!host.includes('localhost') && !host.includes('127.0.0.1')) {
      return NextResponse.json<ApiResponse<never>>(
        {
          ok: false,
          data: null,
          error: { code: 'UNAUTHORIZED', message: 'Unauthorized process call' },
        },
        { status: 401 }
      );
    }
  }

  if (task === 'ingest') {
    try {
      const result = await ingestOsmGreenSpaces(ACTIVE_CITY.bbox);
      return NextResponse.json<ApiResponse<any>>({
        ok: true,
        data: result,
        meta: {
          sources: ['Overpass API'],
          fetchedAt: new Date().toISOString(),
          cache: 'NONE',
          partial: false,
          warnings: result.warnings,
        },
        error: null,
      });
    } catch (err: any) {
      return NextResponse.json<ApiResponse<never>>(
        {
          ok: false,
          data: null,
          error: { code: 'INGEST_FAILED', message: err.message || 'Ingestion failed' },
        },
        { status: 500 }
      );
    }
  }

  return NextResponse.json<ApiResponse<never>>(
    {
      ok: false,
      data: null,
      error: { code: 'INVALID_TASK', message: 'Supported task: ingest' },
    },
    { status: 400 }
  );
}
