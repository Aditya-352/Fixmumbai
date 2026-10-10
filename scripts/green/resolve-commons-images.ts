/**
 * resolve-commons-images — replace fabricated Wikimedia URLs with real records.
 *
 * WHAT IT REPLACES
 *  - `GreenSpaceImage.imageUrl` / `thumbUrl` that pointed at invented hash paths
 *    (13 of 45 rows 404'd on the file page and 400'd on the thumbnail).
 *  - Hard-coded `licence: 'CC-BY-SA-4.0'` and `verificationTier: 'VERIFIED'` that
 *    were applied to every row regardless of the file's actual licence.
 *  - `sourceUrl: 'https://commons.wikimedia.org'` — a bare domain rather than the
 *    file's description page.
 *  - The 60 hand-written `upload.wikimedia.org` URLs embedded in
 *    static-spaces-fallback.ts (every one of which returned HTTP 400).
 *
 * OUTPUTS
 *  1. `src/data/green-space-images.json` — generated, keyed `${osmType}/${osmId}`.
 *     This is the single source of truth consumed by the production fallback.
 *  2. `GreenSpaceImage` rows — real URL, real description page, real licence,
 *     real author and a verification tier derived from how the match was made.
 *     Rows that cannot be verified are deleted, not relabelled; the UI then uses
 *     the neutral placeholder.
 *
 * USAGE
 *   npx ts-node scripts/green/resolve-commons-images.ts            # resolve, print report
 *   npx ts-node scripts/green/resolve-commons-images.ts --write    # also persist
 *
 * Requires no credentials. Wikimedia's API is open; it does require a
 * descriptive User-Agent, which is supplied from WIKIMEDIA_USER_AGENT /
 * OPENSTREETMAP_USER_AGENT or a built-in default.
 */

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { resolveGreenSpaceImage, politeDelayMs, type ResolvedImage } from '../../src/lib/green/commons-images';

const prisma = new PrismaClient();
const WRITE = process.argv.includes('--write');

const OUT_JSON = path.resolve(process.cwd(), 'src/data/green-space-images.json');

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface Target {
  key: string;
  greenSpaceId: string | null;
  name: string;
  lat: number;
  lon: number;
  wikidataId: string | null;
}

/** Stable key shared by the DB rows and the static fallback entries. */
const keyOf = (osmType: string, osmId: string) => `${osmType}/${osmId}`;

/**
 * Secondary key derived from the park name.
 *
 * The production static fallback uses synthetic OSM ids (200012, 200013, …)
 * that do not match the real ids in the database, so an id-only index would
 * resolve nothing there. Both datasets are generated from the same curated park
 * list, so a normalised name key is a safe secondary index. Ambiguous slugs are
 * dropped rather than guessed.
 */
const nameSlugOf = (name: string) =>
  name
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

async function loadTargets(): Promise<Target[]> {
  const rows = await prisma.greenSpace.findMany({
    select: {
      id: true,
      name: true,
      osmType: true,
      osmId: true,
      centroidLat: true,
      centroidLon: true,
      tags: true,
    },
  });

  return rows.map((r) => {
    let tags: Record<string, string> = {};
    try {
      tags = typeof r.tags === 'string' ? JSON.parse(r.tags) : (r.tags ?? {});
    } catch {
      tags = {};
    }
    return {
      key: keyOf(r.osmType, r.osmId),
      greenSpaceId: r.id,
      name: r.name,
      lat: r.centroidLat,
      lon: r.centroidLon,
      wikidataId: tags.wikidata ?? null,
    };
  });
}

