'use client';

import React from 'react';
import type { GreenSpaceSummary } from '@/lib/green/types';
import { DENSITY_META, WALK_SPEED_KMH } from '@/lib/green/config';
import { ChevronRight } from 'lucide-react';

interface GreenSpaceCardProps {
  space: GreenSpaceSummary;
  onClick: (id: string) => void;
  isSelected?: boolean;
}

// Build a concise 1-line description from real OSM tags only
function buildDescription(tags: Record<string, string>, category: string): string {
  const parts: string[] = [];
  if (category) parts.push(category);
  if (tags.lit === 'yes') parts.push('Lit walkway');
  if (tags.fee === 'no') parts.push('Free entry');
  else if (tags.fee === 'yes') parts.push('Entry fee');
  if (tags.wheelchair === 'yes') parts.push('Wheelchair accessible');
  if (tags.opening_hours) parts.push(tags.opening_hours);
  return parts.length > 0 ? parts.join(' · ') : 'Public municipal green space';
}

export default function GreenSpaceCard({ space, onClick, isSelected }: GreenSpaceCardProps) {
  const density = space.ndvi?.densityClass ?? 'UNAVAILABLE';
  const densityMeta = DENSITY_META[density];
  const distKm = (space.distanceM / 1000).toFixed(2);
  const walkMin = space.walkMinutes ?? Math.round((space.distanceM / 1000 / WALK_SPEED_KMH) * 60);
  const description = buildDescription(space.tags, space.category);
  const isWalkable = space.walkClass === 'WALKABLE_VERIFIED';

  return (
    <button
      onClick={() => onClick(space.id)}
      className={`w-full text-left rounded-2xl border p-2.5 transition-all duration-150 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
        isSelected
          ? 'border-emerald-600 bg-emerald-50/70 shadow-md ring-1 ring-emerald-600'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
      }`}
      aria-label={`View details for ${space.name || 'Unnamed green space'}`}
    >
      {/* 80px Photo Thumbnail on the LEFT */}
      <div className="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 relative border border-slate-200">
        {space.image?.imageUrl ? (
          <img
            src={space.image.thumbUrl || space.image.imageUrl}
            alt={space.name || 'Green Space'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-700 text-2xl">
            🌿
          </div>
        )}
      </div>

      {/* Middle: Details */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center justify-between gap-1.5">
          <h3 className="text-xs font-black text-slate-900 truncate leading-tight">
            {space.name || 'Unnamed Green Space'}
          </h3>
          {space.ndvi?.densityClass && space.ndvi.densityClass !== 'UNAVAILABLE' && (
            <span
              className="flex-shrink-0 px-1.5 py-0.5 rounded text-[9px] font-extrabold text-white"
              style={{ background: densityMeta.colour }}
            >
              {densityMeta.label}
            </span>
          )}
        </div>

        {/* Distance + Walk */}
        <div className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
          <span>{isWalkable ? '🚶' : '📍'}</span>
          <span>{distKm} km straight-line · ~{walkMin} min walk</span>
        </div>

        {/* 1-line tag-based description */}
        <p className="text-[10px] text-slate-500 truncate leading-tight">
          {description}
        </p>
      </div>

      {/* Chevron on the right */}
      <div className="flex-shrink-0 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all pr-1">
        <ChevronRight className="w-4 h-4" />
      </div>
    </button>
  );
}
