import React from 'react';
import { db } from '@/lib/db';
import { Database, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default async function DataSourcesPage() {
  const dataSources = await db.dataSource.findMany({
    orderBy: { name: 'asc' }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="border-b border-slate-800 pb-6">
        <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Database className="w-4 h-4" /> Data Transparency & Governance
        </div>
        <h1 className="text-3xl font-black text-white mt-1">Official Government Data Sources</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          FixMumbai uses verified government sources as the primary source of truth for administrative and electoral data.
        </p>
      </div>

      <div className="space-y-6">
        {dataSources.map(ds => (
          <div key={ds.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-white">{ds.name}</h3>
                <div className="text-xs text-emerald-400 font-medium">{ds.organization}</div>
              </div>
              <a
                href={ds.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-950 hover:bg-slate-800 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-800 text-slate-300 flex items-center gap-1.5 shrink-0"
              >
                Official Source <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800/80">
              <div>
                <span className="text-slate-500 text-[10px] block">DATA TYPE</span>
                <span className="font-semibold text-slate-200">{ds.dataType}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">DATA VERSION</span>
                <span className="font-mono text-emerald-400 font-bold">{ds.version}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">LAST VERIFIED DATE</span>
                <span className="font-mono text-slate-200">{ds.lastVerified}</span>
              </div>
            </div>

            {ds.notes && (
              <p className="text-xs text-slate-400 leading-relaxed italic border-t border-slate-800/60 pt-2">
                &quot;{ds.notes}&quot;
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
