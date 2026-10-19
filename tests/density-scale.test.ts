import { describe, it, expect } from 'vitest';
import {
  GREEN_DENSITY_TIERS,
  getGreenDensityTier,
  getGreenDensityColor,
  getGreenDensityTextColor,
  ZERO_COVERAGE_META,
  BLUE_SPACE_META,
} from '@/lib/green/density-scale';

describe('Green Density GIS Colour Grading', () => {
  it('defines exactly five green density tiers in descending order', () => {
    expect(GREEN_DENSITY_TIERS).toHaveLength(5);
    expect(GREEN_DENSITY_TIERS[0].color).toBe('#054a29'); // Deep Green
    expect(GREEN_DENSITY_TIERS[1].color).toBe('#137547'); // Teal Green
    expect(GREEN_DENSITY_TIERS[2].color).toBe('#2a9134'); // Rich Green
    expect(GREEN_DENSITY_TIERS[3].color).toBe('#3fa34d'); // Medium Green
    expect(GREEN_DENSITY_TIERS[4].color).toBe('#5bba6f'); // Light Green
  });

  it('correctly classifies count 100+ as Deep Green (#054a29)', () => {
    expect(getGreenDensityTier(100)?.color).toBe('#054a29');
    expect(getGreenDensityTier(150)?.color).toBe('#054a29');
    expect(getGreenDensityTier(1000)?.color).toBe('#054a29');
    expect(getGreenDensityColor(120)).toBe('#054a29');
    expect(getGreenDensityTextColor(120)).toBe('#FFFFFF');
  });

  it('correctly classifies count 52–99 as Teal Green (#137547)', () => {
    expect(getGreenDensityTier(52)?.color).toBe('#137547');
    expect(getGreenDensityTier(75)?.color).toBe('#137547');
    expect(getGreenDensityTier(99)?.color).toBe('#137547');
    expect(getGreenDensityColor(52)).toBe('#137547');
    expect(getGreenDensityTextColor(52)).toBe('#FFFFFF');
  });

  it('correctly classifies count 25–51 as Rich Green (#2a9134)', () => {
    expect(getGreenDensityTier(25)?.color).toBe('#2a9134');
    expect(getGreenDensityTier(35)?.color).toBe('#2a9134');
    expect(getGreenDensityTier(51)?.color).toBe('#2a9134');
    expect(getGreenDensityColor(35)).toBe('#2a9134');
    expect(getGreenDensityTextColor(35)).toBe('#FFFFFF');
  });

  it('correctly classifies count 10–24 as Medium Green (#3fa34d)', () => {
    expect(getGreenDensityTier(10)?.color).toBe('#3fa34d');
    expect(getGreenDensityTier(18)?.color).toBe('#3fa34d');
    expect(getGreenDensityTier(24)?.color).toBe('#3fa34d');
    expect(getGreenDensityColor(18)).toBe('#3fa34d');
    expect(getGreenDensityTextColor(18)).toBe('#FFFFFF');
  });

  it('correctly classifies count 1–9 as Light Green (#5bba6f)', () => {
    expect(getGreenDensityTier(1)?.color).toBe('#5bba6f');
    expect(getGreenDensityTier(5)?.color).toBe('#5bba6f');
    expect(getGreenDensityTier(9)?.color).toBe('#5bba6f');
    expect(getGreenDensityColor(1)).toBe('#5bba6f');
    expect(getGreenDensityTextColor(1)).toBe('#FFFFFF');
  });

  it('returns null/transparent for count 0 or negative (no green coverage)', () => {
    expect(getGreenDensityTier(0)).toBeNull();
    expect(getGreenDensityTier(-5)).toBeNull();
    expect(getGreenDensityColor(0)).toBe('transparent');
  });

  it('provides metadata for zero coverage and blue space preservation', () => {
    expect(ZERO_COVERAGE_META.meaning).toBe('No recorded green density');
    expect(BLUE_SPACE_META.color).toBe('#2563EB');
  });
});
