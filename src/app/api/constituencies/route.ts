import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const acs = await db.assemblyConstituency.findMany({
      orderBy: { acNumber: 'asc' },
      include: {
        pc: true,
        representatives: true,
        _count: { select: { reports: true } }
      }
    });

    const acSummaries = await Promise.all(
      acs.map(async (ac) => {
        const openCount = await db.report.count({
          where: { assemblyConstituencyId: ac.id, status: { notIn: ['VERIFIED', 'REJECTED'] } }
        });
        const resolvedCount = await db.report.count({
          where: { assemblyConstituencyId: ac.id, status: 'VERIFIED' }
        });
        return {
          ...ac,
          totalReports: ac._count.reports,
          openReports: openCount,
          resolvedReports: resolvedCount
        };
      })
    );

    return NextResponse.json({ success: true, count: acSummaries.length, data: acSummaries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
