import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { MapPin, User, Info, ArrowRight } from 'lucide-react';

export default async function ConstituenciesDirectoryPage() {
  const acs = await db.assemblyConstituency.findMany({
    orderBy: { acNumber: 'asc' },
    include: {
      pc: true,
      representatives: true,
      _count: { select: { reports: true } }
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="border-b border-slate-800 pb-6">
        <div className="text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <MapPin className="w-4 h-4" /> Electoral Mapping Layer
        </div>
        <h1 className="text-3xl font-black text-white mt-1">36 Assembly Constituencies</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Factual geographic mapping of Mumbai&apos;s 36 Assembly Segments to Parliamentary Constituencies and 2024 Election Representative records.
        </p>
      </div>

      {/* Neutral Governance Disclaimer */}
      <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block font-semibold">Political Neutrality & Operational Scope Notice</strong>
          <span>
            The platform displays elected representative data factually. Representatives are not operational BMC garbage collectors or solid waste officers. Reports within a constituency boundary are presented strictly as geographic occurrences.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {acs.map(ac => {
          const rep = ac.representatives[0];
          return (
            <div key={ac.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-800">
                    AC {ac.acNumber}
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 font-medium">
                    {ac.district}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base">{ac.acName}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    PC: <span className="text-slate-300 font-semibold">{ac.pc?.pcName || 'Mumbai'}</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[10px] text-slate-500 font-medium uppercase">Current MLA (2024 Election Result)</div>
                  <div className="font-bold text-white text-xs flex items-center justify-between">
                    <span>{rep?.name || 'Representative details pending'}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{rep?.partyShort}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Reports: <strong className="text-white">{ac._count.reports}</strong></span>
                <Link
                  href={`/constituencies/${ac.acNumber}`}
                  className="text-purple-400 hover:underline font-semibold flex items-center gap-1"
                >
                  View Segment <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
