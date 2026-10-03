import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { isResolved, rating, comments, reopenEvidencePhoto, citizenLatitude, citizenLongitude, distanceMeters } = body;

    const report = await db.report.findFirst({
      where: { OR: [{ id: params.id }, { publicReportId: params.id }] }
    });

    if (!report) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
    }

    // 1. Record Citizen Verification with GPS metadata
    const verification = await db.citizenVerification.create({
      data: {
        reportId: report.id,
        isResolved: Boolean(isResolved),
        rating: rating ? parseInt(rating) : null,
        comments: comments || null,
        evidencePhotoPath: reopenEvidencePhoto || null,
        citizenLatitude: citizenLatitude != null ? parseFloat(citizenLatitude) : null,
        citizenLongitude: citizenLongitude != null ? parseFloat(citizenLongitude) : null,
        distanceMeters: distanceMeters != null ? parseFloat(distanceMeters) : null
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

    // Distance summary string
    const distText = distanceMeters != null
      ? ` GPS distance: ${distanceMeters <= 300 ? `${distanceMeters}m from site (Verified On-Site)` : `${distanceMeters >= 1000 ? (distanceMeters / 1000).toFixed(1) + 'km' : distanceMeters + 'm'} from site`}.`
      : '';

    // 3. Create Timeline Event
    await db.timelineEvent.create({
      data: {
        reportId: report.id,
        eventType: isResolved ? 'CITIZEN_VERIFIED' : 'REOPENED',
        actorType: 'CITIZEN',
        description: isResolved
          ? `Citizen confirmed resolution ground verification.${distText} ${rating ? `Rating: ${rating}/5 stars.` : ''} ${comments ? `Comments: "${comments}"` : ''}`
          : `Citizen reported issue is NOT yet resolved.${distText} Comments: "${comments || 'Requires further action.'}"`
      }
    });

    return NextResponse.json({ success: true, data: updatedReport, verification });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
