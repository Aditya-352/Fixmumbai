import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { BarChart3, TrendingUp, RefreshCw, CheckCircle2, Clock } from 'lucide-react';

export default async function AdminAnalyticsPage() {
  const total = await db.report.count();
  const verified = await db.report.count({ where: { status: 'VERIFIED' } });
  const reopened = await db.report.count({ where: { status: 'REOPENED' } });
  const duplicateGroups = await db.duplicateGroup.count();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" /> Operational Metrics
          </div>
          <h1 className="text-3xl font-black text-white mt-1">Admin Analytics & Resolution Performance</h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time analytics computed directly from database records.
          </p>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Back to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="text-slate-400 text-xs font-semibold">Total Reports</div>
          <div className="text-3xl font-black text-white">{total}</div>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="text-emerald-400 text-xs font-semibold">Verified Cleaned</div>
          <div className="text-3xl font-black text-emerald-400">{verified}</div>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="text-rose-400 text-xs font-semibold">Reopened Cases</div>
          <div className="text-3xl font-black text-rose-400">{reopened}</div>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="text-purple-400 text-xs font-semibold">Duplicate Clusters</div>
          <div className="text-3xl font-black text-purple-400">{duplicateGroups}</div>
        </div>
      </div>
    </div>
  );
}
