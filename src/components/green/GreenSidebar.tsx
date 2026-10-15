'use client';

/**
 * GreenSidebar — Clean white left sidebar with PriSEHAT-Pulse brand and Map Explorer nav.
 */

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Wind, Trees } from 'lucide-react';
import type { LayerVisibilityState } from '@/lib/green/types';
import { APP_BASE_PATH } from '@/lib/base-path';

const MODES = [
  {
    number: 1,
    label: 'Civic Risk Map',
    sublabel: 'Issue reporting & tracking',
    href: '/map',
    icon: Compass,
  },
  {
    number: 2,
    label: 'Air Quality Map',
    sublabel: 'CPCB, AQICN & Live Telemetry',
    href: '/map',
    icon: Wind,
  },
  {
    number: 3,
    label: 'Green Density',
    sublabel: 'Vegetation & walkable spaces',
    href: '/green',
    icon: Trees,
  },
] as const;


export interface GreenSidebarProps {
  filters?: any;
  onFilterTypeChange?: (t: any) => void;
  onCategoryFilterChange?: (cat: string) => void;
  onRadiusChange?: (r: number) => void;
  layerVisibility?: LayerVisibilityState;
  onToggleLayer?: (layer: any) => void;
  onSetBasemap?: (b: any) => void;
  totalSpaces?: number;
  cityName?: string;
  centreName?: string;
  onOpenPhotoModal?: (space: any) => void;
  isNdviProcessed?: boolean;
}

export default function GreenSidebar(_props: GreenSidebarProps) {
  const pathname = usePathname();
  const isGreenActive = pathname === '/green' || pathname === `${APP_BASE_PATH}/green`;

  return (
    <aside
      className="hidden lg:flex flex-col w-[260px] bg-white flex-shrink-0 border-r border-[#E5EBE7] h-full overflow-hidden text-[#14231D] select-none"
      role="navigation"
      aria-label="Map explorer navigation"
    >
      {/* ── Brand / Header ─────────────────────────────────────────────────── */}
      <div className="p-4 border-b border-[#E5EBE7] bg-white">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-[#087F5B] flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:bg-[#076B4D] transition-colors">
            F
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-black tracking-tight text-[#14231D]">
              Fix<span className="text-[#087F5B]">Mumbai</span>
            </span>
            <span className="text-[9px] font-bold text-[#64746B] uppercase tracking-wider">
              Civic GIS &amp; Nature
            </span>
          </div>
        </Link>
      </div>

      {/* ── Navigation: MAP EXPLORER ──────────────────────────────────────── */}
      <div className="px-3 pt-3.5 pb-1.5 flex-shrink-0">
        <p className="text-[10px] font-black text-[#64746B] uppercase tracking-widest px-1">
          Map Explorer
        </p>
      </div>

      <nav className="px-2.5 space-y-1 flex-shrink-0">
        {MODES.map((mode) => {
          const Icon = mode.icon;
          const isActive =
            (mode.href === '/green' && isGreenActive) ||
            (mode.href !== '/green' &&
              !isGreenActive &&
              (pathname === mode.href || pathname === `${APP_BASE_PATH}${mode.href}`));

          return (
            <Link
              key={mode.number}
              href={mode.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all group ${
                isActive
                  ? 'bg-[#EAF7F0] text-[#087F5B] font-bold shadow-xs border border-[#087F5B]/20'
                  : 'text-[#64746B] hover:text-[#14231D] hover:bg-slate-50 border border-transparent'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                  isActive
                    ? 'bg-[#087F5B] text-white shadow-xs'
                    : 'bg-slate-100 text-[#64746B] group-hover:bg-slate-200 group-hover:text-[#14231D]'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold leading-tight">{mode.label}</p>
                <p className="text-[10px] text-[#64746B] leading-tight truncate">
                  {mode.sublabel}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>



      {/* ── Footer Attribution ────────────────────────────────────────────── */}
      <div className="p-3 border-t border-[#E5EBE7] bg-white flex-shrink-0">
        <p className="text-[9px] text-[#64746B] leading-snug font-medium">
          PriSEHAT-Pulse Environmental Intelligence · Sentinel-2 NDVI &amp; BMC civic data.
        </p>
      </div>
    </aside>
  );
}
