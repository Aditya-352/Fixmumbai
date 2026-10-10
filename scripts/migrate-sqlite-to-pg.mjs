/**
 * migrate-sqlite-to-pg.mjs
 *
 * Reads all seeded data from prisma/dev.db (SQLite via better-sqlite3) and
 * bulk-inserts it into PostgreSQL via pg (node-postgres).
 *
 * SQLite quirks handled:
 *  - DateTime fields are stored as epoch-millisecond integers → converted to JS Date
 *  - Boolean fields are stored as 0/1 integers → converted to true/false
 *
 * Usage:
 *   node scripts/migrate-sqlite-to-pg.mjs
 */

import Database from 'better-sqlite3';
import pg from 'pg';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.resolve(__dirname, '../prisma/dev.db');
const PG_URL =
  process.env.PG_DATABASE_URL ||
  'postgresql://fixmumbai_user:fixmumbai_prod_2024@172.18.0.4:5432/fixmumbai';

const { Pool } = pg;
const pool = new Pool({ connectionString: PG_URL });
const sqlite = new Database(DB_PATH, { readonly: true });

// ── DateTime columns per table (epoch-ms integers in SQLite) ────────────────
const DATE_COLS = {
  BmcWard: ['createdAt', 'updatedAt'],
  AssemblyConstituency: ['createdAt', 'updatedAt'],
  ParliamentaryConstituency: ['createdAt', 'updatedAt'],
  Representative: ['createdAt', 'updatedAt'],
  RepresentativeTerm: ['createdAt', 'updatedAt'],
  Report: ['createdAt', 'updatedAt', 'resolvedAt', 'verifiedAt'],
  ReportPhoto: ['uploadedAt'],
  TimelineEvent: ['timestamp'],
  ResolutionEvidence: ['timestamp'],
  CitizenVerification: ['timestamp'],
  DuplicateGroup: ['createdAt'],
  ModerationCase: ['createdAt', 'updatedAt'],
  DataSource: ['createdAt'],
  AuditLog: ['timestamp'],
  User: ['createdAt', 'updatedAt'],
  GreenSpace: ['createdAt', 'updatedAt'],
  GreenVegetationObservation: ['processedAt', 'observationStart', 'observationEnd'],
  GreenSpaceImage: ['createdAt'],
  GreeneryPhoto: ['createdAt', 'updatedAt'],
};

// ── Boolean columns per table (0/1 integers in SQLite) ──────────────────────
const BOOL_COLS = {
  BmcWard: ['active'],
  Representative: ['active'],
  Category: ['active'],
  TimelineEvent: ['publicVisibility'],
  CitizenVerification: ['isResolved'],
  GreeneryPhoto: ['consentGiven'],
};

function transform(tableName, row) {
  const dateCols = DATE_COLS[tableName] || [];
  const boolCols = BOOL_COLS[tableName] || [];
  const out = { ...row };

  for (const col of dateCols) {
    if (out[col] !== null && out[col] !== undefined) {
      out[col] = new Date(typeof out[col] === 'number' ? out[col] : parseInt(out[col]));
    }
  }
  for (const col of boolCols) {
    if (out[col] !== null && out[col] !== undefined) {
      out[col] = Boolean(out[col]);
    }
  }
  return out;
}

/** Chunk array into batches to avoid pg's 65535 parameter limit */
function chunks(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function upsertChunk(client, table, rows) {
  if (!rows.length) return;
  const cols = Object.keys(rows[0]);
  const placeholders = rows.map(
    (_, ri) => `(${cols.map((_, ci) => `$${ri * cols.length + ci + 1}`).join(', ')})`
  );
  const values = rows.flatMap((r) => cols.map((c) => r[c]));
  const sql =
    `INSERT INTO "${table}" (${cols.map((c) => `"${c}"`).join(', ')}) ` +
    `VALUES ${placeholders.join(', ')} ON CONFLICT DO NOTHING`;
  await client.query(sql, values);
}

async function migrateTable(client, table) {
  const rows = sqlite
    .prepare(`SELECT * FROM "${table}"`)
    .all()
    .map((r) => transform(table, r));

  if (!rows.length) {
    console.log(`   ⏭  ${table}: 0 rows`);
    return;
  }

  // Max columns per row → choose chunk size to stay under 65535 params
  const colCount = Object.keys(rows[0]).length;
  const chunkSize = Math.max(1, Math.floor(65000 / colCount));

  for (const chunk of chunks(rows, chunkSize)) {
    await upsertChunk(client, table, chunk);
  }
  console.log(`   ✅  ${table}: ${rows.length} rows`);
}

async function main() {
  console.log('🔌  Connecting to PostgreSQL…');
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // FK-safe order
    await migrateTable(client, 'ParliamentaryConstituency');
    await migrateTable(client, 'AssemblyConstituency');
    await migrateTable(client, 'BmcWard');
    await migrateTable(client, 'Category');
    await migrateTable(client, 'DataSource');
    await migrateTable(client, 'User');
    await migrateTable(client, 'Representative');
    await migrateTable(client, 'RepresentativeTerm');
    await migrateTable(client, 'DuplicateGroup');
    await migrateTable(client, 'Report');
    await migrateTable(client, 'ReportPhoto');
    await migrateTable(client, 'TimelineEvent');
    await migrateTable(client, 'ResolutionEvidence');
    await migrateTable(client, 'CitizenVerification');
    await migrateTable(client, 'ModerationCase');
    await migrateTable(client, 'AuditLog');
    await migrateTable(client, 'GreenSpace');
    await migrateTable(client, 'GreenVegetationObservation');
    await migrateTable(client, 'GreenSpaceImage');
    await migrateTable(client, 'GreeneryPhoto');

    await client.query('COMMIT');
    console.log('\n🎉  Migration complete!');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
    await pool.end();
    sqlite.close();
  }
}

main().catch((e) => {
  console.error('❌  Migration failed:', e.message);
  process.exit(1);
});
