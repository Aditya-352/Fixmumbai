import React from 'react';
import Link from 'next/link';
import { Shield, Target, Building2, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-600 font-black text-2xl flex items-center justify-center mx-auto">
          F
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">About FixMumbai</h1>
        <p className="text-xs sm:text-base text-slate-500 max-w-xl mx-auto">
          &quot;Make Mumbai&apos;s civic cleanliness problems visible, trackable, and accountable.&quot;
        </p>
      </div>

      <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900">Core Product Mission</h2>
        <p>
          FixMumbai is an independent civic-tech platform designed specifically for the unique administrative and geographic structure of Mumbai. It bridges the gap between fast citizen observation and municipal action across 24 Brihanmumbai Municipal Corporation (BMC) administrative wards and 36 Assembly Constituencies.
        </p>
        <p>
          Rather than being a generic complaint box, every report on FixMumbai becomes a structured, verifiable public case file with GIS mapping, immutable timeline logs, before/after evidence comparison, and citizen ground verification.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
          <Target className="w-6 h-6 text-emerald-400" />
          <h3 className="font-bold text-white text-sm">Under 30s UX</h3>
          <p className="text-xs text-slate-400">Reporting takes under 30 seconds with automated device GPS location mapping.</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
          <Building2 className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-white text-sm">24 Ward Hierarchy</h3>
          <p className="text-xs text-slate-400">Built around BMC Administrative Ward responsibility layers and Assistant Commissioners.</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2">
          <Shield className="w-6 h-6 text-purple-400" />
          <h3 className="font-bold text-white text-sm">Zero Data Fabrication</h3>
          <p className="text-xs text-slate-400">Strictly uses official government data sources for ward boundaries and representative records.</p>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          href="/report"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20"
        >
          REPORT CIVIC ISSUE <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
