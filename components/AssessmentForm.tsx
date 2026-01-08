import { useState, useEffect, useRef } from "react";

export default function AssessmentForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [sector, setSector] = useState("services");
  const [data, setData] = useState({
    fuel: "",
    electricity: "",
    gas: "",
    train: "",
    flight: "",
    hotel: "",
    it: "",
    services: "",
    logistics: ""
  });

  const [result, setResult] = useState<any>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const factors = {
    fuel: 2.68,
    electricity: 0.059,
    gas: 0.204,
    train: 0.012,
    flight: 0.255,
    hotel: 6.5,
    it: 0.25,
    services: 0.18,
    logistics: 0.7
  };

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const calculate = () => {
    const scope1 =
      (parseFloat(data.fuel) || 0) * factors.fuel +
      (parseFloat(data.gas) || 0) * factors.gas;

    const scope2 =
      (parseFloat(data.electricity) || 0) * factors.electricity;

    const scope3 =
      (parseFloat(data.train) || 0) * factors.train +
      (parseFloat(data.flight) || 0) * factors.flight +
      (parseFloat(data.hotel) || 0) * factors.hotel +
      (parseFloat(data.it) || 0) * factors.it +
      (parseFloat(data.services) || 0) * factors.services +
      (parseFloat(data.logistics) || 0) * factors.logistics;

    const total = scope1 + scope2 + scope3;

    setResult({
      year,
      scope1: Math.round(scope1),
      scope2: Math.round(scope2),
      scope3: Math.round(scope3),
      total: Math.round(total)
    });

    setTimeout(() => {
      if (resultRef.current) {
        const y = resultRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150);
  };

  const barWidth = (value: number, total: number) => {
    if (!total || value <= 0) return "0%";
    return `${Math.min((value / total) * 100, 100)}%`;
  };

  return (
    <div className="space-y-12">

      <div>
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-2">Carbon Assessment — SME</h2>
        <p className="text-xs text-[#475569] max-w-2xl leading-relaxed">
          Enter annual activity data. This simplified model uses GHG Protocol screening factors.
          Leave fields blank if unknown.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <label className="font-semibold text-sm">Reporting Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Business Sector</label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          >
            <option value="services">Services</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="construction">Construction</option>
            <option value="transport">Transport</option>
            <option value="other">Other / Mixed Activity</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-sm">Fuel Consumption (liters)</label>
          <input
            type="number"
            value={data.fuel}
            onChange={(e) => handleChange("fuel", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Electricity (kWh)</label>
          <input
            type="number"
            value={data.electricity}
            onChange={(e) => handleChange("electricity", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Natural Gas (kWh)</label>
          <input
            type="number"
            value={data.gas}
            onChange={(e) => handleChange("gas", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Train Travel (km)</label>
          <input
            type="number"
            value={data.train}
            onChange={(e) => handleChange("train", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Flight Travel (km)</label>
          <input
            type="number"
            value={data.flight}
            onChange={(e) => handleChange("flight", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Hotel Nights</label>
          <input
            type="number"
            value={data.hotel}
            onChange={(e) => handleChange("hotel", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">IT Equipment (€)</label>
          <input
            type="number"
            value={data.it}
            onChange={(e) => handleChange("it", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">External Services (€)</label>
          <input
            type="number"
            value={data.services}
            onChange={(e) => handleChange("services", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Goods Logistics (€)</label>
          <input
            type="number"
            value={data.logistics}
            onChange={(e) => handleChange("logistics", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
        </div>

      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#1FB6C1] text-white py-4 rounded-lg font-bold text-lg shadow-md"
      >
        Calculate Emissions
      </button>

      {result && (
        <div ref={resultRef} className="mt-10 bg-[#0B3A63] text-white p-6 rounded-xl shadow-xl space-y-6">

          <h3 className="text-xl font-bold">Results — {result.year}</h3>

          <div className="text-2xl font-extrabold">
            Total CO₂e: {result.total} kg / year
          </div>

          <div className="space-y-4">

            <div>
              <div className="font-semibold">Scope 1 — Direct</div>
              <div className="w-full h-2 bg-white/20 rounded">
                <div className="h-2 bg-[#1FB6C1] rounded" style={{ width: barWidth(result.scope1, result.total) }}></div>
              </div>
              <div className="text-sm mt-1">{result.scope1} kg</div>
            </div>

            <div>
              <div className="font-semibold">Scope 2 — Electricity</div>
              <div className="w-full h-2 bg-white/20 rounded">
                <div className="h-2 bg-[#4FD1C5] rounded" style={{ width: barWidth(result.scope2, result.total) }}></div>
              </div>
              <div className="text-sm mt-1">{result.scope2} kg</div>
            </div>

            <div>
              <div className="font-semibold">Scope 3 — Value Chain</div>
              <div className="w-full h-2 bg-white/20 rounded">
                <div className="h-2 bg-[#A3BFFA] rounded" style={{ width: barWidth(result.scope3, result.total) }}></div>
              </div>
              <div className="text-sm mt-1">{result.scope3} kg</div>
            </div>

          </div>

          <button className="w-full bg-white text-[#0B3A63] font-bold py-3 rounded-lg text-lg shadow-md">
            Generate Attestation (PDF)
          </button>

          <div className="text-[10px] opacity-70">
            Emission factors: GHG Protocol / DEFRA 2023.
          </div>
        </div>
      )}

      {/* Sticky CTA Mobile */}
      {result && (
        <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-4 shadow-lg md:hidden z-50">
          <button className="w-full bg-[#1FB6C1] text-white font-bold py-3 rounded-lg">
            Download Attestation (PDF)
          </button>
        </div>
      )}
    </div>
  );
            }
