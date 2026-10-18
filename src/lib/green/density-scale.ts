/**
 * Green Density GIS Colour Scale & Classification
 *
 * Ordered 5-tier density classification (dark → light):
 *  - 100+ : Deep Green    (#054a29) — Very high density
 *  - 52–99: Teal Green    (#137547) — High density
 *  - 25–51: Rich Green    (#2a9134) — Moderate density
 *  - 10–24: Medium Green  (#3fa34d) — Low density
 *  - 1–9  : Light Green   (#5bba6f) — Very low density
 *  - 0    : No green fill (transparent) — No recorded green density
 *
 * Single shared configuration for both the map markers/clusters and the GIS legend.
 */

export interface GreenDensityTier {
  id: string;
  min: number;
  max: number | null; // null for open-ended 100+
  rangeLabel: string;
  color: string;
  name: string;
  densityLevel: string; // 'Very High', 'High', 'Moderate', 'Low', 'Very Low'
  meaning: string;
  textColor: string; // Contrast text color inside badges
}

export const GREEN_DENSITY_TIERS: readonly GreenDensityTier[] = [
  {
    id: 'very-high',
    min: 100,
    max: null,
    rangeLabel: '100+',
    color: '#054a29',
    name: 'Deep Green',
    densityLevel: 'Very High',
    meaning: 'Very high density',
    textColor: '#FFFFFF',
  },
  {
    id: 'high',
    min: 52,
    max: 99,
    rangeLabel: '52–99',
    color: '#137547',
    name: 'Teal Green',
    densityLevel: 'High',
    meaning: 'High density',
    textColor: '#FFFFFF',
  },
  {
    id: 'moderate',
    min: 25,
    max: 51,
    rangeLabel: '25–51',
    color: '#2a9134',
    name: 'Rich Green',
    densityLevel: 'Moderate',
    meaning: 'Moderate density',
    textColor: '#FFFFFF',
  },
  {
    id: 'low',
    min: 10,
    max: 24,
    rangeLabel: '10–24',
    color: '#3fa34d',
    name: 'Medium Green',
    densityLevel: 'Low',
    meaning: 'Low density',
    textColor: '#FFFFFF',
  },
  {
    id: 'very-low',
    min: 1,
    max: 9,
    rangeLabel: '1–9',
    color: '#5bba6f',
    name: 'Light Green',
    densityLevel: 'Very Low',
    meaning: 'Very low density',
    textColor: '#FFFFFF',
  },
] as const;

/**
 * Return the density tier for a given count of green spaces in a grid cell.
 * Returns null if count <= 0 (no green coverage).
 */
export function getGreenDensityTier(count: number): GreenDensityTier | null {
  if (!Number.isFinite(count) || count <= 0) return null;
  if (count >= 100) return GREEN_DENSITY_TIERS[0];
  if (count >= 52) return GREEN_DENSITY_TIERS[1];
  if (count >= 25) return GREEN_DENSITY_TIERS[2];
  if (count >= 10) return GREEN_DENSITY_TIERS[3];
  return GREEN_DENSITY_TIERS[4]; // 1–9
}

/**
 * Return the hex color string for a given green density count.
 */
export function getGreenDensityColor(count: number): string {
  const tier = getGreenDensityTier(count);
  return tier ? tier.color : 'transparent';
}

/**
 * Return the high-contrast text color for a badge displaying this count.
 */
export function getGreenDensityTextColor(count: number): string {
  const tier = getGreenDensityTier(count);
  return tier ? tier.textColor : '#14231D';
}

/** Metadata for zero coverage / blue space styling */
export const ZERO_COVERAGE_META = {
  label: '0 / None',
  meaning: 'No recorded green density',
  description: 'No green fill; preserves blue-space and basemap styling',
  color: 'transparent',
  borderColor: '#94A3B8',
} as const;

export const BLUE_SPACE_META = {
  label: 'Blue Space / Walkable',
  meaning: 'Walkable verified park / route',
  description: 'Preserved blue marker for verified pedestrian access',
  color: '#2563EB',
} as const;
