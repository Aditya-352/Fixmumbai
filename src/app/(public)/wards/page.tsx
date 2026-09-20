import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { Building2, ArrowRight, UserCheck, PhoneCall, ExternalLink } from 'lucide-react';

export default async function WardsDirectoryPage() {
  const wards = await db.bmcWard.findMany({
    orderBy: { wardCode: 'asc' },
    include: {
      _count: { select: { reports: true } }
    }
  });

  const wardSummaries = await Promise.all(
    wards.map(async w => {
      const openCount = await db.report.count({
        where: { bmcWardId: w.id, status: { notIn: ['VERIFIED', 'REJECTED'] } }
      });
      const resolvedCount = await db.report.count({
        where: { bmcWardId: w.id, status: 'VERIFIED' }
      });
      return {
        ...w,
        totalReports: w._count.reports,
        openReports: openCount,
        resolvedReports: resolvedCount
      };
    })
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="border-b border-slate-800 pb-6">
        <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Building2 className="w-4 h-4" /> Administrative Hierarchy
        </div>
        <h1 className="text-3xl font-black text-white mt-1">24 BMC Administrative Wards Directory</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Brihanmumbai Municipal Corporation administrative wards, Assistant Commissioner data, and live civic report counts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wardSummaries.map(w => (
          <div key={w.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-black text-sm flex items-center justify-center">
                  {w.wardCode}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {w.regionZone || 'BMC Ward'}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base">{w.wardName}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">{w.wardOfficeAddress}</p>
              </div>

              {w.assistantCommissioner && (
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500">Assistant Commissioner</div>
                    <div className="font-semibold text-white">{w.assistantCommissioner}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800/80">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-slate-500 text-[9px] block">TOTAL</span>
                  <span className="font-bold text-white">{w.totalReports}</span>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-slate-500 text-[9px] block">OPEN</span>
                  <span className="font-bold text-amber-400">{w.openReports}</span>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-slate-500 text-[9px] block">RESOLVED</span>
                  <span className="font-bold text-emerald-400">{w.resolvedReports}</span>
                </div>
              </div>

              <Link
                href={`/wards/${w.wardCode}`}
                className="w-full bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition"
              >
                View Ward Dashboard <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
