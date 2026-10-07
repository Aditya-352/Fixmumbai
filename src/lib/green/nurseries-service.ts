/**
 * BMC Wardwise Nurseries Service.
 *
 * Source: "GREENING MUMBAI — Citizen's Handbook for Greening Initiatives: From Balcony Gardens to Large Scale Plots"
 * Annexure, printed pages 82–83.
 *
 * Attributes all 27 nursery records with exact source address, geocodes, confidence,
 * ward categorization, verification status, and plant species.
 */

import rawNurseries from '@/data/bmc-nurseries.json';

export interface BmcNurseryRecord {
  id: string;
  ward: string;
  wardName: string;
  name: string;
  sourceAddress: string;
  latitude: number;
  longitude: number;
  sourceDocument: string;
  sourcePage: string;
  sourceAttribution: string;
  geocodingSource: string;
  geocodingConfidence: 'VERY_HIGH' | 'HIGH' | 'MEDIUM' | 'LOW';
  verificationStatus: 'VERIFIED' | 'LOCATION_NEEDS_VERIFICATION';
  lastVerified: string;
  nurseryType: string;
  speciesAvailable: string[];
  operatingHours: string;
  distanceM?: number;
}

export const BMC_NURSERIES: BmcNurseryRecord[] = rawNurseries as BmcNurseryRecord[];

/**
 * Returns all 27 BMC Wardwise Nurseries, optionally filtered by ward or search text,
 * and sorted by distance from the specified centre coordinates.
 */
export function getBmcNurseries(opts?: {
  ward?: string;
  search?: string;
  userLat?: number;
  userLon?: number;
}): BmcNurseryRecord[] {
  let list = [...BMC_NURSERIES];

  if (opts?.ward && opts.ward !== 'ALL') {
    const cleanWard = opts.ward.trim().toUpperCase();
    list = list.filter((n) => n.ward.toUpperCase() === cleanWard);
  }

  if (opts?.search && opts.search.trim().length > 0) {
    const query = opts.search.trim().toLowerCase();
    list = list.filter(
      (n) =>
        n.name.toLowerCase().includes(query) ||
        n.ward.toLowerCase().includes(query) ||
        n.sourceAddress.toLowerCase().includes(query) ||
        n.wardName.toLowerCase().includes(query) ||
        n.speciesAvailable.some((s) => s.toLowerCase().includes(query))
    );
  }

  if (opts?.userLat !== undefined && opts?.userLon !== undefined) {
    const R = 6371000;
    list = list.map((n) => {
      const dLat = ((n.latitude - opts.userLat!) * Math.PI) / 180;
      const dLon = ((n.longitude - opts.userLon!) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((opts.userLat! * Math.PI) / 180) *
          Math.cos((n.latitude * Math.PI) / 180) *
          Math.sin(dLon / 2) ** 2;
      const distM = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return { ...n, distanceM: Math.round(distM) };
    });

    list.sort((a, b) => (a.distanceM ?? 0) - (b.distanceM ?? 0));
  }

  return list;
}

/**
 * Get distinct list of BMC wards with nursery presence
 */
export function getBmcNurseryWards(): string[] {
  const wards = Array.from(new Set(BMC_NURSERIES.map((n) => n.ward)));
  return wards.sort();
}
