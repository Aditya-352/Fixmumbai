import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { calculateDistanceMeters } from '@/lib/gis';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const report = await db.report.findFirst({
      where: {
        OR: [
          { id: params.id },
          { publicReportId: params.id }
        ]
      },
      include: {
        category: true,
        bmcWard: true,
        assemblyConstituency: {
          include: { representatives: true }
        },
        parliamentaryConstituency: {
          include: { representatives: true }
        },
        photos: true,
        timelineEvents: {
          orderBy: { timestamp: 'asc' }
        },
        resolutionEvidence: true,
        citizenVerifications: true,
        duplicateGroup: {
          include: { reports: { select: { id: true, publicReportId: true, locality: true, status: true } } }
        }
      }
    });

    if (!report) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
    }

    // Omit sensitive private reporter info for public GET
    const publicReport = {
      ...report,
      reporterEmail: undefined,
      reporterPhone: undefined
    };

    return NextResponse.json({ success: true, data: publicReport });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { status, actionDescription, actorName, actorRole, resolutionAfterImage, resolutionNotes, resolutionLatitude, resolutionLongitude } = body;

    const existingReport = await db.report.findFirst({
      where: { OR: [{ id: params.id }, { publicReportId: params.id }] },
      include: { photos: true }
    });

    if (!existingReport) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
    }

    // Strict State Machine Rules
    const validTransitions: Record<string, string[]> = {
      SUBMITTED: ['ACKNOWLEDGED', 'REJECTED'],
      ACKNOWLEDGED: ['ASSIGNED', 'REJECTED'],
      ASSIGNED: ['IN_PROGRESS', 'REJECTED'],
      IN_PROGRESS: ['RESOLUTION_SUBMITTED', 'REJECTED'],
      RESOLUTION_SUBMITTED: ['VERIFICATION_PENDING', 'VERIFIED', 'REOPENED', 'REJECTED'],
      VERIFICATION_PENDING: ['VERIFIED', 'REOPENED', 'REJECTED'],
      VERIFIED: ['REOPENED'],
      REOPENED: ['ASSIGNED', 'IN_PROGRESS', 'REJECTED'],
      REJECTED: ['SUBMITTED', 'ACKNOWLEDGED']
    };

    if (status && status !== existingReport.status) {
      const allowedNext = validTransitions[existingReport.status] || [];
      if (!allowedNext.includes(status)) {
        return NextResponse.json({
          success: false,
          error: `Invalid status transition from ${existingReport.status} to ${status}. Allowed next steps: ${allowedNext.join(', ')}`
        }, { status: 400 });
      }
    }

    const updatedData: any = {
      updatedAt: new Date()
    };

    if (status) {
      updatedData.status = status;
      if (status === 'RESOLUTION_SUBMITTED') {
        updatedData.verificationStatus = 'PENDING';
      }
    }

    const updatedReport = await db.report.update({
      where: { id: existingReport.id },
      data: updatedData,
      include: { category: true, bmcWard: true }
    });

    let locationMismatch = false;
    let distanceMeters: number | null = null;
    let mismatchNotice = '';

    if (resolutionLatitude != null && resolutionLongitude != null) {
      const dist = calculateDistanceMeters(
        existingReport.latitude,
        existingReport.longitude,
        parseFloat(resolutionLatitude),
        parseFloat(resolutionLongitude)
      );
      distanceMeters = Math.round(dist);
      if (dist > 200) {
        locationMismatch = true;
        mismatchNotice = ` ⚠️ Location Mismatch Warning: Resolution logged ${distanceMeters >= 1000 ? (distanceMeters/1000).toFixed(1) + 'km' : distanceMeters + 'm'} away from reported issue site.`;
      }
    }

    // Add Timeline Event
    await db.timelineEvent.create({
      data: {
        reportId: existingReport.id,
        eventType: status || 'UPDATED',
        actorType: actorRole || 'ADMIN',
        description: (actionDescription || `Status changed from ${existingReport.status} to ${status}`) + mismatchNotice
      }
    });

    // Add Resolution Evidence if provided
    if (resolutionAfterImage) {
      await db.resolutionEvidence.create({
        data: {
          reportId: existingReport.id,
          beforeImagePath: existingReport.photos[0]?.storagePath || null,
          afterImagePath: resolutionAfterImage,
          description: (resolutionNotes || 'Cleanliness resolution work completed by municipal team.') + mismatchNotice,
          actorName: actorName || 'Ward Officer',
          actorRole: actorRole || 'WARD_OPERATOR',
          latitude: resolutionLatitude ? parseFloat(resolutionLatitude) : null,
          longitude: resolutionLongitude ? parseFloat(resolutionLongitude) : null,
          distanceMeters,
          locationMismatch
        }
      });
    }

    // Log to Audit Trail
    await db.auditLog.create({
      data: {
        actorName: actorName || 'Authority User',
        role: actorRole || 'AUTHORITY_ADMIN',
        action: `STATUS_CHANGE_TO_${status}`,
        entity: 'Report',
        entityId: existingReport.id,
        beforeState: JSON.stringify({ status: existingReport.status }),
        afterState: JSON.stringify({ status })
      }
    });

    return NextResponse.json({ success: true, data: updatedReport });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
