import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { Shield, Clock, FileText } from 'lucide-react';

export default async function AdminAuditPage() {
  const auditLogs = await db.auditLog.findMany({
    take: 50,
    orderBy: { timestamp: 'desc' }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <div className="text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-4 h-4" /> Immutable System Audit Trail
          </div>
          <h1 className="text-3xl font-black text-white mt-1">Audit Logs</h1>
          <p className="text-xs text-slate-400 mt-1">
            Privileged action audit logging for compliance and administrative traceability.
          </p>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Back to Admin
        </Link>
      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">Timestamp</th>
                <th className="p-3.5">Actor</th>
                <th className="p-3.5">Role</th>
                <th className="p-3.5">Action</th>
                <th className="p-3.5">Entity</th>
                <th className="p-3.5">Entity ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {auditLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-slate-500">No audit log entries recorded yet.</td>
                </tr>
              ) : (
                auditLogs.map((a) => (
                  <tr key={a.id} className="hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono text-slate-400">
                      {new Date(a.timestamp).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'medium' })}
                    </td>
                    <td className="p-3.5 font-semibold text-white">{a.actorName}</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded text-[10px] bg-slate-950 border border-slate-800 text-purple-300 font-mono">{a.role}</span></td>
                    <td className="p-3.5 font-bold text-emerald-400 font-mono">{a.action}</td>
                    <td className="p-3.5 font-medium text-slate-300">{a.entity}</td>
                    <td className="p-3.5 font-mono text-slate-500">{a.entityId}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
