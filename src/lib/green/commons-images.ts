/**
 * Wikimedia Commons image resolution for Mumbai green spaces.
 *
 * WHY THIS MODULE EXISTS
 * The seeded dataset contained hand-written `upload.wikimedia.org` URLs whose
 * MD5 hash directories were invented (1/14, 2/2e, 3/34, …). Every one of the 13
 * `commons.wikimedia.org/wiki/File:` pages returned 404 and every thumbnail
 * returned HTTP 400, yet each row was stored with `licence: 'CC-BY-SA-4.0'` and
 * `verificationTier: 'VERIFIED'`. A Wikimedia thumbnail path cannot be
 * constructed by hand — it is derived from the MD5 of the filename — so the only
 * correct approach is to ask the API for real records.
 *
 * MATCHING STRATEGY (in priority order)
 *  1. Geographic search — Commons `generator=geosearch` around the park centroid.
 *     This is real location identity: the file carries its own GPS coordinates.
 *     A radius of 250 m plus a required name-token match rejects photos of
 *     adjacent buildings, roads or unrelated greenery.
 *  2. Wikidata P18 — when the park has a `wikidata` tag, its P18 claim names the
 *     canonical Commons file. This verifies identity but not position, so the
 *     result is tiered as a name match.
 *  3. Neutral placeholder — no verified image exists, so none is invented.
 *
 * LICENCE HANDLING
 * Licence, author and the description page URL are read from the file's own
 * `imageinfo.extmetadata`. Nothing is hard-coded: a file licensed CC BY 2.0 is
 * recorded as CC BY 2.0, and a non-free or unknown licence is rejected outright
 * rather than being relabelled.
 */

import type { GreenSpaceImage } from './types';

const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

/** Files closer than this to the park centroid are treated as depicting it. */
const GEOSEARCH_RADIUS_M = 300;

/**
 * Descriptive User-Agent. Wikimedia's policy requires one that identifies the
 * application and provides a contact route.
 */
export const COMMONS_USER_AGENT =
  process.env.WIKIMEDIA_USER_AGENT ||
  process.env.OPENSTREETMAP_USER_AGENT ||
  'FixMumbai-CivicApp/1.0 (green-space imagery; contact@fixmumbai.org)';

/** Licences we will not publish. Anything not clearly free is rejected. */
const NON_FREE_MARKERS = ['fair use', 'non-free', 'copyrighted', 'permission granted only'];

export interface CommonsCandidate {
  fileName: string;
  descriptionUrl: string;
  /** Full-size URL as reported by the API. */
  url: string;
  thumbUrl800: string | null;
  thumbUrl320: string | null;
  mime: string | null;
  width: number | null;
  height: number | null;
  licence: string | null;
  licenceUrl: string | null;
  author: string | null;
  /** Distance from the queried centre in metres; null for non-geographic results. */
  distanceM: number | null;
  description: string | null;
}

interface CommonsImageInfo {
  url?: string;
  descriptionurl?: string;
  thumburl?: string;
  thumbwidth?: number;
  mime?: string;
  width?: number;
  height?: number;
  extmetadata?: Record<string, { value?: string }>;
}

function stripHtml(html: string | undefined | null): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function metaValue(
  ext: Record<string, { value?: string }> | undefined,
  key: string
): string | null {
  const v = ext?.[key]?.value;
  const s = stripHtml(v);
  return s.length > 0 ? s : null;
}

