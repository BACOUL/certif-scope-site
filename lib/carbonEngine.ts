/**
 * Certif-Scope – Carbon estimation engine
 *
 * This engine provides a standardized, spend-based estimation of greenhouse
 * gas emissions for SMEs, aligned with widely used methodological principles
 * (GHG Protocol – spend-based approach).
 *
 * IMPORTANT:
 * - Values are indicative.
 * - This is NOT a physical activity-based calculation.
 * - This does NOT replace a full carbon audit.
 */

/**
 * Emission factors
 * Units:
 * - sector factors: tCO₂e per € of revenue (order-of-magnitude estimates)
 * - fuel: kgCO₂e per liter
 * - electricity: kgCO₂e per kWh (EU average)
 */
export const EMISSION_FACTORS = {
  sectors: {
    services: 0.054,
    retail: 0.120,
    construction: 0.280,
    manufacturing: 0.450,
    transport: 0.610
  },

  energy: {
    fuel_kgco2_per_liter: 2.65,
    electricity_kgco2_per_kwh: 0.25
  },

  assumptions: {
    averageFuelPricePerLiterEUR: 1.7,
    averageElectricityPricePerKwhEUR: 0.22
  }
};

export interface CarbonInput {
  sector: keyof typeof EMISSION_FACTORS.sectors;
  revenue: number;           // € / year
  fuelSpent?: number;        // € / year
  electricitySpent?: number; // € / year
}

export interface CarbonResult {
  scope1: number; // tCO₂e
  scope2: number; // tCO₂e
  scope3: number; // tCO₂e
  total: number;  // tCO₂e
}

/**
 * Core calculation function
 */
export function calculateCarbonFootprint(
  data: CarbonInput
): CarbonResult {
  // ---- Scope 1 : Direct fuel combustion (estimated from spend) ----
  const fuelLiters =
    (data.fuelSpent || 0) /
    EMISSION_FACTORS.assumptions.averageFuelPricePerLiterEUR;

  const scope1Kg =
    fuelLiters *
    EMISSION_FACTORS.energy.fuel_kgco2_per_liter;

  const scope1 = scope1Kg / 1000; // kg → tons

  // ---- Scope 2 : Electricity consumption (estimated from spend) ----
  const electricityKwh =
    (data.electricitySpent || 0) /
    EMISSION_FACTORS.assumptions.averageElectricityPricePerKwhEUR;

  const scope2Kg =
    electricityKwh *
    EMISSION_FACTORS.energy.electricity_kgco2_per_kwh;

  const scope2 = scope2Kg / 1000; // kg → tons

  // ---- Scope 3 : Value chain (spend-based, revenue proxy) ----
  const sectorFactor =
    EMISSION_FACTORS.sectors[data.sector] ??
    EMISSION_FACTORS.sectors.services;

  const scope3 =
    data.revenue * sectorFactor;

  // ---- Aggregation ----
  const total = scope1 + scope2 + scope3;

  return {
    scope1: Math.round(scope1),
    scope2: Math.round(scope2),
    scope3: Math.round(scope3),
    total: Math.round(total)
  };
}
