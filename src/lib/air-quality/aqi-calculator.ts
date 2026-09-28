import type { AqiCategory, CalculatedAqi, PollutantId, PollutantReading } from './types';

/**
 * CPCB National Air Quality Index breakpoints, per the CPCB "National Air
 * Quality Index" methodology (2014). Sub-indices are linearly interpolated
 * within a pollutant's concentration breakpoint band, and the overall AQI is
 * the MAXIMUM of the available sub-indices (the "worst pollutant governs"
 * rule) — CPCB does not average sub-indices across pollutants.
 *
 * Units: PM2.5, PM10, NO2, NH3, SO2, OZONE are µg/m³; CO is mg/m³. CPCB's
 * public real-time feed does not carry a units field per record, so these
 * are the standard units CPCB itself reports in and that this calculator
 * assumes for CPCB input. OpenAQ input is converted to these units by the
 * normalizer before being passed in here.
 */
interface Breakpoint {
  concLo: number;
  concHi: number;
  indexLo: number;
  indexHi: number;
}

const BREAKPOINTS: Record<PollutantId, Breakpoint[]> = {
  'PM2.5': [
    { concLo: 0, concHi: 30, indexLo: 0, indexHi: 50 },
    { concLo: 30, concHi: 60, indexLo: 51, indexHi: 100 },
    { concLo: 60, concHi: 90, indexLo: 101, indexHi: 200 },
    { concLo: 90, concHi: 120, indexLo: 201, indexHi: 300 },
    { concLo: 120, concHi: 250, indexLo: 301, indexHi: 400 },
    { concLo: 250, concHi: 500, indexLo: 401, indexHi: 500 },
  ],
  PM10: [
    { concLo: 0, concHi: 50, indexLo: 0, indexHi: 50 },
    { concLo: 50, concHi: 100, indexLo: 51, indexHi: 100 },
    { concLo: 100, concHi: 250, indexLo: 101, indexHi: 200 },
    { concLo: 250, concHi: 350, indexLo: 201, indexHi: 300 },
    { concLo: 350, concHi: 430, indexLo: 301, indexHi: 400 },
    { concLo: 430, concHi: 600, indexLo: 401, indexHi: 500 },
  ],
  NO2: [
    { concLo: 0, concHi: 40, indexLo: 0, indexHi: 50 },
    { concLo: 40, concHi: 80, indexLo: 51, indexHi: 100 },
    { concLo: 80, concHi: 180, indexLo: 101, indexHi: 200 },
    { concLo: 180, concHi: 280, indexLo: 201, indexHi: 300 },
    { concLo: 280, concHi: 400, indexLo: 301, indexHi: 400 },
    { concLo: 400, concHi: 600, indexLo: 401, indexHi: 500 },
  ],
  SO2: [
    { concLo: 0, concHi: 40, indexLo: 0, indexHi: 50 },
    { concLo: 40, concHi: 80, indexLo: 51, indexHi: 100 },
    { concLo: 80, concHi: 380, indexLo: 101, indexHi: 200 },
    { concLo: 380, concHi: 800, indexLo: 201, indexHi: 300 },
    { concLo: 800, concHi: 1600, indexLo: 301, indexHi: 400 },
    { concLo: 1600, concHi: 2400, indexLo: 401, indexHi: 500 },
  ],
  NH3: [
    { concLo: 0, concHi: 200, indexLo: 0, indexHi: 50 },
    { concLo: 200, concHi: 400, indexLo: 51, indexHi: 100 },
    { concLo: 400, concHi: 800, indexLo: 101, indexHi: 200 },
    { concLo: 800, concHi: 1200, indexLo: 201, indexHi: 300 },
    { concLo: 1200, concHi: 1800, indexLo: 301, indexHi: 400 },
    { concLo: 1800, concHi: 2400, indexLo: 401, indexHi: 500 },
  ],
  CO: [
    { concLo: 0, concHi: 1.0, indexLo: 0, indexHi: 50 },
    { concLo: 1.0, concHi: 2.0, indexLo: 51, indexHi: 100 },
    { concLo: 2.0, concHi: 10, indexLo: 101, indexHi: 200 },
    { concLo: 10, concHi: 17, indexLo: 201, indexHi: 300 },
    { concLo: 17, concHi: 34, indexLo: 301, indexHi: 400 },
    { concLo: 34, concHi: 50, indexLo: 401, indexHi: 500 },
  ],
  OZONE: [
    { concLo: 0, concHi: 50, indexLo: 0, indexHi: 50 },
    { concLo: 50, concHi: 100, indexLo: 51, indexHi: 100 },
    { concLo: 100, concHi: 168, indexLo: 101, indexHi: 200 },
    { concLo: 168, concHi: 208, indexLo: 201, indexHi: 300 },
    { concLo: 208, concHi: 748, indexLo: 301, indexHi: 400 },
    { concLo: 748, concHi: 1000, indexLo: 401, indexHi: 500 },
  ],
};

/** Pollutants CPCB considers mandatory context for a "valid" AQI reading. */
const MIN_POLLUTANTS_FOR_VALID_AQI = 3;

function subIndex(pollutantId: PollutantId, concentration: number): number | null {
  const bands = BREAKPOINTS[pollutantId];
  const clamped = Math.max(0, concentration);

  for (const band of bands) {
    if (clamped >= band.concLo && clamped <= band.concHi) {
      const { concLo, concHi, indexLo, indexHi } = band;
      if (concHi === concLo) return indexLo;
      return Math.round(((indexHi - indexLo) / (concHi - concLo)) * (clamped - concLo) + indexLo);
    }
  }

  // Above the top band: extrapolate off the last band rather than dropping the reading.
  const last = bands[bands.length - 1];
  if (clamped > last.concHi) {
    const { concLo, concHi, indexLo, indexHi } = last;
    return Math.round(((indexHi - indexLo) / (concHi - concLo)) * (clamped - concLo) + indexLo);
  }
  return null;
}

export function categoryForAqi(value: number): AqiCategory {
  if (value <= 50) return 'Good';
  if (value <= 100) return 'Satisfactory';
  if (value <= 200) return 'Moderate';
  if (value <= 300) return 'Poor';
  if (value <= 400) return 'Very Poor';
  return 'Severe';
}

/**
 * Computes the overall CPCB-style AQI from a set of pollutant readings at
 * one station. Returns null when there isn't at least one usable pollutant
 * concentration — never fabricates a number from nothing.
 */
export function calculateAqi(
  pollutants: Partial<Record<PollutantId, PollutantReading>>
): CalculatedAqi | null {
  let worst: { pollutantId: PollutantId; index: number } | null = null;
  const used: PollutantId[] = [];

  for (const [id, reading] of Object.entries(pollutants) as [PollutantId, PollutantReading][]) {
    if (!reading || reading.avg === null || Number.isNaN(reading.avg)) continue;
    const idx = subIndex(id, reading.avg);
    if (idx === null) continue;
    used.push(id);
    if (!worst || idx > worst.index) {
      worst = { pollutantId: id, index: idx };
    }
  }

  if (!worst) return null;

  return {
    value: worst.index,
    category: categoryForAqi(worst.index),
    dominantPollutant: worst.pollutantId,
    pollutantsUsed: used,
    method: 'CPCB_NATIONAL_AQI_FORMULA',
  };
}

export function hasMinimumPollutantsForValidAqi(pollutantsUsed: PollutantId[]): boolean {
  const hasParticulate = pollutantsUsed.includes('PM2.5') || pollutantsUsed.includes('PM10');
  return hasParticulate && pollutantsUsed.length >= MIN_POLLUTANTS_FOR_VALID_AQI;
}
