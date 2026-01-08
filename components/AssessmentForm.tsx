import { useState } from "react";

export default function AssessmentForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState({
    sector: "services",
    electricity: "",
    gas: "",
    diesel: "",
    gasoline: "",
    train: "",
    flight: "",
    hotel: "",
    it: "",
    services: "",
    logistics: ""
  });

  const [result, setResult] = useState<any>(null);

  const factors = {
    electricity: 0.059,
    gas: 0.204,
    diesel: 2.68,
    gasoline: 2.31,
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
      (parseFloat(data.diesel) || 0) * factors.diesel +
      (parseFloat(data.gasoline) || 0) * factors.gasoline;

    const scope2 =
      (parseFloat(data.electricity) || 0) * factors.electricity +
      (parseFloat(data.gas) || 0) * factors.gas;

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
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-2">Carbon Assessment (SME)</h2>
        <p className="text-sm text-[#475569]">
          Enter only the data you have available. Estimates are acceptable.
        </p>
      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <label className="font-semibold text-sm">Reporting Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Business Sector</label>
          <select
            value={data.sector}
            onChange={(e) => handleChange("sector", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="services">Services</option>
            <option value="retail">Retail</option>
            <option value="construction">Construction</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="transport">Transport</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-sm">Fuel Used (litres)</label>
          <input
            type="number"
            value={data.diesel}
            onChange={(e) => handleChange("diesel", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Electricity Consumed (kWh)</label>
          <input
            type="number"
            value={data.electricity}
            onChange={(e) => handleChange("electricity", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Natural Gas (kWh)</label>
          <input
            type="number"
            value={data.gas}
            onChange={(e) => handleChange("gas", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Train Travel (km)</label>
          <input
            type="number"
            value={data.train}
            onChange={(e) => handleChange("train", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Air Travel (km)</label>
          <input
            type="number"
            value={data.flight}
            onChange={(e) => handleChange("flight", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Hotel Nights</label>
          <input
            type="number"
            value={data.hotel}
            onChange={(e) => handleChange("hotel", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">IT Equipment (€)</label>
          <input
            type="number"
            value={data.it}
            onChange={(e) => handleChange("it", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">External Services (€)</label>
          <input
            type="number"
            value={data.services}
            onChange={(e) => handleChange("services", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Goods Logistics (€)</label>
          <input
            type="number"
            value={data.logistics}
            onChange={(e) => handleChange("logistics", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

      </div>

      {/* SUBMIT */}
      <button
        onClick={calculate}
        className="w-full bg-[#1FB6C1] text-white py-3 rounded-lg font-bold"
      >
        Calculate Emissions
      </button>

      {/* RESULT */}
      {result && (
        <div className="mt-10 bg-[#0B3A63] text-white p-6 rounded-xl space-y-3">
          <h3 className="text-xl font-bold">Results – Year {result.year}</h3>
          <p>Total CO₂e: {result.total} kg/year</p>
          <p>Scope 1: {result.scope1} kg</p>
          <p>Scope 2: {result.scope2} kg</p>
          <p>Scope 3: {result.scope3} kg</p>
        </div>
      )}

    </div>
  );
}
