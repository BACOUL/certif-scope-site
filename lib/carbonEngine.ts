export type CarbonInput = {
  sector: "services" | "retail" | "construction" | "manufacturing" | "transport";
  revenue: number;
  fuelSpent: number;
  electricitySpent: number;
};

export function calculateCarbonFootprint(input: CarbonInput) {
  const scope1 = input.fuelSpent * 0.0002;       // fuel emissions
  const scope2 = input.electricitySpent * 0.0001; // electricity emissions
  const scope3 = input.revenue * 0.00005;         // revenue-based estimate

  return {
    scope1,
    scope2,
    scope3,
    total: scope1 + scope2 + scope3
  };
}
