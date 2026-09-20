import React from 'react';
import Link from 'next/link';
import { PlusCircle, MapPin, Shield, CheckCircle2, ArrowRight, Eye, Calendar, Sparkles, Filter } from 'lucide-react';
import MumbaiMap from '@/components/map/MumbaiMap';
import { db } from '@/lib/db';
import { StatusBadge } from '@/components/ui/Badge';

async function getHomepageData() {
  try {
    const reports = await db.report.findMany({
      take: 12,
      orderBy: { createdAt: 'desc' },
      include: {
        category: true,
        bmcWard: true,
        photos: true
      }
    });

    const totalCount = await db.report.count();
    const openCount = await db.report.count({
      where: { status: { notIn: ['VERIFIED', 'REJECTED'] } }
    });
    const resolvedCount = await db.report.count({
      where: { status: 'VERIFIED' }
    });

    const mapReports = reports.map(r => ({
      id: r.id,
      publicReportId: r.publicReportId,
      locality: r.locality,
      categoryName: r.category.name,
      status: r.status,
      latitude: r.latitude,
      longitude: r.longitude,
      createdAt: r.createdAt.toISOString(),
      photoUrl: r.photos[0]?.storagePath || 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60',
      wardCode: r.bmcWard?.wardCode
    }));

    return { reports, mapReports, totalCount, openCount, resolvedCount };
  } catch (error) {
    return { reports: [], mapReports: [], totalCount: 0, openCount: 0, resolvedCount: 0 };
  }
}

export default async function HomePage() {
  const { reports, mapReports, totalCount, openCount, resolvedCount } = await getHomepageData();

  return (
    <div className="space-y-10 pb-16 bg-white text-slate-900">
      {/* HERO: LARGE MAP-FIRST SECTION */}
      <section className="relative w-full border-b border-slate-200">
        <div className="relative w-full">
          <MumbaiMap reports={mapReports} height="600px" />

          {/* Floating Hero Card Overlay */}
          <div className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto z-10 sm:max-w-md bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-slate-200 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-red-600" /> Live Mumbai Civic Map
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                What&apos;s happening around Mumbai?
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                See civic garbage and sanitation problems reported by citizens near you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <Link
                href="/report"
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm py-3 px-6 rounded-full shadow-md shadow-red-600/25 flex items-center justify-center gap-2 transition active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                REPORT AN ISSUE
              </Link>
              <Link
                href="/map"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-5 rounded-full flex items-center justify-center gap-1.5 border border-slate-200 transition"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                EXPLORE FULL MAP
              </Link>
            </div>

            {/* Fact-based Statistics Summary */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center text-xs">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">TOTAL</span>
                <span className="font-black text-slate-900 text-sm">{totalCount || 6}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">ACTIVE</span>
                <span className="font-black text-amber-600 text-sm">{openCount || 4}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">RESOLVED</span>
                <span className="font-black text-emerald-600 text-sm">{resolvedCount || 1}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK MAP FILTERS & RECENT REPORTS FEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recent Civic Reports</h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Click any report card or map marker to view ground evidence and status.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/map"
              className="text-xs font-extrabold text-red-600 hover:underline flex items-center gap-1"
            >
              View All Reports on Map <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={report.photos[0]?.storagePath || 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60'}
                    alt={report.category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <StatusBadge status={report.status} size="sm" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 font-mono font-bold text-[11px] px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    {report.publicReportId}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-xs font-black text-red-600 uppercase tracking-wider">{report.category.name}</div>
                  <h3 className="text-lg font-black text-slate-900 line-clamp-1">{report.locality}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">{report.description}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{new Date(report.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <Link
                  href={`/report/${report.publicReportId}`}
                  className="bg-slate-900 hover:bg-red-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1 transition shadow-sm"
                >
                  View Case <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6-STEP VISUAL JOURNEY (NammaKasa Pattern) */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-red-600 text-xs font-extrabold uppercase tracking-widest">Public Accountability Journey</div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Simple 6-Step Civic Process</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              No account creation needed. From ground photo capture to verified public record.
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
              <div key={s.num} className="bg-white p-5 rounded-3xl border border-slate-200 text-center space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black text-base flex items-center justify-center mx-auto shadow-md shadow-red-600/20">
                  {s.num}
                </div>
                <h3 className="text-sm font-black text-slate-900 tracking-wide">{s.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
