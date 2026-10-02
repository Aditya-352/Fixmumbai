'use client';

import React from 'react';
import type { GreenSpaceDetail } from '@/lib/green/types';
import { DENSITY_META } from '@/lib/green/config';

interface GreenDetailDrawerProps {
  space: GreenSpaceDetail | null;
  loading: boolean;
  onClose: () => void;
  onDirections?: (id: string) => void;
}

export default function GreenDetailDrawer({
  space,
  loading,
  onClose,
  onDirections,
}: GreenDetailDrawerProps) {
  if (!loading && !space) return null;

  return (
    <div
      className="absolute inset-y-0 right-0 w-full bg-white shadow-2xl flex flex-col z-20 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={space?.name ? `Details for ${space.name}` : 'Green space details'}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 flex-shrink-0">
        <span className="font-black text-slate-900 text-sm">Green Space Details</span>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Close details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Loading skeleton */}
      {loading && !space && (
        <div className="p-4 space-y-3 animate-pulse">
          <div className="h-36 bg-slate-100 rounded-xl" />
          <div className="h-4 bg-slate-100 rounded w-2/3" />
          <div className="h-3 bg-slate-100 rounded w-1/2" />
          <div className="h-3 bg-slate-100 rounded w-3/4" />
          <div className="h-3 bg-slate-100 rounded w-1/3" />
        </div>
      )}

      {/* Content */}
      {space && (
        <div className="flex-1 overflow-y-auto pb-6">
          {/* Photo */}
          <div className="relative h-40 bg-slate-100 flex-shrink-0">
            {space.image ? (
              <>
                <img
                  src={space.image.imageUrl}
                  alt={`Photo of ${space.name || 'green space'}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <p className="text-white text-[10px] leading-tight">
                    {space.image.attribution} · {space.image.licence}
                  </p>
                </div>
                <span className="absolute top-2 right-2 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  {space.image.verificationTier}
                </span>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300 text-4xl">
                🌿
              </div>
            )}
          </div>

          <div className="px-4 pt-3 space-y-4">
            {/* Name + category */}
            <div>
              <h2 className="text-lg font-black text-slate-900 leading-tight">
                {space.name || <span className="italic text-slate-400">Unnamed green space</span>}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">{space.category}</p>
            </div>

            {/* Coordinates + distance */}
            <div className="bg-slate-50 rounded-xl p-3 text-xs space-y-1 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Coordinates</span>
                <span className="text-slate-800 font-bold">
                  {space.centroid.lat.toFixed(5)}, {space.centroid.lon.toFixed(5)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Straight-line distance</span>
                <span className="text-slate-800 font-bold">{(space.distanceM / 1000).toFixed(2)} km</span>
              </div>
              {space.areaM2 !== null && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Area</span>
                  <span className="text-slate-800 font-bold">
                    {space.areaM2 >= 10_000
                      ? `${(space.areaM2 / 10_000).toFixed(1)} ha`
                      : `${Math.round(space.areaM2)} m²`}
                  </span>
                </div>
              )}
            </div>

            {/* NDVI */}
            <section aria-labelledby="ndvi-heading">
              <h3 id="ndvi-heading" className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Vegetation (NDVI)</h3>
              {space.ndviFull ? (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                      style={{ background: DENSITY_META[space.ndviFull.densityClass].colour }}
                    >
                      {DENSITY_META[space.ndviFull.densityClass].label}
                    </span>
                    {space.ndviFull.confidence && (
                      <span className={`text-[10px] font-bold ${
                        space.ndviFull.confidence === 'LOW' ? 'text-amber-600' : 'text-green-700'
                      }`}>
                        Confidence: {space.ndviFull.confidence}
                      </span>
                    )}
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-xs font-mono space-y-1">
                    {space.ndviFull.mean !== null && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Mean NDVI</span>
                        <span className="font-bold text-slate-800">{space.ndviFull.mean?.toFixed(3)}</span>
                      </div>
                    )}
                    {space.ndviFull.min !== null && space.ndviFull.max !== null && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Range</span>
                        <span className="font-bold text-slate-800">
                          {space.ndviFull.min?.toFixed(3)} – {space.ndviFull.max?.toFixed(3)}
                        </span>
                      </div>
                    )}
                    {space.ndviFull.pixelCount !== null && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Pixel count (10 m)</span>
                        <span className="font-bold text-slate-800">{space.ndviFull.pixelCount}</span>
                      </div>
                    )}
                  </div>
                  {space.ndviFull.observationStart && space.ndviFull.observationEnd && (
                    <p className="text-[10px] text-slate-400">
                      Observation window: {space.ndviFull.observationStart} – {space.ndviFull.observationEnd}
                      {space.ndviFull.compositeType === 'TRAILING_90D' ? ' (90-day trailing median composite)' : ''}
                    </p>
                  )}
                </div>
              ) : (
                <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-400">
                  NDVI unavailable — {space.ndvi?.reason === 'SATELLITE_UNAVAILABLE'
                    ? 'Satellite data not reachable at this time.'
                    : 'Not yet computed for this space.'}
                </div>
              )}
            </section>

            {/* Access + evidence */}
            <section aria-labelledby="access-heading">
              <h3 id="access-heading" className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Access & Walkability</h3>
              <div className="space-y-1.5">
                <AccessStatusRow status={space.accessStatus} />
                <WalkClassRow wc={space.walkClass} pathCount={space.pathCount} pathLength={space.totalPathLengthM} />
                {space.accessEvidence.length > 0 && (
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1.5">Evidence</p>
                    <ul className="space-y-1">
                      {space.accessEvidence.map((ev, i) => (
                        <li key={i} className="text-xs text-slate-600 flex gap-2">
                          <span className="text-slate-400 flex-shrink-0">▸</span>
                          <span>{ev.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Entrances */}
            {space.entrances.length > 0 && (
              <section aria-labelledby="entrances-heading">
                <h3 id="entrances-heading" className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  Entrances ({space.entrances.length})
                </h3>
                <div className="space-y-1">
                  {space.entrances.slice(0, 5).map((ent, i) => (
                    <div key={i} className="text-xs text-slate-600 font-mono bg-slate-50 rounded-lg px-3 py-1.5">
                      {ent.lat.toFixed(5)}, {ent.lon.toFixed(5)}
                      {ent.tags.name && <span className="text-slate-400 ml-2">{ent.tags.name}</span>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* OSM source */}
            <section>
              <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Source</h3>
              <div className="text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">OSM ID</span>
                  <a
                    href={space.osmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-mono"
                  >
                    {space.osmType}/{space.osmId}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Fetched</span>
                  <span>{new Date(space.fetchedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  © OpenStreetMap contributors (ODbL) ·{' '}
                  <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    License
                  </a>
                </p>
              </div>
            </section>

            {/* Action buttons */}
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => onDirections?.(space.id)}
                disabled={!onDirections}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={onDirections ? 'Get walking directions' : 'Walking directions unavailable'}
              >
                {onDirections ? '🚶 Directions' : 'Route unavailable'}
              </button>
              <a
                href={space.osmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 px-4 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Open in OSM ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AccessStatusRow({ status }: { status: GreenSpaceDetail['accessStatus'] }) {
  const MAP = {
    PUBLIC_TAGGED: { label: 'Public access', colour: 'text-green-700', bg: 'bg-green-50', note: 'OSM access=yes or permissive' },
    RESTRICTED: { label: 'Restricted', colour: 'text-red-700', bg: 'bg-red-50', note: 'OSM access=private/no/customers' },
    UNKNOWN: { label: 'Access not verified', colour: 'text-slate-600', bg: 'bg-slate-50', note: 'No OSM access tag found' },
  } as const;
  const m = MAP[status];
  return (
    <div className={`${m.bg} rounded-xl px-3 py-2 flex items-center justify-between`}>
      <span className={`text-xs font-bold ${m.colour}`}>{m.label}</span>
      <span className="text-[10px] text-slate-400">{m.note}</span>
    </div>
  );
}

function WalkClassRow({
  wc, pathCount, pathLength,
}: { wc: GreenSpaceDetail['walkClass']; pathCount: number; pathLength: number }) {
  const label =
    wc === 'WALKABLE_VERIFIED' ? '✓ Walkable — verified internal paths' :
    wc === 'PATHS_PRESENT_ACCESS_UNVERIFIED' ? 'Paths present — access not verified' :
    wc === 'ACCESS_UNVERIFIED' ? 'Access not verified' :
    wc === 'RESTRICTED' ? 'Restricted' :
    wc === 'ROADSIDE_VEGETATION' ? 'Roadside vegetation — not recommended for walking' :
    wc;

  const colour =
    wc === 'WALKABLE_VERIFIED' ? 'text-blue-700 bg-blue-50' :
    wc === 'RESTRICTED' || wc === 'ROADSIDE_VEGETATION' ? 'text-red-700 bg-red-50' :
    'text-slate-600 bg-slate-50';

  return (
    <div className={`rounded-xl px-3 py-2 ${colour}`}>
      <p className="text-xs font-bold">{label}</p>
      {pathCount > 0 && (
        <p className="text-[10px] mt-0.5 opacity-80">
          {pathCount} path segment{pathCount !== 1 ? 's' : ''} · {(pathLength / 1000).toFixed(2)} km inside polygon
        </p>
      )}
    </div>
  );
}
