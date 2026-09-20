import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Building2, MapPin, ExternalLink, ShieldCheck, ArrowLeft, Eye } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';
import MumbaiMap from '@/components/map/MumbaiMap';

export default async function WardDetailPage({ params }: { params: { id: string } }) {
  const ward = await db.bmcWard.findFirst({
    where: {
      OR: [
        { id: params.id },
        { wardCode: params.id }
      ]
    },
    include: {
      reports: {
        orderBy: { createdAt: 'desc' },
        include: { category: true, photos: true }
      }
    }
  });

  if (!ward) {
    notFound();
  }

  const openCount = ward.reports.filter(r => !['VERIFIED', 'REJECTED'].includes(r.status)).length;
  const resolvedCount = ward.reports.filter(r => r.status === 'VERIFIED').length;

  const mapMarkers = ward.reports.map(r => ({
    id: r.id,
    publicReportId: r.publicReportId,
    locality: r.locality,
    categoryName: r.category.name,
    status: r.status,
    latitude: r.latitude,
    longitude: r.longitude,
    wardCode: ward.wardCode
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Link href="/wards" className="text-xs text-slate-400 hover:text-emerald-400 font-semibold flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" /> Back to 24 Wards Directory
      </Link>

      {/* Header Info Banner */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
              BMC WARD {ward.wardCode} ({ward.regionZone || 'Mumbai'})
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">{ward.wardName}</h1>
          </div>

          <a
            href={ward.officialSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-1.5"
          >
            BMC Source Registry <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
            <div className="text-slate-500 font-semibold">Ward Municipal Office</div>
            <div className="text-slate-200 leading-normal">{ward.wardOfficeAddress}</div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
            <div className="text-slate-500 font-semibold">Assistant Commissioner</div>
            <div className="font-bold text-white text-sm">{ward.assistantCommissioner || 'Officer details verified via BMC'}</div>
            <div className="text-[10px] text-slate-500">{ward.assistantCommissionerSource || 'BMC Official Directory'}</div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
            <div className="text-slate-500 font-semibold">Solid Waste Operations</div>
            <div className="font-semibold text-emerald-400">BMC SWM Ward Cell</div>
            <div className="text-[10px] text-slate-500">Central Emergency Helpline: 1916</div>
          </div>
        </div>
      </div>

      {/* Ward Map */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <MapPin className="w-5 h-5 text-emerald-400" /> Ward GIS Map
        </h2>
        <MumbaiMap
          reports={mapMarkers}
          center={[ward.centerLatitude, ward.centerLongitude]}
          zoom={13}
          height="400px"
        />
      </div>

      {/* Ward Reports List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Reports in Ward {ward.wardCode}</h2>
          <div className="flex gap-2 text-xs font-semibold">
            <span className="px-2.5 py-1 bg-amber-950/60 text-amber-300 rounded border border-amber-800">
              Open: {openCount}
            </span>
            <span className="px-2.5 py-1 bg-emerald-950/60 text-emerald-300 rounded border border-emerald-800">
              Verified: {resolvedCount}
            </span>
          </div>
        </div>

        {ward.reports.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400 text-xs">
            Awaiting live reports in Ward {ward.wardCode}.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ward.reports.map(r => (
              <div key={r.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-emerald-400">{r.publicReportId}</span>
                  <StatusBadge status={r.status} size="sm" />
                </div>
                <div className="font-bold text-white text-sm">{r.locality}</div>
                <p className="text-slate-400 line-clamp-2">{r.description}</p>
                <div className="pt-2 border-t border-slate-800 flex justify-end">
                  <Link
                    href={`/report/${r.publicReportId}`}
                    className="text-emerald-400 hover:underline font-semibold flex items-center gap-1"
                  >
                    View Case <Eye className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
