import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); // MLA or MP

    const whereClause: any = { active: true };
    if (type) {
      whereClause.type = type;
    }

    const representatives = await db.representative.findMany({
      where: whereClause,
      orderBy: { name: 'asc' },
      include: {
        ac: true,
        pc: true,
        terms: true
      }
    });

    return NextResponse.json({ success: true, count: representatives.length, data: representatives });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
