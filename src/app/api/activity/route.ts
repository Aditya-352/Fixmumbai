import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const timelineEvents = await db.timelineEvent.findMany({
      where: { publicVisibility: true },
      take: 30,
      orderBy: { timestamp: 'desc' },
      include: {
        report: {
          select: {
            publicReportId: true,
            locality: true,
            status: true,
            category: { select: { name: true } },
            bmcWard: { select: { wardCode: true } }
          }
        }
      }
    });

    return NextResponse.json({ success: true, count: timelineEvents.length, data: timelineEvents });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
