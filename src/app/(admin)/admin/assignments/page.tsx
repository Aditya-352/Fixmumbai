import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { Building2, UserCheck, CheckCircle2 } from 'lucide-react';

export default async function AdminAssignmentsPage() {
  const wards = await db.bmcWard.findMany({
    orderBy: { wardCode: 'asc' },
    include: { _count: { select: { reports: true } } }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" /> Operational Task Routing
          </div>
          <h1 className="text-3xl font-black text-white mt-1">Ward SWM Operators & Assignments</h1>
          <p className="text-xs text-slate-400 mt-1">
            Ward operator assignment matrix across 24 BMC administrative wards.
          </p>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Back to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wards.map(w => (
          <div key={w.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-white text-base">Ward {w.wardCode}</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                ACTIVE CELL
              </span>
            </div>
            <div className="text-slate-300 font-semibold">{w.wardName}</div>
            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-slate-400 space-y-1">
              <div className="text-[10px] text-slate-500 font-bold">ASSISTANT COMMISSIONER</div>
              <div className="font-semibold text-white">{w.assistantCommissioner || 'Verified via BMC Portal'}</div>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between text-slate-400">
              <span>Active Reports: <strong className="text-white">{w._count.reports}</strong></span>
              <Link href={`/wards/${w.wardCode}`} className="text-emerald-400 hover:underline font-semibold">Inspect Ward</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
