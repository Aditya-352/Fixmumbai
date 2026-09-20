import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { mapCoordinatesToCivicBoundary } from '@/lib/gis';
import { generatePublicReportId } from '@/lib/id-generator';
import { detectAndLinkDuplicate } from '@/lib/duplicate-detector';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const wardCode = searchParams.get('ward');
    const acNumber = searchParams.get('ac');
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '50');

    const whereClause: any = {
      moderationStatus: 'APPROVED'
    };

    if (wardCode) {
      whereClause.bmcWard = { wardCode: wardCode };
    }

    if (acNumber) {
      whereClause.assemblyConstituency = { acNumber: parseInt(acNumber) };
    }

    if (category) {
      whereClause.category = { name: category };
    }

    if (status) {
      whereClause.status = status;
    }

    if (search) {
      whereClause.OR = [
        { publicReportId: { contains: search } },
        { locality: { contains: search } },
        { description: { contains: search } }
      ];
    }

    const reports = await db.report.findMany({
      where: whereClause,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        category: true,
        bmcWard: true,
        assemblyConstituency: true,
        parliamentaryConstituency: true,
        photos: true,
        resolutionEvidence: true,
        citizenVerifications: true
      }
    });

    return NextResponse.json({ success: true, count: reports.length, data: reports });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { categoryId, description, latitude, longitude, photoPath, reporterName, reporterEmail, reporterPhone, severity } = body;

    if (!categoryId || !latitude || !longitude) {
      return NextResponse.json({ success: false, error: 'Category, latitude, and longitude are required' }, { status: 400 });
    }

    // Resolve valid Category from database (by ID, by name match, or first category fallback)
    let categoryRecord = await db.category.findUnique({ where: { id: categoryId } });
    if (!categoryRecord) {
      categoryRecord = await db.category.findFirst({
        where: {
          OR: [
            { name: categoryId },
            { name: { contains: categoryId } },
            { name: 'Garbage pile' }
          ]
        }
      });
    }
    if (!categoryRecord) {
      categoryRecord = await db.category.findFirst();
    }

    if (!categoryRecord) {
      return NextResponse.json({ success: false, error: 'Category database entry not found' }, { status: 400 });
    }

    // 1. Perform automatic GIS spatial boundary lookup
    const gisInfo = mapCoordinatesToCivicBoundary(latitude, longitude);

    // 2. Fetch matched Ward, AC, PC from DB
    const wardObj = await db.bmcWard.findUnique({ where: { wardCode: gisInfo.wardCode } });
    const acObj = await db.assemblyConstituency.findUnique({ where: { acNumber: gisInfo.acNumber } });
    const pcObj = await db.parliamentaryConstituency.findUnique({ where: { pcNumber: gisInfo.pcNumber } });

    // 3. Generate human-friendly report ID (e.g. MUM-000188)
    const reportCount = await db.report.count();
    const publicReportId = generatePublicReportId(reportCount + 188);

    // 4. Create database report
    const newReport = await db.report.create({
      data: {
        publicReportId,
        categoryId: categoryRecord.id,
        description: description || 'No detailed description provided.',
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        locality: gisInfo.locality,
        bmcWardId: wardObj?.id,
        assemblyConstituencyId: acObj?.id,
        parliamentaryConstituencyId: pcObj?.id,
        severity: severity || 'MEDIUM',
        status: 'SUBMITTED',
        reporterName,
        reporterEmail,
        reporterPhone,
        photos: photoPath ? {
          create: {
            storagePath: photoPath,
            mimeType: 'image/jpeg',
            fileSize: 300000
          }
        } : undefined,
        timelineEvents: {
          create: {
            eventType: 'SUBMITTED',
            actorType: 'CITIZEN',
            description: `Report ${publicReportId} submitted successfully at ${gisInfo.locality}`
          }
        }
      },
      include: {
        category: true,
        bmcWard: true,
        assemblyConstituency: true,
        photos: true
      }
    });

    // 5. Trigger automatic duplicate detection
    await detectAndLinkDuplicate(newReport.id, categoryId, latitude, longitude);

    return NextResponse.json({ success: true, data: newReport });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
