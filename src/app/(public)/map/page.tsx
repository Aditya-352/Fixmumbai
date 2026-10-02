import React from 'react';
import { db } from '@/lib/db';
import MumbaiMap from '@/components/map/MumbaiMap';
import { StatusBadge } from '@/components/ui/Badge';
import Link from 'next/link';
import { Search, MapPin, Eye, PlusCircle } from 'lucide-react';

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

  const mapMarkers = reports.map(r => ({
    id: r.id,
    publicReportId: r.publicReportId,
    locality: r.locality,
    categoryName: r.category.name,
    status: r.status,
    latitude: r.latitude,
    longitude: r.longitude,
    wardCode: r.bmcWard?.wardCode,
    acNumber: r.assemblyConstituency?.acNumber
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 bg-white text-slate-900">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="text-red-600 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> Mumbai Civic GIS
          </div>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Interactive Public Civic Map</h1>
          <p className="text-xs text-slate-600 font-medium mt-1">
            Displaying {reports.length} public reports mapped across 24 BMC Administrative Wards.
          </p>
        </div>

        <Link
          href="/report"
          className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md flex items-center gap-1.5 self-start md:self-auto"
        >
          <PlusCircle className="w-4 h-4" /> Report Garbage Issue
        </Link>
      </div>

      {/* Filter Toolbar */}
      <form method="GET" className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div>
          <label className="text-slate-700 font-bold block mb-1">Search Keywords / Case ID</label>
          <div className="relative">
            <input
              type="text"
              name="search"
              defaultValue={search || ''}
              placeholder="e.g. MUM-000182 or Andheri"
              className="w-full bg-white border border-slate-300 rounded-xl pl-8 pr-3 py-2 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        <div>
          <label className="text-slate-700 font-bold block mb-1">BMC Ward</label>
          <select
            name="ward"
            defaultValue={ward || ''}
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
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
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
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
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-red-600 font-medium"
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
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl font-bold border border-red-600 shrink-0 shadow-sm"
            >
              Filter
            </button>
          </div>
        </div>
      </form>

      {/* Main Map + Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MumbaiMap reports={mapMarkers} height="600px" />
        </div>

        {/* Sidebar List */}
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>FILTERED CASE LIST</span>
            <span>{reports.length} cases</span>
          </div>

          {reports.length === 0 ? (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-2">
              <div className="text-slate-700 text-sm font-bold">No public reports match these filters</div>
              <p className="text-xs text-slate-500">Try selecting a different ward or status option.</p>
            </div>
          ) : (
            reports.map(r => (
              <div key={r.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-red-600">{r.publicReportId}</span>
                  <StatusBadge status={r.status} size="sm" />
                </div>
                <div className="font-extrabold text-slate-900 text-sm">{r.locality}</div>
                <div className="text-slate-600 flex items-center justify-between font-medium">
                  <span>{r.category.name}</span>
                  <span className="font-mono text-slate-500 font-bold">Ward {r.bmcWard?.wardCode || 'N/A'}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-end">
                  <Link
                    href={`/report/${r.publicReportId}`}
                    className="text-red-600 hover:underline font-extrabold flex items-center gap-1"
                  >
                    View Case File <Eye className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
