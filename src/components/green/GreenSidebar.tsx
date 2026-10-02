'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MODES = [
  {
    number: 1,
    label: 'Civic Risk Map',
    sublabel: 'Issue reporting & tracking',
    href: '/map',
    icon: '⚠️',
  },
  {
    number: 2,
    label: 'Air Quality Map',
    sublabel: 'CPCB / OpenAQ live data',
    href: '/map',
    icon: '💨',
  },
  {
    number: 3,
    label: 'Green Density & Nature Exploration',
    sublabel: 'Vegetation & walkable spaces',
    href: '/green',
    icon: '🌿',
  },
] as const;

export default function GreenSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex flex-col w-[210px] bg-[#0f172a] flex-shrink-0 border-r border-slate-800 h-full overflow-hidden"
      role="navigation"
      aria-label="Map mode navigation"
    >
      {/* Brand / Title block at top */}
      <div className="p-3.5 border-b border-slate-800/80 bg-[#0b1120]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-red-600/30">
            F
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-black text-white uppercase tracking-tight">
              Fix<span className="text-red-500">Mumbai</span>
            </span>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest truncate">
              Civic GIS &amp; Nature
            </span>
          </div>
        </Link>
      </div>

      <div className="px-3 pt-3 pb-1">
        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
          Map Modes
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-1 space-y-1">
        {MODES.map((mode) => {
          const isActive =
            pathname === mode.href ||
            pathname === `/civic${mode.href}` ||
            (mode.href === '/green' && (pathname?.includes('/green') ?? false));
          return (
            <Link
              key={mode.number}
              href={mode.href}
              className={`flex items-start gap-2.5 px-2.5 py-2.5 rounded-xl transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                isActive
                  ? 'bg-emerald-950/60 border border-emerald-700/60 shadow-sm'
                  : 'hover:bg-slate-800/70 border border-transparent'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  isActive ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                }`}
                aria-hidden="true"
              >
                {mode.number}
              </span>
              <div className="min-w-0">
                <p className={`text-xs font-bold leading-tight ${isActive ? 'text-emerald-300' : 'text-slate-300'}`}>
                  {mode.icon} {mode.label}
                </p>
                <p className="text-[9.5px] text-slate-400 mt-0.5 leading-tight">{mode.sublabel}</p>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Non-clipped footer hint */}
      <div className="p-3 border-t border-slate-800/80 bg-[#0b1120]/70 flex-shrink-0">
        <p className="text-[8.5px] text-slate-400 leading-snug">
          Sentinel-2 NDVI &amp; OpenStreetMap (ODbL) public records.
        </p>
      </div>
    </aside>
  );
}
