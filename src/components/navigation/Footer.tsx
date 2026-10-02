import React from 'react';
import Link from 'next/link';
import { ExternalLink, ShieldCheck, Database, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-black text-xl">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-black text-sm">
                F
              </div>
              Fix<span className="text-red-500">Mumbai</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Making Mumbai&apos;s civic cleanliness problems visible, trackable, and accountable across 24 BMC Wards and 36 Assembly Constituencies.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[11px] text-red-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Independent Civic Infrastructure
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3">Platform Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-red-400 transition">Home</Link></li>
              <li><Link href="/map" className="hover:text-red-400 transition">Interactive Mumbai Map</Link></li>
              <li><Link href="/report" className="hover:text-red-400 transition">Report Garbage Issue</Link></li>
              <li><Link href="/hotspots" className="hover:text-red-400 transition">Hotspot Intelligence</Link></li>
              <li><Link href="/wards" className="hover:text-red-400 transition">24 BMC Ward Directory</Link></li>
              <li><Link href="/representatives" className="hover:text-red-400 transition">Elected Representatives (2024)</Link></li>
              <li><Link href="/accountability" className="hover:text-red-400 transition">Public Accountability Dashboard</Link></li>
            </ul>
          </div>

          {/* Official Government Data Sources */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3">Official Data Registry</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://portal.mcgm.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-red-400 transition">
                  BMC Official Portal <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://portal.mcgm.gov.in/irj/portal/anonymous/BMC-on-Map-Wards-Offices" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-red-400 transition">
                  BMC Ward Offices Directory <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://ceoelection.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-red-400 transition">
                  CEO Maharashtra Elections <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://results.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-red-400 transition">
                  Election Commission of India <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link href="/data-sources" className="inline-flex items-center gap-1 text-red-400 hover:underline font-semibold">
                  <Database className="w-3 h-3" /> Data Source Verification Log
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Disclaimer */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3">Data Governance</h4>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-amber-400 font-semibold">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Politically Neutral Infrastructure</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Assembly representative records are displayed strictly as factual geographic election data. Representatives are not credited or blamed for municipal BMC solid waste management operations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} FixMumbai Civic Platform. Built for civic cleanliness in Mumbai.
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/how-it-works" className="hover:text-white">How It Works</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/admin" className="hover:text-white">Authority Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