/** Great-circle distance in metres. */
export function haversineM(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Grammar and photo-subject words. Never treated as identifying evidence.
 */
const GENERIC_STOPWORDS = new Set([
  'the', 'and', 'of', 'a', 'in', 'at', 'with', 'from',
  'view', 'photo', 'image', 'pic', 'picture', 'morning', 'evening', 'night',
  'day', 'sunset', 'sunrise', 'closeup', 'detail', 'street', 'road', 'view',
  'people', 'man', 'woman', 'city',
]);

/**
 * Generic land-use nouns. These appear in the titles of countless unrelated
 * files, so on their own they prove nothing.
 */
const LANDUSE_STOPWORDS = new Set([
  'park', 'garden', 'gardens', 'udyan', 'maidan', 'ground', 'grounds',
  'space', 'spaces', 'complex', 'area', 'zone', 'corner', 'square',
  'reserve', 'wetland', 'wetlands', 'sanctuary', 'buffer', 'foothills',
  'greenspace', 'playground', 'towards', 'near', 'along', 'campus',
  'green', 'greens', 'infield', 'perimeter', 'regeneration',
]);

/**
 * Subjects that are definitively not a view of the green space itself.
 * "Bandra_Fort_plaque.jpg" is a photograph of a plaque inside the fort; it
 * shares the place but does not depict it.
 */
const NON_LANDSCAPE_SUBJECT = [
  'plaque', 'statue', 'sign', 'signage', 'board', 'plaque', 'memorial',
  'monument', 'tomb', 'portrait', 'logo', 'stamp', 'coin', 'certificate',
  'letterhead', 'banner', 'poster', 'notice', 'map of', 'plan of',
  'gate of', 'entrance gate', 'ticket', 'receipt', 'menu',
];

/**
 * Mumbai locality names. A photo titled after a locality usually depicts the
 * buildings or shops in it, not the green space: matching "Churchgate" alone
 * selected "Closeup of Western Railway Headquarters, Churchgate" for Oval
 * Maidan. A locality token may therefore support a match but never establish
 * one on its own.
 */
const LOCALITY_STOPWORDS = new Set([
  'mumbai', 'bombay', 'district', 'east', 'west', 'north', 'south',
  'churchgate', 'colaba', 'worli', 'malabar', 'matunga', 'dadar',
  'bandra', 'andheri', 'borivali', 'powai', 'thane', 'vikhroli', 'chembur',
  'trombay', 'sewri', 'parel', 'byculla', 'sion', 'kurla', 'ghatkopar',
  'chowpatty', 'grant', 'fort', 'nariman', 'point', 'marine', 'drive',
  'ballard', 'estate', 'goregaon', 'malad', 'kandivali', 'bhandup', 'charkop',
  'gorai', 'versova', 'khar', 'santacruz', 'wada', 'navi', 'hill', 'hills',
]);

/** Split a park name into identifying tokens, discarding generic/photo words. */
function nameTokens(name: string): string[] {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 4 && !GENERIC_STOPWORDS.has(t) && !LANDUSE_STOPWORDS.has(t));
}

/**
 * Tokens strong enough to identify the park on their own — everything except
 * grammar, generic land-use nouns and bare locality names.
 */
function distinctiveTokens(name: string): string[] {
  return nameTokens(name).filter((t) => !LOCALITY_STOPWORDS.has(t));
}

/** Whole-word containment, so "cross" cannot match inside "across". */
function containsWord(haystack: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i').test(haystack);
}

/**
 * Does this file plausibly depict the park?
 *
 * A name match is ALWAYS required, and it must be in the FILE TITLE. Proximity
 * alone is not sufficient: probing a real centroid returns a photograph of an
 * individual *tree* 44 m from the Bandstand, and "Dhobi Ghat" 158 m from
 * Shivaji Park's centre. Neither depicts the park, so a distance threshold is
 * only ever an additional filter, never a substitute for identity.
 *
 * The description is deliberately NOT part of the identity test. Descriptions
 * routinely name the park for a photo of something adjacent — which is how a
 * handbag seller's photo was matched to Cross Maidan.
 */
export function matchesIdentity(
  candidate: { title: string; description: string | null; distanceM: number | null },
  parkName: string
): boolean {
  const all = nameTokens(parkName);
  if (all.length === 0) return false;
  const title = candidate.title.replace(/^File:/i, '').replace(/\.[a-z0-9]+$/i, '');

  const distinctive = distinctiveTokens(parkName);
  if (distinctive.length > 0) {
    return distinctive.some((t) => containsWord(title, t));
  }

  // The name is composed only of locality and generic words (e.g. "Hanging
  // Gardens"). Then every remaining token must appear, so a file matching only
  // one of them is not accepted.
  return all.every((t) => containsWord(title, t));
}

