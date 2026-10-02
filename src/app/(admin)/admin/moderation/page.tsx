import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { ShieldAlert, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

export default async function AdminModerationPage() {
  const flaggedReports = await db.report.findMany({
    where: { moderationStatus: { in: ['PENDING', 'FLAGGED'] } },
    include: { category: true, photos: true }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <div className="text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" /> Content Safety & Moderation
          </div>
          <h1 className="text-3xl font-black text-white mt-1">Moderation Queue</h1>
          <p className="text-xs text-slate-400 mt-1">
            Review reports flagged for spam, inappropriate content, or false submissions.
          </p>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Back to Admin
        </Link>
      </div>

      {flaggedReports.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 text-xs space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
          <div className="font-bold text-white text-sm">Moderation Queue is Clean</div>
          <p>No reports currently pending safety review or flagged for moderation.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flaggedReports.map(r => (
            <div key={r.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-emerald-400">{r.publicReportId}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
                  {r.moderationStatus}
                </span>
              </div>
              <div className="font-bold text-white text-sm">{r.locality}</div>
              <p className="text-slate-300">{r.description}</p>
              <div className="flex gap-2 pt-2 border-t border-slate-800">
                <button className="w-1/2 bg-emerald-500 text-slate-950 font-bold py-2 rounded-lg text-xs">Approve Report</button>
                <button className="w-1/2 bg-rose-950 text-rose-300 font-bold py-2 rounded-lg text-xs border border-rose-800">Reject & Hide</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
