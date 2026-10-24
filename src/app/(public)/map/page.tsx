import React from 'react';
import { db } from '@/lib/db';
import MapDashboardView from '@/components/map/MapDashboardView';
import { STATIC_GREEN_SPACES_FALLBACK } from '@/lib/green/static-spaces-fallback';
import { getCityDashboardStats } from '@/lib/green/dashboard-stats';

export const dynamic = 'force-dynamic';

export default async function MapPage({
  searchParams
}: {
  searchParams: { ward?: string; category?: string; status?: string; search?: string; city?: string }
}) {
  const { ward, category, status, search } = searchParams;

  const whereClause: any = { moderationStatus: 'APPROVED' };
  if (ward) whereClause.bmcWard = { wardCode: ward };
  if (category) whereClause.category = { name: category };
  if (status) whereClause.status = status;
  if (search) {
    whereClause.OR = [
      { publicReportId: { contains: search, mode: 'insensitive' } },
      { locality: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } }
    ];
  }

  // Parallel data fetching for speed
  const [reports, wards, categories, totalCount, openCount, resolvedCount, greenDbCount, cityStats] = await Promise.all([
    db.report.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      include: {
        category: true,
        bmcWard: true,
        assemblyConstituency: true,
        photos: true
      }
    }),
    db.bmcWard.findMany({
      select: { wardCode: true, wardName: true },
      orderBy: { wardCode: 'asc' }
    }),
    db.category.findMany({
      select: { name: true },
      orderBy: { name: 'asc' }
    }),
    db.report.count(),
    db.report.count({
      where: { status: { notIn: ['VERIFIED', 'REJECTED'] } }
    }),
    db.report.count({
      where: { status: 'VERIFIED' }
    }),
    db.greenSpace.count().catch(() => 0),
    // Real, city-scoped statistics for the hero.
    getCityDashboardStats().catch(() => undefined)
  ]);

  const greenSitesCount = greenDbCount > 0 ? greenDbCount : STATIC_GREEN_SPACES_FALLBACK.length;

  const mapMarkers = reports.map(r => ({
    id: r.id,
    publicReportId: r.publicReportId,
    locality: r.locality,
    categoryName: r.category.name,
    status: r.status,
    latitude: r.latitude,
    longitude: r.longitude,
    createdAt: r.createdAt.toISOString(),
    photoUrl: r.photos[0]?.storagePath,
    wardCode: r.bmcWard?.wardCode,
    acNumber: r.assemblyConstituency?.acNumber
  }));

  return (
    <MapDashboardView
      initialReports={mapMarkers}
      wards={wards}
      categories={categories}
      totalCount={totalCount}
      openCount={openCount}
      resolvedCount={resolvedCount}
      greenSitesCount={greenSitesCount}
      initialFilters={{
        ward,
        category,
        status,
        search
      }}
      cityStats={cityStats}
    />
  );
}