function isAcceptableLicence(licence: string | null): boolean {
  if (!licence) return false;
  const l = licence.toLowerCase();
  if (NON_FREE_MARKERS.some((m) => l.includes(m))) return false;
  // Require an explicit Creative Commons or public-domain grant.
  return (
    l.includes('cc') ||
    l.includes('creative commons') ||
    l.includes('public domain') ||
    l.includes('pd') ||
    l.includes('attribution')
  );
}

/**
 * Request throttle.
 *
 * Wikimedia asks anonymous API clients to stay at roughly one request per
 * second. Throttling per *park* is not sufficient because resolving one park
 * issues several calls (geosearch, title search, thumbnail request), which
 * produces a burst of 4-5 req/s and earns an HTTP 429. The delay therefore
 * applies to every individual request, and 429 responses are retried with
 * backoff.
 */
const MIN_INTERVAL_MS = 1250;
let lastRequestAt = 0;
let throttleChain: Promise<unknown> = Promise.resolve();

async function throttle<T>(fn: () => Promise<T>): Promise<T> {
  const run = throttleChain.then(async () => {
    const wait = lastRequestAt + MIN_INTERVAL_MS - Date.now();
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    lastRequestAt = Date.now();
    return fn();
  });
  // Keep the chain alive even if this call rejects.
  throttleChain = run.catch(() => undefined);
  return run;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function commonsGet(params: Record<string, string>): Promise<any> {
  const url = `${COMMONS_API}?${new URLSearchParams({
    format: 'json',
    formatversion: '2',
    origin: '*',
    ...params,
  })}`;

  const maxAttempts = 4;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const res: Response = await throttle(() =>
      fetch(url, {
        headers: { 'User-Agent': COMMONS_USER_AGENT, Accept: 'application/json' },
      })
    );

    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('retry-after'));
      const backoff = Number.isFinite(retryAfter) && retryAfter > 0
        ? Math.min(retryAfter * 1000, 30_000)
        : 2000 * Math.pow(2, attempt);
      await sleep(backoff);
      continue;
    }

    if (res.status >= 500) {
      await sleep(1000 * Math.pow(2, attempt));
      continue;
    }

    if (!res.ok) throw new Error(`Commons API HTTP ${res.status}`);
    return res.json();
  }

  lastError = new Error('Commons API rate limited after retries');
  throw lastError;
}

function toCandidate(page: any): CommonsCandidate | null {
  const info: CommonsImageInfo | undefined = page?.imageinfo?.[0];
  if (!info?.url || !info?.descriptionurl) return null;

  const ext = info.extmetadata;
  const licence = metaValue(ext, 'LicenseShortName') ?? metaValue(ext, 'License');
  const mime = info.mime ?? null;

  // Only raster photographs are usable as park imagery.
  if (mime && !/^image\/(jpeg|png|webp)$/.test(mime)) return null;

  return {
    fileName: String(page.title ?? ''),
    descriptionUrl: info.descriptionurl,
    url: info.url,
    thumbUrl800: info.thumburl ?? null,
    thumbUrl320: null,
    mime,
    width: info.width ?? null,
    height: info.height ?? null,
    licence,
    licenceUrl: metaValue(ext, 'LicenseUrl'),
    author: metaValue(ext, 'Artist'),
    distanceM: null,
    description: metaValue(ext, 'ImageDescription') ?? metaValue(ext, 'ObjectName'),
  };
}

/**
 * Geographic search for files whose own coordinates fall within `radiusM` of the
 * given point. This is the strongest identity signal Commons offers.
 */
export async function geosearchCommonsImages(
  lat: number,
  lon: number,
  radiusM: number = GEOSEARCH_RADIUS_M,
  limit = 20
): Promise<CommonsCandidate[]> {
  const data = await commonsGet({
    action: 'query',
    generator: 'geosearch',
    ggscoord: `${lat.toFixed(5)}|${lon.toFixed(5)}`,
    ggsradius: String(Math.min(10_000, Math.max(10, radiusM))),
    ggsnamespace: '6', // File:
    ggslimit: String(limit),
    prop: 'imageinfo|coordinates',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '800',
  });

  const pages = data?.query?.pages ?? [];
  const out: CommonsCandidate[] = [];

  for (const page of pages) {
    const cand = toCandidate(page);
    if (!cand) continue;
    const coords = page?.coordinates?.[0];
    if (coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lon)) {
      cand.distanceM = haversineM(lat, lon, coords.lat, coords.lon);
    }
    out.push(cand);
  }

  // Nearest first so the closest depiction wins.
  out.sort((a, b) => (a.distanceM ?? Infinity) - (b.distanceM ?? Infinity));
  return out;
}

