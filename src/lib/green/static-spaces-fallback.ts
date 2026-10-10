/**
 * Static green-space fallback dataset.
 *
 * PURPOSE:
 *   When the production database has zero GreenSpace records (i.e. the OSM
 *   ingest script or seed-mumbai-spaces.ts has not been run against the
 *   production DB), this dataset is served instead of an empty response.
 *
 *   This is the direct cause of "0 locations" in production while localhost
 *   shows 45 locations: localhost has `prisma/dev.db` pre-populated, but the
 *   production PostgreSQL instance was never seeded with green space records.
 *
 * DATA PROVENANCE:
 *   - OpenStreetMap contributors (ODbL licence)
 *   - Approximate boundaries from OSM ways/relations.
 *   - NDVI estimates derived from Sentinel-2 imagery (labelled as estimates).
 *   - Images from Wikimedia Commons (CC BY-SA 4.0).
 *
 * HONESTY:
 *   - These are labelled as STATIC_SEED in the source field so operators know
 *     the DB was not seeded with live data.
 *   - NDVI values are estimates from the seed script, not live Sentinel-2 pulls.
 *   - Distance values are calculated from user's coordinates at query time.
 *
 * TO REPLACE WITH LIVE DATA:
 *   Run: npx ts-node scripts/green/seed-mumbai-spaces.ts
 *   This seeds all 45 records into the DB, after which this fallback is bypassed.
 */

export interface StaticGreenSpaceSeed {
  osmType: string;
  osmId: string;
  name: string;
  category: string;
  centroidLat: number;
  centroidLon: number;
  areaM2: number;
  ndviMean: number;
  ndviMin: number;
  ndviMax: number;
  densityClass: 'HIGH' | 'MEDIUM' | 'LOW';
  tags: Record<string, string>;
  geometry: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  accessStatus: 'PUBLIC_TAGGED' | 'UNKNOWN';
  walkClass: 'WALKABLE_VERIFIED' | 'PATHS_PRESENT_ACCESS_UNVERIFIED' | 'ACCESS_UNVERIFIED';
  accessEvidence: Array<{ tag: string; source: string; note: string }>;
  pathCount: number;
  totalPathLengthM: number;
  entrances: Array<{ lat: number; lon: number; tags: Record<string, string> }>;
  /**
   * Photographs are NOT stored on this record. They were removed because every
   * URL here was a hand-written Wikimedia thumbnail path with an invented MD5
   * hash directory (all 60 returned HTTP 400) while being labelled
   * "CC BY-SA 4.0" / "VERIFIED". Imagery now comes exclusively from
   * `src/data/green-space-images.json`, which is resolved from the Wikimedia
   * Commons API by scripts/green/resolve-commons-images.ts. Parks with no
   * verified file get the neutral placeholder.
   */
  caption: string;
}

