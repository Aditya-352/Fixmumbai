import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from '@/lib/auth';

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
    const session = await getServerSession();

    if (!session || !['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(session.role)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    const body = await req.json();
    const {
      status,
      actionDescription,
      resolutionAfterImage,
      resolutionNotes
    } = body;

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
        actorType: session.role,
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
          actorName: session.name,
          actorRole: session.role
        }
      });
    }

    // Log to Audit Trail
    await db.auditLog.create({
      data: {
        actorId: session.id,
        actorName: session.name,
        role: session.role,
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();

    if (!session || !['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(session.role)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const existingReport = await db.report.findFirst({
      where: {
        OR: [
          { id: params.id },
          { publicReportId: params.id }
        ]
      }
    });

    if (!existingReport) {
      return NextResponse.json(
        { success: false, error: 'Report not found' },
        { status: 404 }
      );
    }

    await db.auditLog.create({
      data: {
        actorId: session.id,
        actorName: session.name,
        role: session.role,
        action: 'DELETE_REPORT',
        entity: 'Report',
        entityId: existingReport.id,
        beforeState: JSON.stringify({
          publicReportId: existingReport.publicReportId,
          status: existingReport.status
        }),
        afterState: JSON.stringify({
          deleted: true
        })
      }
    });

    await db.report.delete({
      where: {
        id: existingReport.id
      }
    });

    return NextResponse.json({
      success: true,
      message: `Report ${existingReport.publicReportId} deleted successfully`
    });
  } catch (error: any) {
    console.error('Delete report error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to delete report'
      },
      { status: 500 }
    );
  }
}