import { db } from './db';

function haversineDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000; // meters
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export async function detectAndLinkDuplicate(
  reportId: string,
  categoryId: string,
  lat: number,
  lng: number
): Promise<{ isDuplicate: boolean; duplicateGroupId: string | null }> {
  try {
    // Find active open reports within last 48 hours in the same category
    const cutoffTime = new Date(Date.now() - 48 * 60 * 60 * 1000);
    const candidateReports = await db.report.findMany({
      where: {
        id: { not: reportId },
        categoryId: categoryId,
        createdAt: { gte: cutoffTime },
        status: { notIn: ['VERIFIED', 'REJECTED'] }
      },
      select: {
        id: true,
        latitude: true,
        longitude: true,
        duplicateGroupId: true
      }
    });

    for (const candidate of candidateReports) {
      const dist = haversineDistanceMeters(lat, lng, candidate.latitude, candidate.longitude);
      if (dist <= 50) { // within 50 meters
        let groupId = candidate.duplicateGroupId;

        if (!groupId) {
          // Create new duplicate group
          const newGroup = await db.duplicateGroup.create({
            data: {
              primaryReportId: candidate.id,
              score: 0.90
            }
          });
          groupId = newGroup.id;

          // Update primary candidate report
          await db.report.update({
            where: { id: candidate.id },
            data: { duplicateGroupId: groupId }
          });
        }

        // Link current report
        await db.report.update({
          where: { id: reportId },
          data: { duplicateGroupId: groupId }
        });

        return { isDuplicate: true, duplicateGroupId: groupId };
      }
    }
  } catch (error) {
    console.error('Error during duplicate detection:', error);
  }

  return { isDuplicate: false, duplicateGroupId: null };
}
