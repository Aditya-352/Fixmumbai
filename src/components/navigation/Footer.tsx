'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink, ShieldCheck, Database, Info, Wind, Leaf } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Hide platform footer on full-height GIS explorer routes
  if (pathname?.includes('/green')) {
    return null;
  }

  return (
    <footer className="bg-white/85 backdrop-blur-md text-slate-600 border-t border-[#E2E8F0] text-sm py-12">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#087F5B] flex items-center justify-center text-white shadow-xs flex-shrink-0 relative overflow-hidden">
                <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h3.5l2.5-6 4 12 2.5-6h4.5" />
                  <circle cx="17.5" cy="8.5" r="2" fill="#34D399" stroke="none" />
                </svg>
              </div>
              <span className="text-lg font-black tracking-tight text-[#17243B]">
                PriSEHAT <span className="text-[#087F5B]">Pulse</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Making Mumbai&apos;s civic cleanliness problems visible, trackable, and accountable across 24 BMC Wards and 36 Assembly Constituencies.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EF] border border-[#087F5B]/20 text-[11px] text-[#087F5B] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#087F5B]" />
              Independent Civic Infrastructure
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#17243B] font-extrabold text-xs tracking-wider uppercase mb-3">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-[#087F5B] transition">Home</Link></li>
              <li><Link href="/map" className="hover:text-[#087F5B] transition">Interactive Mumbai Map</Link></li>
              <li><Link href="/report" className="hover:text-[#087F5B] transition font-bold text-[#EF2929]">Report Garbage Issue</Link></li>
              <li><Link href="/hotspots" className="hover:text-[#087F5B] transition">Hotspot Intelligence</Link></li>
              <li><Link href="/wards" className="hover:text-[#087F5B] transition">24 BMC Ward Directory</Link></li>
              <li><Link href="/representatives" className="hover:text-[#087F5B] transition">Elected Representatives (2024)</Link></li>
              <li><Link href="/accountability" className="hover:text-[#087F5B] transition">Public Accountability Dashboard</Link></li>
              <li>
                <Link href="/air-quality" className="inline-flex items-center gap-1 hover:text-[#087F5B] transition text-[#087F5B] font-semibold">
                  <Wind className="w-3 h-3" /> Air Quality & Health Checklist
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Government Data Sources */}
          <div>
            <h4 className="text-[#17243B] font-extrabold text-xs tracking-wider uppercase mb-3">
              Official Data Registry
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://portal.mcgm.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#087F5B] transition">
                  BMC Official Portal <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://portal.mcgm.gov.in/irj/portal/anonymous/BMC-on-Map-Wards-Offices" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#087F5B] transition">
                  BMC Ward Offices Directory <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://ceoelection.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#087F5B] transition">
                  CEO Maharashtra Elections <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://results.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#087F5B] transition">
                  Election Commission of India <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <Link href="/data-sources" className="inline-flex items-center gap-1 text-[#087F5B] hover:underline font-bold">
                  <Database className="w-3 h-3" /> Data Source Verification Log
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Disclaimer */}
          <div>
            <h4 className="text-[#17243B] font-extrabold text-xs tracking-wider uppercase mb-3">
              Data Governance
            </h4>
            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0] space-y-2 text-xs shadow-xs">
              <div className="flex items-start gap-2 text-[#D97706] font-bold">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#F59E0B]" />
                <span>Politically Neutral Infrastructure</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Assembly representative records are displayed strictly as factual geographic election data. Representatives are not credited or blamed for municipal BMC solid waste management operations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} PriSEHAT-Pulse Civic Platform. Built for civic cleanliness in Mumbai.
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/how-it-works" className="hover:text-[#17243B]">How It Works</Link>
            <Link href="/about" className="hover:text-[#17243B]">About</Link>
            <Link href="/admin" className="hover:text-[#17243B]">Authority Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
