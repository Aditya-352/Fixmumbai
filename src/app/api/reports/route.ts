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

    if (!categoryId || latitude === undefined || longitude === undefined) {
      return NextResponse.json({ success: false, error: 'Category, latitude, and longitude are required' }, { status: 400 });
    }

    const latNum = parseFloat(latitude);
    const lngNum = parseFloat(longitude);

    if (isNaN(latNum) || isNaN(lngNum)) {
      return NextResponse.json({ success: false, error: 'Invalid latitude or longitude format' }, { status: 400 });
    }

    // 1. Perform automatic GIS spatial boundary lookup (maps nearest BMC ward if outside Mumbai boundary)
    const gisInfo = mapCoordinatesToCivicBoundary(latNum, lngNum);

    // Resolve valid Category from database (by ID, by name match, or fallback)
    let categoryRecord = null;
    if (categoryId) {
      try {
        categoryRecord = await db.category.findUnique({ where: { id: categoryId } });
      } catch (e) {}
    }

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

    // 2. Auto-classify BMC Ward, AC, PC from backend GIS
    let wardObj = await db.bmcWard.findUnique({ where: { wardCode: gisInfo.wardCode } });
    if (!wardObj) {
      wardObj = await db.bmcWard.findFirst({
        where: {
          OR: [
            { wardCode: gisInfo.wardCode },
            { wardCode: gisInfo.wardCode.replace('/', ' ') },
            { wardCode: gisInfo.wardCode.replace(' ', '/') }
          ]
        }
      });
    }
    if (!wardObj) {
      wardObj = await db.bmcWard.findFirst();
    }

    let acObj = await db.assemblyConstituency.findUnique({ where: { acNumber: gisInfo.acNumber } });
    if (!acObj) {
      acObj = await db.assemblyConstituency.findFirst({ where: { acNumber: gisInfo.acNumber } });
    }

    let pcObj = await db.parliamentaryConstituency.findUnique({ where: { pcNumber: gisInfo.pcNumber } });
    if (!pcObj) {
      pcObj = await db.parliamentaryConstituency.findFirst({ where: { pcNumber: gisInfo.pcNumber } });
    }

    // 3. Generate collision-free publicReportId (e.g. MUM-000188)
    const reportCount = await db.report.count();
    let seq = reportCount + 188;
    let publicReportId = generatePublicReportId(seq);
    let existing = await db.report.findUnique({ where: { publicReportId } });
    while (existing) {
      seq++;
      publicReportId = generatePublicReportId(seq);
      existing = await db.report.findUnique({ where: { publicReportId } });
    }

    const reportLocality = body.locality || gisInfo.locality;

    // 4. Create database report
    const newReport = await db.report.create({
      data: {
        publicReportId,
        categoryId: categoryRecord.id,
        description: description || 'No detailed description provided.',
        latitude: latNum,
        longitude: lngNum,
        locality: reportLocality,
        bmcWardId: wardObj?.id,
        assemblyConstituencyId: acObj?.id,
        parliamentaryConstituencyId: pcObj?.id,
        severity: severity || 'MEDIUM',
        status: 'SUBMITTED',
        reporterName: reporterName || 'Anonymous Citizen',
        reporterEmail: reporterEmail || undefined,
        reporterPhone: reporterPhone || undefined,
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
            description: `Report ${publicReportId} submitted successfully at ${reportLocality}`
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

    // 5. Trigger automatic duplicate detection safely
    try {
      await detectAndLinkDuplicate(newReport.id, categoryRecord.id, latNum, lngNum);
    } catch (dupErr) {
      console.error('Duplicate detection warning:', dupErr);
    }

    return NextResponse.json({ success: true, data: newReport });
  } catch (error: any) {
    console.error('POST /api/reports submission error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to submit report' }, { status: 500 });
  }
}
