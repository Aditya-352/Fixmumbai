import wardsData from '@/data/mumbai-wards.json';
import acsData from '@/data/mumbai-acs.json';
import pcsData from '@/data/mumbai-pcs.json';
import mumbaiPlaces from '@/data/mumbai-places.json';

export interface WardGisInfo {
  wardCode: string;
  wardName: string;
  municipalBody: string;
  regionZone: string;
  centerLatitude: number;
  centerLongitude: number;
}

export interface AcGisInfo {
  acNumber: number;
  acName: string;
  district: string;
  pcNumber: number;
  representative: string;
  party: string;
}

export interface GeographicMappingResult {
  locality: string;
  wardCode: string;
  wardName: string;
  acNumber: number;
  acName: string;
  pcNumber: number;
  pcName: string;
  representative: string;
  party: string;
  confidence: 'HIGH' | 'MEDIUM' | 'APPROXIMATE';
  isWithinMumbai: boolean;
}

/**
 * Geographic bounding box for Brihanmumbai Municipal Corporation (BMC) boundaries.
 */
export const MUMBAI_GEOFENCE = {
  minLat: 18.8800,
  maxLat: 19.3000,
  minLng: 72.7500,
  maxLng: 73.0000,
};

/**
 * Checks if coordinates fall within Mumbai's municipal boundaries.
 */
export function isLocationInMumbai(lat: number, lng: number): boolean {
  return (
    lat >= MUMBAI_GEOFENCE.minLat &&
    lat <= MUMBAI_GEOFENCE.maxLat &&
    lng >= MUMBAI_GEOFENCE.minLng &&
    lng <= MUMBAI_GEOFENCE.maxLng
  );
}

export interface MumbaiPlaceItem {
  name: string;
  wardCode: string;
  lat: number;
  lng: number;
  region: string;
}

/**
 * Search places within Mumbai for instant autocomplete & detail filling.
 */
export function searchMumbaiPlaces(query: string): MumbaiPlaceItem[] {
  if (!query || query.trim().length === 0) return mumbaiPlaces.slice(0, 8);
  const q = query.toLowerCase().trim();
  return mumbaiPlaces
    .filter(p => p.name.toLowerCase().includes(q) || p.wardCode.toLowerCase().includes(q) || p.region.toLowerCase().includes(q))
    .slice(0, 10);
}

function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Maps GPS coordinates (lat, lng) to closest Ward, Assembly Constituency, and Parliamentary Constituency.
 */
export function mapCoordinatesToCivicBoundary(lat: number, lng: number): GeographicMappingResult {
  // 1. Find matching or closest Ward
  let matchedWard = wardsData.find(w => {
    const [minLng, minLat, maxLng, maxLat] = w.bbox;
    return lng >= minLng && lng <= maxLng && lat >= minLat && lat <= maxLat;
  });

  if (!matchedWard) {
    // Fallback: find nearest ward center
    let minDistance = Infinity;
    let nearest = wardsData[0];
    for (const w of wardsData) {
      const dist = calculateDistanceKm(lat, lng, w.centerLatitude, w.centerLongitude);
      if (dist < minDistance) {
        minDistance = dist;
        nearest = w;
      }
    }
    matchedWard = nearest;
  }

  // 2. Find matching or closest Assembly Constituency
  let matchedAc = acsData.find(a => {
    const [minLng, minLat, maxLng, maxLat] = a.bbox;
    return lng >= minLng && lng <= maxLng && lat >= minLat && lat <= maxLat;
  });

  if (!matchedAc) {
    let minDistance = Infinity;
    let nearest = acsData[0];
    for (const a of acsData) {
      const dist = calculateDistanceKm(lat, lng, a.centerLatitude, a.centerLongitude);
      if (dist < minDistance) {
        minDistance = dist;
        nearest = a;
      }
    }
    matchedAc = nearest;
  }

  // 3. Find Parliamentary Constituency from AC
  const matchedPc = pcsData.find(p => p.pcNumber === matchedAc.pcNumber) || pcsData[0];

  // Derive human-readable locality string
  const locality = `${matchedAc.acName}, Ward ${matchedWard.wardCode}`;

  return {
    locality,
    wardCode: matchedWard.wardCode,
    wardName: matchedWard.wardName,
    acNumber: matchedAc.acNumber,
    acName: matchedAc.acName,
    pcNumber: matchedPc.pcNumber,
    pcName: matchedPc.pcName,
    representative: matchedAc.representative,
    party: matchedAc.party,
    confidence: 'HIGH',
    isWithinMumbai: isLocationInMumbai(lat, lng)
  };
}
