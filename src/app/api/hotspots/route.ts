import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { calculatePlatformActivityScore } from '@/lib/activity-score';

export async function GET() {
  try {
    const wards = await db.bmcWard.findMany({
      include: {
        reports: {
          include: { category: true }
        }
      }
    });

    const hotspots = [];

    for (const ward of wards) {
      if (ward.reports.length === 0) continue;

      const totalReports = ward.reports.length;
      const openReports = ward.reports.filter(r => !['VERIFIED', 'REJECTED'].includes(r.status)).length;
      const recentReports24h = ward.reports.filter(r => {
        const diffHours = (Date.now() - new Date(r.createdAt).getTime()) / (1000 * 60 * 60);
        return diffHours <= 24;
      }).length;

      const resolvedReports = ward.reports.filter(r => r.status === 'VERIFIED').length;
      const distinctReporters = new Set(ward.reports.map(r => r.reporterEmail || r.id)).size;

      const platformActivityScore = calculatePlatformActivityScore({
        totalReports,
        openReports,
        recentReports24h,
        averageUnresolvedDays: openReports > 0 ? 2.5 : 0.5,
        distinctReporters
      });

      hotspots.push({
        id: ward.id,
        areaName: ward.wardName,
        wardCode: ward.wardCode,
        regionZone: ward.regionZone,
        latitude: ward.centerLatitude,
        longitude: ward.centerLongitude,
        totalReports,
        openReports,
        resolvedReports,
        platformActivityScore,
        trend: recentReports24h > 0 ? 'INCREASING' : 'STABLE'
      });
    }

    // Sort by platform activity score descending
    hotspots.sort((a, b) => b.platformActivityScore - a.platformActivityScore);

    return NextResponse.json({ success: true, count: hotspots.length, data: hotspots });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
