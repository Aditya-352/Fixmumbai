import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import MapDashboardView from '@/components/map/MapDashboardView';
import { STATIC_GREEN_SPACES_FALLBACK } from '@/lib/green/static-spaces-fallback';
import { getCityDashboardStats } from '@/lib/green/dashboard-stats';
import { Sparkles, ArrowRight, ShieldCheck, Camera, MapPin, Eye, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getHomepageData() {
  try {
    const [reports, wards, categories, totalCount, openCount, resolvedCount, greenDbCount, cityStats] = await Promise.all([
      db.report.findMany({
        where: { moderationStatus: 'APPROVED' },
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

    const mapReports = reports.map(r => ({
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

    return {
      reports: mapReports,
      wards,
      categories,
      totalCount,
      openCount,
      resolvedCount,
      greenSitesCount,
      cityStats
    };
  } catch (error) {
    return {
      reports: [],
      wards: [],
      categories: [],
      totalCount: 0,
      openCount: 0,
      resolvedCount: 0,
      greenSitesCount: 3,
      cityStats: undefined
    };
  }
}

export default async function HomePage() {
  const {
    reports,
    wards,
    categories,
    totalCount,
    openCount,
    resolvedCount,
    greenSitesCount,
    cityStats
  } = await getHomepageData();

  return (
    <div className="space-y-12 pb-16 bg-transparent text-[#17243B]">
      {/* Redesigned Primary GIS Dashboard Experience */}
      <MapDashboardView
        initialReports={reports}
        wards={wards}
        categories={categories}
        totalCount={totalCount}
        openCount={openCount}
        resolvedCount={resolvedCount}
        greenSitesCount={greenSitesCount}
        initialFilters={{}}
        cityStats={cityStats}
      />

      {/* 6-STEP VISUAL ACCOUNTABILITY JOURNEY */}
      <section className="bg-white/80 backdrop-blur-xs border-y border-[#E2E8F0] py-16">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-[#087F5B] text-xs font-black uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Public Accountability Journey
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17243B] tracking-tight">
              Simple 6-Step Civic Process
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium">
              No account creation required. From ground photo capture to verified public municipal record.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: '1', title: 'SPOT', desc: 'See a civic issue' },
              { num: '2', title: 'REPORT', desc: 'Take a photo' },
              { num: '3', title: 'LOCATE', desc: 'Confirm pin' },
              { num: '4', title: 'PUBLISH', desc: 'Appears on map' },
              { num: '5', title: 'TRACK', desc: 'Follow status' },
              { num: '6', title: 'VERIFY', desc: 'Citizen confirmed' }
            ].map((s) => (
              <div
                key={s.num}
                className="bg-[#F8FAFC] p-5 rounded-3xl border border-[#E2E8F0] text-center space-y-2 shadow-xs hover:border-[#087F5B]/40 hover:bg-[#EAF6EF]/20 transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#087F5B] text-white font-black text-sm flex items-center justify-center mx-auto shadow-md shadow-[#087F5B]/20">
                  {s.num}
                </div>
                <h3 className="text-sm font-black text-[#17243B] tracking-wide">{s.title}</h3>
                <p className="text-xs text-[#64748B] font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
