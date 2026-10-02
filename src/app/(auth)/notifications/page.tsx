import React from 'react';
import { Bell, CheckCircle2 } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-black text-white flex items-center gap-2">
          <Bell className="w-5 h-5 text-emerald-400" /> Notifications
        </h1>
        <p className="text-xs text-slate-400">Updates regarding your submitted civic reports.</p>
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1 text-xs">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <CheckCircle2 className="w-4 h-4" /> Case MUM-000182 Verified Cleaned
        </div>
        <p className="text-slate-300">Ground resolution confirmed by citizen verification on 20 Sep 2026.</p>
      </div>
    </div>
  );
}
