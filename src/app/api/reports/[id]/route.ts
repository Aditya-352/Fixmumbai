import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

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
    const { status, actionDescription, actorName, actorRole, resolutionAfterImage, resolutionNotes } = body;

    const existingReport = await db.report.findFirst({
      where: { OR: [{ id: params.id }, { publicReportId: params.id }] },
      include: { photos: true }
    });

    if (!existingReport) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
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

    // Add Timeline Event
    await db.timelineEvent.create({
      data: {
        reportId: existingReport.id,
        eventType: status || 'UPDATED',
        actorType: actorRole || 'ADMIN',
        description: actionDescription || `Status changed from ${existingReport.status} to ${status}`
      }
    });

    // Add Resolution Evidence if provided
    if (resolutionAfterImage) {
      await db.resolutionEvidence.create({
        data: {
          reportId: existingReport.id,
          beforeImagePath: existingReport.photos[0]?.storagePath || null,
          afterImagePath: resolutionAfterImage,
          description: resolutionNotes || 'Cleanliness resolution work completed by municipal team.',
          actorName: actorName || 'Ward Officer',
          actorRole: actorRole || 'WARD_OPERATOR'
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
