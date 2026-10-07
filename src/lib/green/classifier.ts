/**
 * Green space access and walkability classifier.
 *
 * Classification is derived ONLY from OSM tags and measured path data.
 * No guessing, no defaults, no invented values.
 *
 * Rules documented in §4C of the spec.
 */

import type { AccessStatus, WalkClass, AccessEvidence } from '@/lib/green/types';
import { MIN_PATH_LENGTH_M } from '@/lib/green/config';

// ── Access status ─────────────────────────────────────────────────────────────

/**
 * Derive access status from OSM tags.
 * Only the `access` tag is authoritative.
 */
export function classifyAccess(tags: Record<string, string>): AccessStatus {
  const access = tags.access;
  if (!access) return 'UNKNOWN';

  const publicValues = new Set(['yes', 'permissive', 'public']);
  const restrictedValues = new Set(['private', 'no', 'customers', 'members', 'permit', 'restricted']);

  if (publicValues.has(access)) return 'PUBLIC_TAGGED';
  if (restrictedValues.has(access)) return 'RESTRICTED';

  return 'UNKNOWN';
}

// ── Walk class ────────────────────────────────────────────────────────────────

export interface WalkClassResult {
  walkClass: WalkClass;
  evidence: AccessEvidence[];
}

/**
 * Derive walk class from access status, path data, tags, and geometry shape.
 *
 * @param accessStatus  Result of classifyAccess()
 * @param pathCount     Number of internal / adjacent footpath segments
 * @param totalPathM    Total length of those paths in metres
 * @param tags          Raw OSM tags
 * @param areaM2        Polygon area in m²  (null if unknown)
 */
export function classifyWalkClass(
  accessStatus: AccessStatus,
  pathCount: number,
  totalPathM: number,
  tags: Record<string, string>,
  areaM2: number | null
): WalkClassResult {
  const evidence: AccessEvidence[] = [];

  // 1. Record access tag evidence
  if (tags.access) {
    evidence.push({
      type: 'OSM_TAG',
      key: 'access',
      value: tags.access,
      description: `OSM tag access=${tags.access}`,
    });
  } else {
    evidence.push({
      type: 'OSM_TAG',
      key: 'access',
      value: undefined,
      description: 'No OSM access tag found',
    });
  }

  // 2. Record path evidence
  if (pathCount > 0) {
    evidence.push({
      type: 'PATH_COUNT',
      description: `${pathCount} footpath segment${pathCount !== 1 ? 's' : ''} found inside or within 50 m of boundary (${(totalPathM / 1000).toFixed(2)} km total)`,
    });
  } else {
    evidence.push({
      type: 'PATH_COUNT',
      description: 'No OpenStreetMap footpath segments found inside this polygon',
    });
  }

  // 3. Restricted — always restricted regardless of paths
  if (accessStatus === 'RESTRICTED') {
    return { walkClass: 'RESTRICTED', evidence };
  }

  // 4. Check for roadside vegetation heuristic
  // A polygon is ROADSIDE_VEGETATION if:
  //   - areaM2 < 500 m² (very small), AND
  //   - no footpaths, AND
  //   - access not explicitly public
  const isVerySmall = areaM2 !== null && areaM2 < 500;
  if (isVerySmall && pathCount === 0 && accessStatus !== 'PUBLIC_TAGGED') {
    evidence.push({
      type: 'GEOMETRY_SHAPE',
      description: `Area ${areaM2 !== null ? Math.round(areaM2) : '?'} m² is very small (< 500 m²) — classified as roadside vegetation`,
    });
    return { walkClass: 'ROADSIDE_VEGETATION', evidence };
  }

  // 5. Walkable verified: public access + adequate internal paths
  if (accessStatus === 'PUBLIC_TAGGED' && pathCount > 0 && totalPathM >= MIN_PATH_LENGTH_M) {
    return { walkClass: 'WALKABLE_VERIFIED', evidence };
  }

  // 6. Paths present but access not verified
  if (pathCount > 0 && totalPathM > 0) {
    return { walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED', evidence };
  }

  // 7. Default: access not verified
  return { walkClass: 'ACCESS_UNVERIFIED', evidence };
}

// ── Human-readable labels ─────────────────────────────────────────────────────

export function accessStatusLabel(status: AccessStatus): string {
  switch (status) {
    case 'PUBLIC_TAGGED': return 'Public access (OSM tagged)';
    case 'RESTRICTED': return 'Restricted (OSM tagged)';
    case 'UNKNOWN': return 'Access not verified';
  }
}

export function walkClassLabel(wc: WalkClass): string {
  switch (wc) {
    case 'WALKABLE_VERIFIED': return 'Walkable — verified internal paths';
    case 'PATHS_PRESENT_ACCESS_UNVERIFIED': return 'Paths present — access not verified';
    case 'ACCESS_UNVERIFIED': return 'No path evidence';
    case 'RESTRICTED': return 'Restricted';
    case 'ROADSIDE_VEGETATION': return 'Roadside vegetation — not recommended for walking';
  }
}

// ── Recommended? ──────────────────────────────────────────────────────────────

/**
 * Ranking score for sorting search results.
 * Higher = more recommended. Verified evidence always outranks unverified.
 */
export function recommendationScore(
  walkClass: WalkClass,
  ndviMean: number | null
): number {
  let base = 0;
  switch (walkClass) {
    case 'WALKABLE_VERIFIED': base = 100; break;
    case 'PATHS_PRESENT_ACCESS_UNVERIFIED': base = 50; break;
    case 'ACCESS_UNVERIFIED': base = 20; break;
    case 'ROADSIDE_VEGETATION': base = 0; break;
    case 'RESTRICTED': base = 0; break;
  }
  // NDVI bonus (medium or high vegetation preferred)
  if (ndviMean !== null) {
    base += Math.round(ndviMean * 20);
  }
  return base;
}
