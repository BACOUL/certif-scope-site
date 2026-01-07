export type CarbonInput = {
  sector: "services" | "retail" | "construction" | "manufacturing" | "transport";
  revenue: number;
  fuelSpent: number;
  electricitySpent: number;
};

/**
 * Carbon estimation engine — v3
 *
 * Unified model used by:
 * - front-end preview
 * - backend attestation generation
 * - PDF rendering
 *
 * Includes methodology versioning and coefficient transparency.
 */
export function calculateCarbonFootprint(input: CarbonInput) {

  const revenue = Math.max(0, Number(input.revenue) || 0);
  const fuel = Math.max(0, Number(input.fuelSpent) || 0);
  const electricity = Math.max(0, Number(input.electricitySpent) || 0);

  // Normalized coefficient table (exposed in attestation)
  const coefficients = {
    scope1_fuel: 0.0002,
    scope2_electricity: 0.0001,
    scope3_revenue: 0.00005
  };

  // Emissions (raw)
  const rawScope1 = fuel * coefficients.scope1_fuel;
  const rawScope2 = electricity * coefficients.scope2_electricity;
  const rawScope3 = revenue * coefficients.scope3_revenue;

  const totalRaw = rawScope1 + rawScope2 + rawScope3;

  // Rounded outputs
  const scope1 = Number(rawScope1.toFixed(2));
  const scope2 = Number(rawScope2.toFixed(2));
  const scope3 = Number(rawScope3.toFixed(2));
  const total = Number(totalRaw.toFixed(2));

  // Consistency warning for unrealistic inputs
  const warnings: string[] = [];

  if (revenue > 1000000 && (fuel === 0 || electricity === 0)) {
    warnings.push(
      "Declared revenue is very high while energy expenses are zero — results may be underestimated."
    );
  }

  return {
    scope1,
    scope2,
    scope3,
    total,
    methodology_version: "v3",
    coefficients,
    warnings
  };
}
