import { useState, useRef } from "react";

export default function AssessmentForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [data, setData] = useState({
    sector: "services",
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

  const change = (field: string, value: string) =>
    setData({ ...data, [field]: value });

  const calculate = () => {
    const f = (n: string, factor: number) => (parseFloat(n) || 0) * factor;

    const scope1 = f(data.fuel, 2.68);
    const scope2 = f(data.electricity, 0.059) + f(data.gas, 0.204);
    const scope3 =
      f(data.train, 0.012) +
      f(data.flight, 0.255) +
      f(data.hotel, 6.5) +
      f(data.it, 0.25) +
      f(data.services, 0.18) +
      f(data.logistics, 0.7);

    const output = {
      year,
      scope1: Math.round(scope1),
      scope2: Math.round(scope2),
      scope3: Math.round(scope3),
      total: Math.round(scope1 + scope2 + scope3)
    };

    setResult(output);

    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const generateAttestation = async () => {
    if (!result) return;

    setLoading(true);
    const res = await fetch("/api/generate-attestation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        year: result.year,
        sector: data.sector,
        fuelLiters: data.fuel,
        electricityKwh: data.electricity,
        freightKm: data.logistics,
        businessTravelKm: data.flight,
        purchasedGoodsEuro: data.services,
        companyName: "Your Company",
        country: "Unknown"
      })
    });

    const out = await res.json();
    setLoading(false);

    if (!out?.html) return alert("Unable to generate the attestation.");

    const blob = new Blob([out.html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-10">

      {/* HEADER SECTION */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200">
        <h2 className="text-3xl font-bold text-[#0B3A63]">
          Carbon Assessment (SME)
        </h2>
        <p className="text-slate-600 mt-2">
          Provide annual values for your organisation. Only fill the fields you know.
          The calculator uses standardised factors aligned with the GHG Protocol.
        </p>
      </div>

      {/* REPORTING YEAR & SECTOR */}
      <div className="bg-white shadow rounded-xl p-6 border border-slate-200 space-y-6">
        <h3 className="text-xl font-semibold text-[#0B3A63]">General Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold">Reporting Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="w-full p-3 border rounded-lg mt-1"
            />
            <p className="text-xs text-slate-500 mt-1">
              Typically the previous calendar year.
            </p>
          </div>

          <div>
            <label className="font-semibold">Business Sector</label>
            <select
              value={data.sector}
              onChange={(e) => change("sector", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            >
              <option value="services">Services</option>
              <option value="retail">Retail</option>
              <option value="construction">Construction</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="transport">Transport</option>
            </select>
            <p className="text-xs text-slate-500 mt-1">
              Select the closest match to your activity.
            </p>
          </div>
        </div>
      </div>

      {/* ENERGY SECTION */}
      <div className="bg-white shadow rounded-xl p-6 border border-slate-200 space-y-6">
        <h3 className="text-xl font-semibold text-[#0B3A63]">Energy Consumption</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="font-semibold">Fuel used (litres)</label>
            <input
              type="number"
              value={data.fuel}
              onChange={(e) => change("fuel", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
            <p className="text-xs text-slate-500 mt-1">
              Diesel + gasoline used internally (fleet / generators).
            </p>
          </div>

          <div>
            <label className="font-semibold">Electricity (kWh)</label>
            <input
              type="number"
              value={data.electricity}
              onChange={(e) => change("electricity", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
            <p className="text-xs text-slate-500 mt-1">
              Annual electricity consumption from bills.
            </p>
          </div>

          <div>
            <label className="font-semibold">Natural Gas (kWh)</label>
            <input
              type="number"
              value={data.gas}
              onChange={(e) => change("gas", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
            <p className="text-xs text-slate-500 mt-1">
              Heating fuel consumption from invoices.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILITY SECTION */}
      <div className="bg-white shadow rounded-xl p-6 border border-slate-200 space-y-6">
        <h3 className="text-xl font-semibold text-[#0B3A63]">Business Travel</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="font-semibold">Train Travel (km)</label>
            <input
              type="number"
              value={data.train}
              onChange={(e) => change("train", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Flight Travel (km)</label>
            <input
              type="number"
              value={data.flight}
              onChange={(e) => change("flight", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Hotel nights</label>
            <input
              type="number"
              value={data.hotel}
              onChange={(e) => change("hotel", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>
        </div>
      </div>

      {/* PURCHASED GOODS SECTION */}
      <div className="bg-white shadow rounded-xl p-6 border border-slate-200 space-y-6">
        <h3 className="text-xl font-semibold text-[#0B3A63]">Purchased Goods & Services</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="font-semibold">IT equipment (€)</label>
            <input
              type="number"
              value={data.it}
              onChange={(e) => change("it", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">External Services (€)</label>
            <input
              type="number"
              value={data.services}
              onChange={(e) => change("services", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Goods Logistics (€)</label>
            <input
              type="number"
              value={data.logistics}
              onChange={(e) => change("logistics", e.target.value)}
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>
        </div>
      </div>

      {/* CALCULATE BUTTON */}
      <button
        onClick={calculate}
        className="w-full bg-[#1FB6C1] text-white py-4 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition"
      >
        Calculate Emissions
      </button>

      {/* RESULTS */}
      {result && (
        <div ref={scrollRef} className="bg-[#0B3A63] text-white p-8 rounded-xl shadow-xl space-y-3">

          <h3 className="text-2xl font-bold">Results — {result.year}</h3>

          <div className="text-lg">Total CO₂e: <b>{result.total} kg / year</b></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white text-[#0B3A63] p-4 rounded-xl shadow-md">
              <div className="font-bold text-lg">Scope 1</div>
              <div>{result.scope1} kg</div>
            </div>

            <div className="bg-white text-[#0B3A63] p-4 rounded-xl shadow-md">
              <div className="font-bold text-lg">Scope 2</div>
              <div>{result.scope2} kg</div>
            </div>

            <div className="bg-white text-[#0B3A63] p-4 rounded-xl shadow-md">
              <div className="font-bold text-lg">Scope 3</div>
              <div>{result.scope3} kg</div>
            </div>
          </div>

          <button
            onClick={generateAttestation}
            className="w-full mt-6 bg-white text-[#0B3A63] py-3 rounded-xl font-bold shadow hover:bg-slate-100"
          >
            {loading ? "Generating..." : "Generate Attestation (PDF)"}
          </button>
        </div>
      )}
    </div>
  );
      }
