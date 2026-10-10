/**
 * Verified park imagery — generated, do not hand-edit.
 *
 * Regenerate with:
 *   npx ts-node scripts/green/resolve-commons-images.ts --write
 *
 * Every record was resolved from the Wikimedia Commons API and carries the
 * file's own licence, author and description page. No URL is ever constructed by
 * hand: a Wikimedia thumbnail path is derived from the MD5 of the filename, so
 * it can only come from the API.
 *
 * Two indexes are provided:
 *  - `byId`   keyed `${osmType}/${osmId}`, used by database-backed records.
 *  - `byName` keyed by a normalised park name, used by the production static
 *             fallback whose synthetic OSM ids differ from the database's.
 *             Ambiguous slugs are omitted rather than guessed.
 *
 * A park absent from both indexes has no verified photograph, and the UI renders
 * the neutral placeholder rather than a fabricated URL.
 */

import data from './green-space-images.json';

export interface VerifiedGreenSpaceImage {
  imageUrl: string;
  thumbUrl: string;
  /** The file's real description page on Commons. */
  sourceUrl: string;
  /** Author and licence as required by the file's own terms. */
  attribution: string;
  licence: string;
  verificationTier: 'VERIFIED' | 'VERIFIED_NAME_MATCH';
  source: 'WIKIMEDIA_COMMONS';
  caption: string | null;
  matchedBy: 'GEOSEARCH' | 'TITLE_SEARCH' | 'WIKIDATA_P18';
  distanceM: number | null;
  nameSlug: string;
}

interface ImageIndex {
  byId: Record<string, VerifiedGreenSpaceImage>;
  byName: Record<string, string>;
  generatedAt: string;
}

const index = data as unknown as ImageIndex;

/** Normalised name key used by the secondary index. */
export function nameSlugOf(name: string): string {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const VERIFIED_GREEN_SPACE_IMAGES = index.byId;

/** Neutral placeholder shown when no verified photograph exists. */
export const GREEN_SPACE_IMAGE_PLACEHOLDER = '/images/green-space-placeholder.svg';

/**
 * Look up the verified Commons image for a green space.
 * Falls back to the name index when the OSM id is unknown (static fallback).
 */
export function verifiedImageFor(
  osmType: string,
  osmId: string,
  name?: string
): VerifiedGreenSpaceImage | null {
  const byId = index.byId[`${osmType}/${osmId}`];
  if (byId) return byId;
  if (!name) return null;
  const key = index.byName[nameSlugOf(name)];
  return key ? index.byId[key] ?? null : null;
}
