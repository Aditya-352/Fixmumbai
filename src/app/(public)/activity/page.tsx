import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { Clock, Eye, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';

export default async function ActivityPage() {
  const events = await db.timelineEvent.findMany({
    where: { publicVisibility: true },
    take: 30,
    orderBy: { timestamp: 'desc' },
    include: {
      report: {
        select: {
          publicReportId: true,
          locality: true,
          status: true,
          category: { select: { name: true } },
          bmcWard: { select: { wardCode: true } }
        }
      }
    }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="border-b border-slate-800 pb-6">
        <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-4 h-4" /> Live Public Audit Stream
        </div>
        <h1 className="text-3xl font-black text-white mt-1">Real-Time Civic Activity Feed</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Neutral public audit feed of civic submissions, acknowledgment, authority status changes, and citizen verifications across Mumbai.
        </p>
      </div>

      <div className="space-y-4">
        {events.map((evt) => (
          <div key={evt.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition flex items-start justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-emerald-400">{evt.report.publicReportId}</span>
                <span className="text-slate-400 font-medium">({evt.report.locality})</span>
                <StatusBadge status={evt.report.status} size="sm" />
              </div>
              <p className="text-slate-300 font-medium">{evt.description}</p>
              <div className="text-[10px] text-slate-500 font-mono">
                {new Date(evt.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })} | Actor: {evt.actorType} | Ward: {evt.report.bmcWard?.wardCode}
              </div>
            </div>

            <Link
              href={`/report/${evt.report.publicReportId}`}
              className="text-emerald-400 hover:underline font-semibold flex items-center gap-1 shrink-0"
            >
              Case <Eye className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
