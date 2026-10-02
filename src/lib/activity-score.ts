export interface HotspotCalculationInput {
  totalReports: number;
  openReports: number;
  recentReports24h: number;
  averageUnresolvedDays: number;
  distinctReporters: number;
}

/**
 * Calculates a transparent, platform-generated Platform Activity Score (0 - 100)
 * Methodology:
 * - Frequency Score (weight 35%): Total count of reports in cluster
 * - Recency Score (weight 25%): Reports submitted in last 24 hours
 * - Unresolved Duration Score (weight 25%): Days unresolved
 * - Reporter Diversity Score (weight 15%): Unique reporters
 */
export function calculatePlatformActivityScore(input: HotspotCalculationInput): number {
  const { totalReports, recentReports24h, averageUnresolvedDays, distinctReporters } = input;

  const freqComponent = Math.min(totalReports * 8, 35);
  const recencyComponent = Math.min(recentReports24h * 12.5, 25);
  const durationComponent = Math.min(averageUnresolvedDays * 5, 25);
  const reporterComponent = Math.min(distinctReporters * 5, 15);

  const rawScore = freqComponent + recencyComponent + durationComponent + reporterComponent;
  return Math.min(Math.round(rawScore), 100);
}