/**
 * Title search for files named after the park.
 *
 * Many Commons files for Indian parks are titled after the park but carry no GPS
 * coordinate, so geosearch cannot see them at all. This path finds them by name.
 * MediaWiki's search API has no bounding-box filter, so locality is established
 * from the file's own description and categories instead, and a geotag is used
 * when one exists.
 */
export async function searchCommonsImagesByName(
  name: string,
  lat: number,
  lon: number,
  spreadM = 1500
): Promise<CommonsCandidate[]> {
  const tokens = nameTokens(name);
  if (tokens.length === 0) return [];
  const query = tokens.join(' ');

  const data = await commonsGet({
    action: 'query',
    generator: 'search',
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: '20',
    prop: 'imageinfo|coordinates|categories',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '800',
    cllimit: '20',
  });

  const pages = data?.query?.pages ?? [];
  const out: CommonsCandidate[] = [];
  for (const page of pages) {
    const cand = toCandidate(page);
    if (!cand) continue;

    const coords = page?.coordinates?.[0];
    let geotagged = false;
    if (coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lon)) {
      cand.distanceM = haversineM(lat, lon, coords.lat, coords.lon);
      geotagged = cand.distanceM <= spreadM;
    }

    // Location identity: either a geotag inside the neighbourhood, or the
    // file's description/categories naming the city.
    const cats = (page?.categories ?? [])
      .map((c: any) => String(c?.title ?? ''))
      .join(' ');
    const mentionsCity =
      /mumbai|bombay|thane|navi mumbai/i.test(`${cand.description ?? ''} ${cats}`);

    if (!geotagged && !mentionsCity) continue;

    out.push(cand);
  }
  return out;
}

/**
 * Resolve the canonical image for a park via its Wikidata P18 (image) claim.
 * Identity comes from the structured data item, not from coordinates.
 */
export async function wikidataImage(wikidataId: string): Promise<CommonsCandidate | null> {
  const clean = wikidataId.trim().toUpperCase();
  if (!/^Q\d+$/.test(clean)) return null;

  const entity = await commonsGet({
    action: 'wbgetentities',
    ids: clean,
    props: 'claims',
  });
  const p18 = entity?.entities?.[clean]?.claims?.P18;
  if (!Array.isArray(p18) || p18.length === 0) return null;

  const fileName = p18[0]?.mainsnak?.datavalue?.value;
  if (typeof fileName !== 'string') return null;

  const title = fileName.startsWith('File:') || fileName.startsWith('文件:')
    ? fileName
    : `File:${fileName}`;

  const data = await commonsGet({
    action: 'query',
    titles: title,
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '800',
  });
  const pages = data?.query?.pages ?? [];
  return pages.length ? toCandidate(pages[0]) : null;
}

/**
 * Build a request for a 320 px thumbnail of an already-known Commons file.
 * The Commons API generates thumbnails on demand; the hash directory in the
 * returned URL is supplied by the server, never constructed locally.
 */
export async function requestThumb(
  fileName: string,
  width: number
): Promise<string | null> {
  try {
    const data = await commonsGet({
      action: 'query',
      titles: fileName,
      prop: 'imageinfo',
      iiprop: 'url',
      iiurlwidth: String(width),
    });
    const page = data?.query?.pages?.[0];
    return page?.imageinfo?.[0]?.thumburl ?? null;
  } catch {
    return null;
  }
}

/** Compose the attribution string required by the file's own licence. */
export function buildAttribution(candidate: CommonsCandidate): string {
  const author = candidate.author ?? 'Unknown author';
  const licence = candidate.licence ?? 'Unknown licence';
  return `${author} — ${licence}, via Wikimedia Commons`;
}

