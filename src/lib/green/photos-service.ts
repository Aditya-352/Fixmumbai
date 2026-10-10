/**
 * Photos service for Green Density Explorer.
 *
 * PROVENANCE
 * Green space photographs are resolved from the Wikimedia Commons API by
 * `scripts/green/resolve-commons-images.ts` and stored in
 * `src/data/green-space-images.json`. See `src/lib/green/commons-images.ts` for
 * the matching rules and `src/data/verified-green-space-images.ts` for the
 * accessor used at request time.
 *
 * A previous version of this file contained a hard-coded "curated" table of
 * images.unsplash.com stock photographs that were attributed as
 * "Wikimedia Commons / CC BY-SA 4.0" and linked to Commons file pages that do
 * not exist. Unsplash images are not CC BY-SA and must not be presented as
 * Wikimedia Commons content, so the table has been removed rather than
 * relabelled. It was never imported by any route.
 *
 * Citizen-submitted photographs are handled by POST /api/vegetation/photos and
 * the GreeneryPhoto model; they are moderated and never mixed in with the
 * verified Commons records above.
 */

import type { GreenSpaceImage } from './types';
import { verifiedImageFor } from '@/data/verified-green-space-images';

/**
 * Look up the verified Commons image for an OSM feature.
 *
 * Returns null when no licence-clean, identity-verified file exists. Callers
 * must then render the neutral placeholder — never a constructed URL, because a
 * Wikimedia thumbnail path is derived from the MD5 of the filename and cannot
 * be produced without the API.
 */
export async function fetchOsmWikipediaImage(
  osmType: string,
  osmId: string
): Promise<GreenSpaceImage | null> {
  const v = verifiedImageFor(osmType, String(osmId));
  if (!v) return null;
  return {
    imageUrl: v.imageUrl,
    thumbUrl: v.thumbUrl,
    sourceUrl: v.sourceUrl,
    attribution: v.attribution,
    licence: v.licence,
    verificationTier: v.verificationTier,
    source: v.source,
    caption: v.caption ?? undefined,
  };
}
