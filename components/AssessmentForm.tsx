import { useState } from "react";
import { calculateCarbonFootprint } from "../lib/carbonEngine";

export default function AssessmentForm() {
  const [year, setYear] = useState(new Date().getFullYear());

  const [data, setData] = useState({
    fuelLiters: "",
    electricityKwh: "",
    freightKm: "",
    businessTravelKm: "",
    purchasedGoodsEuro: ""
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const calculate = () => {
    const input = {
      year,
      sector: "services",
      fuelLiters: Number(data.fuelLiters) || 0,
      electricityKwh: Number(data.electricityKwh) || 0,
      freightKm: Number(data.freightKm) || 0,
      businessTravelKm: Number(data.businessTravelKm) || 0,
      purchasedGoodsEuro: Number(data.purchasedGoodsEuro) || 0
    };

    const output = calculateCarbonFootprint(input);
    setResult(output);
  };

  return (
    <div className="space-y-10">

      <h2 className="text-2xl font-bold text-[#0B3A63]">Carbon Assessment (PME)</h2>
      <p className="text-sm text-slate-600">
        Remplissez uniquement les données connues. Estimations acceptées.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold text-sm">Année déclarative</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={year}
            onChange={e => setYear(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Carburant utilisé (litres)</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={data.fuelLiters}
            onChange={e => handleChange("fuelLiters", e.target.value)}
          />
          <p className="text-xs text-slate-500">Diesel / Essence — flotte interne</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Electricité consommée (kWh)</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={data.electricityKwh}
            onChange={e => handleChange("electricityKwh", e.target.value)}
          />
          <p className="text-xs text-slate-500">Bureaux, atelier, site</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Livraisons / fret (km)</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={data.freightKm}
            onChange={e => handleChange("freightKm", e.target.value)}
          />
          <p className="text-xs text-slate-500">Transport sous-traité</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Déplacements professionnels (km)</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={data.businessTravelKm}
            onChange={e => handleChange("businessTravelKm", e.target.value)}
          />
          <p className="text-xs text-slate-500">Train, voiture, avion (km estimés)</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Achats annuels (€)</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded w-full"
            value={data.purchasedGoodsEuro}
            onChange={e => handleChange("purchasedGoodsEuro", e.target.value)}
          />
          <p className="text-xs text-slate-500">Matériel, services, consommables</p>
        </div>

      </div>

      <button
        onClick={calculate}
        className="w-full py-3 rounded-lg bg-[#1FB6C1] text-white font-bold"
      >
        Calculer les émissions
      </button>

      {result && (
        <div className="mt-10 bg-[#0B3A63] text-white p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Résultats – Année {result.year}</h3>
          <p><strong>Scope 1 :</strong> {result.scope1} kg CO₂e</p>
          <p><strong>Scope 2 :</strong> {result.scope2} kg CO₂e</p>
          <p><strong>Scope 3 :</strong> {result.scope3} kg CO₂e</p>
          <p className="mt-2"><strong>Total :</strong> {result.total} kg CO₂e</p>
        </div>
      )}

    </div>
  );
                     }
