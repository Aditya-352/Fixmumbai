import React from 'react';
import Link from 'next/link';
import { HelpCircle, Camera, MapPin, Sparkles, CheckCircle2, Shield, Lock, Info, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase">
          <HelpCircle className="w-3.5 h-3.5" /> Platform Governance & UX
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">How FixMumbai Works</h1>
        <p className="text-xs sm:text-base text-slate-400 max-w-2xl mx-auto">
          Fast public reporting built for transparency, automated ward GIS boundary mapping, and ground citizen verification.
        </p>
      </div>

      {/* 5 STEPS DETAIL */}
      <div className="space-y-6">
        {[
          {
            step: '01',
            icon: Camera,
            title: 'Spot & Capture Evidence Photo',
            desc: 'When you see a garbage pile, overflowing bin, open dumping, or construction debris, open FixMumbai and snap a photo. Photos are compressed client-side instantly for ultra-fast performance under 30 seconds.'
          },
          {
            step: '02',
            icon: MapPin,
            title: 'Confirm Location & Auto GIS Mapping',
            desc: 'Your browser GPS automatically detects your location. If location permission is denied, drop a pin on the interactive map. The system automatically performs GIS spatial mapping to your exact BMC Administrative Ward (A to T), Assembly Constituency (152 to 187), and Parliamentary Constituency.'
          },
          {
            step: '03',
            icon: Sparkles,
            title: 'Instant Public Case Creation (e.g. MUM-000182)',
            desc: 'Select the issue category (Garbage pile, Overflowing bin, Construction waste, Sanitation, etc.) and submit without mandatory account creation. A public human-readable case ID (like MUM-000182) is generated immediately and placed on the live Mumbai map.'
          },
          {
            step: '04',
            icon: Shield,
            title: 'Authority Action & Resolution Evidence',
            desc: 'BMC Ward Solid Waste Management officers and ward operators inspect the case, acknowledge, assign cleanup crews, and submit "AFTER" resolution evidence photographs upon completing the work.'
          },
          {
            step: '05',
            icon: CheckCircle2,
            title: 'Ground Citizen Verification & Reopening',
            desc: 'Citizens who reported or live near the issue confirm whether the area is actually clean. Marking "YES, RESOLVED" closes the case. Marking "NOT YET RESOLVED" reopens the case automatically with an alert sent back to the Ward Officer.'
          }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.step} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black text-lg flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon className="w-5 h-5 text-emerald-400" />
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* PRIVACY & DUPLICATE RULES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2 text-xs">
          <div className="text-white font-bold text-sm flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" /> Reporter Privacy Guarantee
          </div>
          <p className="text-slate-400 leading-relaxed">
            Reporter email and contact information are kept strictly private and stored securely. Only the issue category, evidence photo, public locality, BMC ward, status, and timeline are visible on the public web.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2 text-xs">
          <div className="text-white font-bold text-sm flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400" /> Duplicate Proximity Clustering
          </div>
          <p className="text-slate-400 leading-relaxed">
            Reports within 50 meters submitted within 48 hours in the same category are automatically linked into duplicate candidate groups. Every citizen&apos;s photo evidence is preserved.
          </p>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          href="/report"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20"
        >
          REPORT AN ISSUE NOW <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
