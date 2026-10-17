import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';
import { withBasePath } from '@/lib/base-path';

export const runtime = 'nodejs';

const MAX_SIZE_BYTES = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { photoDataUrl } = body as { photoDataUrl?: unknown };

    if (typeof photoDataUrl !== 'string') {
      return NextResponse.json({ success: false, error: 'A photo is required.' }, { status: 400 });
    }

    const match = photoDataUrl.match(/^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/);
    if (!match) {
      return NextResponse.json({ success: false, error: 'Unsupported image format. Use JPEG, PNG, or WebP.' }, { status: 400 });
    }

    const format = match[1];
    const imageBuffer = Buffer.from(match[2], 'base64');
    if (imageBuffer.length === 0 || imageBuffer.length > MAX_SIZE_BYTES) {
      return NextResponse.json({ success: false, error: 'Photo must be smaller than 10 MB.' }, { status: 400 });
    }

    const extension = format === 'png' ? 'png' : format === 'webp' ? 'webp' : 'jpg';
    const mimeType = format === 'png' ? 'image/png' : format === 'webp' ? 'image/webp' : 'image/jpeg';
    const fileName = `${crypto.randomUUID()}.${extension}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'aqi');

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, fileName), imageBuffer);

    return NextResponse.json({
      success: true,
      imageUrl: withBasePath(`/uploads/aqi/${fileName}`),
      storagePath: `aqi/${fileName}`,
      mimeType,
      fileSize: imageBuffer.length,
    }, { status: 201 });
  } catch (error) {
    console.error('[AQI_PHOTOS] Upload error:', error);
    return NextResponse.json({ success: false, error: 'Photo upload failed. Please try again.' }, { status: 500 });
  }
}
