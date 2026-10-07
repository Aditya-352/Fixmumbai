import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { isResolved, rating, comments, reopenEvidencePhoto } = body;

    const report = await db.report.findFirst({
      where: { OR: [{ id: params.id }, { publicReportId: params.id }] }
    });

    if (!report) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
    }

    // 1. Record Citizen Verification
    const verification = await db.citizenVerification.create({
      data: {
        reportId: report.id,
        isResolved: Boolean(isResolved),
        rating: rating ? parseInt(rating) : null,
        comments: comments || null,
        evidencePhotoPath: reopenEvidencePhoto || null
      }
    });

    const newStatus = isResolved ? 'VERIFIED' : 'REOPENED';
    const newVerificationStatus = isResolved ? 'VERIFIED_BY_CITIZEN' : 'REOPENED_BY_CITIZEN';

    // 2. Update Report Status
    const updatedReport = await db.report.update({
      where: { id: report.id },
      data: {
        status: newStatus,
        verificationStatus: newVerificationStatus,
        verifiedAt: isResolved ? new Date() : null,
        resolvedAt: isResolved ? (report.resolvedAt || new Date()) : null
      }
    });

    // 3. Create Timeline Event
    await db.timelineEvent.create({
      data: {
        reportId: report.id,
        eventType: isResolved ? 'CITIZEN_VERIFIED' : 'REOPENED',
        actorType: 'CITIZEN',
        description: isResolved
          ? `Citizen confirmed resolution. ${rating ? `Rating: ${rating}/5 stars.` : ''} ${comments ? `Comments: "${comments}"` : ''}`
          : `Citizen reported issue is NOT yet resolved: "${comments || 'Requires further action.'}"`
      }
    });

    return NextResponse.json({ success: true, data: updatedReport, verification });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