export interface ResolvedImage {
  imageUrl: string;
  thumbUrl: string;
  sourceUrl: string;
  attribution: string;
  licence: string;
  verificationTier: GreenSpaceImage['verificationTier'];
  source: GreenSpaceImage['source'];
  caption: string | null;
  /** How the match was established — surfaced in the resolver report. */
  matchedBy: 'GEOSEARCH' | 'TITLE_SEARCH' | 'WIKIDATA_P18';
  distanceM: number | null;
}

/**
 * Resolve one park to a genuine, licence-clean Commons image.
 * Returns null when nothing verified exists — the caller then uses the
 * neutral placeholder rather than inventing a URL.
 */
export async function resolveGreenSpaceImage(params: {
  name: string;
  lat: number;
  lon: number;
  wikidataId?: string | null;
}): Promise<ResolvedImage | null> {
  const { name, lat, lon, wikidataId } = params;

  // 1. Geographic search — file carries its own coordinates inside the park.
  for (const cand of await geosearchCommonsImages(lat, lon)) {
    if (!isAcceptableLicence(cand.licence)) continue;
    if (cand.distanceM !== null && cand.distanceM > GEOSEARCH_RADIUS_M) continue;
    if (!matchesIdentity({ title: cand.fileName, description: cand.description, distanceM: cand.distanceM }, name)) {
      continue;
    }
    const built = await buildResolved(cand, name, 'VERIFIED', 'GEOSEARCH');
    if (built) return built;
  }

  // 2. Title search — file named after the park, locality from its own
  //    description/categories or a nearby geotag.
  for (const cand of await searchCommonsImagesByName(name, lat, lon)) {
    if (!isAcceptableLicence(cand.licence)) continue;
    if (!matchesIdentity({ title: cand.fileName, description: cand.description, distanceM: cand.distanceM }, name)) {
      continue;
    }
    const built = await buildResolved(cand, name, 'VERIFIED_NAME_MATCH', 'TITLE_SEARCH');
    if (built) return built;
  }

  // 3. Wikidata P18 — canonical file named by the structured data item.
  if (wikidataId) {
    const cand = await wikidataImage(wikidataId);
    if (cand && isAcceptableLicence(cand.licence)) {
      const built = await buildResolved(cand, name, 'VERIFIED_NAME_MATCH', 'WIKIDATA_P18');
      if (built) return built;
    }
  }

  return null;
}

/**
 * Remove the analytics query string the imageinfo API appends to thumbnail URLs.
 * The parameters are tracking noise and are not part of the file's identity.
 */
function cleanUrl(u: string | null | undefined): string | null {
  if (!u) return null;
  const hashIndex = u.indexOf('#');
  const withoutHash = hashIndex >= 0 ? u.slice(0, hashIndex) : u;
  const qIndex = withoutHash.indexOf('?');
  const base = qIndex >= 0 ? withoutHash.slice(0, qIndex) : withoutHash;
  return base.length > 0 ? base : null;
}

async function buildResolved(
  cand: CommonsCandidate,
  name: string,
  tier: GreenSpaceImage['verificationTier'],
  matchedBy: ResolvedImage['matchedBy']
): Promise<ResolvedImage | null> {
  const imageUrl = cleanUrl(cand.thumbUrl800) ?? cleanUrl(cand.url);
  const thumbUrl = cleanUrl(await requestThumb(cand.fileName, 320)) ?? imageUrl;
  if (!imageUrl || !thumbUrl) return null;
  return {
    imageUrl,
    thumbUrl,
    sourceUrl: cleanUrl(cand.descriptionUrl)!,
    attribution: buildAttribution(cand),
    licence: cand.licence!,
    verificationTier: tier,
    source: 'WIKIMEDIA_COMMONS',
    caption: cand.description ?? name,
    matchedBy,
    distanceM: cand.distanceM,
  };
}

/** Politeness delay is enforced per request inside commonsGet(). */
export function politeDelayMs(): number {
  return 0;
}
