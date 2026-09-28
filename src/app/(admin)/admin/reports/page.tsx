'use client';

import React, { useEffect, useState } from 'react';
import { StatusBadge } from '@/components/ui/Badge';
import { Shield, RefreshCw, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminReportsPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWard, setSelectedWard] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Action Modal State
  const [activeReport, setActiveReport] = useState<any>(null);
  const [actionStatus, setActionStatus] = useState('');
  const [actionNotes, setActionNotes] = useState('');
  const [afterImage, setAfterImage] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const fetchReports = async () => {
    try {
      setLoading(true);
      let url = '/civic/api/reports?limit=100';
      if (selectedWard) url += `&ward=${selectedWard}`;
      if (selectedStatus) url += `&status=${selectedStatus}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setReports(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [selectedWard, selectedStatus]);

  const handleUpdateStatus = async () => {
    if (!activeReport || !actionStatus) return;
    setActionLoading(true);

    try {
      const res = await fetch(`/civic/api/reports/${activeReport.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: actionStatus,
          actionDescription: actionNotes || `Status updated to ${actionStatus} by Ward Inspector`,
          actorName: 'BMC SWM Officer',
          actorRole: 'AUTHORITY_ADMIN',
          resolutionAfterImage: actionStatus === 'RESOLUTION_SUBMITTED' ? (afterImage || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60') : null,
          resolutionNotes: actionNotes
        })
      });

      const data = await res.json();
      if (data.success) {
        setActiveReport(null);
        setActionStatus('');
        setActionNotes('');
        setAfterImage('');
        fetchReports();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteReport = async (report: any) => {
    const confirmed = window.confirm(
      `Delete report ${report.publicReportId}? This permanently removes the report and its related evidence/timeline records.`
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/civic/api/reports/${report.id}`, {
        method: 'DELETE'
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to delete report');
      }

      if (activeReport?.id === report.id) {
        setActiveReport(null);
      }

      await fetchReports();
    } catch (error: any) {
      console.error(error);
      window.alert(error.message || 'Failed to delete report');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Municipal Workflow
          </div>
          <h1 className="text-3xl font-black text-white mt-1">Authority Report Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Review, acknowledge, assign cleanup crews, and submit resolution evidence.
          </p>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Admin Dashboard
        </Link>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-wrap gap-4 text-xs">
        <div>
          <label className="text-slate-400 font-semibold block mb-1">Filter BMC Ward</label>
          <select
            value={selectedWard}
            onChange={(e) => setSelectedWard(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
          >
            <option value="">All Wards</option>
            {['A','B','C','D','E','F North','F South','G North','G South','H East','H West','K East','K West','L','M East','M West','N','P North','P South','R Central','R North','R South','S','T'].map(w => (
              <option key={w} value={w}>Ward {w}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-slate-400 font-semibold block mb-1">Filter Status</label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
          >
            <option value="">All Statuses</option>
            <option value="SUBMITTED">Submitted</option>
            <option value="ACKNOWLEDGED">Acknowledged</option>
            <option value="ASSIGNED">Assigned</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESOLUTION_SUBMITTED">Resolution Submitted</option>
            <option value="VERIFIED">Verified</option>
            <option value="REOPENED">Reopened</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-400 space-y-2">
            <RefreshCw className="w-6 h-6 text-emerald-500 animate-spin mx-auto" />
            <div className="text-xs font-semibold">Loading municipal reports...</div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-3.5">Report ID</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Locality</th>
                  <th className="p-3.5">Ward</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {reports.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-emerald-400">{r.publicReportId}</td>
                    <td className="p-3.5 font-semibold text-white">{r.category.name}</td>
                    <td className="p-3.5 text-slate-300">{r.locality}</td>
                    <td className="p-3.5 font-mono text-slate-400">Ward {r.bmcWard?.wardCode}</td>
                    <td className="p-3.5"><StatusBadge status={r.status} size="sm" /></td>
                    <td className="p-3.5 text-right space-x-2">
                      <button
                        onClick={() => {
                          setActiveReport(r);
                          setActionStatus(r.status);
                        }}
                        className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30"
                      >
                        Action Workflow
                      </button>
                      <button
                        onClick={() => handleDeleteReport(r)}
                        className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-bold px-3 py-1.5 rounded-lg border border-rose-500/30 inline-flex items-center gap-1.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Action Workflow Modal */}
      {activeReport && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400">{activeReport.publicReportId}</span>
                <h3 className="font-bold text-base text-white">{activeReport.locality}</h3>
              </div>
              <button onClick={() => setActiveReport(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <label className="font-semibold text-slate-300 block">Transition Status</label>
              <select
                value={actionStatus}
                onChange={(e) => setActionStatus(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white"
              >
                <option value="ACKNOWLEDGED">ACKNOWLEDGED (Ward Desk Received)</option>
                <option value="ASSIGNED">ASSIGNED (SWM Squad Allocated)</option>
                <option value="IN_PROGRESS">IN_PROGRESS (Cleanup Ongoing)</option>
                <option value="RESOLUTION_SUBMITTED">RESOLUTION_SUBMITTED (Upload After Evidence)</option>
                <option value="REJECTED">REJECTED (Invalid / Out of Jurisdiction)</option>
              </select>

              {actionStatus === 'RESOLUTION_SUBMITTED' && (
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <label className="font-semibold text-emerald-400 block">Upload After Resolution Evidence Photo URL</label>
                  <input
                    type="text"
                    value={afterImage}
                    onChange={(e) => setAfterImage(e.target.value)}
                    placeholder="https://... (After image URL)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white"
                  />
                  <div className="text-[10px] text-slate-500">Provide completed cleanup evidence photo link.</div>
                </div>
              )}

              <div className="space-y-1">
                <label className="font-semibold text-slate-300 block">Authority Action Notes</label>
                <textarea
                  value={actionNotes}
                  onChange={(e) => setActionNotes(e.target.value)}
                  placeholder="Notes for timeline log..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActiveReport(null)}
                className="w-1/3 bg-slate-800 text-slate-300 py-2.5 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateStatus}
                disabled={actionLoading}
                className="w-2/3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs"
              >
                {actionLoading ? 'Updating...' : 'Save & Publish Timeline Event'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
