/**
 * remediate-synthetic-ndvi — mark fabricated NDVI observations as SYNTHETIC.
 *
 * PROBLEM
 * `scripts/green/seed-mumbai-spaces.ts` wrote hand-authored NDVI constants into
 * GreenVegetationObservation while labelling them as Sentinel-2 measurements:
 *
 *   satelliteSource  : 'Sentinel-2 MSI Level-2A'   (or 'COPERNICUS_SENTINEL_2')
 *   compositeType    : 'COMPOSITE_90D' / 'MEDIAN_COMPOSITE'
 *   observationStart : now - 90 days               (wall clock, not an acquisition)
 *   observationEnd   : now                         (wall clock, not an acquisition)
 *   pixelCount       : round(areaM2 / 100)         (derived from a hand-authored area)
 *   confidence       : 0.95                        (asserted, never computed)
 *   cloudCoverage    : 4.2 / 9.2                   (constant across all rows)
 *   imageCount       : 18                          (constant across all rows)
 *
 * Because the window was computed from the wall clock these rows looked
 * perpetually fresh and were rendered to end users as a live acquisition.
 *
 * WHAT THIS SCRIPT DOES
 * 1. Classifies every observation row. A row is treated as SYNTHETIC unless it
 *    is already explicitly marked as a real measurement. Genuine rows are left
 *    completely untouched — the script never downgrades a row it cannot prove is
 *    fabricated.
 * 2. For rows it does classify as synthetic, sets the documented `SYNTHETIC`
 *    marker on both `compositeType` and `satelliteSource`, and NULLS every field
 *    that fabricates measurement metadata:
 *       observationStart, observationEnd, pixelCount, cloudCoverage,
 *       imageCount, confidence
 *    The curated ndviMean / ndviMin / ndviMax / densityClass are RETAINED so no
 *    information is destroyed — they are surfaced to users explicitly labelled as
 *    an illustrative estimate, never as a measurement.
 * 3. Requires an explicit `--apply` flag to write, and always takes a timestamped
 *    backup of the SQLite database first.
 *
 * USAGE
 *   npx ts-node scripts/green/remediate-synthetic-ndvi.ts           # dry run (default)
 *   npx ts-node scripts/green/remediate-synthetic-ndvi.ts --apply   # backup + write
 */

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { classifyObservation, isSyntheticMarker } from '../../src/lib/green/ndvi-provenance';

const prisma = new PrismaClient();

const APPLY = process.argv.includes('--apply');

/**
 * Fingerprints of the seed writer. Every one of these is a constant emitted by
 * scripts/green/seed-mumbai-spaces.ts — a real measurement pipeline would never
 * produce the same pixelCount and cloudCoverage for every polygon in a city.
 */
const SEED_FINGERPRINTS = [
  { satelliteSource: 'Sentinel-2 MSI Level-2A', confidence: 0.95, imageCount: 18, cloudCoverage: 4.2 },
  { satelliteSource: 'COPERNICUS_SENTINEL_2', confidence: 0.94, imageCount: 18, cloudCoverage: 9.2 },
];

/** compositeType values that are NOT in the documented measured set. */
/** satelliteSource identifiers accepted as a real measurement — see ndvi-provenance.ts. */

function isExplicitlySynthetic(row: { compositeType?: string | null; satelliteSource?: string | null }) {
  return isSyntheticMarker(row.compositeType) || isSyntheticMarker(row.satelliteSource);
}

type Row = {
  id: string;
  greenSpaceId: string | null;
  ndviMean: number | null;
  ndviMin: number | null;
  ndviMax: number | null;
  pixelCount: number | null;
  densityClass: string | null;
  confidence: number | null;
  compositeType: string | null;
  observationStart: Date | null;
  observationEnd: Date | null;
  imageCount: number | null;
  cloudCoverage: number | null;
  satelliteSource: string | null;
};

interface Verdict {
  row: Row;
  action: 'MARK_SYNTHETIC' | 'ALREADY_SYNTHETIC' | 'LEAVE_GENUINE';
  matchedFingerprint: string | null;
  why: string;
}

