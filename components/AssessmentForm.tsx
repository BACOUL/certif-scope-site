import React, { useState } from 'react';
import { calculateCarbonFootprint } from '../lib/carbonEngine';

export default function AssessmentForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    sector: 'services',
    revenue: '',
    fuelSpent: '',
    electricitySpent: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    // Utilisation du moteur de calcul certifié
    const calculation = calculateCarbonFootprint(formData);
    setResults(calculation);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <form onSubmit={handleCalculate} className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-blue-900 p-6">
          <h2 className="text-xl font-bold text-white">Carbon Footprint Calculator</h2>
          <p className="text-blue-200 text-sm">Calculations based on GHG Protocol standards.</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
            <input 
              type="text" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sector</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white"
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
              >
                <option value="services">Services</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Revenue (€)</label>
              <input 
                type="number" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
                onChange={(e) => setFormData({...formData, revenue: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <input type="number" placeholder="Fuel (€)" className="w-full px-4 py-3 rounded-xl border border-gray-200" onChange={(e) => setFormData({...formData, fuelSpent: e.target.value})} />
            <input type="number" placeholder="Electricity (€)" className="w-full px-4 py-3 rounded-xl border border-gray-200" onChange={(e) => setFormData({...formData, electricitySpent: e.target.value})} />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
            Calculate My Footprint
          </button>
        </div>
      </form>

      {/* AFFICHAGE DES RÉSULTATS (PREVIEW) */}
      {results && (
        <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Your Carbon Report <span className="text-sm font-normal bg-blue-500 px-2 py-1 rounded text-white italic">Preview</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">Direct (Scope 1)</p>
              <p className="text-xl font-bold">{results.scope1} tCO2e</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">Energy (Scope 2)</p>
              <p className="text-xl font-bold">{results.scope2} tCO2e</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">Supply Chain (Scope 3)</p>
              <p className="text-xl font-bold">{results.scope3} tCO2e</p>
            </div>
          </div>

          <div className="bg-blue-600 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-blue-100 text-sm">Total Estimated Footprint</p>
              <p className="text-4xl font-extrabold">{results.total} tCO2e</p>
            </div>
            <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-all">
              Get Official Certificate (99€)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
