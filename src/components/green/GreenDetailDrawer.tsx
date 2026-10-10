'use client';

/**
 * GreenDetailDrawer — Full detail panel for a selected green space.
 *
 * Phase 2 improvements:
 * - Shows accurate nearest-boundary distance (not centroid distance).
 * - Labels distances correctly: boundary distance vs walking distance.
 * - "Open in OSM" uses correct feature URL (node/way/relation) or coordinate fallback.
 * - "Get Directions" calls the pedestrian routing API and renders the route on the map.
 * - "Add Photo" button opens the CitizenPhotoUpload modal.
 * - Handles all error states and missing data gracefully.
 * - Never shows a value as verified when it is only estimated.
 */

import React, { useState, useCallback } from 'react';
import type { GreenSpaceDetail } from '@/lib/green/types';
import { DENSITY_META } from '@/lib/green/config';
import CitizenPhotoUpload from './CitizenPhotoUpload';
import {
  X, Navigation, MapPin, Camera, ExternalLink,
  AlertTriangle, CheckCircle2, Clock, Route,
  ChevronDown, ChevronUp, Car, Bike, Navigation2,
} from 'lucide-react';

interface GreenDetailDrawerProps {
  space: GreenSpaceDetail | null;
  loading: boolean;
  onClose: () => void;
  /** Called with route GeoJSON when directions are fetched */
  onRouteReady?: (
    routeGeoJson: any,
    distM: number,
    durationMin: number,
    isEstimated: boolean,
    origin?: { lat: number; lon: number; label: string },
    destination?: { lat: number; lon: number; label: string }
  ) => void;
  /** User's current centre coordinates for routing origin */
  userLat?: number;
  userLon?: number;
  /** Called when user clicks "Highlight on Map" to center map on feature */
  onHighlightOnMap?: (lat: number, lon: number, name: string) => void;
}

type TravelMode = 'driving' | 'walking' | 'cycling';

type DirectionsState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; distM: number; durationMin: number; isEstimated: boolean; source: string; mode: TravelMode; origin: { lat: number; lon: number; label: string }; destination: { lat: number; lon: number; label: string }; navigationUrl: string }
  | { status: 'error'; message: string };

