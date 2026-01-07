<div class="w-full min-h-screen bg-white text-[#334155] font-sans" id="top">

  <div class="sticky top-0 bg-white border-b border-[#E2E8F0] py-4 px-6 md:px-12 z-40 shadow-sm">
    <div class="max-w-[1200px] mx-auto flex items-center justify-between">
      <a href="/" class="text-[#0B3A63] font-semibold hover:text-[#1FB6C1] transition flex items-center gap-2">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4L6 9L12 14" />
        </svg>
        Back to Certif-Scope
      </a>
      <a href="/verify" class="text-sm text-[#1FB6C1] font-bold hover:text-[#0B3A63]">
        Verify Attestation
      </a>
    </div>
  </div>

  <div class="max-w-[1200px] mx-auto flex flex-col gap-10 pt-10 px-6 md:px-12">

    <h1 class="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-4">
      Methodology & Calculation Principles
    </h1>

    <p class="text-sm text-center text-[#1FB6C1] uppercase tracking-widest font-bold mb-4">
      Transparent, traceable and aligned with European standards
    </p>

    <div class="text-center mb-6">
      <a href="/#assessment"
         class="inline-block bg-[#1FB6C1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#17A2AC]">
        Generate my CO₂ attestation
      </a>
    </div>

    <p class="text-center text-[#475569] max-w-[800px] mx-auto mb-8">
      This methodology follows the European CSRD/ESRS proportionality rules for SMEs and relies on 
      recognized emission factors from ADEME, the GHG Protocol and industry databases.  
      It provides an indicative, structured and verifiable CO₂ estimation.
    </p>

    <div class="bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-6 text-sm leading-relaxed shadow-sm">
      <strong>Important:</strong><br>
      This attestation is an estimation based on data provided by the company.  
      It is not an audit, not a certified carbon report and not a CSRD filing.
      It follows the EU principle of proportionality: SMEs may provide simplified indicators.
    </div>

    <div class="flex flex-wrap justify-center gap-4 text-sm font-semibold mt-6">
      <a href="#sources" class="text-[#1FB6C1] hover:text-[#0B3A63]">Sources</a>
      <a href="#calculation" class="text-[#1FB6C1] hover:text-[#0B3A63]">Calculation Model</a>
      <a href="#factors" class="text-[#1FB6C1] hover:text-[#0B3A63]">Emission Factors</a>
      <a href="#verification" class="text-[#1FB6C1] hover:text-[#0B3A63]">Verification</a>
      <a href="#legal" class="text-[#1FB6C1] hover:text-[#0B3A63]">Legal Notes</a>
      <a href="#top" class="text-[#1FB6C1] hover:text-[#0B3A63]">Top ↑</a>
    </div>

    <style>
      #sources, #calculation, #factors, #verification, #legal {
        scroll-margin-top: 120px;
      }
    </style>

    <section id="sources" class="bg-[#F8FAFC] py-20 px-6 md:px-12 rounded-xl">
      <h2 class="text-2xl font-black text-[#0B3A63] mb-6">
        Official Data Sources
      </h2>

      <p class="text-[#475569] mb-6">The CO₂ estimation relies on recognized and publicly documented datasets:</p>

      <ul class="space-y-4 text-sm text-[#475569]">
        <li class="p-4 bg-white border border-[#E2E8F0] rounded-xl">
          ADEME Base Carbone — Official French emission factors database (spend-based & physical factors)
        </li>
        <li class="p-4 bg-white border border-[#E2E8F0] rounded-xl">
          GHG Protocol — International reference methodology for emissions reporting
        </li>
        <li class="p-4 bg-white border border-[#E2E8F0] rounded-xl">
          Eurostat & industry coefficients — For sector-specific energy and transport data
        </li>
      </ul>
    </section>

    <section id="calculation" class="bg-white py-20 px-6 md:px-12 rounded-xl">
      <h2 class="text-2xl font-black text-[#0B3A63] mb-6">
        Calculation Model
      </h2>

      <p class="text-[#475569] mb-6">
        Certif-Scope uses a standardized spend-based model, aligned with the GHG Protocol methodology.  
        Each cost category is multiplied by an emission factor from ADEME or equivalent sources.
      </p>

      <div class="bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-6 text-sm leading-relaxed">
        CO₂e = Σ (Amount Spent × Emission Factor)
      </div>

      <p class="text-[#475569] mt-6">
        This model is recognized for estimating Scope 3 emissions when activity data is limited, which is the case for most SMEs.
      </p>
    </section>

    <section id="factors" class="bg-[#F8FAFC] py-20 px-6 md:px-12 rounded-xl">
      <h2 class="text-2xl font-black text-[#0B3A63] mb-10">
        Main Emission Factors Used
      </h2>

      <table class="w-full text-sm border border-[#E2E8F0] rounded-xl overflow-hidden">
        <thead class="bg-[#E6F6F7] text-[#0B3A63] font-bold">
          <tr>
            <th class="p-3 border-r border-[#E2E8F0]">Category</th>
            <th class="p-3 border-r border-[#E2E8F0]">Factor (kg CO₂e / €)</th>
            <th class="p-3">Source</th>
          </tr>
        </thead>
        <tbody class="text-[#475569]">
          <tr>
            <td class="p-3 border-r border-[#E2E8F0]">Energy / Electricity</td>
            <td class="p-3 border-r border-[#E2E8F0]">0.053</td>
            <td class="p-3">ADEME Base Carbone</td>
          </tr>
          <tr>
            <td class="p-3 border-r border-[#E2E8F0]">Fuel / Heating</td>
            <td class="p-3 border-r border-[#E2E8F0]">0.267</td>
            <td class="p-3">GHG Protocol</td>
          </tr>
          <tr>
            <td class="p-3 border-r border-[#E2E8F0]">Purchases / Services</td>
            <td class="p-3 border-r border-[#E2E8F0]">0.420</td>
            <td class="p-3">ADEME</td>
          </tr>
          <tr>
            <td class="p-3 border-r border-[#E2E8F0]">Transport / Logistics</td>
            <td class="p-3 border-r border-[#E2E8F0]">0.310</td>
            <td class="p-3">Industry coefficients</td>
          </tr>
        </tbody>
      </table>

      <p class="text-[#475569] mt-6 text-center">
        These factors may be updated to reflect regulatory and scientific changes.
      </p>
    </section>

    <section id="verification" class="bg-white py-20 px-6 md:px-12 rounded-xl">
      <h2 class="text-2xl font-black text-[#0B3A63] mb-6">
        Verification & Integrity
      </h2>

      <p class="text-[#475569] mb-6">
        Each attestation includes a unique identifier, a cryptographic hash and a verification link.
      </p>

      <ul class="space-y-4 text-sm text-[#475569]">
        <li class="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
          A verification page validates the hash and confirms document integrity
        </li>
        <li class="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
          A QR code on the PDF points to the verification page
        </li>
        <li class="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
          No personal data is stored server-side — verification is stateless
        </li>
      </ul>
    </section>

    <section id="legal" class="bg-[#F8FAFC] py-20 px-6 md:px-12 rounded-xl">
      <h2 class="text-2xl font-black text-[#0B3A63] mb-6">
        Legal & Regulatory Notes
      </h2>

      <div class="bg-[#FFF8E7] border border-[#FCD34D] text-[#92400E] rounded-xl p-6 text-sm leading-relaxed shadow-sm">
        Under EU sustainability rules, SMEs cannot be required to produce audited or certified carbon reports.  
        Simplified estimates must be accepted under:
        <ul class="list-disc ml-6 mt-2">
          <li>CSRD Directive (EU) 2022/2464</li>
          <li>ESRS E1 — Appendix B</li>
          <li>ESRS General Requirements — Article 6 (Proportionality)</li>
        </ul>
      </div>
    </section>

    <div class="text-center mt-10">
      <a href="/#assessment"
         class="inline-block bg-[#1FB6C1] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#17A2AC]">
        Generate my CO₂ attestation
      </a>
    </div>

    <div class="text-center mt-4">
      <a href="/verify" class="text-[#1FB6C1] font-semibold hover:text-[#0B3A63]">
        Verify an attestation →
      </a>
    </div>

    <div class="text-center mt-6 mb-14">
      <a href="#top" class="text-[#1FB6C1] hover:text-[#0B3A63] font-semibold">
        Back to top ↑
      </a>
    </div>

  </div>
</div>
