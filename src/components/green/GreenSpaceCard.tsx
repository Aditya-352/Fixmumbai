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

/** Build 1-line description from real OSM tags only */
function buildDescription(tags: Record<string, string>, category: string): string {
  const parts: string[] = [];
  if (category) parts.push(category);
  if (tags.lit === 'yes') parts.push('Lit walkway');
  if (tags.fee === 'no') parts.push('Free entry');
  else if (tags.fee === 'yes') parts.push('Entry fee');
  if (tags.wheelchair === 'yes') parts.push('Wheelchair');
  if (tags.opening_hours) parts.push(tags.opening_hours);
  return parts.length > 0 ? parts.join(' · ') : 'Public green space';
}

export default function GreenSpaceCard({ space, onClick, isSelected }: GreenSpaceCardProps) {
  const density = space.ndvi?.densityClass ?? 'UNAVAILABLE';
  // A synthetic estimate must never be coloured as if it were a measurement.
  const ndviMeasured = space.ndvi?.provenance === 'MEASURED';
  const densityMeta = DENSITY_META[density];
  const distKm = (space.distanceM / 1000).toFixed(2);

  // Item 6: always suffix "(est.)" when it is a straight-line estimate
  const walkMin = space.walkMinutes ?? Math.round((space.distanceM / 1000 / WALK_SPEED_KMH) * 60);
  const walkLabel = space.walkMinutesEstimated !== false
    ? `~${walkMin} min (est.)`
    : `${walkMin} min walk`;

  const description = buildDescription(space.tags, space.category);
  const isWalkable = space.walkClass === 'WALKABLE_VERIFIED';

  return (
    <button
      onClick={() => onClick(space.id)}
      className={`w-full text-left rounded-2xl border p-2.5 transition-all duration-150 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#087F5B] ${
        isSelected
          ? 'border-[#087F5B] bg-[#EAF7F0]/50 shadow-xs ring-1 ring-[#087F5B]'
          : 'border-[#E5EBE7] bg-white hover:border-[#087F5B]/30 hover:shadow-xs'
      }`}
      aria-label={`View details for ${space.name || 'Unnamed green space'}`}
    >
      {/* 80px thumbnail — LEFT */}
      <div className="w-20 h-20 rounded-xl bg-[#F7F9F8] overflow-hidden flex-shrink-0 relative border border-[#E5EBE7]">
        {space.image?.imageUrl ? (
          <img
            src={space.image.thumbUrl || space.image.imageUrl}
            alt={space.name || 'Green Space'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#EAF7F0] text-[#087F5B] text-2xl font-bold">
            🌿
          </div>
        )}
      </div>

      {/* Middle: name (up to 2 lines), distance, description (1 line) */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-start justify-between gap-1.5">
          <h3 className="text-xs font-black text-[#14231D] line-clamp-2 leading-tight">
            {space.name || 'Unnamed Green Space'}
          </h3>
          {density !== 'UNAVAILABLE' && (
            <span
              className={`flex-shrink-0 mt-0.5 px-1.5 py-0.5 rounded text-[9px] font-extrabold ${
                ndviMeasured ? 'text-white' : 'text-[#64746B] bg-slate-100 border border-[#E5EBE7]'
              }`}
              style={ndviMeasured ? { background: densityMeta.colour } : undefined}
              title={
                ndviMeasured
                  ? 'Measured from Sentinel-2 pixels'
                  : 'Illustrative estimate — not a satellite measurement'
              }
            >
              {densityMeta.label}
              {ndviMeasured ? '' : ' (est.)'}
            </span>
          )}
        </div>

        {/* Distance + walk time */}
        <div className="text-[11px] font-semibold text-[#64746B] flex items-center gap-1.5 flex-wrap">
          <span className="flex items-center gap-1 text-[#087F5B] font-bold">
            {isWalkable ? '🚶' : '📍'}
            {isWalkable ? 'Walkable' : space.category}
          </span>
          {space.isInsidePolygon ? (
            <span className="text-[#087F5B] font-bold">Inside boundary</span>
          ) : space.distanceLabel ? (
            <span>· {space.distanceLabel}</span>
          ) : (
            <span>· {distKm} km</span>
          )}
          {!space.isInsidePolygon && space.walkMinutes !== null && (
            <span className="text-slate-400">({walkLabel})</span>
          )}
        </div>

        {/* 1-line tag description */}
        <p className="text-[10px] text-[#64746B] truncate leading-tight">
          {description}
        </p>
      </div>

      {/* Chevron */}
      <div className="flex-shrink-0 text-slate-300 group-hover:text-[#087F5B] group-hover:translate-x-0.5 transition-all pr-1">
        <ChevronRight className="w-4 h-4" />
      </div>
    </button>
  );
}
