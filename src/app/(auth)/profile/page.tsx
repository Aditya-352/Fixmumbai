import React from 'react';
import Link from 'next/link';
import { User, Shield } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xl">
            R
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Rohan Sharma</h1>
            <div className="text-xs text-slate-400 font-mono">citizen.mumbai@gmail.com</div>
          </div>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
          <div className="font-semibold text-slate-300">Privacy Preference</div>
          <p className="text-slate-400">Your email is kept strictly private on all public civic reports.</p>
        </div>

        <div className="flex gap-3">
          <Link href="/my-reports" className="bg-emerald-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg">
            View My Submitted Reports
          </Link>
          <Link href="/notifications" className="bg-slate-800 text-slate-200 font-semibold text-xs px-4 py-2 rounded-lg border border-slate-700">
            Notification History
          </Link>
        </div>
      </div>
    </div>
  );
}
