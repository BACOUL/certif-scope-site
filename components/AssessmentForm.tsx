import { useState } from "react";

export default function AssessmentForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState({
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
      
      <div>
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-2">Carbon Assessment</h2>
        <p className="text-sm text-[#475569]">
          Renseignez vos données annuelles. Des estimations raisonnables sont acceptées.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <label className="font-semibold text-sm">Année déclarative</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Electricité (kWh)</label>
          <input
            type="number"
            value={data.electricity}
            onChange={(e) => handleChange("electricity", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Factures annuelles bureaux/atelier</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Gaz naturel (kWh)</label>
          <input
            type="number"
            value={data.gas}
            onChange={(e) => handleChange("gas", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Chauffage des locaux</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Diesel (litres)</label>
          <input
            type="number"
            value={data.diesel}
            onChange={(e) => handleChange("diesel", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Flotte utilitaire, livraison interne</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Essence (litres)</label>
          <input
            type="number"
            value={data.gasoline}
            onChange={(e) => handleChange("gasoline", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Véhicules commerciaux internes</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Déplacements en train (km)</label>
          <input
            type="number"
            value={data.train}
            onChange={(e) => handleChange("train", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Voyages professionnels France/EU</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Déplacements en avion (km)</label>
          <input
            type="number"
            value={data.flight}
            onChange={(e) => handleChange("flight", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Vols business courts/moyens/longs</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Nuits d'hôtel (nuits)</label>
          <input
            type="number"
            value={data.hotel}
            onChange={(e) => handleChange("hotel", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Déplacements prolongés</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Matériel informatique (€)</label>
          <input
            type="number"
            value={data.it}
            onChange={(e) => handleChange("it", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Ordinateurs, serveurs, écrans</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Prestations externes (€)</label>
          <input
            type="number"
            value={data.services}
            onChange={(e) => handleChange("services", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Consultants, freelances, agences</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Transport marchandises (€)</label>
          <input
            type="number"
            value={data.logistics}
            onChange={(e) => handleChange("logistics", e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <p className="text-xs text-slate-500 mt-1">Colis expédiés, sous-traitants</p>
        </div>

      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#1FB6C1] text-white py-3 rounded-lg font-bold"
      >
        Calculer les émissions
      </button>

      {result && (
        <div className="mt-10 bg-[#0B3A63] text-white p-6 rounded-xl space-y-3">
          <h3 className="text-xl font-bold">Résultats – Année {result.year}</h3>
          <p>Total CO₂e : {result.total} kg/an</p>
          <p>Scope 1 : {result.scope1} kg</p>
          <p>Scope 2 : {result.scope2} kg</p>
          <p>Scope 3 : {result.scope3} kg</p>
        </div>
      )}
    </div>
  );
}
