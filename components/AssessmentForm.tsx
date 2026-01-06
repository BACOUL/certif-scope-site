import React, { useState } from 'react';
import {
  calculateCarbonFootprint,
  CarbonInput
} from '../lib/carbonEngine';

type FormState = {
  companyName: string;
  sector: CarbonInput['sector'];
  revenue: number;
  fuelSpent?: number;
  electricitySpent?: number;
};

export default function AssessmentForm() {
  const [formData, setFormData] = useState<FormState>({
    companyName: '',
    sector: 'services',
    revenue: 0,
    fuelSpent: 0,
    electricitySpent: 0
  });

  const [results, setResults] = useState<any>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const calculation = calculateCarbonFootprint({
      sector: formData.sector,
      revenue: Number(formData.revenue),
      fuelSpent: Number(formData.fuelSpent || 0),
      electricitySpent: Number(formData.electricitySpent || 0)
    });

    setResults(calculation);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <form
        onSubmit={handleCalculate}
        className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl"
      >
        <div className="bg-blue-900 px-8 py-6">
          <h2 className="text-xl font-bold text-white">
            Carbon Footprint Assessment
          </h2>
          <p className="text-blue-200 text-sm mt-1">
            Standardized estimation based on recognized methodologies.
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Company name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200"
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>

          {/* Sector & Revenue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Business sector
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white"
                value={formData.sector}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sector: e.target.value as CarbonInput['sector']
                  })
                }
              >
                <option value="services">Services</option>
                <option value="retail">Retail</option>
                <option value="construction">Construction</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="transport">Transport</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Annual revenue (€)
              </label>
              <input
                type="number"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    revenue: Number(e.target.value)
                  })
                }
              />
            </div>
          </div>

          {/* Energy */}
          <div>
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Energy-related expenses (annual)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="number"
                placeholder="Fuel expenses (€)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fuelSpent: Number(e.target.value)
                  })
                }
              />
              <input
                type="number"
                placeholder="Electricity expenses (€)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    electricitySpent: Number(e.target.value)
                  })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition"
          >
            Calculate my carbon footprint
          </button>
        </div>
      </form>

      {results && (
        <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">
            Carbon footprint preview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">Scope 1</p>
              <p className="text-xl font-bold">{results.scope1} tCO₂e</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">Scope 2</p>
              <p className="text-xl font-bold">{results.scope2} tCO₂e</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">Scope 3</p>
              <p className="text-xl font-bold">{results.scope3} tCO₂e</p>
            </div>
          </div>

          <p className="text-3xl font-extrabold text-center">
            Total: {results.total} tCO₂e
          </p>
        </div>
      )}
    </div>
  );
}
