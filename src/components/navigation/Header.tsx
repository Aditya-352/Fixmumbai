'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlusCircle, MapPin, Info, Menu, X, Shield, Trees, HelpCircle, Flame, ClipboardList, Wind, Camera } from 'lucide-react';
import { APP_BASE_PATH } from '@/lib/base-path';
import { useCitySelection } from '@/components/green/CitySelection';
import { DEFAULT_CITY } from '@/lib/green/config';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Green Density is the only page that surfaces the Add Photo Evidence action
  // in the navbar instead of the Report Issue button. Match the canonical route
  // the same way GreenSidebar does, so the app works with and without basePath.
  const onGreenPage = pathname === '/green' || pathname === `${APP_BASE_PATH}/green`;

  // The selected city is app-wide state. Navigation links carry it so the
  // address bar always reflects the city you are looking at.
  const { cityId } = useCitySelection();
  const withCity = (href: string) =>
    cityId === DEFAULT_CITY.id ? href : `${href}${href.includes('?') ? '&' : '?'}city=${cityId}`;

  // Navigation Items
  const navItems = [
    { href: '/map', label: 'Map', icon: MapPin },
    { href: '/air-quality', label: '💨 Air Quality', icon: Wind },
    { href: '/heat-stress', label: '🌡️ WBGT Heat Map', icon: Flame },
    { href: '/green', label: '🌿 Green Density', icon: Trees },
    { href: '/reports', label: 'Reports', icon: ClipboardList },
    { href: '/about', label: 'About', icon: Info },
    { href: '/how-it-works', label: 'How It Works', icon: HelpCircle },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
      <div className="max-w-[1536px] w-full mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Brand Logo — PriSEHAT Pulse */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#087F5B] flex items-center justify-center text-white shadow-sm transition group-hover:scale-105 flex-shrink-0 relative overflow-hidden">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h3.5l2.5-6 4 12 2.5-6h4.5" />
                <circle cx="17.5" cy="8.5" r="2" fill="#34D399" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="leading-none text-base sm:text-lg font-black tracking-tight text-[#17243B] whitespace-nowrap">
                PriSEHAT <span className="text-[#087F5B]">Pulse</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] text-slate-500 font-bold tracking-widest uppercase truncate">
                CIVIC &amp; ENVIRONMENTAL INTELLIGENCE
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 2xl:gap-2 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={withCity(item.href)}
                className={`px-3 2xl:px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
                  isActive(item.href)
                    ? 'bg-red-50 text-red-600 border border-red-200'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Primary Action CTA Based on Active Page */}
          {onGreenPage ? (
            /* Green Density: Add Photo Evidence (emerald) */
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 2xl:px-5 py-2.5 rounded-full shadow-md shadow-emerald-600/25 flex items-center gap-2 transition active:scale-95 whitespace-nowrap"
                onClick={() => window.dispatchEvent(new CustomEvent('open-photo-evidence-modal', { detail: { mode: 'upload' } }))}
                aria-label="Add photo evidence"
              >
                <Camera className="w-4 h-4 flex-shrink-0" />
                Add Photo Evidence
              </button>
            </div>
          ) : (
            /* All other pages: Report Issue (red) */
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link
                href="/report"
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm px-4 2xl:px-6 py-2.5 rounded-full shadow-md shadow-red-600/25 flex items-center gap-2 transition active:scale-95 whitespace-nowrap"
              >
                <PlusCircle className="w-4 h-4 flex-shrink-0" />
                REPORT ISSUE
              </Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {onGreenPage ? (
              <button
                type="button"
                className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full flex items-center gap-1 shadow-sm transition whitespace-nowrap"
                onClick={() => window.dispatchEvent(new CustomEvent('open-photo-evidence-modal', { detail: { mode: 'upload' } }))}
                aria-label="Add photo evidence"
              >
                <Camera className="w-3.5 h-3.5 flex-shrink-0" />
                <span>PHOTO</span>
              </button>
            ) : (
              <Link
                href="/report"
                className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full flex items-center gap-1 shadow-sm transition"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>REPORT</span>
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={withCity(item.href)}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold ${
                isActive(item.href)
                  ? 'bg-red-50 text-red-600 border border-red-200'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <Link
              href="/report"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-red-600 text-white font-black text-center py-3.5 rounded-full text-sm block shadow-md"
            >
              + REPORT A NEW CIVIC ISSUE
            </Link>
            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 font-semibold text-slate-600">
              <Link href="/wards" onClick={() => setMobileMenuOpen(false)} className="py-2 bg-slate-100 rounded-lg">Wards</Link>
              <Link href="/accountability" onClick={() => setMobileMenuOpen(false)} className="py-2 bg-slate-100 rounded-lg">Accountability</Link>
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="py-2 bg-slate-100 rounded-lg">Authority Login</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
