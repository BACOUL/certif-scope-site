import React, { useState } from 'react';

export default function AssessmentForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    sector: 'services',
    revenue: '',
    fuelSpent: '',
    electricitySpent: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prochaine étape : Intégration Stripe ici
    alert("Redirection to secure payment gateway (Stripe)...");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-blue-900 p-6">
          <h2 className="text-xl font-bold text-white">Carbon Footprint Calculator</h2>
          <p className="text-blue-200 text-sm">Enter your 2025 financial data to generate your certificate.</p>
        </div>
        
        <div className="p-8 space-y-6">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Acme Corp Intl"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Business Sector</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
              >
                <option value="services">Services / Consulting</option>
                <option value="retail">Retail / Wholesale</option>
                <option value="construction">Construction</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="transport">Transport / Logistics</option>
              </select>
            </div>

            {/* Revenue */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Revenue (€)</label>
              <input 
                type="number" 
                required 
                placeholder="Total turnover"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setFormData({...formData, revenue: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
            {/* Fuel */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Fuel Expenses (€)</label>
              <div className="relative">
                <input 
                  type="number" 
                  required 
                  placeholder="Gas / Diesel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={(e) => setFormData({...formData, fuelSpent: e.target.value})}
                />
              </div>
            </div>

            {/* Electricity */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Electricity Bill (€)</label>
              <input 
                type="number" 
                required 
                placeholder="Annual total"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setFormData({...formData, electricitySpent: e.target.value})}
              />
            </div>
          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
          >
            Generate My Certificate (99€)
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 uppercase tracking-widest font-medium">
            <span>Secure Data</span>
            <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
            <span>GDPR Compliant</span>
            <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
            <span>CSRD Standard</span>
          </div>
        </div>
      </form>
    </div>
  );
}
