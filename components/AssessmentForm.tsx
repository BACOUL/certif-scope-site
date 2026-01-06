// components/AssessmentForm.tsx
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
    console.log("Data submitted:", formData);
    alert("In the next step, we will connect Stripe for the 99€ payment.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Carbon Footprint Assessment</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input 
            type="text" 
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Business Sector</label>
          <select 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setFormData({...formData, sector: e.target.value})}
          >
            <option value="services">Services / Consulting</option>
            <option value="retail">Retail / Wholesale</option>
            <option value="construction">Construction / Engineering</option>
            <option value="manufacturing">Manufacturing / Industry</option>
            <option value="transport">Transport / Logistics</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Annual Revenue (€)</label>
          <input 
            type="number" 
            required 
            placeholder="Ex: 500000"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setFormData({...formData, revenue: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Fuel Expenses (€)</label>
            <input 
              type="number" 
              required 
              placeholder="Gas/Diesel"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setFormData({...formData, fuelSpent: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Electricity (€)</label>
            <input 
              type="number" 
              required 
              placeholder="Annual bill"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setFormData({...formData, electricitySpent: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors mt-6"
        >
          Generate My Certificate (99€)
        </button>
      </div>
      
      <p className="text-[10px] text-gray-400 mt-4 text-center">
        By clicking, you certify the accuracy of the declared data. 
        Compliant with EU VSME voluntary standards.
      </p>
    </form>
  );
}
