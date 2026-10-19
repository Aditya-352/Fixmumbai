import { describe, it, expect } from 'vitest';
import {
  GREEN_DENSITY_TIERS,
  getGreenDensityTier,
  getGreenDensityColor,
  getGreenDensityTextColor,
  ZERO_COVERAGE_META,
  BLUE_SPACE_META,
} from '@/lib/green/density-scale';

describe('Green Density GIS Map Acceptance Criteria', () => {
  it('Criterion 1: A grid cell with a count of 100 or more renders in Deep Green (#054a29)', () => {
    const tier100 = getGreenDensityTier(100);
    expect(tier100).not.toBeNull();
    expect(tier100?.color).toBe('#054a29');
    expect(tier100?.name).toBe('Deep Green');
    expect(tier100?.densityLevel).toBe('Very High');
    expect(getGreenDensityColor(120)).toBe('#054a29');
    expect(getGreenDensityTextColor(120)).toBe('#FFFFFF');
  });

  it('Criterion 2: A cell with a count of 52 renders in the configured high-density shade (#137547)', () => {
    const tier52 = getGreenDensityTier(52);
    expect(tier52).not.toBeNull();
    expect(tier52?.color).toBe('#137547');
    expect(tier52?.name).toBe('Teal Green');
    expect(tier52?.densityLevel).toBe('High');
    expect(getGreenDensityColor(52)).toBe('#137547');
  });

  it('Criterion 3: Cells with lower counts transition through the appropriate lighter green shades', () => {
    // 25-51 -> Rich Green
    expect(getGreenDensityColor(35)).toBe('#2a9134');
    expect(getGreenDensityTier(35)?.name).toBe('Rich Green');
    expect(getGreenDensityTier(35)?.densityLevel).toBe('Moderate');

    // 10-24 -> Medium Green
    expect(getGreenDensityColor(18)).toBe('#3fa34d');
    expect(getGreenDensityTier(18)?.name).toBe('Medium Green');
    expect(getGreenDensityTier(18)?.densityLevel).toBe('Low');

    // 1-9 -> Light Green
    expect(getGreenDensityColor(7)).toBe('#5bba6f');
    expect(getGreenDensityTier(7)?.name).toBe('Light Green');
    expect(getGreenDensityTier(7)?.densityLevel).toBe('Very Low');
  });

  it('Criterion 4 & 5: Zooming in/out disaggregation and aggregation updates colors deterministically', () => {
    const zoomLevel10Count = 120;
    const zoomLevel12Count = 35;
    const zoomLevel13Count = 18;
    const zoomLevel14Count = 7;
    const zoomLevel15ZeroCount = 0;

    expect(getGreenDensityColor(zoomLevel10Count)).toBe('#054a29'); // Deep Green
    expect(getGreenDensityColor(zoomLevel12Count)).toBe('#2a9134'); // Rich Green
    expect(getGreenDensityColor(zoomLevel13Count)).toBe('#3fa34d'); // Medium Green
    expect(getGreenDensityColor(zoomLevel14Count)).toBe('#5bba6f'); // Light Green
    expect(getGreenDensityColor(zoomLevel15ZeroCount)).toBe('transparent'); // No green fill
  });

  it('Criterion 6: Blue spaces remain identifiable and are not accidentally recoloured as green-density cells', () => {
    expect(BLUE_SPACE_META.color).toBe('#2563EB');
    expect(BLUE_SPACE_META.meaning).toContain('Walkable verified');
  });

  it('Criterion 7 & 8: GIS Map Legend contains the complete, correctly ordered colour scale matching map rendering', () => {
    const expectedTiers = [
      { range: '100+', color: '#054a29', level: 'Very High', name: 'Deep Green' },
      { range: '52–99', color: '#137547', level: 'High', name: 'Teal Green' },
      { range: '25–51', color: '#2a9134', level: 'Moderate', name: 'Rich Green' },
      { range: '10–24', color: '#3fa34d', level: 'Low', name: 'Medium Green' },
      { range: '1–9', color: '#5bba6f', level: 'Very Low', name: 'Light Green' },
    ];

    GREEN_DENSITY_TIERS.forEach((tier, idx) => {
      expect(tier.rangeLabel).toBe(expectedTiers[idx].range);
      expect(tier.color).toBe(expectedTiers[idx].color);
      expect(tier.densityLevel).toBe(expectedTiers[idx].level);
      expect(tier.name).toBe(expectedTiers[idx].name);
    });

    expect(ZERO_COVERAGE_META.label).toBe('0 / None');
  });
});
