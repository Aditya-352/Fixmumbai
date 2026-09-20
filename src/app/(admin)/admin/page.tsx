import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { Shield, Clock, CheckCircle2, AlertTriangle, RefreshCw, UserCheck, Eye, Layers, FileText } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';

export default async function AdminDashboardPage() {
  const totalCount = await db.report.count();
  const submittedCount = await db.report.count({ where: { status: 'SUBMITTED' } });
  const acknowledgedCount = await db.report.count({ where: { status: 'ACKNOWLEDGED' } });
  const assignedCount = await db.report.count({ where: { status: 'ASSIGNED' } });
  const inProgressCount = await db.report.count({ where: { status: 'IN_PROGRESS' } });
  const resolutionPendingCount = await db.report.count({ where: { status: 'RESOLUTION_SUBMITTED' } });
  const verifiedCount = await db.report.count({ where: { status: 'VERIFIED' } });
  const reopenedCount = await db.report.count({ where: { status: 'REOPENED' } });

  const recentReports = await db.report.findMany({
    take: 8,
    orderBy: { createdAt: 'desc' },
    include: { category: true, bmcWard: true }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Header */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Authority & Municipal Command Center
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">FixMumbai Admin Operations</h1>
          <p className="text-xs text-slate-400 mt-1">
            Central operational workflow for BMC Solid Waste Management department & Ward Officers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/reports"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg"
          >
            Manage All Reports
          </Link>
          <Link
            href="/admin/moderation"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs px-4 py-2.5 rounded-xl border border-slate-700"
          >
            Moderation Queue
          </Link>
          <Link
            href="/admin/audit"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs px-4 py-2.5 rounded-xl border border-slate-700"
          >
            System Audit Log
          </Link>
        </div>
      </div>

      {/* Operational Lifecycle Pipeline Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="text-slate-400 text-[10px] font-bold uppercase">SUBMITTED</div>
          <div className="text-2xl font-black text-white mt-1">{submittedCount}</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="text-blue-400 text-[10px] font-bold uppercase">ACKNOWLEDGED</div>
          <div className="text-2xl font-black text-blue-400 mt-1">{acknowledgedCount}</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="text-purple-400 text-[10px] font-bold uppercase">ASSIGNED</div>
          <div className="text-2xl font-black text-purple-400 mt-1">{assignedCount}</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="text-amber-400 text-[10px] font-bold uppercase">IN PROGRESS</div>
          <div className="text-2xl font-black text-amber-400 mt-1">{inProgressCount}</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="text-cyan-400 text-[10px] font-bold uppercase">RESOLUTION PENDING</div>
          <div className="text-2xl font-black text-cyan-400 mt-1">{resolutionPendingCount}</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="text-emerald-400 text-[10px] font-bold uppercase">VERIFIED</div>
          <div className="text-2xl font-black text-emerald-400 mt-1">{verifiedCount}</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="text-rose-400 text-[10px] font-bold uppercase">REOPENED</div>
          <div className="text-2xl font-black text-rose-400 mt-1">{reopenedCount}</div>
        </div>
      </div>

      {/* Admin Action Table */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Recent Reports Requiring Authority Action</h2>
          <Link href="/admin/reports" className="text-xs text-emerald-400 hover:underline font-semibold">
            View All Reports Table &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">Report ID</th>
                <th className="p-3">Category</th>
                <th className="p-3">Locality</th>
                <th className="p-3">BMC Ward</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {recentReports.map(r => (
                <tr key={r.id} className="hover:bg-slate-800/50">
                  <td className="p-3 font-mono font-bold text-emerald-400">{r.publicReportId}</td>
                  <td className="p-3 font-medium text-white">{r.category.name}</td>
                  <td className="p-3 text-slate-300">{r.locality}</td>
                  <td className="p-3 font-mono text-slate-400">Ward {r.bmcWard?.wardCode}</td>
                  <td className="p-3"><StatusBadge status={r.status} size="sm" /></td>
                  <td className="p-3 text-right">
                    <Link
                      href={`/report/${r.publicReportId}`}
                      className="bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold px-2.5 py-1 rounded border border-slate-700 inline-flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> Action Case
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
