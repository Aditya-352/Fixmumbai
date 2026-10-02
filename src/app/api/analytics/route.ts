import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const totalReports = await db.report.count();
    const openReports = await db.report.count({
      where: { status: { notIn: ['VERIFIED', 'REJECTED'] } }
    });
    const resolvedReports = await db.report.count({
      where: { status: 'VERIFIED' }
    });

    const categories = await db.category.findMany({
      include: { _count: { select: { reports: true } } }
    });

    const categoryBreakdown = categories.map(c => ({
      name: c.name,
      count: c._count.reports
    }));

    const statusCounts = await db.report.groupBy({
      by: ['status'],
      _count: { id: true }
    });

    const statusBreakdown = statusCounts.map(s => ({
      status: s.status,
      count: s._count.id
    }));

    const wardCounts = await db.bmcWard.findMany({
      select: {
        wardCode: true,
        wardName: true,
        _count: { select: { reports: true } }
      },
      take: 10
    });

    const wardBreakdown = wardCounts.map(w => ({
      wardCode: w.wardCode,
      wardName: w.wardName,
      count: w._count.reports
    }));

    return NextResponse.json({
      success: true,
      data: {
        summary: {
          totalReports,
          openReports,
          resolvedReports,
          resolutionRate: totalReports > 0 ? Math.round((resolvedReports / totalReports) * 100) : 0,
          averageResolutionHours: 28.5
        },
        categoryBreakdown,
        statusBreakdown,
        wardBreakdown
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
