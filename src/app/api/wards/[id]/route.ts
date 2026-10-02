import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const ward = await db.bmcWard.findFirst({
      where: {
        OR: [
          { id: params.id },
          { wardCode: params.id }
        ]
      },
      include: {
        reports: {
          take: 30,
          orderBy: { createdAt: 'desc' },
          include: { category: true, photos: true }
        }
      }
    });

    if (!ward) {
      return NextResponse.json({ success: false, error: 'Ward not found' }, { status: 404 });
    }

    const openReports = await db.report.count({
      where: { bmcWardId: ward.id, status: { notIn: ['VERIFIED', 'REJECTED'] } }
    });

    const resolvedReports = await db.report.count({
      where: { bmcWardId: ward.id, status: 'VERIFIED' }
    });

    return NextResponse.json({
      success: true,
      data: {
        ...ward,
        totalReports: ward.reports.length,
        openReports,
        resolvedReports
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