async function main() {
  console.log('='.repeat(78));
  console.log('WIKIMEDIA COMMONS IMAGE RESOLUTION');
  console.log(WRITE ? 'MODE: WRITE (results will be persisted)' : 'MODE: REPORT ONLY');
  console.log('='.repeat(78));

  const targets = await loadTargets();
  console.log(`\nGreen spaces to resolve: ${targets.length}\n`);

  const resolved: Record<string, ResolvedImage> = {};
  const slugSources = new Map<string, Set<string>>(); // slug -> the keys claiming it
  const failures: Array<{ key: string; name: string; reason: string }> = [];

  for (const t of targets) {
    let result: ResolvedImage | null = null;
    let reason = 'no licence-clean Commons image found near this location';

    try {
      result = await resolveGreenSpaceImage({
        name: t.name,
        lat: t.lat,
        lon: t.lon,
        wikidataId: t.wikidataId,
      });
      if (result) {
        reason =
          result.matchedBy === 'GEOSEARCH'
            ? `geosearch, ${Math.round(result.distanceM ?? 0)} m from centroid`
            : result.matchedBy === 'TITLE_SEARCH'
            ? 'title search, locality confirmed by description/categories'
            : 'Wikidata P18 claim';
      }
    } catch (e: any) {
      reason = `error: ${e?.message ?? e}`;
    }

    if (result) {
      resolved[t.key] = result;
      const slug = nameSlugOf(t.name);
      if (!slugSources.has(slug)) slugSources.set(slug, new Set());
      slugSources.get(slug)!.add(t.key);
      console.log(
        `  ✓ ${t.name}\n` +
          `      ${result.matchedBy} (${reason})\n` +
          `      licence: ${result.licence}\n` +
          `      file:    ${result.sourceUrl}`
      );
    } else {
      failures.push({ key: t.key, name: t.name, reason });
      console.log(`  ✗ ${t.name}\n      ${reason} → neutral placeholder`);
    }

    await sleep(politeDelayMs());
  }

  console.log('\n' + '─'.repeat(78));
  console.log(`RESOLVED : ${Object.keys(resolved).length}/${targets.length}`);
  console.log(`PLACEHOLDER: ${failures.length}/${targets.length}`);
  console.log('─'.repeat(78));

  if (failures.length) {
    console.log('\nParks with no verified image (neutral placeholder will be shown):');
    for (const f of failures) console.log(`  - ${f.name} — ${f.reason}`);
  }

  if (!WRITE) {
    console.log('\nREPORT ONLY — nothing written.');
    console.log('Re-run with --write to persist results and regenerate green-space-images.json.');
    return;
  }

  // ── Persist the generated JSON consumed by the production fallback ────────
  // Each record carries its name slug so the production static fallback — whose
  // synthetic OSM ids differ from the database's — can still resolve the same
  // verified photograph.
  const byId: Record<string, ResolvedImage & { nameSlug: string }> = {};
  for (const t of targets) {
    const img = resolved[t.key];
    if (!img) continue;
    byId[t.key] = { ...img, nameSlug: nameSlugOf(t.name) };
  }

  const byName: Record<string, string> = {};
  let ambiguous = 0;
  for (const [slug, keys] of slugSources) {
    if (keys.size === 1) {
      byName[slug] = [...keys][0];
    } else {
      ambiguous++;
    }
  }

  const payload = { byId, byName, generatedAt: new Date().toISOString() };
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`\nWrote ${Object.keys(byId).length} records to:\n  ${OUT_JSON}`);
  console.log(`Name index: ${Object.keys(byName).length} unambiguous slugs, ${ambiguous} dropped as ambiguous.`);

  // ── Persist GreenSpaceImage rows ─────────────────────────────────────────
  // Unverified images are REMOVED rather than left in place with a stale URL or
  // a fabricated licence, so the UI falls back to the neutral placeholder.
  let upserted = 0;
  for (const t of targets) {
    const img = resolved[t.key];
    if (!img || !t.greenSpaceId) continue;
    await prisma.greenSpaceImage.deleteMany({ where: { greenSpaceId: t.greenSpaceId } });
    await prisma.greenSpaceImage.create({
      data: {
        greenSpaceId: t.greenSpaceId,
        imageUrl: img.imageUrl,
        thumbUrl: img.thumbUrl,
        sourceUrl: img.sourceUrl,
        attribution: img.attribution,
        licence: img.licence,
        verificationTier: img.verificationTier,
        source: img.source,
        caption: img.caption,
      },
    });
    upserted++;
  }

  let removed = 0;
  for (const f of failures) {
    const gs = await prisma.greenSpace.findFirst({
      where: { osmType: f.key.split('/')[0], osmId: f.key.split('/')[1] },
      select: { id: true },
    });
    if (gs) {
      const res = await prisma.greenSpaceImage.deleteMany({ where: { greenSpaceId: gs.id } });
      removed += res.count;
    }
  }

  console.log(`GreenSpaceImage: ${upserted} written, ${removed} unverified row(s) removed.`);
  console.log('Fabricated licence and verification labels are no longer written.');
}

main()
  .catch((e) => {
    console.error('Resolution failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
