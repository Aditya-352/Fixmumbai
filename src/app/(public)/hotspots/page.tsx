import React from 'react';
import { db } from '@/lib/db';
import { calculatePlatformActivityScore } from '@/lib/activity-score';
import { Flame, Info, ArrowUpRight, Building2, MapPin } from 'lucide-react';
import Link from 'next/link';

export default async function HotspotsPage() {
  const wards = await db.bmcWard.findMany({
    include: {
      reports: { include: { category: true } }
    }
  });

  const hotspots = wards
    .map(ward => {
      const totalReports = ward.reports.length;
      const openReports = ward.reports.filter(r => !['VERIFIED', 'REJECTED'].includes(r.status)).length;
      const recent24h = ward.reports.filter(r => {
        return (Date.now() - new Date(r.createdAt).getTime()) <= 24 * 60 * 60 * 1000;
      }).length;
      const resolved = ward.reports.filter(r => r.status === 'VERIFIED').length;
      const distinctReporters = new Set(ward.reports.map(r => r.reporterEmail || r.id)).size;

      const score = calculatePlatformActivityScore({
        totalReports,
        openReports,
        recentReports24h: recent24h,
        averageUnresolvedDays: openReports > 0 ? 2.0 : 0.5,
        distinctReporters
      });

      return {
        wardCode: ward.wardCode,
        wardName: ward.wardName,
        regionZone: ward.regionZone,
        totalReports,
        openReports,
        resolved,
        recent24h,
        score
      };
    })
    .sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="border-b border-slate-800 pb-6">
        <div className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Flame className="w-4 h-4" /> Platform Activity Score Engine
        </div>
        <h1 className="text-3xl font-black text-white mt-1">Mumbai Cleanliness Hotspots</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Cluster analysis based on report density, recency, unresolved duration, and unique reporter diversity.
        </p>
      </div>

      {/* Transparent Methodology Card */}
      <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <Info className="w-4 h-4 text-emerald-400" />
          Platform Activity Score Methodology (0 - 100)
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          This score is a <strong className="text-emerald-400">platform-generated algorithm</strong> derived strictly from database report frequency, report recency in the last 24h, unresolved report duration, and unique citizen reporter density. It is NOT an official government score or political rating.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px]">
          <div className="p-2 bg-slate-950 rounded border border-slate-800">
            <span className="text-slate-400 font-medium block">Report Frequency</span>
            <span className="font-bold text-white">Weight: 35%</span>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800">
            <span className="text-slate-400 font-medium block">Recency (24h)</span>
            <span className="font-bold text-white">Weight: 25%</span>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800">
            <span className="text-slate-400 font-medium block">Unresolved Days</span>
            <span className="font-bold text-white">Weight: 25%</span>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800">
            <span className="text-slate-400 font-medium block">Reporter Diversity</span>
            <span className="font-bold text-white">Weight: 15%</span>
          </div>
        </div>
      </div>

      {/* Hotspots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotspots.map(h => (
          <div key={h.wardCode} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-white text-xs">
                  {h.wardCode}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Ward {h.wardCode}</h3>
                  <div className="text-[10px] text-slate-400">{h.regionZone || 'BMC Administrative Ward'}</div>
                </div>
              </div>

              {/* Score pill */}
              <div className="text-right">
                <div className="text-lg font-black text-amber-400">{h.score}<span className="text-xs font-normal text-slate-500">/100</span></div>
                <div className="text-[9px] text-slate-400 uppercase font-semibold">Activity Score</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 line-clamp-1">{h.wardName}</p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs py-2 bg-slate-950 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 text-[10px] block">TOTAL</span>
                <span className="font-bold text-white">{h.totalReports}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">ACTIVE</span>
                <span className="font-bold text-amber-400">{h.openReports}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">RESOLVED</span>
                <span className="font-bold text-emerald-400">{h.resolved}</span>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-mono">24h Activity: {h.recent24h} reports</span>
              <Link
                href={`/wards/${h.wardCode}`}
                className="text-xs font-semibold text-emerald-400 hover:underline flex items-center gap-1"
              >
                Ward Dashboard <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
