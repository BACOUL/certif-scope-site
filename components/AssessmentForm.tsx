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
        <h2 className="text-3xl font-bold text-[#0B3A63] mb-3">Carbon Assessment — SME</h2>
        <p className="text-sm text-[#475569] max-w-2xl">
          Enter annual data below. This simplified assessment follows GHG Protocol screening methodology.
          Only available data is required. Leave blank if unknown.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <label className="font-semibold text-sm">Reporting Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Year for which emissions are estimated.</p>
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
          </select>
          <p className="text-xs text-slate-500 mt-1">Used to contextualize Scope 3 intensity.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Fuel Consumption (liters)</label>
          <input
            type="number"
            value={data.fuel}
            onChange={(e) => handleChange("fuel", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Company fleet and internal vehicles.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Electricity (kWh)</label>
          <input
            type="number"
            value={data.electricity}
            onChange={(e) => handleChange("electricity", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Office or workshop electricity consumption.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Natural Gas (kWh)</label>
          <input
            type="number"
            value={data.gas}
            onChange={(e) => handleChange("gas", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Heating fuel for buildings.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Train Travel (km)</label>
          <input
            type="number"
            value={data.train}
            onChange={(e) => handleChange("train", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Professional travel by train within EU.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Flight Travel (km)</label>
          <input
            type="number"
            value={data.flight}
            onChange={(e) => handleChange("flight", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Short/medium/long haul business flights.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Hotel Nights</label>
          <input
            type="number"
            value={data.hotel}
            onChange={(e) => handleChange("hotel", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Total nights spent during business trips.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">IT Equipment (€)</label>
          <input
            type="number"
            value={data.it}
            onChange={(e) => handleChange("it", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Computers, servers, networking.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">External Services (€)</label>
          <input
            type="number"
            value={data.services}
            onChange={(e) => handleChange("services", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Consultants, subcontractors, agencies.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Goods Logistics (€)</label>
          <input
            type="number"
            value={data.logistics}
            onChange={(e) => handleChange("logistics", e.target.value)}
            className="w-full mt-1 p-3 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Freight transport, parcel shipments.</p>
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#1FB6C1] text-white py-4 rounded-lg font-bold text-lg shadow-md"
      >
        Calculate Emissions
      </button>

      {result && (
        <div ref={resultRef} className="mt-12 bg-[#0B3A63] text-white p-10 rounded-xl shadow-xl space-y-8">

          <h3 className="text-2xl font-bold">Results — Year {result.year}</h3>

          <div className="text-4xl font-extrabold">
            Total CO₂e: {result.total} kg / year
          </div>

          <div className="space-y-6">

            <div>
              <div className="font-semibold text-lg">Scope 1 — Direct Emissions</div>
              <div className="text-sm opacity-80 mb-1">Fuel combustion & building heating</div>
              <div className="w-full h-3 bg-white/20 rounded">
                <div
                  className="h-3 bg-[#1FB6C1] rounded transition-all"
                  style={{ width: barWidth(result.scope1, result.total) }}
                ></div>
              </div>
              <div className="mt-1 font-bold">{result.scope1} kg</div>
            </div>

            <div>
              <div className="font-semibold text-lg">Scope 2 — Indirect Energy</div>
              <div className="text-sm opacity-80 mb-1">Electricity consumption</div>
              <div className="w-full h-3 bg-white/20 rounded">
                <div
                  className="h-3 bg-[#4FD1C5] rounded transition-all"
                  style={{ width: barWidth(result.scope2, result.total) }}
                ></div>
              </div>
              <div className="mt-1 font-bold">{result.scope2} kg</div>
            </div>

            <div>
              <div className="font-semibold text-lg">Scope 3 — Value Chain</div>
              <div className="text-sm opacity-80 mb-1">Travel + goods + external services</div>
              <div className="w-full h-3 bg-white/20 rounded">
                <div
                  className="h-3 bg-[#A3BFFA] rounded transition-all"
                  style={{ width: barWidth(result.scope3, result.total) }}
                ></div>
              </div>
              <div className="mt-1 font-bold">{result.scope3} kg</div>
            </div>

          </div>

          <button className="w-full bg-white text-[#0B3A63] font-bold py-4 rounded-lg text-lg shadow-md mt-6">
            Generate Attestation (PDF)
          </button>

          <div className="text-xs opacity-70 mt-6">
            Emission factors based on consolidated GHG Protocol / DEFRA 2023 datasets.
            Suitable for SME baseline reporting and supply-chain documentation.
          </div>
        </div>
      )}
    </div>
  );
}
