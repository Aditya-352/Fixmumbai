import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, User, Info, ArrowLeft, Eye } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';
import MumbaiMap from '@/components/map/MumbaiMap';

export default async function ConstituencyDetailPage({ params }: { params: { id: string } }) {
  const acNumberParsed = parseInt(params.id);
  const ac = await db.assemblyConstituency.findFirst({
    where: {
      OR: [
        { id: params.id },
        ...(isNaN(acNumberParsed) ? [] : [{ acNumber: acNumberParsed }])
      ]
    },
    include: {
      pc: true,
      representatives: { include: { terms: true } },
      reports: {
        orderBy: { createdAt: 'desc' },
        include: { category: true, photos: true, bmcWard: true }
      }
    }
  });

  if (!ac) {
    notFound();
  }

  const rep = ac.representatives[0];

  const mapMarkers = ac.reports.map(r => ({
    id: r.id,
    publicReportId: r.publicReportId,
    locality: r.locality,
    categoryName: r.category.name,
    status: r.status,
    latitude: r.latitude,
    longitude: r.longitude,
    wardCode: r.bmcWard?.wardCode,
    acNumber: ac.acNumber
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Link href="/constituencies" className="text-xs text-slate-400 hover:text-emerald-400 font-semibold flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" /> Back to Assembly Directory
      </Link>

      {/* Segment Header */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-400 font-mono uppercase">
              ASSEMBLY CONSTITUENCY {ac.acNumber} ({ac.district})
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">{ac.acName}</h1>
          </div>

          <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono">
            <span className="text-slate-500">Parliamentary Segment: </span>
            <span className="text-white font-bold">{ac.pc ? `${ac.pc.pcNumber} - ${ac.pc.pcName}` : 'Mumbai'}</span>
          </div>
        </div>

        {/* MLA Factual Card */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Current Representative (2024 Election Result)</div>
            <div className="font-bold text-white text-base mt-0.5">{rep?.name || 'Representative'}</div>
            <div className="text-purple-400 font-medium">{rep?.party} ({rep?.partyShort})</div>
          </div>
          <div className="space-y-1 text-[11px] text-slate-400 border-t md:border-t-0 md:border-l border-slate-800 pt-2 md:pt-0 md:pl-4">
            <div><strong>Election Cycle:</strong> 2024 Maharashtra Legislative Assembly</div>
            <div><strong>Source:</strong> {rep?.source || 'Official Election Commission Results'}</div>
            <div><strong>Verification Date:</strong> {rep?.verifiedAt || '2026-09-20'}</div>
          </div>
        </div>

        {/* Factual Disclaimer */}
        <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Notice: Reports displayed below are geographically located within Assembly Constituency {ac.acNumber} - {ac.acName}. Operational garbage removal is governed by the relevant BMC Administrative Ward.</span>
        </div>
      </div>

      {/* Segment GIS Map */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <MapPin className="w-5 h-5 text-purple-400" /> Constituency GIS Reports Map
        </h2>
        <MumbaiMap
          reports={mapMarkers}
          center={[ac.centerLatitude, ac.centerLongitude]}
          zoom={13}
          height="400px"
        />
      </div>

      {/* Geographic Reports List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">
          Reports Geographically Located within AC {ac.acNumber} ({ac.reports.length})
        </h2>

        {ac.reports.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400 text-xs">
            No active civic reports currently recorded inside AC {ac.acNumber}.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ac.reports.map(r => (
              <div key={r.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-emerald-400">{r.publicReportId}</span>
                  <StatusBadge status={r.status} size="sm" />
                </div>
                <div className="font-bold text-white text-sm">{r.locality}</div>
                <div className="text-slate-400">{r.category.name}</div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">Ward {r.bmcWard?.wardCode}</span>
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
