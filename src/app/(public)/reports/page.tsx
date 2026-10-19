import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';

export const dynamic = 'force-dynamic';

export default async function ReportsPage() {
  const reports = await db.report.findMany({
    orderBy: { createdAt: 'desc' },
    include: { category: true, bmcWard: true, photos: true }
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 bg-white text-slate-900">
      <header className="border-b border-slate-200 pb-5">
        <p className="text-xs font-extrabold uppercase tracking-widest text-red-600">Public civic records</p>
        <h1 className="text-3xl font-black tracking-tight mt-1">Recent Civic Reports</h1>
        <p className="text-sm text-slate-600 mt-2">Browse reported civic cleanliness issues, evidence, and current status.</p>
      </header>

      {reports.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
          No public reports are available yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <article key={report.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={report.photos[0]?.storagePath || 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60'}
                    alt={report.category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3"><StatusBadge status={report.status} size="sm" /></div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 font-mono font-bold text-[11px] px-3 py-1 rounded-full border border-slate-200">
                    {report.publicReportId}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-xs font-black text-red-600 uppercase tracking-wider">{report.category.name}</div>
                  <h2 className="text-lg font-black line-clamp-1">{report.locality}</h2>
                  <p className="text-xs text-slate-600 line-clamp-3">{report.description}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{report.bmcWard?.wardCode ? `Ward ${report.bmcWard.wardCode}` : 'Mumbai'}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(report.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex justify-end">
                <Link href={`/report/${report.publicReportId}`} className="bg-slate-900 hover:bg-red-600 text-white font-extrabold text-xs px-4 py-2 rounded-full flex items-center gap-1 transition">
                  View Report <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
