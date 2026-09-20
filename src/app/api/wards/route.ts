import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const wards = await db.bmcWard.findMany({
      orderBy: { wardCode: 'asc' },
      include: {
        _count: {
          select: { reports: true }
        }
      }
    });

    // Count open & resolved reports for each ward
    const wardSummaries = await Promise.all(
      wards.map(async (w) => {
        const openCount = await db.report.count({
          where: { bmcWardId: w.id, status: { notIn: ['VERIFIED', 'REJECTED'] } }
        });
        const resolvedCount = await db.report.count({
          where: { bmcWardId: w.id, status: 'VERIFIED' }
        });
        return {
          ...w,
          totalReports: w._count.reports,
          openReports: openCount,
          resolvedReports: resolvedCount
        };
      })
    );

    return NextResponse.json({ success: true, count: wardSummaries.length, data: wardSummaries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
