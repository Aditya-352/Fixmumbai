'use client';

import React from 'react';
import type { GreenSpaceSummary } from '@/lib/green/types';
import { DENSITY_META } from '@/lib/green/config';
import { WALK_SPEED_KMH } from '@/lib/green/config';

interface GreenSpaceCardProps {
  space: GreenSpaceSummary;
  onClick: (id: string) => void;
  isSelected?: boolean;
}

// Build a 1-line description from OSM tags only
function buildDescription(tags: Record<string, string>): string {
  const parts: string[] = [];
  if (tags.surface) parts.push(`Surface: ${tags.surface}`);
  if (tags.lit === 'yes') parts.push('Lit');
  if (tags.lit === 'no') parts.push('Unlit');
  if (tags.fee === 'yes') parts.push('Entry fee required');
  if (tags.fee === 'no') parts.push('Free entry');
  if (tags.opening_hours) parts.push(`Hours: ${tags.opening_hours}`);
  return parts.length > 0 ? parts.join(' · ') : 'No description available';
}

function AccessBadge({ status }: { status: GreenSpaceSummary['accessStatus'] }) {
  if (status === 'PUBLIC_TAGGED') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
        <span aria-hidden>✓</span> Public access (OSM tagged)
      </span>
    );
  }
  if (status === 'RESTRICTED') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800">
        <span aria-hidden>✗</span> Restricted (OSM tagged)
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
      Access not verified
    </span>
  );
}

function WalkBadge({ wc }: { wc: GreenSpaceSummary['walkClass'] }) {
  if (wc === 'WALKABLE_VERIFIED') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
        🚶 Walkable (verified paths)
      </span>
    );
  }
  if (wc === 'PATHS_PRESENT_ACCESS_UNVERIFIED') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600">
        Paths present · access not verified
      </span>
    );
  }
  if (wc === 'ROADSIDE_VEGETATION') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
        Roadside vegetation
      </span>
    );
  }
  if (wc === 'RESTRICTED') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700">
        Restricted
      </span>
    );
  }
  return null;
}

export default function GreenSpaceCard({ space, onClick, isSelected }: GreenSpaceCardProps) {
  const density = space.ndvi?.densityClass ?? 'UNAVAILABLE';
  const densityMeta = DENSITY_META[density];
  const distKm = (space.distanceM / 1000).toFixed(2);
  const description = buildDescription(space.tags);

  // Walk time display
  let walkDisplay: React.ReactNode;
  if (space.walkMinutes !== null) {
    walkDisplay = (
      <span>
        ~{space.walkMinutes} min walk
        {space.walkMinutesEstimated && (
          <span className="text-slate-400 ml-1">(estimated at {WALK_SPEED_KMH} km/h)</span>
        )}
      </span>
    );
  } else {
    walkDisplay = <span className="text-slate-400">Route unavailable</span>;
  }

  return (
    <button
      onClick={() => onClick(space.id)}
      className={`w-full text-left rounded-xl border transition-all duration-150 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 ${
        isSelected
          ? 'border-green-500 bg-green-50 shadow-md'
          : 'border-slate-200 bg-white hover:border-green-300 hover:shadow-sm'
      }`}
      aria-label={`View details for ${space.name || 'Unnamed green space'}`}
    >
      {/* Photo strip */}
      <div className="h-28 bg-slate-100 overflow-hidden relative flex-shrink-0">
        {space.image ? (
          <>
            <img
              src={space.image.imageUrl}
              alt={`Photo of ${space.name || 'green space'}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Source badge */}
            <span className="absolute bottom-1.5 right-1.5 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
              {space.image.source}
            </span>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-2xl">
            🌿
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 space-y-1.5">
        {/* Name + density badge */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-slate-900 leading-tight line-clamp-1">
            {space.name || <span className="text-slate-400 italic">Unnamed</span>}
          </h3>
          <span
            className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
            style={{ background: densityMeta.colour }}
          >
            {densityMeta.label}
          </span>
        </div>

        {/* Distance + walk */}
        <div className="text-xs text-slate-600 flex items-center gap-2 flex-wrap">
          <span className="font-semibold">{distKm} km</span>
          <span className="text-slate-300">·</span>
          {walkDisplay}
        </div>

        {/* Access + walk class */}
        <div className="flex flex-wrap gap-1">
          <AccessBadge status={space.accessStatus} />
          <WalkBadge wc={space.walkClass} />
        </div>

        {/* OSM-tag description */}
        <p className="text-xs text-slate-500 line-clamp-1 leading-relaxed">{description}</p>
      </div>
    </button>
  );
}
