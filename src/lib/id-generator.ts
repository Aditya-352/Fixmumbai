/**
 * Generates human-friendly, sequential report IDs like MUM-000182
 */
export function generatePublicReportId(sequenceNumber: number): string {
  const padded = sequenceNumber.toString().padStart(6, '0');
  return `MUM-${padded}`;
}
