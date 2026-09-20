import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const acNumberParsed = parseInt(params.id);
    const ac = await db.assemblyConstituency.findFirst({
      where: {
        OR: [
          { id: params.id },
          ...(isNaN(acNumberParsed) ? [] : [{ acNumber: acNumberParsed }])
        ]
      },
      include: {
        pc: true,
        representatives: { include: { terms: true } },
        reports: {
          take: 30,
          orderBy: { createdAt: 'desc' },
          include: { category: true, photos: true, bmcWard: true }
        }
      }
    });

    if (!ac) {
      return NextResponse.json({ success: false, error: 'Constituency not found' }, { status: 404 });
    }

    const openReports = await db.report.count({
      where: { assemblyConstituencyId: ac.id, status: { notIn: ['VERIFIED', 'REJECTED'] } }
    });

    const resolvedReports = await db.report.count({
      where: { assemblyConstituencyId: ac.id, status: 'VERIFIED' }
    });

    return NextResponse.json({
      success: true,
      data: {
        ...ac,
        totalReports: ac.reports.length,
        openReports,
        resolvedReports
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
