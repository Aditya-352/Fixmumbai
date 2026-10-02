import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { Database, ExternalLink, RefreshCw } from 'lucide-react';

export default async function AdminDataManagementPage() {
  const sources = await db.dataSource.findMany({ orderBy: { name: 'asc' } });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Database className="w-4 h-4" /> Data Sources Registry
          </div>
          <h1 className="text-3xl font-black text-white mt-1">Government Sources Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage official data verification dates and source URLs.
          </p>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Back to Admin
        </Link>
      </div>

      <div className="space-y-4">
        {sources.map(s => (
          <div key={s.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4 text-xs">
            <div>
              <div className="font-bold text-white text-sm">{s.name}</div>
              <div className="text-emerald-400">{s.organization}</div>
              <div className="text-slate-400 text-[11px] mt-1">Last Verified: {s.lastVerified} | Version: {s.version}</div>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1">
              Verify Link <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
