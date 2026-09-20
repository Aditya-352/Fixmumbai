import React from 'react';
import { db } from '@/lib/db';
import MumbaiMap from '@/components/map/MumbaiMap';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default async function AdminMapPage() {
  const reports = await db.report.findMany({
    orderBy: { createdAt: 'desc' },
    include: { category: true, bmcWard: true }
  });

  const mapMarkers = reports.map(r => ({
    id: r.id,
    publicReportId: r.publicReportId,
    locality: r.locality,
    categoryName: r.category.name,
    status: r.status,
    latitude: r.latitude,
    longitude: r.longitude,
    wardCode: r.bmcWard?.wardCode
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> Spatial Admin GIS
          </div>
          <h1 className="text-3xl font-black text-white mt-1">Admin GIS Operations Map</h1>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Back to Admin
        </Link>
      </div>

      <MumbaiMap reports={mapMarkers} height="650px" />
    </div>
  );
}
