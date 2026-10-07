import React from 'react';
import { db } from '@/lib/db';
import MumbaiMap from '@/components/map/MumbaiMap';
import { StatusBadge } from '@/components/ui/Badge';
import Link from 'next/link';
import { Search, MapPin, Eye, PlusCircle, Filter, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default async function MapPage({
  searchParams
}: {
  searchParams: { ward?: string; category?: string; status?: string; search?: string }
}) {
  const { ward, category, status, search } = searchParams;

  const whereClause: any = { moderationStatus: 'APPROVED' };
  if (ward) whereClause.bmcWard = { wardCode: ward };
  if (category) whereClause.category = { name: category };
  if (status) whereClause.status = status;
  if (search) {
    whereClause.OR = [
      { publicReportId: { contains: search } },
      { locality: { contains: search } },
      { description: { contains: search } }
    ];
  }

  const reports = await db.report.findMany({
    where: whereClause,
    orderBy: { createdAt: 'desc' },
    include: {
      category: true,
      bmcWard: true,
      assemblyConstituency: true,
      photos: true
    }
  });

  const wards = await db.bmcWard.findMany({ select: { wardCode: true, wardName: true } });
  const categories = await db.category.findMany({ select: { name: true } });

  const totalCount = reports.length;
  const activeCount = reports.filter(r => !['VERIFIED', 'REJECTED'].includes(r.status)).length;
  const resolvedCount = reports.filter(r => r.status === 'VERIFIED' || r.status === 'RESOLUTION_SUBMITTED').length;

  const mapMarkers = reports.map(r => ({
    id: r.id,
    publicReportId: r.publicReportId,
    locality: r.locality,
    categoryName: r.category.name,
    status: r.status,
    latitude: r.latitude,
    longitude: r.longitude,
    createdAt: r.createdAt.toISOString(),
    photoUrl: r.photos[0]?.storagePath || 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60',
    wardCode: r.bmcWard?.wardCode,
    acNumber: r.assemblyConstituency?.acNumber
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 bg-white text-slate-900">
      {/* FLOATING HEADER & STATS BAR */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-2 z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Live Civic GIS Map
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Mumbai Civic Garbage & Blackspot Map
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            Report blackspots in 30 seconds. All submissions are GPS-stamped, attributed to BMC Ward Officials, and tracked publicly until cleared.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 z-10 shrink-0">
          <Link
            href="/report"
            className="bg-red-600 hover:bg-red-700 text-white font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition active:scale-95"
          >
            <PlusCircle className="w-5 h-5" />
            REPORT CIVIC ISSUE
          </Link>
        </div>
      </div>

      {/* NAMMAKASA LIVE METRICS COUNTER BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
          <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">TOTAL BLACKSPOTS</span>
          <span className="text-2xl font-black text-slate-900 mt-0.5 block">{totalCount}</span>
        </div>
        <div className="bg-amber-50/60 border border-amber-200/60 p-4 rounded-2xl text-center">
          <span className="text-[10px] text-amber-700 font-black uppercase tracking-wider block">ACTIVE / UNCLEARED</span>
          <span className="text-2xl font-black text-amber-700 mt-0.5 block">{activeCount}</span>
        </div>
        <div className="bg-emerald-50/60 border border-emerald-200/60 p-4 rounded-2xl text-center">
          <span className="text-[10px] text-emerald-700 font-black uppercase tracking-wider block">VERIFIED CLEARED</span>
          <span className="text-2xl font-black text-emerald-700 mt-0.5 block">{resolvedCount}</span>
        </div>
        <div className="bg-blue-50/60 border border-blue-200/60 p-4 rounded-2xl text-center">
          <span className="text-[10px] text-blue-700 font-black uppercase tracking-wider block">BMC WARDS COVERED</span>
          <span className="text-2xl font-black text-blue-700 mt-0.5 block">{wards.length || 24}</span>
        </div>
      </div>

      {/* NAMMAKASA TOOLBAR & SEARCH FILTER FORM */}
      <div className="bg-slate-50 p-4 sm:p-5 rounded-3xl border border-slate-200 space-y-4">
        {/* Quick Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="text-slate-400 font-black uppercase tracking-wider text-[10px] mr-1">QUICK TAB:</span>
            <Link
              href="/map"
              className={`px-4 py-2 rounded-full transition ${
                !status ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All ({totalCount})
            </Link>
            <Link
              href="/map?status=SUBMITTED"
              className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 ${
                status === 'SUBMITTED' || status === 'IN_PROGRESS'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-500" /> Active Blackspots
            </Link>
            <Link
              href="/map?status=VERIFIED"
              className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 ${
                status === 'VERIFIED'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Cleared / Resolved
            </Link>
          </div>
        </div>

        {/* Detailed Form Filters */}
        <form method="GET" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="text-slate-700 font-bold block mb-1">Search Keywords / Case ID</label>
            <div className="relative">
              <input
                type="text"
                name="search"
                defaultValue={search || ''}
                placeholder="e.g. MUM-000182 or Andheri"
                className="w-full bg-white border border-slate-300 rounded-2xl pl-9 pr-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="text-slate-700 font-bold block mb-1">BMC Administrative Ward</label>
            <select
              name="ward"
              defaultValue={ward || ''}
              className="w-full bg-white border border-slate-300 rounded-2xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
            >
              <option value="">All 24 Wards</option>
              {wards.map(w => (
                <option key={w.wardCode} value={w.wardCode}>{w.wardCode} - {w.wardName}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-700 font-bold block mb-1">Issue Category</label>
            <select
              name="category"
              defaultValue={category || ''}
              className="w-full bg-white border border-slate-300 rounded-2xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
            >
              <option value="">All Categories</option>
              {categories.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-700 font-bold block mb-1">Resolution Status</label>
            <div className="flex gap-2">
              <select
                name="status"
                defaultValue={status || ''}
                className="w-full bg-white border border-slate-300 rounded-2xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
              >
                <option value="">All Statuses</option>
                <option value="SUBMITTED">Submitted</option>
                <option value="ACKNOWLEDGED">Acknowledged</option>
                <option value="ASSIGNED">Assigned</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RESOLUTION_SUBMITTED">Resolution Submitted</option>
                <option value="VERIFIED">Verified</option>
                <option value="REOPENED">Reopened</option>
              </select>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-2xl font-black border border-red-600 shrink-0 shadow-md shadow-red-600/20 transition"
              >
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* MAIN MAP + INTERACTIVE SIDEBAR LIST GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Map Column */}
        <div className="lg:col-span-2">
          <MumbaiMap reports={mapMarkers} height="650px" />
        </div>

        {/* Sidebar Case List Column */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-black text-slate-500 px-1">
            <span className="uppercase tracking-wider">MAPPED BLACKSPOTS ({reports.length})</span>
            <span className="text-slate-400">Click card to highlight</span>
          </div>

          <div className="space-y-3 max-h-[610px] overflow-y-auto pr-1 custom-scrollbar">
            {reports.length === 0 ? (
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center space-y-2">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                <div className="text-slate-700 text-sm font-bold">No public reports match these filters</div>
                <p className="text-xs text-slate-500">Try selecting a different ward or status option.</p>
              </div>
            ) : (
              reports.map(r => (
                <div key={r.id} className="bg-white p-4 rounded-3xl border border-slate-200 hover:border-red-500 hover:shadow-lg transition space-y-3 text-xs group">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-full">{r.publicReportId}</span>
                    <StatusBadge status={r.status} size="sm" />
                  </div>

                  <div className="space-y-1">
                    <div className="font-black text-slate-900 text-sm group-hover:text-red-600 transition">{r.locality}</div>
                    <p className="text-slate-600 font-medium line-clamp-2 leading-relaxed">{r.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold pt-2 border-t border-slate-100">
                    <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-bold">{r.category.name}</span>
                    <span className="font-mono font-bold text-slate-600">Ward {r.bmcWard?.wardCode || 'N/A'}</span>
                  </div>

                  <div className="pt-1 flex justify-end">
                    <Link
                      href={`/report/${r.publicReportId}`}
                      className="text-red-600 hover:text-red-700 font-black flex items-center gap-1 hover:underline"
                    >
                      View Complaint Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
