import React, { useState } from 'react';
import {
  calculateCarbonFootprint,
  CarbonInput
} from '../lib/carbonEngine';

type FormState = {
  companyName: string;
  sector: CarbonInput['sector'];
  revenue: number;
  fuelSpent: number;
  electricitySpent: number;
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
      fuelSpent: Number(formData.fuelSpent),
      electricitySpent: Number(formData.electricitySpent)
    });

    setResults(calculation);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10">

      {/* FORM */}
      <form
        onSubmit={handleCalculate}
        className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
      >
        <div className="px-8 py-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-[#0B3A63]">
            Carbon footprint assessment
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Free preview · No account required · Local calculation
          </p>
        </div>

        <div className="p-8 space-y-8">

          {/* COMPANY */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Company name
            </label>
            <input
              type="text"
              required
              placeholder="Your company"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#1FB6C1] focus:border-[#1FB6C1] outline-none"
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>

          {/* SECTOR */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Business sector
            </label>
            <select
              value={formData.sector}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#1FB6C1] focus:border-[#1FB6C1] outline-none"
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

          {/* REVENUE */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Annual revenue (€)
            </label>
            <input
              type="number"
              required
              placeholder="e.g. 750000"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#1FB6C1] focus:border-[#1FB6C1] outline-none"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  revenue: Number(e.target.value)
                })
              }
            />
          </div>

          {/* ENERGY */}
          <div className="bg-slate-50 rounded-xl p-6 space-y-4">
            <p className="text-sm font-semibold text-slate-700">
              Energy-related expenses (annual)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Fuel expenses (€)"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#1FB6C1] focus:border-[#1FB6C1] outline-none"
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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#1FB6C1] focus:border-[#1FB6C1] outline-none"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    electricitySpent: Number(e.target.value)
                  })
                }
              />
            </div>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-[#1FB6C1] hover:bg-[#17A2AC] text-white font-bold py-4 rounded-xl shadow-md transition"
          >
            Calculate my footprint
          </button>
        </div>
      </form>

      {/* RESULTS */}
      {results && (
        <div className="bg-[#0B3A63] rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-center">
            Carbon footprint preview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              ['Scope 1', results.scope1],
              ['Scope 2', results.scope2],
              ['Scope 3', results.scope3]
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-[#102E4A] rounded-xl p-4 text-center"
              >
                <p className="text-xs uppercase text-slate-300 mb-1">
                  {label}
                </p>
                <p className="text-xl font-bold">
                  {value} tCO₂e
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-300 mb-1">
              Estimated total footprint
            </p>
            <p className="text-3xl font-extrabold mb-6">
              {results.total} tCO₂e
            </p>

            <button
              type="button"
              className="w-full bg-white text-[#0B3A63] font-bold py-4 rounded-xl hover:bg-slate-100 transition"
            >
              Get the official attestation (€99)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
