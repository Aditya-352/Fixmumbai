import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';
import { withBasePath } from '@/lib/green/config';

// ── Constants ──────────────────────────────────────────────────────────────
const MAX_SIZE_BYTES = 8 * 1024 * 1024; // 8 MB hard limit
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/heic']);
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'greenery');

const VALID_CATEGORIES = [
  'PARK', 'GARDEN', 'OPEN_GREEN_SPACE', 'MANGROVE',
  'WETLAND', 'COMMUNITY_GARDEN', 'NURSERY', 'OTHER',
];

const VALID_LOCATION_SOURCES = [
  'USER_SELECTED', 'USER_CONFIRMED_DEVICE', 'MANUAL_MAP_PIN',
];

/**
 * POST /api/vegetation/photos
 *
 * Accepts a multipart/form-data upload with:
 *   file         — image file (required)
 *   description  — text (optional, max 500 chars)
 *   category     — one of VALID_CATEGORIES
 *   lat          — user-confirmed latitude (optional)
 *   lon          — user-confirmed longitude (optional)
 *   locationSource — how lat/lon was determined
 *   greenSpaceId — optional association to an existing GreenSpace
 *   consentGiven — must be "true"
 *
 * Security:
 *   - File type validated by MIME type (not just extension)
 *   - File size limited to 8 MB
 *   - No EXIF GPS extraction — only explicitly provided coordinates stored
 *   - All uploads enter PENDING_REVIEW moderation queue
 *   - No authentication required for submission (moderation gates public display)
 *
 * Storage:
 *   Files are stored in /public/uploads/greenery/ with a cuid2 filename.
 *   The directory is created on first use.
 *   Files are NEVER committed to Git (add /public/uploads to .gitignore).
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // ── 1. Parse multipart form ──────────────────────────────────────────────
    let formData: FormData;
    try {
      formData = await req.formData();
    } catch {
      return NextResponse.json(
        { ok: false, error: { code: 'INVALID_FORM', message: 'Expected multipart/form-data' } },
        { status: 400 }
      );
    }

    const file = formData.get('file') as File | null;
    const description = (formData.get('description') as string | null)?.trim().slice(0, 500) ?? '';
    const categoryRaw = (formData.get('category') as string | null)?.toUpperCase() ?? 'OTHER';
    const latRaw = formData.get('lat') as string | null;
    const lonRaw = formData.get('lon') as string | null;
    const locationSource = (formData.get('locationSource') as string | null) ?? 'USER_SELECTED';
    const greenSpaceId = formData.get('greenSpaceId') as string | null;
    const consentRaw = formData.get('consentGiven') as string | null;

    // ── 2. Validate required fields ──────────────────────────────────────────
    if (!file) {
      return NextResponse.json(
        { ok: false, error: { code: 'NO_FILE', message: 'No image file provided' } },
        { status: 400 }
      );
    }

    if (consentRaw !== 'true') {
      return NextResponse.json(
        { ok: false, error: { code: 'NO_CONSENT', message: 'Consent must be given to submit photos' } },
        { status: 400 }
      );
    }

    // ── 3. Validate file type ────────────────────────────────────────────────
    const mimeType = file.type;
    if (!ALLOWED_MIME.has(mimeType)) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: 'INVALID_FILE_TYPE',
            message: `File type "${mimeType}" is not allowed. Use JPEG, PNG, or WebP.`,
          },
        },
        { status: 400 }
      );
    }

    // ── 4. Validate file size ────────────────────────────────────────────────
    const fileSize = file.size;
    if (fileSize > MAX_SIZE_BYTES) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: 'FILE_TOO_LARGE',
            message: `File exceeds 8 MB limit (${(fileSize / 1024 / 1024).toFixed(1)} MB received)`,
          },
        },
        { status: 400 }
      );
    }

    if (fileSize === 0) {
      return NextResponse.json(
        { ok: false, error: { code: 'EMPTY_FILE', message: 'The uploaded file is empty' } },
        { status: 400 }
      );
    }

    // ── 5. Validate category ─────────────────────────────────────────────────
    const category = VALID_CATEGORIES.includes(categoryRaw) ? categoryRaw : 'OTHER';

    // ── 6. Validate coordinates (optional but must be Mumbai-range if given) ──
    let lat: number | null = null;
    let lon: number | null = null;
    let locSource = VALID_LOCATION_SOURCES.includes(locationSource) ? locationSource : 'USER_SELECTED';

    if (latRaw && lonRaw) {
      const parsedLat = parseFloat(latRaw);
      const parsedLon = parseFloat(lonRaw);
      if (
        !isNaN(parsedLat) && !isNaN(parsedLon) &&
        parsedLat >= 18.5 && parsedLat <= 19.5 &&
        parsedLon >= 72.5 && parsedLon <= 73.2
      ) {
        lat = parsedLat;
        lon = parsedLon;
      } else {
        return NextResponse.json(
          {
            ok: false,
            error: {
              code: 'INVALID_COORDINATES',
              message: 'Coordinates are outside the Mumbai service area or invalid',
            },
          },
          { status: 400 }
        );
      }
    }

    // ── 7. Validate greenSpaceId (if provided) ───────────────────────────────
    let verifiedGreenSpaceId: string | null = null;
    if (greenSpaceId) {
      try {
        const gs = await db.greenSpace.findUnique({ where: { id: greenSpaceId }, select: { id: true } });
        verifiedGreenSpaceId = gs?.id ?? null;
      } catch {
        // Ignore — treat as unlinked
      }
    }

    // ── 8. Save file to disk ─────────────────────────────────────────────────
    const ext = mimeType === 'image/png' ? 'png' : mimeType === 'image/webp' ? 'webp' : 'jpg';
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const storagePath = `greenery/${fileName}`;
    const fullPath = path.join(UPLOAD_DIR, fileName);

    // Ensure upload directory exists
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(fullPath, buffer);

    // Must include the app basePath (/civic) or the browser gets a 404.
    const imageUrl = withBasePath(`/uploads/greenery/${fileName}`);

    // ── 9. Save record to database ───────────────────────────────────────────
    const photo = await (db as any).greeneryPhoto.create({
      data: {
        storagePath,
        imageUrl,
        mimeType,
        fileSize,
        description,
        category,
        latitude: lat,
        longitude: lon,
        locationSource: locSource,
        greenSpaceId: verifiedGreenSpaceId,
        consentGiven: true,
        moderationStatus: 'PENDING_REVIEW',
        sourceType: 'CITIZEN_UPLOAD',
      },
    });

    return NextResponse.json(
      {
        ok: true,
        data: {
          id: photo.id,
          imageUrl: photo.imageUrl,
          moderationStatus: photo.moderationStatus,
          message:
            'Thank you! Your photo has been submitted and will appear after moderation review.',
        },
        error: null,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('[GREEN_PHOTOS] Upload error:', err);
    return NextResponse.json(
      {
        ok: false,
        error: { code: 'SERVER_ERROR', message: 'Upload failed. Please try again.' },
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/vegetation/photos?greenSpaceId=&status=APPROVED&limit=20
 *
 * Returns approved citizen photos for a green space.
 * Only APPROVED photos are returned publicly.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const greenSpaceId = searchParams.get('greenSpaceId');
  const status = searchParams.get('status') ?? 'APPROVED';
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '20'), 50);

  // Validate: only APPROVED photos are publicly accessible
  const safeStatus = status === 'APPROVED' ? 'APPROVED' : 'APPROVED';

  try {
    const where: Record<string, any> = { moderationStatus: safeStatus };
    if (greenSpaceId) where.greenSpaceId = greenSpaceId;

    const photos = await (db as any).greeneryPhoto.findMany({
      where,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        imageUrl: true,
        thumbUrl: true,
        description: true,
        category: true,
        latitude: true,
        longitude: true,
        createdAt: true,
        greenSpaceId: true,
        moderationStatus: true,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        data: photos,
        meta: {
          count: photos.length,
          fetchedAt: new Date().toISOString(),
        },
        error: null,
      },
      {
        headers: { 'Cache-Control': 'public, s-maxage=300' },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: { code: 'DB_ERROR', message: err.message } },
      { status: 500 }
    );
  }
}