function classify(row: Row): Verdict {
  const fp = SEED_FINGERPRINTS.find(
    (f) =>
      row.satelliteSource === f.satelliteSource &&
      row.confidence === f.confidence &&
      row.imageCount === f.imageCount &&
      row.cloudCoverage === f.cloudCoverage
  );

  if (fp) {
    return {
      row,
      action: 'MARK_SYNTHETIC',
      matchedFingerprint: JSON.stringify(fp),
      why:
        'matches the seed writer signature exactly ' +
        `(source=${fp.satelliteSource}, confidence=${fp.confidence}, imageCount=${fp.imageCount}, cloud=${fp.cloudCoverage})`,
    };
  }

  if (isExplicitlySynthetic(row)) {
    return {
      row,
      action: 'ALREADY_SYNTHETIC',
      matchedFingerprint: null,
      why: 'already carries an explicit synthetic marker',
    };
  }

  const provenance = classifyObservation({
    compositeType: row.compositeType,
    satelliteSource: row.satelliteSource,
    observationStart: row.observationStart,
    observationEnd: row.observationEnd,
  });

  if (provenance === 'SYNTHETIC_ESTIMATE') {
    return {
      row,
      action: 'MARK_SYNTHETIC',
      matchedFingerprint: null,
      why:
        'not attributable to a real acquisition: ' +
        `compositeType=${row.compositeType ?? 'null'}, ` +
        `satelliteSource=${row.satelliteSource ?? 'null'} (must be an exact identifier our own ` +
        `pipeline emits), observationStart=${row.observationStart ? 'set' : 'null'}`,
    };
  }

  return {
    row,
    action: 'LEAVE_GENUINE',
    matchedFingerprint: null,
    why: 'carries a recognised product, a measured composite type and an acquisition window',
  };
}

/**
 * Copy the SQLite file next to the original before any destructive write.
 *
 * Prisma resolves a relative `file:` URL against the directory holding
 * schema.prisma (i.e. prisma/), NOT the process working directory, so both
 * locations are probed.
 */
function backupDatabase(): string | null {
  const url = process.env.DATABASE_URL ?? '';
  if (!url.startsWith('file:')) return null;
  const relative = url.replace(/^file:/, '');

  const candidates = [
    path.resolve(process.cwd(), relative),
    path.resolve(process.cwd(), 'prisma', relative),
  ];

  const dbPath = candidates.find((p) => fs.existsSync(p));
  if (!dbPath) return null;

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backup = `${dbPath}.pre-synthetic-remediation.${stamp}.bak`;
  fs.copyFileSync(dbPath, backup);
  return backup;
}

async function main() {
  console.log('='.repeat(78));
  console.log('SYNTHETIC NDVI REMEDIATION');
  console.log(APPLY ? 'MODE: APPLY (writes will be performed)' : 'MODE: DRY RUN (no writes)');
  console.log('='.repeat(78));

  const rows = (await prisma.greenVegetationObservation.findMany({})) as Row[];
  console.log(`\nTotal observation rows: ${rows.length}\n`);

  const verdicts = rows.map(classify);
  const byAction = {
    MARK_SYNTHETIC: verdicts.filter((v) => v.action === 'MARK_SYNTHETIC'),
    ALREADY_SYNTHETIC: verdicts.filter((v) => v.action === 'ALREADY_SYNTHETIC'),
    LEAVE_GENUINE: verdicts.filter((v) => v.action === 'LEAVE_GENUINE'),
  };

  console.log('─'.repeat(78));
  console.log('SUMMARY');
  console.log('─'.repeat(78));
  console.log(`  will be marked SYNTHETIC : ${byAction.MARK_SYNTHETIC.length}`);
  console.log(`  already synthetic        : ${byAction.ALREADY_SYNTHETIC.length}`);
  console.log(`  genuine, left untouched  : ${byAction.LEAVE_GENUINE.length}`);

  for (const v of byAction.MARK_SYNTHETIC) {
    console.log(
      `\n  [MARK_SYNTHETIC] ${v.row.id} space=${v.row.greenSpaceId ?? '-'}\n` +
        `      mean=${v.row.ndviMean} source="${v.row.satelliteSource}"\n` +
        `      reason: ${v.why}`
    );
  }
  for (const v of byAction.LEAVE_GENUINE) {
    console.log(`\n  [LEAVE_GENUINE] ${v.row.id} — ${v.why}`);
  }

  if (!APPLY) {
    console.log('\n' + '='.repeat(78));
    console.log('DRY RUN — nothing was written.');
    console.log('Re-run with --apply to back up the database and apply these changes.');
    console.log('='.repeat(78));
    return;
  }

  const backup = backupDatabase();
  if (backup) console.log(`\nDatabase backup written to:\n  ${backup}`);
  else console.log('\nNo local SQLite file to back up (non-file DATABASE_URL).');

  let updated = 0;
  for (const v of byAction.MARK_SYNTHETIC) {
    await prisma.greenVegetationObservation.update({
      where: { id: v.row.id },
      data: {
        compositeType: 'SYNTHETIC',
        satelliteSource: 'SYNTHETIC',
        observationStart: null,
        observationEnd: null,
        pixelCount: null,
        cloudCoverage: null,
        imageCount: null,
        confidence: null,
      },
    });
    updated++;
  }

  console.log(`\nApplied: ${updated} row(s) marked SYNTHETIC with fabricated metadata suppressed.`);
  console.log('Genuine observations were not modified.');
}

main()
  .catch((e) => {
    console.error('Remediation failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