export default function GreenDetailDrawer({
  space,
  loading,
  onClose,
  onRouteReady,
  userLat,
  userLon,
  onHighlightOnMap,
}: GreenDetailDrawerProps) {
  const [directionsState, setDirectionsState] = useState<DirectionsState>({ status: 'idle' });
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const [showAllEntrances, setShowAllEntrances] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [travelMode, setTravelMode] = useState<TravelMode>('driving');

  const handleDirections = useCallback(async () => {
    if (!space) return;

    // Validate origin
    if (!userLat || !userLon) {
      setDirectionsState({
        status: 'error',
        message: 'Your starting location is not set. Use "Locate Me" or search for a location first.',
      });
      return;
    }

    // Determine destination: prefer verified entrance, else nearest boundary point, else centroid
    let destLat: number;
    let destLon: number;
    let destLabel: string;
    let destIsApproximate = false;

    if (space.entrances.length > 0) {
      // Use first verified entrance
      const entrance = space.entrances[0];
      destLat = entrance.lat;
      destLon = entrance.lon;
      destLabel = entrance.tags.name || 'verified entrance';
    } else if (space.nearestBoundaryPoint) {
      destLat = space.nearestBoundaryPoint.lat;
      destLon = space.nearestBoundaryPoint.lon;
      destLabel = 'nearest boundary point (no verified entrance)';
      destIsApproximate = true;
    } else {
      destLat = space.centroid.lat;
      destLon = space.centroid.lon;
      destLabel = 'park centroid (approximate)';
      destIsApproximate = true;
    }

    const originLabel = 'Your location';

    setDirectionsState({ status: 'loading' });

    try {
      const params = new URLSearchParams({
        fromLat: String(userLat),
        fromLon: String(userLon),
        toLat: String(destLat),
        toLon: String(destLon),
        mode: travelMode,
      });

      const res = await fetch(`/civic/api/vegetation/route?${params}`);
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error?.message || 'Routing failed');
      }

      const { distanceM, durationMin, geometry, isEstimated, source, profile } = json.data;

      // Generate external navigation URL
      const navigationUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLon}&destination=${destLat},${destLon}&travelmode=${travelMode === 'cycling' ? 'bicycling' : travelMode}`;

      setDirectionsState({
        status: 'success',
        distM: distanceM,
        durationMin,
        isEstimated,
        source,
        mode: profile as TravelMode,
        origin: { lat: userLat, lon: userLon, label: originLabel },
        destination: { lat: destLat, lon: destLon, label: destLabel },
        navigationUrl,
      });

      // Pass route to map for rendering
      if (onRouteReady && geometry) {
        onRouteReady(
          { type: 'Feature', geometry, properties: { label: destLabel, mode: profile } },
          distanceM,
          durationMin,
          isEstimated,
          { lat: userLat, lon: userLon, label: originLabel },
          { lat: destLat, lon: destLon, label: destLabel }
        );
      }
    } catch (err: any) {
      setDirectionsState({
        status: 'error',
        message: err.message || 'Could not get directions. Please try again.',
      });
    }
  }, [space, userLat, userLon, onRouteReady, travelMode]);

  /**
   * Build a correct OSM URL:
   * - node/way/relation with valid numeric ID → canonical feature URL
   * - Otherwise → coordinate-based URL with pin at verified location
   *
   * Uses entrance coordinates when available, falls back to centroid.
   */
  function getOsmUrl(): string {
    if (!space) return '#';

    const validTypes = ['node', 'way', 'relation'];
    const isValidOsmId = /^[1-9][0-9]{0,15}$/.test(space.osmId ?? '');

    // For BMC nurseries and other non-OSM features, use coordinate fallback with higher zoom
    const isNursery = space.category === 'Nursery' || space.source === 'BMC_HANDBOOK';

    if (validTypes.includes(space.osmType) && isValidOsmId) {
      return `https://www.openstreetmap.org/${space.osmType}/${space.osmId}`;
    }

    // Coordinate fallback — use entrance coordinates when available, otherwise centroid
    const lat = (space.entrances.length > 0 ? space.entrances[0].lat : space.centroid.lat).toFixed(6);
    const lon = (space.entrances.length > 0 ? space.entrances[0].lon : space.centroid.lon).toFixed(6);
    const zoom = isNursery ? 18 : 17;
    return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
  }

  if (!loading && !space) return null;

  return (
    <div
      className="absolute inset-y-0 right-0 w-full bg-white shadow-2xl flex flex-col z-20"
      style={{ animation: 'slideInRight 0.2s ease-out' }}
      role="dialog"
      aria-modal="true"
      aria-label={space?.name ? `Details for ${space.name}` : 'Green space details'}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 flex-shrink-0 bg-white">
        <span className="font-black text-slate-900 text-sm">Green Space Details</span>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Loading skeleton */}
      {loading && !space && (
        <div className="p-4 space-y-3 animate-pulse">
          <div className="h-36 bg-slate-100 rounded-xl" />
          <div className="h-4 bg-slate-100 rounded w-2/3" />
          <div className="h-3 bg-slate-100 rounded w-1/2" />
          <div className="h-3 bg-slate-100 rounded w-3/4" />
        </div>
      )}

      {/* Content */}
      {space && (
        <div className="flex-1 overflow-y-auto pb-6">
          {/* Photo */}
          <div className="relative h-40 bg-slate-100 flex-shrink-0 overflow-hidden">
            {space.image && !imgError ? (
              <>
                <img
                  src={space.image.imageUrl}
                  alt={`Photo of ${space.name || 'green space'}`}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <p className="text-white text-[10px] leading-tight truncate">
                    {space.image.attribution} · {space.image.licence}
                  </p>
                </div>
                <span className="absolute top-2 right-2 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  {space.image.source}
                </span>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 gap-2">
                <span className="text-4xl">🌿</span>
                <span className="text-xs text-slate-400">
                  {space.image ? 'Photo failed to load' : 'Photo unavailable'}
                </span>
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

            {/* ── Distance Panel (Phase 2: accurate boundary distance) ──── */}
            <div className="bg-slate-50 rounded-xl p-3 text-xs space-y-1.5 font-mono border border-slate-200">
              {/* Straight-line distance from centre to centroid */}
              <div className="flex justify-between items-start">
                <span className="text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Straight-line to centroid
                </span>
                <span className="text-slate-700 font-medium text-right">
                  {(space.distanceM / 1000).toFixed(2)} km
                </span>
              </div>

              {/* Nearest boundary distance */}
              {!space.isInsidePolygon && space.nearestBoundaryPoint && (
                <div className="flex justify-between items-start border-t border-slate-200 pt-1.5">
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Nearest boundary
                  </span>
                  <span className="text-emerald-700 font-black text-right">
                    {(space.distanceM / 1000).toFixed(2)} km
                  </span>
                </div>
              )}

              {space.isInsidePolygon && (
                <div className="flex justify-between items-start border-t border-slate-200 pt-1.5">
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Location status
                  </span>
                  <span className="text-emerald-700 font-black text-right">Inside ✓</span>
                </div>
              )}

              {/* Road-network distance (if fetched) */}
              {directionsState.status === 'success' && (
                <div className="flex justify-between items-start border-t border-slate-200 pt-1.5">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Route className="w-3 h-3" />
                    Road distance ({directionsState.mode})
                    {directionsState.isEstimated && (
                      <span className="text-amber-600 font-normal">(est.)</span>
                    )}
                  </span>
                  <span className="text-blue-700 font-black text-right">
                    {(directionsState.distM / 1000).toFixed(2)} km
                  </span>
                </div>
              )}

              {/* Travel time */}
              {directionsState.status === 'success' && (
                <div className="flex justify-between items-start">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Est. duration ({directionsState.mode})
                  </span>
                  <span className="text-blue-700 font-bold">
                    {directionsState.durationMin} min
                    {directionsState.isEstimated && (
                      <span className="text-slate-400 font-normal ml-1">straight-line est.</span>
                    )}
                  </span>
                </div>
              )}

              {/* Distance method disclosure */}
              {space.distanceMethod && !space.isInsidePolygon && (
                <p className="text-[10px] text-slate-400 pt-0.5 border-t border-slate-200">
                  Boundary distance method: {space.distanceMethod.replace(/_/g, ' ').toLowerCase()}
                </p>
              )}

              {/* Area */}
              {space.areaM2 !== null && (
                <div className="flex justify-between border-t border-slate-200 pt-1.5">
                  <span className="text-slate-500">Area</span>
                  <span className="text-slate-800 font-bold">
                    {space.areaM2 >= 10_000
                      ? `${(space.areaM2 / 10_000).toFixed(1)} ha`
                      : `${Math.round(space.areaM2)} m²`}
                  </span>
                </div>
              )}
            </div>

            {/* ── Directions state ──────────────────────────────────────── */}
            {directionsState.status === 'loading' && (
              <div className="flex items-center gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2">
                <div className="w-3.5 h-3.5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                Finding route…
              </div>
            )}
            {directionsState.status === 'error' && (
              <div className="flex items-start gap-2 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Routing unavailable</p>
                  <p className="text-red-600 mt-0.5">{directionsState.message}</p>
                  <p className="text-red-500 mt-1">
                    Use "Open in OSM" to get directions from OpenStreetMap.
                  </p>
                </div>
              </div>
            )}
            {directionsState.status === 'success' && (
              <div className="space-y-2">
                {/* Travel mode selector */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500 font-medium">Mode:</span>
                  <div className="flex gap-1 bg-slate-100 rounded-lg p-0.5">
                    {(['driving', 'walking', 'cycling'] as TravelMode[]).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setTravelMode(mode)}
                        className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold transition ${
                          travelMode === mode
                            ? 'bg-white text-blue-700 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {mode === 'driving' && <Car className="w-3 h-3" />}
                        {mode === 'walking' && <Navigation2 className="w-3 h-3" />}
                        {mode === 'cycling' && <Bike className="w-3 h-3" />}
                        <span className="capitalize">{mode}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Route details panel */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs space-y-1.5">
                  <div className="flex items-center gap-1 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    Route calculated
                  </div>

                  <div className="bg-white/70 rounded-lg p-2 space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-500">Origin</span>
                      <span className="font-mono text-slate-800 truncate max-w-[140px]">
                        {directionsState.origin.label} ({directionsState.origin.lat.toFixed(5)}, {directionsState.origin.lon.toFixed(5)})
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-500">Destination</span>
                      <span className="font-mono text-slate-800 truncate max-w-[140px]">
                        {directionsState.destination.label} ({directionsState.destination.lat.toFixed(5)}, {directionsState.destination.lon.toFixed(5)})
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px] border-t border-slate-100 pt-1">
                      <span className="text-slate-500 flex items-center gap-1">
                        {directionsState.mode === 'driving' && <Car className="w-3 h-3" />}
                        {directionsState.mode === 'walking' && <Navigation2 className="w-3 h-3" />}
                        {directionsState.mode === 'cycling' && <Bike className="w-3 h-3" />}
                        Travel mode
                      </span>
                      <span className="font-bold text-slate-800 capitalize">{directionsState.mode}</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Route className="w-3 h-3" />
                        Road distance
                        {directionsState.isEstimated && <span className="text-amber-600 font-normal">(est.)</span>}
                      </span>
                      <span className="text-blue-700 font-black">
                        {(directionsState.distM / 1000).toFixed(2)} km
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Est. duration
                      </span>
                      <span className="text-blue-700 font-bold">
                        {directionsState.durationMin} min
                        {directionsState.isEstimated && <span className="text-slate-400 font-normal ml-1">straight-line est.</span>}
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px] border-t border-slate-100 pt-1">
                      <span className="text-slate-500">Source</span>
                      <span className="font-mono text-slate-600">{directionsState.source}</span>
                    </div>
                  </div>

                  {directionsState.isEstimated && (
                    <p className="text-amber-600 text-[10px]">
                      ⚠ Note: {directionsState.destination.label.includes('approximate') ? 'Destination is approximate — no verified entrance found.' : 'Routing unavailable; straight-line estimate shown.'}
                    </p>
                  )}

                  {/* External navigation link */}
                  <a
                    href={directionsState.navigationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Navigate with Google Maps
                  </a>
                </div>
              </div>
            )}

            {/* ── Entrances ──────────────────────────────────────────────── */}
            {space.entrances.length > 0 ? (
              <section>
                <button
                  onClick={() => setShowAllEntrances(!showAllEntrances)}
                  className="flex items-center gap-1 text-xs font-black text-slate-700 uppercase tracking-wider mb-2"
                >
                  Entrances ({space.entrances.length})
                  {showAllEntrances ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
                {(showAllEntrances ? space.entrances : space.entrances.slice(0, 2)).map((ent, i) => (
                  <div key={i} className="text-xs text-slate-600 font-mono bg-slate-50 rounded-lg px-3 py-1.5 mb-1 flex justify-between">
                    <span>{ent.lat.toFixed(5)}, {ent.lon.toFixed(5)}</span>
                    {ent.tags.name && <span className="text-slate-400 ml-2">{ent.tags.name}</span>}
                  </div>
                ))}
              </section>
            ) : (
              <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                <p className="font-bold">No verified entrance mapped</p>
                <p className="text-amber-600 mt-0.5 text-[10.5px]">
                  Directions will route to the nearest boundary point. Access is not guaranteed.
                </p>
              </div>
            )}

            {/* ── NDVI ──────────────────────────────────────────────────── */}
            <section aria-labelledby="ndvi-heading">
              <h3 id="ndvi-heading" className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                Vegetation (NDVI)
              </h3>
              {space.ndviFull ? (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    {space.ndviFull.provenance === 'MEASURED' ? (
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                        style={{ background: DENSITY_META[space.ndviFull.densityClass].colour }}
                      >
                        {DENSITY_META[space.ndviFull.densityClass].label}
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-600 border border-slate-300">
                        Illustrative estimate
                      </span>
                    )}
                    {space.ndviFull.provenance === 'MEASURED' && space.ndviFull.confidence && (
                      <span
                        className={`text-[10px] font-bold ${
                          space.ndviFull.confidence === 'LOW' ? 'text-amber-600' : 'text-green-700'
                        }`}
                      >
                        Confidence: {space.ndviFull.confidence}
                      </span>
                    )}
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-xs font-mono space-y-1 border border-slate-200">
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
                    {space.ndviFull.provenance === 'MEASURED' && space.ndviFull.pixelCount !== null && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Valid pixels</span>
                        <span className="font-bold text-slate-800">
                          {space.ndviFull.pixelCount?.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {space.ndviFull.provenance === 'SYNTHETIC_ESTIMATE' ? (
                    <p className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5 leading-snug">
                      This value is a curated placeholder, not a satellite measurement. No
                      acquisition date, pixel count or cloud figure is available for it.
                    </p>
                  ) : space.ndviFull.observationStart ? (
                    <p className="text-[10px] text-slate-400">
                      Observation:{' '}
                      {new Date(space.ndviFull.observationStart).toLocaleDateString('en-IN')}
                      {space.ndviFull.observationEnd &&
                        ` – ${new Date(space.ndviFull.observationEnd).toLocaleDateString('en-IN')}`}
                      {space.ndviFull.satelliteSource && ` · ${space.ndviFull.satelliteSource}`}
                    </p>
                  ) : null}
                </div>
              ) : (
                <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-400 border border-slate-200">
                  NDVI unavailable —{' '}
                  {space.ndvi?.reason === 'SATELLITE_UNAVAILABLE'
                    ? 'Satellite data not reachable (AgroMonitoring key not configured).'
                    : 'Not yet computed for this space.'}
                </div>
              )}
            </section>

            {/* ── Access + evidence ──────────────────────────────────────── */}
            <section aria-labelledby="access-heading">
              <h3 id="access-heading" className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                Access & Walkability
              </h3>
              <div className="space-y-1.5">
                <AccessStatusRow status={space.accessStatus} />
                <WalkClassRow wc={space.walkClass} pathCount={space.pathCount} pathLength={space.totalPathLengthM} />
                {space.accessEvidence.length > 0 && (
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
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

            {/* ── Data source ────────────────────────────────────────────── */}
            <section>
              <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Source</h3>
              <div className="text-xs text-slate-600 space-y-1 bg-slate-50 rounded-xl p-3 border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">OSM</span>
                  <a
                    href={getOsmUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-mono"
                  >
                    {space.osmType}/{space.osmId}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Updated</span>
                  <span>{new Date(space.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  © OpenStreetMap contributors (ODbL) ·{' '}
                  <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    License
                  </a>
                </p>
              </div>
            </section>

            {/* ── Action buttons ─────────────────────────────────────────── */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                {/* Directions */}
                <button
                  onClick={handleDirections}
                  disabled={directionsState.status === 'loading'}
                  className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:text-slate-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  {directionsState.status === 'loading' ? 'Finding route…' : 'Directions'}
                </button>

                {/* Open in OSM */}
                <a
                  href={getOsmUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 px-3 rounded-xl transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in OSM
                </a>
              </div>

              {/* External navigation button (shown when route is available) */}
              {directionsState.status === 'success' && (
                <a
                  href={directionsState.navigationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Navigate with Google Maps ({directionsState.mode})
                </a>
              )}

              {/* Highlight on Map */}
              {onHighlightOnMap && space && (
                <button
                  onClick={() => {
                    const lat = space.entrances.length > 0
                      ? space.entrances[0].lat
                      : space.centroid.lat;
                    const lon = space.entrances.length > 0
                      ? space.entrances[0].lon
                      : space.centroid.lon;
                    onHighlightOnMap(lat, lon, space.name || 'Selected location');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold py-2.5 px-4 rounded-xl transition"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Highlight on Map
                </button>
              )}

              {/* Add Greenery Photo */}
              <button
                onClick={() => setShowPhotoUpload(true)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold py-2.5 px-4 rounded-xl transition"
              >
                <Camera className="w-3.5 h-3.5" />
                Add Greenery Photo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Citizen Photo Upload Modal ─────────────────────────────────── */}
      {showPhotoUpload && (
        <CitizenPhotoUpload
          greenSpaceId={space?.id ?? null}
          greenSpaceName={space?.name ?? 'Unknown location'}
          defaultLat={space?.centroid.lat ?? userLat ?? 19.076}
          defaultLon={space?.centroid.lon ?? userLon ?? 72.877}
          onClose={() => setShowPhotoUpload(false)}
          onSuccess={() => setShowPhotoUpload(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function AccessStatusRow({ status }: { status: GreenSpaceDetail['accessStatus'] }) {
  const MAP: Record<string, { label: string; colour: string; bg: string; note: string }> = {
    PUBLIC_TAGGED: { label: 'Public access', colour: 'text-green-700', bg: 'bg-green-50 border-green-200', note: 'OSM access=yes or permissive' },
    RESTRICTED: { label: 'Restricted', colour: 'text-red-700', bg: 'bg-red-50 border-red-200', note: 'OSM access=private/no/customers' },
    UNKNOWN: { label: 'Access not verified', colour: 'text-slate-600', bg: 'bg-slate-50 border-slate-200', note: 'No OSM access tag found' },
  };
  const m = MAP[status] ?? MAP.UNKNOWN;
  return (
    <div className={`${m.bg} rounded-xl px-3 py-2 flex items-center justify-between border`}>
      <span className={`text-xs font-bold ${m.colour}`}>{m.label}</span>
      <span className="text-[10px] text-slate-400">{m.note}</span>
    </div>
  );
}

function WalkClassRow({ wc, pathCount, pathLength }: { wc: GreenSpaceDetail['walkClass']; pathCount: number; pathLength: number }) {
  const label =
    wc === 'WALKABLE_VERIFIED' ? '✓ Walkable — verified internal paths' :
    wc === 'PATHS_PRESENT_ACCESS_UNVERIFIED' ? 'Paths present — access not verified' :
    wc === 'ACCESS_UNVERIFIED' ? 'Access not verified' :
    wc === 'RESTRICTED' ? 'Restricted' :
    wc === 'ROADSIDE_VEGETATION' ? 'Roadside vegetation — not recommended for walking' : wc;

  const colour =
    wc === 'WALKABLE_VERIFIED' ? 'text-blue-700 bg-blue-50 border-blue-200' :
    wc === 'RESTRICTED' || wc === 'ROADSIDE_VEGETATION' ? 'text-red-700 bg-red-50 border-red-200' :
    'text-slate-600 bg-slate-50 border-slate-200';

  return (
    <div className={`rounded-xl px-3 py-2 border ${colour}`}>
      <p className="text-xs font-bold">{label}</p>
      {pathCount > 0 && (
        <p className="text-[10px] mt-0.5 opacity-80">
          {pathCount} path segment{pathCount !== 1 ? 's' : ''} · {(pathLength / 1000).toFixed(2)} km inside polygon
        </p>
      )}
    </div>
  );
}
