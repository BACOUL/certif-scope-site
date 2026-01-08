import React, { useState, useRef, useEffect } from 'react';
import { calculateCarbonFootprint, CarbonInput } from '../lib/carbonEngine';

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
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const calculation = calculateCarbonFootprint({
      sector: formData.sector,
      revenue: Number(formData.revenue),
      fuelSpent: Number(formData.fuelSpent),
      electricitySpent: Number(formData.electricitySpent)
    });

    setResults(calculation);

    localStorage.setItem(
      "certif-scope-report",
      JSON.stringify({
        companyName: formData.companyName,
        ...formData,
        ...calculation
      })
    );
  };

  const handleStripe = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyName: formData.companyName })
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  const handleTestAttestation = async () => {
    const report = JSON.parse(localStorage.getItem("certif-scope-report") || "{}");
    if (!report.companyName) {
      alert("Please calculate your footprint first.");
      return;
    }

    const res = await fetch("/api/test-attestation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(report)
    });

    const data = await res.json();

    if (data.pdfBase64) {
      const link = document.createElement("a");
      link.href = "data:application/pdf;base64," + data.pdfBase64;
      link.download = "test-attestation.pdf";
      link.click();
    } else {
      alert("Error generating test PDF");
    }
  };

  useEffect(() => {
    if (results && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [results]);

  return (
    <div className="max-w-2xl mx-auto space-y-12" role="region" aria-label="Carbon assessment form">

      {/* FORM */}
      <form
        aria-labelledby="assessment-title"
        onSubmit={handleCalculate}
        className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
      >
        <div className="px-8 py-6 border-b border-slate-200">
          <h3 id="assessment-title" className="text-lg font-bold text-[#08384F]">
            Carbon footprint assessment
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Free preview · No account required · Local calculation
          </p>
        </div>

        <div className="p-8 space-y-8">

          {/* Company name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Company name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0A8AA3] focus:border-[#0A8AA3]"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          {/* Sector */}
          <div>
            <label
              htmlFor="sector"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Business sector
            </label>
            <select
              id="sector"
              name="sector"
              value={formData.sector}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0A8AA3] focus:border-[#0A8AA3]"
              onChange={(e) => setFormData({ ...formData, sector: e.target.value as CarbonInput['sector'] })}
            >
              <option value="services">Services</option>
              <option value="retail">Retail</option>
              <option value="construction">Construction</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="transport">Transport</option>
            </select>
          </div>

          {/* Revenue */}
          <div>
            <label
              htmlFor="revenue"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Annual revenue (€)
            </label>
            <input
              id="revenue"
              name="revenue"
              type="number"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0A8AA3] focus:border-[#0A8AA3]"
              onChange={(e) => setFormData({ ...formData, revenue: Number(e.target.value) })}
            />
          </div>

          {/* ENERGY COSTS */}
          <fieldset className="bg-slate-50 rounded-xl p-6 space-y-4 border border-slate-200">
            <legend className="text-sm font-semibold text-slate-800">
              Energy-related expenses (annual)
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label htmlFor="fuelSpent" className="block text-sm mb-1 text-slate-800">
                  Fuel expenses (€)
                </label>
                <input
                  id="fuelSpent"
                  name="fuelSpent"
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0A8AA3] focus:border-[#0A8AA3]"
                  onChange={(e) => setFormData({ ...formData, fuelSpent: Number(e.target.value) })}
                />
              </div>

              <div>
                <label htmlFor="electricitySpent" className="block text-sm mb-1 text-slate-800">
                  Electricity expenses (€)
                </label>
                <input
                  id="electricitySpent"
                  name="electricitySpent"
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0A8AA3] focus:border-[#0A8AA3]"
                  onChange={(e) =>
                    setFormData({ ...formData, electricitySpent: Number(e.target.value) })
                  }
                />
              </div>

            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-[#0A8AA3] text-white font-bold py-4 rounded-xl hover:bg-[#09778B]"
          >
            Calculate my footprint
          </button>
        </div>
      </form>

      {/* RESULTS */}
      {results && (
        <div
          ref={resultsRef}
          aria-live="polite"
          className="bg-white rounded-2xl border p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6 text-center text-[#08384F]">
            Carbon footprint preview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              ['Scope 1', results.scope1],
              ['Scope 2', results.scope2],
              ['Scope 3', results.scope3]
            ].map(([label, value]) => (
              <div key={label} className="border rounded-xl p-4 text-center bg-slate-50">
                <p className="text-xs uppercase text-slate-500 mb-1">{label}</p>
                <p className="text-xl font-bold text-[#08384F]">{value} tCO₂e</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-600 mb-1">Estimated total footprint</p>
            <p className="text-3xl font-extrabold text-[#08384F] mb-6">
              {results.total} tCO₂e
            </p>

            <button
              onClick={handleStripe}
              className="w-full bg-[#0A8AA3] text-white font-bold py-4 rounded-xl mb-3 hover:bg-[#09778B]"
            >
              Download official attestation (€99)
            </button>

            <button
              onClick={handleTestAttestation}
              className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700"
            >
              TEST — Generate attestation (no payment)
            </button>
          </div>
        </div>
      )}
    </div>
  );
                }
