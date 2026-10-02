import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { StatusBadge } from '@/components/ui/Badge';
import { Eye } from 'lucide-react';

export default async function MyReportsPage() {
  const reports = await db.report.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' },
    include: { category: true, bmcWard: true }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-black text-white">My Submitted Reports</h1>
        <p className="text-xs text-slate-400">Track status updates and verification requests for your reports.</p>
      </div>

      <div className="space-y-4">
        {reports.map(r => (
          <div key={r.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-emerald-400">{r.publicReportId}</span>
                <StatusBadge status={r.status} size="sm" />
              </div>
              <div className="font-bold text-white mt-1">{r.locality}</div>
              <div className="text-slate-400 font-mono text-[10px] mt-0.5">Ward {r.bmcWard?.wardCode}</div>
            </div>

            <Link
              href={`/report/${r.publicReportId}`}
              className="bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1"
            >
              Case File <Eye className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
