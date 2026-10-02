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
      className="hidden lg:flex flex-col w-[240px] bg-[#0f172a] flex-shrink-0 border-r border-slate-800"
      role="navigation"
      aria-label="Map mode navigation"
    >
      <div className="p-4 border-b border-slate-700">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Map Modes</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
        {MODES.map((mode) => {
          const isActive =
            pathname === mode.href ||
            pathname === `/civic${mode.href}` ||
            (mode.href === '/green' && (pathname?.includes('/green') ?? false));
          return (
            <Link
              key={mode.number}
              href={mode.href}
              className={`flex items-start gap-3 px-3 py-3 rounded-xl transition-all group focus:outline-none focus:ring-2 focus:ring-green-500 ${
                isActive
                  ? 'bg-green-900/40 border border-green-700/50'
                  : 'hover:bg-slate-800 border border-transparent'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                  isActive ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-300'
                }`}
                aria-hidden="true"
              >
                {mode.number}
              </span>
              <div className="min-w-0">
                <p className={`text-sm font-bold leading-tight ${isActive ? 'text-green-400' : 'text-slate-300'}`}>
                  {mode.icon} {mode.label}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{mode.sublabel}</p>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom hint */}
      <div className="p-4 border-t border-slate-700">
        <p className="text-[9px] text-slate-600 leading-relaxed">
          All data from public sources. NDVI: Copernicus Sentinel-2. Walkability: OpenStreetMap (ODbL).
        </p>
      </div>
    </aside>
  );
}
