import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { User, ShieldCheck, Info, ExternalLink, MapPin } from 'lucide-react';

export default async function RepresentativesDirectoryPage() {
  const mlas = await db.representative.findMany({
    where: { type: 'MLA' },
    orderBy: { name: 'asc' },
    include: { ac: true, terms: true }
  });

  const mps = await db.representative.findMany({
    where: { type: 'MP' },
    orderBy: { name: 'asc' },
    include: { pc: true, terms: true }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="border-b border-slate-800 pb-6">
        <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <User className="w-4 h-4" /> Elected Representatives Data Registry
        </div>
        <h1 className="text-3xl font-black text-white mt-1">Mumbai Elected Representatives (2024 Cycle)</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Verified factual records of Members of Legislative Assembly (MLAs) and Members of Parliament (MPs) across Mumbai.
        </p>
      </div>

      {/* Governance & Political Neutrality Notice */}
      <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
        <div className="flex items-center gap-2 text-amber-400 font-bold">
          <Info className="w-4 h-4 shrink-0" />
          <span>Factual Electoral Data Principle</span>
        </div>
        <p className="text-slate-400 leading-relaxed text-[11px]">
          Representative details are maintained as factual civic records from official government portals (Election Commission of India / Chief Electoral Officer Maharashtra). Representatives are displayed according to geographic electoral boundaries. The platform contains no political performance scores, no MLA rankings, and no electoral predictions. Operational solid waste collection is governed by BMC administrative wards.
        </p>
      </div>

      {/* MLAs SECTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Members of Legislative Assembly (36 MLAs)
          </h2>
          <span className="text-xs text-slate-500 font-mono">2024 Election Result</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mlas.map(rep => (
            <div key={rep.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-base">{rep.name}</h3>
                  <div className="text-xs text-emerald-400 font-semibold">{rep.party} ({rep.partyShort})</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-300">
                  MLA
                </span>
              </div>

              {rep.ac && (
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500">Assembly Constituency</div>
                  <div className="font-bold text-white text-xs">
                    {rep.ac.acNumber} - {rep.ac.acName} ({rep.ac.district})
                  </div>
                </div>
              )}

              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span>Verified: {rep.verifiedAt}</span>
                <a href={rep.source} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-slate-400">
                  Source Registry <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MPs SECTION */}
      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" />
            Members of Parliament (6 MPs)
          </h2>
          <span className="text-xs text-slate-500 font-mono">18th Lok Sabha 2024</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mps.map(rep => (
            <div key={rep.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-base">{rep.name}</h3>
                  <div className="text-xs text-purple-400 font-semibold">{rep.party}</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-purple-300">
                  MP
                </span>
              </div>

              {rep.pc && (
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500">Parliamentary Constituency</div>
                  <div className="font-bold text-white text-xs">
                    {rep.pc.pcNumber} - {rep.pc.pcName} ({rep.pc.district})
                  </div>
                </div>
              )}

              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span>Verified: {rep.verifiedAt}</span>
                <span className="text-slate-400">ECI Official Data</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