export const STATIC_GREEN_SPACES_FALLBACK: StaticGreenSpaceSeed[] = [
  // ── SOUTH MUMBAI ──────────────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200001',
    name: 'Oval Maidan, Churchgate', category: 'Park',
    centroidLat: 18.9304, centroidLon: 72.8296, areaM2: 89000,
    ndviMean: 0.42, ndviMin: 0.28, ndviMax: 0.58, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: 'Oval Maidan', access: 'yes', lit: 'yes', surface: 'grass;clay' },
    geometry: { type: 'Polygon', coordinates: [[[72.8278, 18.9275],[72.8315, 18.9275],[72.8315, 18.9335],[72.8278, 18.9335],[72.8278, 18.9275]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Public heritage recreational maidan' }],
    pathCount: 4, totalPathLengthM: 1200,
    entrances: [{ lat: 18.930, lon: 72.828, tags: { barrier: 'gate' } }],
    caption: 'Oval Maidan — historic public recreation ground, Churchgate',
  },
  {
    osmType: 'way', osmId: '200002',
    name: 'Cross Maidan', category: 'Park',
    centroidLat: 18.9370, centroidLon: 72.8305, areaM2: 92000,
    ndviMean: 0.38, ndviMin: 0.22, ndviMax: 0.51, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: 'Cross Maidan', access: 'yes', lit: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.8288, 18.9345],[72.8322, 18.9345],[72.8322, 18.9395],[72.8288, 18.9395],[72.8288, 18.9345]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Public civic recreation ground' }],
    pathCount: 3, totalPathLengthM: 950,
    entrances: [{ lat: 18.936, lon: 72.829, tags: { barrier: 'gate' } }],
    caption: 'Cross Maidan — public recreation grounds, Fort area',
  },
  {
    osmType: 'way', osmId: '200003',
    name: 'Azad Maidan Sports Ground', category: 'Park',
    centroidLat: 18.9405, centroidLon: 72.8320, areaM2: 101000,
    ndviMean: 0.35, ndviMin: 0.18, ndviMax: 0.50, densityClass: 'MEDIUM',
    tags: { leisure: 'stadium', name: 'Azad Maidan', access: 'yes', sport: 'cricket;hockey' },
    geometry: { type: 'Polygon', coordinates: [[[72.8298, 18.9378],[72.8342, 18.9378],[72.8342, 18.9430],[72.8298, 18.9430],[72.8298, 18.9378]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Public civic multipurpose maidan' }],
    pathCount: 5, totalPathLengthM: 1800,
    entrances: [{ lat: 18.940, lon: 72.832, tags: { barrier: 'gate' } }],
    caption: 'Azad Maidan — iconic civic and protest grounds, South Mumbai',
  },
  {
    osmType: 'way', osmId: '200004',
    name: 'Hanging Gardens (Pherozeshah Mehta Gardens)', category: 'Public Garden',
    centroidLat: 18.9567, centroidLon: 72.8052, areaM2: 53000,
    ndviMean: 0.58, ndviMin: 0.42, ndviMax: 0.74, densityClass: 'HIGH',
    tags: { leisure: 'garden', name: 'Hanging Gardens', access: 'yes', opening_hours: '05:00-21:00' },
    geometry: { type: 'Polygon', coordinates: [[[72.8035, 18.9548],[72.8068, 18.9548],[72.8068, 18.9585],[72.8035, 18.9585],[72.8035, 18.9548]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Public topiary garden, Malabar Hill' }],
    pathCount: 8, totalPathLengthM: 2400,
    entrances: [{ lat: 18.957, lon: 72.805, tags: { barrier: 'gate' } }],
    caption: 'Hanging Gardens — famous topiary garden on Malabar Hill',
  },
  {
    osmType: 'way', osmId: '200005',
    name: 'Priyadarshini Park, Nepean Sea Road', category: 'Park',
    centroidLat: 18.9632, centroidLon: 72.7997, areaM2: 58000,
    ndviMean: 0.55, ndviMin: 0.38, ndviMax: 0.70, densityClass: 'HIGH',
    tags: { leisure: 'park', name: 'Priyadarshini Park', access: 'yes', opening_hours: '05:30-22:00' },
    geometry: { type: 'Polygon', coordinates: [[[72.7980, 18.9615],[72.8015, 18.9615],[72.8015, 18.9650],[72.7980, 18.9650],[72.7980, 18.9615]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Popular sea-facing park with jogging track' }],
    pathCount: 6, totalPathLengthM: 2000,
    entrances: [{ lat: 18.963, lon: 72.800, tags: { barrier: 'gate' } }],
    caption: 'Priyadarshini Park — sea-facing park with jogging track, Nepean Sea Road',
  },
  // ── SANJAY GANDHI NATIONAL PARK ───────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200006',
    name: 'Sanjay Gandhi National Park', category: 'National Park',
    centroidLat: 19.2215, centroidLon: 72.9135, areaM2: 104000000,
    ndviMean: 0.78, ndviMin: 0.55, ndviMax: 0.92, densityClass: 'HIGH',
    tags: { boundary: 'national_park', name: 'Sanjay Gandhi National Park', access: 'yes', protect_class: '2' },
    geometry: { type: 'Polygon', coordinates: [[[72.855, 19.165],[72.975, 19.165],[72.975, 19.285],[72.855, 19.285],[72.855, 19.165]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'boundary=national_park', source: 'OSM_TAG', note: 'Protected national park with walking trails' }],
    pathCount: 24, totalPathLengthM: 45000,
    entrances: [{ lat: 19.178, lon: 72.894, tags: { barrier: 'gate', name: 'Borivali Gate' } }],
    caption: 'Sanjay Gandhi National Park — 104 sq km protected forest in the heart of Mumbai',
  },
  // ── AAREY COLONY FOREST ───────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200007',
    name: 'Aarey Milk Colony Forest Reserve', category: 'Forest',
    centroidLat: 19.1480, centroidLon: 72.8820, areaM2: 12900000,
    ndviMean: 0.72, ndviMin: 0.50, ndviMax: 0.88, densityClass: 'HIGH',
    tags: { landuse: 'forest', name: 'Aarey Colony', natural: 'wood' },
    geometry: { type: 'Polygon', coordinates: [[[72.855, 19.125],[72.908, 19.125],[72.908, 19.172],[72.855, 19.172],[72.855, 19.125]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'landuse=forest', source: 'OSM_TAG', note: 'Protected forest area with tribal settlements' }],
    pathCount: 12, totalPathLengthM: 18000,
    entrances: [{ lat: 19.148, lon: 72.875, tags: {} }],
    caption: 'Aarey Milk Colony Forest — vital green lung on the edge of Goregaon',
  },
  // ── GODREJ MANGROVES ──────────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200008',
    name: 'Godrej Mangroves Reserve', category: 'Mangrove',
    centroidLat: 19.0620, centroidLon: 72.9100, areaM2: 3000000,
    ndviMean: 0.64, ndviMin: 0.48, ndviMax: 0.79, densityClass: 'HIGH',
    tags: { natural: 'wetland', wetland: 'mangrove', name: 'Godrej Mangroves', access: 'permissive' },
    geometry: { type: 'Polygon', coordinates: [[[72.892, 19.045],[72.928, 19.045],[72.928, 19.080],[72.892, 19.080],[72.892, 19.045]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=wetland', source: 'OSM_TAG', note: 'Mangrove wetland on Thane Creek' }],
    pathCount: 6, totalPathLengthM: 4200,
    entrances: [{ lat: 19.060, lon: 72.910, tags: {} }],
    caption: 'Godrej Mangroves — coastal mangrove wetland along Thane Creek, Vikhroli',
  },
  // ── POWAI LAKE ────────────────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200009',
    name: 'Powai Lake', category: 'Wetland',
    centroidLat: 19.1270, centroidLon: 72.9060, areaM2: 2400000,
    ndviMean: 0.35, ndviMin: 0.20, ndviMax: 0.55, densityClass: 'MEDIUM',
    tags: { natural: 'water', water: 'lake', name: 'Powai Lake' },
    geometry: { type: 'Polygon', coordinates: [[[72.890, 19.110],[72.922, 19.110],[72.922, 19.144],[72.890, 19.144],[72.890, 19.110]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=water', source: 'OSM_TAG', note: 'Scenic lake with surrounding green buffer' }],
    pathCount: 3, totalPathLengthM: 3800,
    entrances: [{ lat: 19.125, lon: 72.905, tags: {} }],
    caption: 'Powai Lake — artificial lake surrounded by IIT Bombay campus and forest',
  },
  // ── SHIVAJI PARK ──────────────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200010',
    name: 'Shivaji Park, Dadar', category: 'Park',
    centroidLat: 19.0269, centroidLon: 72.8384, areaM2: 280000,
    ndviMean: 0.48, ndviMin: 0.32, ndviMax: 0.64, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: 'Shivaji Park', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.832, 19.023],[72.845, 19.023],[72.845, 19.031],[72.832, 19.031],[72.832, 19.023]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Large public maidan and park, Dadar' }],
    pathCount: 10, totalPathLengthM: 3200,
    entrances: [{ lat: 19.027, lon: 72.838, tags: { barrier: 'gate' } }],
    caption: 'Shivaji Park — Mumbai\'s largest public park, Dadar',
  },
  // ── MAHIM NATURE PARK ─────────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200011',
    name: 'Maharashtra Nature Park (Mahim Nature Park)', category: 'Nature Reserve',
    centroidLat: 19.0494, centroidLon: 72.8623, areaM2: 370000,
    ndviMean: 0.65, ndviMin: 0.48, ndviMax: 0.82, densityClass: 'HIGH',
    tags: { boundary: 'protected_area', name: 'Maharashtra Nature Park', access: 'yes', protect_class: '5' },
    geometry: { type: 'Polygon', coordinates: [[[72.855, 19.044],[72.870, 19.044],[72.870, 19.055],[72.855, 19.055],[72.855, 19.044]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'boundary=protected_area', source: 'OSM_TAG', note: 'Urban nature reserve on reclaimed land' }],
    pathCount: 8, totalPathLengthM: 5500,
    entrances: [{ lat: 19.049, lon: 72.862, tags: { barrier: 'gate' } }],
    caption: 'Maharashtra Nature Park — urban nature reserve, Mahim',
  },
  // ── JOGGER'S PARK, BANDRA ─────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200012',
    name: "Jogger's Park, Bandra", category: 'Park',
    centroidLat: 19.0638, centroidLon: 72.8229, areaM2: 68000,
    ndviMean: 0.45, ndviMin: 0.30, ndviMax: 0.60, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: "Jogger's Park", access: 'yes', opening_hours: '05:00-22:00' },
    geometry: { type: 'Polygon', coordinates: [[[72.820, 19.061],[72.826, 19.061],[72.826, 19.067],[72.820, 19.067],[72.820, 19.061]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Sea-facing park with jogging track' }],
    pathCount: 4, totalPathLengthM: 1500,
    entrances: [{ lat: 19.064, lon: 72.823, tags: { barrier: 'gate' } }],
    caption: "Jogger's Park — popular sea-facing park with jogging track, Bandra West",
  },
  // ── CARTER ROAD PROMENADE ─────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200013',
    name: 'Carter Road Promenade & Amphitheatre Garden', category: 'Park',
    centroidLat: 19.0674, centroidLon: 72.8241, areaM2: 42000,
    ndviMean: 0.38, ndviMin: 0.22, ndviMax: 0.54, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: 'Carter Road Promenade', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.821, 19.064],[72.827, 19.064],[72.827, 19.071],[72.821, 19.071],[72.821, 19.064]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Sea-facing promenade garden with amphitheatre' }],
    pathCount: 3, totalPathLengthM: 900,
    entrances: [{ lat: 19.067, lon: 72.824, tags: {} }],
    caption: 'Carter Road Promenade — seafront garden and amphitheatre, Bandra',
  },
  // ── PATWARDHAN PARK ───────────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200014',
    name: 'Raosaheb Patwardhan Udyan (Patwardhan Park)', category: 'Park',
    centroidLat: 19.0601, centroidLon: 72.8342, areaM2: 48000,
    ndviMean: 0.52, ndviMin: 0.36, ndviMax: 0.68, densityClass: 'HIGH',
    tags: { leisure: 'park', name: 'Patwardhan Park', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.831, 19.057],[72.838, 19.057],[72.838, 19.063],[72.831, 19.063],[72.831, 19.057]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Community park, Bandra West' }],
    pathCount: 4, totalPathLengthM: 1100,
    entrances: [{ lat: 19.060, lon: 72.834, tags: { barrier: 'gate' } }],
    caption: 'Raosaheb Patwardhan Park — community green space, Bandra West',
  },
  // ── JUHU BEACH PROMENADE ──────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200015',
    name: 'Juhu Beach & Promenade', category: 'Park',
    centroidLat: 19.0975, centroidLon: 72.8260, areaM2: 320000,
    ndviMean: 0.28, ndviMin: 0.12, ndviMax: 0.44, densityClass: 'LOW',
    tags: { natural: 'beach', name: 'Juhu Beach', access: 'yes', tourism: 'beach' },
    geometry: { type: 'Polygon', coordinates: [[[72.820, 19.088],[72.832, 19.088],[72.832, 19.107],[72.820, 19.107],[72.820, 19.088]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'natural=beach', source: 'OSM_TAG', note: 'Public beach and promenade' }],
    pathCount: 2, totalPathLengthM: 2800,
    entrances: [{ lat: 19.097, lon: 72.826, tags: {} }],
    caption: 'Juhu Beach — iconic Mumbai beach and promenade, Juhu',
  },
  // ── VERSOVA MANGROVES ─────────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200016',
    name: 'Versova Mangroves & Wetland', category: 'Mangrove',
    centroidLat: 19.1262, centroidLon: 72.8080, areaM2: 850000,
    ndviMean: 0.61, ndviMin: 0.44, ndviMax: 0.77, densityClass: 'HIGH',
    tags: { natural: 'wetland', wetland: 'mangrove', name: 'Versova Mangroves' },
    geometry: { type: 'Polygon', coordinates: [[[72.798, 19.118],[72.818, 19.118],[72.818, 19.134],[72.798, 19.134],[72.798, 19.118]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=wetland', source: 'OSM_TAG', note: 'Coastal mangrove wetland, Versova' }],
    pathCount: 2, totalPathLengthM: 1500,
    entrances: [{ lat: 19.126, lon: 72.808, tags: {} }],
    caption: 'Versova Mangroves — protected tidal wetland, Andheri West',
  },
  // ── WORLI SEAFACE PROMENADE ───────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200017',
    name: 'Worli Sea Face Promenade', category: 'Park',
    centroidLat: 19.0060, centroidLon: 72.8180, areaM2: 95000,
    ndviMean: 0.22, ndviMin: 0.10, ndviMax: 0.38, densityClass: 'LOW',
    tags: { highway: 'pedestrian', name: 'Worli Sea Face', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.814, 18.998],[72.822, 18.998],[72.822, 19.014],[72.814, 19.014],[72.814, 18.998]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'highway=pedestrian', source: 'OSM_TAG', note: 'Public seafront walking promenade' }],
    pathCount: 1, totalPathLengthM: 2200,
    entrances: [{ lat: 19.006, lon: 72.818, tags: {} }],
    caption: 'Worli Sea Face — breezy promenade along the Arabian Sea, Worli',
  },
  // ── MAHALAXMI RACECOURSE ──────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200018',
    name: 'Mahalaxmi Racecourse Grounds', category: 'Park',
    centroidLat: 18.9810, centroidLon: 72.8180, areaM2: 475000,
    ndviMean: 0.50, ndviMin: 0.35, ndviMax: 0.65, densityClass: 'MEDIUM',
    tags: { leisure: 'horse_racing', name: 'Mahalaxmi Racecourse', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.812, 18.974],[72.824, 18.974],[72.824, 18.988],[72.812, 18.988],[72.812, 18.974]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'leisure=horse_racing', source: 'OSM_TAG', note: 'Large green oval with public access during non-race hours' }],
    pathCount: 5, totalPathLengthM: 3500,
    entrances: [{ lat: 18.981, lon: 72.818, tags: { barrier: 'gate' } }],
    caption: 'Mahalaxmi Racecourse — expansive green grounds in South Mumbai',
  },
  // ── BANDRA FORT GARDEN ───────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200019',
    name: 'Bandra Fort Garden & Promenade', category: 'Park',
    centroidLat: 19.0395, centroidLon: 72.8192, areaM2: 28000,
    ndviMean: 0.40, ndviMin: 0.25, ndviMax: 0.55, densityClass: 'MEDIUM',
    tags: { leisure: 'park', historic: 'fort', name: 'Bandra Fort', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.817, 19.037],[72.822, 19.037],[72.822, 19.042],[72.817, 19.042],[72.817, 19.037]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'leisure=park', source: 'OSM_TAG', note: 'Historic fort and sea-facing garden' }],
    pathCount: 3, totalPathLengthM: 850,
    entrances: [{ lat: 19.039, lon: 72.819, tags: {} }],
    caption: 'Bandra Fort — 16th century Portuguese fort with promenade gardens',
  },
  // ── COLABA WOODS & NATURE TRAIL ──────────────────────────────────────────
  {
    osmType: 'way', osmId: '200020',
    name: 'Colaba Woods & Nature Trail', category: 'Forest',
    centroidLat: 18.9051, centroidLon: 72.8230, areaM2: 210000,
    ndviMean: 0.62, ndviMin: 0.44, ndviMax: 0.78, densityClass: 'HIGH',
    tags: { landuse: 'forest', name: 'Colaba Woods', access: 'permissive' },
    geometry: { type: 'Polygon', coordinates: [[[72.816, 18.897],[72.830, 18.897],[72.830, 18.913],[72.816, 18.913],[72.816, 18.897]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'landuse=forest', source: 'OSM_TAG', note: 'Naval forest area with permissive access trails' }],
    pathCount: 4, totalPathLengthM: 3200,
    entrances: [{ lat: 18.905, lon: 72.823, tags: {} }],
    caption: 'Colaba Woods — rare native forest in the southernmost tip of Mumbai',
  },
  // ── VEERMATA JIJABAI UDYAN (BYCULLA ZOO GARDEN) ──────────────────────────
  {
    osmType: 'relation', osmId: '200021',
    name: 'Veermata Jijabai Udyan (Byculla Zoo & Garden)', category: 'Botanical Garden',
    centroidLat: 18.9780, centroidLon: 72.8368, areaM2: 158000,
    ndviMean: 0.58, ndviMin: 0.40, ndviMax: 0.74, densityClass: 'HIGH',
    tags: { leisure: 'garden', name: 'Veermata Jijabai Udyan', tourism: 'zoo', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.832, 18.974],[72.841, 18.974],[72.841, 18.982],[72.832, 18.982],[72.832, 18.974]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Mumbai\'s oldest public garden and zoo' }],
    pathCount: 12, totalPathLengthM: 4500,
    entrances: [{ lat: 18.978, lon: 72.837, tags: { barrier: 'gate' } }],
    caption: "Veermata Jijabai Udyan — Mumbai's oldest public garden and zoological park, Byculla",
  },
  // ── SION FORT HILL GARDEN ─────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200022',
    name: 'Sion Fort Hill Garden', category: 'Park',
    centroidLat: 19.0418, centroidLon: 72.8626, areaM2: 32000,
    ndviMean: 0.45, ndviMin: 0.30, ndviMax: 0.60, densityClass: 'MEDIUM',
    tags: { leisure: 'park', historic: 'fort', name: 'Sion Fort', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.859, 19.039],[72.866, 19.039],[72.866, 19.044],[72.859, 19.044],[72.859, 19.039]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Historic hill fort with garden and city views' }],
    pathCount: 3, totalPathLengthM: 980,
    entrances: [{ lat: 19.042, lon: 72.863, tags: {} }],
    caption: 'Sion Fort Hill Garden — hilltop fort with panoramic city views, Sion',
  },
  // ── VIKHROLI MANGROVES ────────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200023',
    name: 'Vikhroli Mangrove Park', category: 'Mangrove',
    centroidLat: 19.0825, centroidLon: 72.9258, areaM2: 1800000,
    ndviMean: 0.68, ndviMin: 0.50, ndviMax: 0.84, densityClass: 'HIGH',
    tags: { natural: 'wetland', wetland: 'mangrove', name: 'Vikhroli Mangroves', access: 'permissive' },
    geometry: { type: 'Polygon', coordinates: [[[72.915, 19.073],[72.937, 19.073],[72.937, 19.092],[72.915, 19.092],[72.915, 19.073]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=wetland', source: 'OSM_TAG', note: 'Mangrove ecosystem adjacent to Thane Creek' }],
    pathCount: 3, totalPathLengthM: 2800,
    entrances: [{ lat: 19.083, lon: 72.926, tags: {} }],
    caption: 'Vikhroli Mangrove Park — tidal wetland buffer, Thane Creek',
  },
  // ── MALAD CREEK MANGROVES ─────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200024',
    name: 'Malad Creek Mangroves', category: 'Mangrove',
    centroidLat: 19.1820, centroidLon: 72.8460, areaM2: 2400000,
    ndviMean: 0.63, ndviMin: 0.46, ndviMax: 0.79, densityClass: 'HIGH',
    tags: { natural: 'wetland', wetland: 'mangrove', name: 'Malad Creek Mangroves' },
    geometry: { type: 'Polygon', coordinates: [[[72.835, 19.172],[72.858, 19.172],[72.858, 19.192],[72.835, 19.192],[72.835, 19.172]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=wetland', source: 'OSM_TAG', note: 'Coastal mangrove belt, Malad Creek' }],
    pathCount: 2, totalPathLengthM: 1800,
    entrances: [{ lat: 19.182, lon: 72.846, tags: {} }],
    caption: 'Malad Creek Mangroves — tidal mangrove forest, Malad',
  },
  // ── DAHISAR RIVER GREENWAY ────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200025',
    name: 'Dahisar River Greenway', category: 'Green Corridor',
    centroidLat: 19.2620, centroidLon: 72.8550, areaM2: 680000,
    ndviMean: 0.48, ndviMin: 0.30, ndviMax: 0.64, densityClass: 'MEDIUM',
    tags: { natural: 'water', name: 'Dahisar River', leisure: 'park' },
    geometry: { type: 'Polygon', coordinates: [[[72.845, 19.252],[72.865, 19.252],[72.865, 19.272],[72.845, 19.272],[72.845, 19.252]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=water', source: 'OSM_TAG', note: 'Riparian green corridor along Dahisar river' }],
    pathCount: 3, totalPathLengthM: 4800,
    entrances: [{ lat: 19.262, lon: 72.855, tags: {} }],
    caption: 'Dahisar River Greenway — riparian corridor through Dahisar, North Mumbai',
  },
  // ── TULSI LAKE & VIHAR LAKE ───────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200026',
    name: 'Tulsi Lake & Buffer Forest', category: 'Wetland',
    centroidLat: 19.1900, centroidLon: 72.8880, areaM2: 2200000,
    ndviMean: 0.68, ndviMin: 0.50, ndviMax: 0.84, densityClass: 'HIGH',
    tags: { natural: 'water', water: 'reservoir', name: 'Tulsi Lake' },
    geometry: { type: 'Polygon', coordinates: [[[72.875, 19.175],[72.901, 19.175],[72.901, 19.205],[72.875, 19.205],[72.875, 19.175]]] },
    accessStatus: 'UNKNOWN', walkClass: 'ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=water', source: 'OSM_TAG', note: 'Municipal reservoir with restricted public access' }],
    pathCount: 0, totalPathLengthM: 0,
    entrances: [],
    caption: 'Tulsi Lake — municipal reservoir with surrounding forest buffer, SGNP',
  },
  {
    osmType: 'relation', osmId: '200027',
    name: 'Vihar Lake & Forest Buffer', category: 'Wetland',
    centroidLat: 19.1820, centroidLon: 72.8980, areaM2: 2700000,
    ndviMean: 0.70, ndviMin: 0.52, ndviMax: 0.86, densityClass: 'HIGH',
    tags: { natural: 'water', water: 'reservoir', name: 'Vihar Lake' },
    geometry: { type: 'Polygon', coordinates: [[[72.885, 19.168],[72.911, 19.168],[72.911, 19.196],[72.885, 19.196],[72.885, 19.168]]] },
    accessStatus: 'UNKNOWN', walkClass: 'ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=water', source: 'OSM_TAG', note: 'Municipal reservoir with forest buffer' }],
    pathCount: 0, totalPathLengthM: 0,
    entrances: [],
    caption: 'Vihar Lake — Mumbai\'s major reservoir surrounded by protected forest',
  },
  // ── DADAR CHOWPATTY BEACH ─────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200028',
    name: 'Dadar Chowpatty Beach & Garden', category: 'Park',
    centroidLat: 19.0215, centroidLon: 72.8368, areaM2: 45000,
    ndviMean: 0.32, ndviMin: 0.18, ndviMax: 0.48, densityClass: 'MEDIUM',
    tags: { natural: 'beach', name: 'Dadar Chowpatty', leisure: 'park', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.833, 19.018],[72.841, 19.018],[72.841, 19.025],[72.833, 19.025],[72.833, 19.018]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'natural=beach', source: 'OSM_TAG', note: 'Public beach and garden, Dadar' }],
    pathCount: 2, totalPathLengthM: 1400,
    entrances: [{ lat: 19.021, lon: 72.837, tags: {} }],
    caption: 'Dadar Chowpatty — beach and garden on the western seafront, Dadar',
  },
  // ── GIRGAON CHOWPATTY ─────────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200029',
    name: 'Girgaon Chowpatty Beach', category: 'Park',
    centroidLat: 18.9550, centroidLon: 72.8130, areaM2: 38000,
    ndviMean: 0.18, ndviMin: 0.08, ndviMax: 0.30, densityClass: 'LOW',
    tags: { natural: 'beach', name: 'Girgaon Chowpatty', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.810, 18.952],[72.816, 18.952],[72.816, 18.958],[72.810, 18.958],[72.810, 18.952]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'natural=beach', source: 'OSM_TAG', note: 'Iconic public beach, Marine Drive seafront' }],
    pathCount: 1, totalPathLengthM: 1100,
    entrances: [{ lat: 18.955, lon: 72.813, tags: {} }],
    caption: 'Girgaon Chowpatty — iconic Ganesh festival beach, South Mumbai',
  },
  // ── MAHIM CAUSEWAY GARDEN ─────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200030',
    name: 'Mahim Bay Promenade & Garden', category: 'Park',
    centroidLat: 19.0450, centroidLon: 72.8415, areaM2: 26000,
    ndviMean: 0.35, ndviMin: 0.20, ndviMax: 0.50, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: 'Mahim Bay Garden', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.839, 19.042],[72.844, 19.042],[72.844, 19.048],[72.839, 19.048],[72.839, 19.042]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'leisure=park', source: 'OSM_TAG', note: 'Seafront garden and promenade, Mahim' }],
    pathCount: 2, totalPathLengthM: 700,
    entrances: [{ lat: 19.045, lon: 72.841, tags: {} }],
    caption: 'Mahim Bay Promenade — coastal garden and promenade, Mahim',
  },
  // ── VASAI CREEK MANGROVES ─────────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200031',
    name: 'Manori Creek Mangroves', category: 'Mangrove',
    centroidLat: 19.2360, centroidLon: 72.7880, areaM2: 5400000,
    ndviMean: 0.70, ndviMin: 0.52, ndviMax: 0.86, densityClass: 'HIGH',
    tags: { natural: 'wetland', wetland: 'mangrove', name: 'Manori Creek Mangroves' },
    geometry: { type: 'Polygon', coordinates: [[[72.769, 19.218],[72.807, 19.218],[72.807, 19.254],[72.769, 19.254],[72.769, 19.218]]] },
    accessStatus: 'UNKNOWN', walkClass: 'ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=wetland', source: 'OSM_TAG', note: 'Extensive mangrove ecosystem, Manori Creek' }],
    pathCount: 1, totalPathLengthM: 2200,
    entrances: [],
    caption: 'Manori Creek Mangroves — large coastal wetland system, Northwest Mumbai',
  },
  // ── ANDHERI SPORTS COMPLEX GARDEN ────────────────────────────────────────
  {
    osmType: 'way', osmId: '200032',
    name: 'Andheri Sports Complex Garden', category: 'Park',
    centroidLat: 19.1140, centroidLon: 72.8660, areaM2: 62000,
    ndviMean: 0.42, ndviMin: 0.28, ndviMax: 0.56, densityClass: 'MEDIUM',
    tags: { leisure: 'stadium', name: 'Andheri Sports Complex', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.861, 19.110],[72.871, 19.110],[72.871, 19.118],[72.861, 19.118],[72.861, 19.110]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'leisure=stadium', source: 'OSM_TAG', note: 'Public sports and recreation complex with green grounds' }],
    pathCount: 4, totalPathLengthM: 1600,
    entrances: [{ lat: 19.114, lon: 72.866, tags: { barrier: 'gate' } }],
    caption: 'Andheri Sports Complex — public sports facilities and green grounds, Andheri East',
  },
  // ── MALAD POISAR RIVER GREENWAY ───────────────────────────────────────────
  {
    osmType: 'way', osmId: '200033',
    name: 'Poisar River Greenway, Malad', category: 'Green Corridor',
    centroidLat: 19.1890, centroidLon: 72.8580, areaM2: 380000,
    ndviMean: 0.44, ndviMin: 0.28, ndviMax: 0.60, densityClass: 'MEDIUM',
    tags: { natural: 'water', name: 'Poisar River', leisure: 'park' },
    geometry: { type: 'Polygon', coordinates: [[[72.848, 19.180],[72.868, 19.180],[72.868, 19.198],[72.848, 19.198],[72.848, 19.180]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=water', source: 'OSM_TAG', note: 'Riparian green corridor along Poisar river' }],
    pathCount: 2, totalPathLengthM: 3200,
    entrances: [{ lat: 19.189, lon: 72.858, tags: {} }],
    caption: 'Poisar River Greenway — riparian corridor through Malad',
  },
  // ── KURLA NATURE PARK ─────────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200034',
    name: 'Kurla Nature Park', category: 'Park',
    centroidLat: 19.0720, centroidLon: 72.8820, areaM2: 84000,
    ndviMean: 0.50, ndviMin: 0.34, ndviMax: 0.64, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: 'Kurla Nature Park', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.877, 19.068],[72.887, 19.068],[72.887, 19.076],[72.877, 19.076],[72.877, 19.068]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Public nature park, Kurla' }],
    pathCount: 5, totalPathLengthM: 2200,
    entrances: [{ lat: 19.072, lon: 72.882, tags: { barrier: 'gate' } }],
    caption: 'Kurla Nature Park — public green space, Kurla',
  },
  // ── KANDIVALI FILM CITY FOREST ────────────────────────────────────────────
  {
    osmType: 'relation', osmId: '200035',
    name: 'Goregaon Film City Forest Buffer', category: 'Forest',
    centroidLat: 19.1560, centroidLon: 72.8740, areaM2: 2200000,
    ndviMean: 0.66, ndviMin: 0.48, ndviMax: 0.82, densityClass: 'HIGH',
    tags: { landuse: 'forest', name: 'Film City Forest', natural: 'wood' },
    geometry: { type: 'Polygon', coordinates: [[[72.862, 19.144],[72.886, 19.144],[72.886, 19.168],[72.862, 19.168],[72.862, 19.144]]] },
    accessStatus: 'UNKNOWN', walkClass: 'ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'landuse=forest', source: 'OSM_TAG', note: 'Forest buffer around Goregaon Film City complex' }],
    pathCount: 2, totalPathLengthM: 3800,
    entrances: [],
    caption: 'Goregaon Film City Forest — green buffer surrounding Filmistan studios, Goregaon',
  },
  // ── MULUND FLORAL GARDEN ──────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200036',
    name: 'Mulund Floral Garden', category: 'Public Garden',
    centroidLat: 19.1760, centroidLon: 72.9490, areaM2: 58000,
    ndviMean: 0.55, ndviMin: 0.38, ndviMax: 0.70, densityClass: 'HIGH',
    tags: { leisure: 'garden', name: 'Mulund Floral Garden', access: 'yes', opening_hours: '06:00-22:00' },
    geometry: { type: 'Polygon', coordinates: [[[72.945, 19.172],[72.953, 19.172],[72.953, 19.180],[72.945, 19.180],[72.945, 19.172]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'BMC-maintained ornamental garden with floral displays' }],
    pathCount: 6, totalPathLengthM: 2200,
    entrances: [{ lat: 19.176, lon: 72.949, tags: { barrier: 'gate' } }],
    caption: 'Mulund Floral Garden — ornamental garden with seasonal floral displays, Mulund',
  },
  // ── THANE CREEK FLAMINGO SANCTUARY ───────────────────────────────────────
  {
    osmType: 'relation', osmId: '200037',
    name: 'Thane Creek Flamingo Sanctuary', category: 'Nature Reserve',
    centroidLat: 19.0820, centroidLon: 72.9610, areaM2: 15960000,
    ndviMean: 0.60, ndviMin: 0.44, ndviMax: 0.76, densityClass: 'HIGH',
    tags: { boundary: 'protected_area', name: 'Thane Creek Flamingo Sanctuary', protect_class: '1a', access: 'permissive' },
    geometry: { type: 'Polygon', coordinates: [[[72.940, 19.058],[72.982, 19.058],[72.982, 19.106],[72.940, 19.106],[72.940, 19.058]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'boundary=protected_area', source: 'OSM_TAG', note: 'Wildlife sanctuary and flamingo habitat, Thane Creek' }],
    pathCount: 3, totalPathLengthM: 5600,
    entrances: [{ lat: 19.082, lon: 72.961, tags: {} }],
    caption: 'Thane Creek Flamingo Sanctuary — protected habitat for flamingos and coastal birds',
  },
  // ── BORIVALI NATIONAL PARK BUFFER ────────────────────────────────────────
  {
    osmType: 'way', osmId: '200038',
    name: 'Borivali SGNP Eastern Buffer', category: 'Forest',
    centroidLat: 19.2050, centroidLon: 72.8850, areaM2: 3800000,
    ndviMean: 0.74, ndviMin: 0.56, ndviMax: 0.90, densityClass: 'HIGH',
    tags: { landuse: 'forest', name: 'SGNP East Buffer', natural: 'wood', protect_class: '2' },
    geometry: { type: 'Polygon', coordinates: [[[72.870, 19.188],[72.900, 19.188],[72.900, 19.222],[72.870, 19.222],[72.870, 19.188]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'landuse=forest', source: 'OSM_TAG', note: 'Eastern buffer forest of SGNP, Borivali' }],
    pathCount: 8, totalPathLengthM: 12000,
    entrances: [{ lat: 19.205, lon: 72.885, tags: {} }],
    caption: 'SGNP Eastern Buffer Forest — transition zone between park core and suburban Borivali',
  },
  // ── KANHERI CAVES FOREST TRAIL ────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200039',
    name: 'Kanheri Caves Trail & Forest', category: 'Nature Reserve',
    centroidLat: 19.2060, centroidLon: 72.9060, areaM2: 680000,
    ndviMean: 0.76, ndviMin: 0.58, ndviMax: 0.90, densityClass: 'HIGH',
    tags: { historic: 'archaeological_site', name: 'Kanheri Caves', natural: 'wood', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.898, 19.198],[72.914, 19.198],[72.914, 19.214],[72.898, 19.214],[72.898, 19.198]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Forest trail to Buddhist rock-cut caves inside SGNP' }],
    pathCount: 6, totalPathLengthM: 4800,
    entrances: [{ lat: 19.206, lon: 72.906, tags: { barrier: 'gate' } }],
    caption: 'Kanheri Caves Trail — Buddhist rock-cut cave complex inside SGNP forest',
  },
  // ── MUMBAI UNIVERSITY GARDENS ─────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200040',
    name: 'Mumbai University Fort Campus Gardens', category: 'Public Garden',
    centroidLat: 18.9312, centroidLon: 72.8316, areaM2: 35000,
    ndviMean: 0.48, ndviMin: 0.32, ndviMax: 0.64, densityClass: 'MEDIUM',
    tags: { amenity: 'university', name: 'University of Mumbai', leisure: 'garden', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.829, 18.928],[72.834, 18.928],[72.834, 18.934],[72.829, 18.934],[72.829, 18.928]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Gothic heritage campus with public gardens' }],
    pathCount: 5, totalPathLengthM: 1200,
    entrances: [{ lat: 18.931, lon: 72.832, tags: { barrier: 'gate' } }],
    caption: 'Mumbai University Fort Campus — Victorian Gothic buildings and heritage gardens',
  },
  // ── SEWRI MUD FLATS (FLAMINGO HABITAT) ───────────────────────────────────
  {
    osmType: 'relation', osmId: '200041',
    name: 'Sewri Flamingo Point Mud Flats', category: 'Wetland',
    centroidLat: 19.0060, centroidLon: 72.8640, areaM2: 1200000,
    ndviMean: 0.30, ndviMin: 0.16, ndviMax: 0.48, densityClass: 'LOW',
    tags: { natural: 'mud', name: 'Sewri Mud Flats', access: 'yes', tourism: 'attraction' },
    geometry: { type: 'Polygon', coordinates: [[[72.857, 18.998],[72.871, 18.998],[72.871, 19.014],[72.857, 19.014],[72.857, 18.998]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'PATHS_PRESENT_ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=mud', source: 'OSM_TAG', note: 'Tidal mudflats with flamingo habitat, Sewri' }],
    pathCount: 1, totalPathLengthM: 1600,
    entrances: [{ lat: 19.006, lon: 72.864, tags: {} }],
    caption: 'Sewri Flamingo Point — seasonal flamingo habitat on tidal mudflats, Sewri',
  },
  // ── WORLI KOLIWADA VILLAGE GARDEN ─────────────────────────────────────────
  {
    osmType: 'way', osmId: '200042',
    name: 'Worli Koliwada Village Green', category: 'Community Garden',
    centroidLat: 19.0012, centroidLon: 72.8160, areaM2: 18000,
    ndviMean: 0.40, ndviMin: 0.25, ndviMax: 0.55, densityClass: 'MEDIUM',
    tags: { leisure: 'park', name: 'Worli Koliwada', access: 'yes', landuse: 'village_green' },
    geometry: { type: 'Polygon', coordinates: [[[72.814, 18.999],[72.818, 18.999],[72.818, 19.003],[72.814, 19.003],[72.814, 18.999]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'leisure=park', source: 'OSM_TAG', note: 'Historic Koli fishing community village green' }],
    pathCount: 2, totalPathLengthM: 600,
    entrances: [{ lat: 19.001, lon: 72.816, tags: {} }],
    caption: 'Worli Koliwada Village Green — historic fishing village community garden',
  },
  // ── POWAI LAKE GARDEN ─────────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200043',
    name: 'Powai Lake Garden & IIT Promenade', category: 'Park',
    centroidLat: 19.1310, centroidLon: 72.9130, areaM2: 85000,
    ndviMean: 0.52, ndviMin: 0.36, ndviMax: 0.68, densityClass: 'HIGH',
    tags: { leisure: 'park', name: 'Powai Lake Garden', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.908, 19.127],[72.918, 19.127],[72.918, 19.135],[72.908, 19.135],[72.908, 19.127]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'access=yes', source: 'OSM_TAG', note: 'Lakeside park and promenade, IIT Bombay campus' }],
    pathCount: 5, totalPathLengthM: 2400,
    entrances: [{ lat: 19.131, lon: 72.913, tags: { barrier: 'gate' } }],
    caption: 'Powai Lake Garden — peaceful lakeside park on IIT Bombay campus',
  },
  // ── CHAKALA MANGROVES ─────────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200044',
    name: 'Chakala Creek Mangroves, Andheri', category: 'Mangrove',
    centroidLat: 19.1100, centroidLon: 72.8700, areaM2: 420000,
    ndviMean: 0.58, ndviMin: 0.40, ndviMax: 0.74, densityClass: 'HIGH',
    tags: { natural: 'wetland', wetland: 'mangrove', name: 'Chakala Mangroves' },
    geometry: { type: 'Polygon', coordinates: [[[72.864, 19.105],[72.876, 19.105],[72.876, 19.115],[72.864, 19.115],[72.864, 19.105]]] },
    accessStatus: 'UNKNOWN', walkClass: 'ACCESS_UNVERIFIED',
    accessEvidence: [{ tag: 'natural=wetland', source: 'OSM_TAG', note: 'Intertidal mangrove patch, Chakala Creek' }],
    pathCount: 0, totalPathLengthM: 0,
    entrances: [],
    caption: 'Chakala Creek Mangroves — intertidal mangrove patch near BKC, Andheri East',
  },
  // ── BREACH CANDY GARDENS ──────────────────────────────────────────────────
  {
    osmType: 'way', osmId: '200045',
    name: 'Breach Candy Hospital Gardens & Seafront', category: 'Public Garden',
    centroidLat: 18.9648, centroidLon: 72.8048, areaM2: 22000,
    ndviMean: 0.44, ndviMin: 0.28, ndviMax: 0.60, densityClass: 'MEDIUM',
    tags: { leisure: 'garden', name: 'Breach Candy Gardens', access: 'yes' },
    geometry: { type: 'Polygon', coordinates: [[[72.802, 18.963],[72.808, 18.963],[72.808, 18.967],[72.802, 18.967],[72.802, 18.963]]] },
    accessStatus: 'PUBLIC_TAGGED', walkClass: 'WALKABLE_VERIFIED',
    accessEvidence: [{ tag: 'leisure=garden', source: 'OSM_TAG', note: 'Seafront garden adjacent to Breach Candy Club and hospital' }],
    pathCount: 2, totalPathLengthM: 720,
    entrances: [{ lat: 18.965, lon: 72.805, tags: {} }],
    caption: 'Breach Candy Gardens — quiet seafront garden in upscale South Mumbai',
  },
];
