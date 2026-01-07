export default function Methodology() {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-[#334155] font-sans" id="top">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] py-4 px-6 md:px-12 z-40 shadow-sm">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <a href="/" className="text-[#0B3A63] font-semibold hover:text-[#1FB6C1] transition flex items-center gap-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4L6 9L12 14" />
              </svg>
              Back to Certif-Scope
            </a>
            <a href="/verify" className="text-sm text-[#1FB6C1] font-bold hover:text-[#0B3A63]">
              Verify Attestation
            </a>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12 pt-10 px-6 md:px-12">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-4">
            Methodology & Calculation Framework
          </h1>

          <p className="text-sm text-center text-[#1FB6C1] uppercase tracking-widest font-bold mb-4">
            Spend-based CO₂e estimation — aligned with GHG Protocol
          </p>

          {/* CTA */}
          <div className="text-center mb-6">
            <a href="/#assessment"
              className="inline-block bg-[#1FB6C1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#17A2AC]">
              Generate my CO₂ attestation
            </a>
          </div>

          {/* INTRO */}
          <p className="text-center text-[#475569] max-w-[800px] mx-auto">
            This page explains the complete calculation logic used by Certif-Scope. 
            The estimation is simplified, spend-based, traceable, and aligned with the GHG Protocol screening approach. 
            It provides a proportional indicator suitable for SMEs without requiring a certified carbon audit.
          </p>

          {/* SUMMARY BOX */}
          <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-6 text-sm leading-relaxed shadow-sm">
            <strong>TL;DR:</strong><br />
            Certif-Scope uses a standardized spend-based conversion to estimate CO₂e. 
            Scope 1 = fuel × factor, Scope 2 = electricity × factor, Scope 3 = revenue × sector coefficient. 
            Factors follow ADEME Base Empreinte<sup>®</sup> and recognized economic intensity ratios.
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold mt-6">
            <a href="#calculation" className="text-[#1FB6C1] hover:text-[#0B3A63]">Calculation Logic</a>
            <a href="#factors" className="text-[#1FB6C1] hover:text-[#0B3A63]">Emission Factors</a>
            <a href="#scopes" className="text-[#1FB6C1] hover:text-[#0B3A63]">Scopes Explained</a>
            <a href="#limitations" className="text-[#1FB6C1] hover:text-[#0B3A63]">Limitations</a>
            <a href="#privacy" className="text-[#1FB6C1] hover:text-[#0B3A63]">Data Privacy</a>
            <a href="#legal" className="text-[#1FB6C1] hover:text-[#0B3A63]">Legal Disclaimer</a>
          </div>

          {/* SECTION: CALCULATION LOGIC */}
          <section id="calculation" className="bg-[#F8FAFC] py-16 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-8">
              1. Calculation Logic
            </h2>

            <p className="text-[#475569] mb-6">
              Certif-Scope applies a spend-based CO₂e conversion aligned with GHG Protocol guidelines. 
              All calculations use EUR reference factors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0B3A63] mb-3">Scope 1 — Direct Emissions</h3>
                <p className="text-sm text-[#475569]">
                  Fuel expenses × emission factor  
                  <br />
                  Covers: Gas, diesel, fuel combustion.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0B3A63] mb-3">Scope 2 — Indirect Energy</h3>
                <p className="text-sm text-[#475569]">
                  Electricity expenses × emission factor  
                  <br />
                  Covers: Electricity consumption and energy imports.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl shadow-sm md:col-span-2">
                <h3 className="font-bold text-[#0B3A63] mb-3">Scope 3 — Value-Chain Emissions</h3>
                <p className="text-sm text-[#475569] mb-3">
                  Annual revenue × sector intensity coefficient  
                </p>
                <p className="text-xs text-[#64748B]">
                  Covers indirect impacts upstream and downstream. This is the dominant component for most service-based SMEs.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION: EMISSION FACTORS */}
          <section id="factors" className="py-16 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-8">
              2. Emission Factors
            </h2>

            <p className="text-[#475569] mb-6">
              Factors are sourced from ADEME Base Empreinte<sup>®</sup>, European averages and recognized monetary ratios.
            </p>

            <table className="w-full text-sm border border-[#E2E8F0] rounded-xl overflow-hidden">
              <thead className="bg-[#E6F6F7] text-[#0B3A63] font-bold">
                <tr>
                  <th className="p-3 border-r border-[#E2E8F0]">Category</th>
                  <th className="p-3">Source</th>
                </tr>
              </thead>
              <tbody className="text-[#475569]">
                <tr>
                  <td className="p-3 border-r border-[#E2E8F0]">Fuel (Gas/Diesel)</td>
                  <td className="p-3">ADEME Base Empreinte — energy factors</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-[#E2E8F0]">Electricity</td>
                  <td className="p-3">European grid carbon intensity</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-[#E2E8F0]">Sector Revenue Ratio</td>
                  <td className="p-3">GHG Protocol spend-based guidance</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* SECTION: SCOPES */}
          <section id="scopes" className="bg-[#F8FAFC] py-16 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-8">
              3. Scopes Explained
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0B3A63] mb-2">Scope 1</h3>
                <p className="text-sm text-[#475569]">Direct emissions from fuel combustion.</p>
              </div>

              <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0B3A63] mb-2">Scope 2</h3>
                <p className="text-sm text-[#475569]">Indirect emissions from purchased electricity.</p>
              </div>

              <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0B3A63] mb-2">Scope 3</h3>
                <p className="text-sm text-[#475569]">Value-chain emissions (dominant share for SMEs).</p>
              </div>

            </div>
          </section>

          {/* SECTION: LIMITATIONS */}
          <section id="limitations" className="py-16 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
              4. Purpose & Limitations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Suitable for:",
                  list: [
                    "Banking compliance / ESG scoring",
                    "Procurement questionnaires",
                    "Supply-chain transparency",
                    "Internal monitoring & baseline"
                  ]
                },
                {
                  title: "Not suitable for:",
                  list: [
                    "Certified ISO 14064 audits",
                    "Detailed activity-based accounting",
                    "Regulated CSRD reporting for large entities"
                  ]
                }
              ].map((block, index) => (
                <div key={index} className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <h3 className="font-bold text-[#0B3A63] mb-2">{block.title}</h3>
                  <ul className="text-sm text-[#475569] list-disc ml-4">
                    {block.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: PRIVACY */}
          <section id="privacy" className="bg-[#ECFDF5] py-16 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#065F46] mb-6">
              5. Data Privacy & Integrity
            </h2>

            <p className="text-sm text-[#065F46] mb-4">
              All calculations are performed locally in the browser. No financial data is stored.
            </p>

            <ul className="text-sm text-[#065F46] list-disc ml-4">
              <li>Financial inputs are processed client-side</li>
              <li>No revenue or expense data is saved</li>
              <li>The attestation is cryptographically hashed</li>
              <li>The hash guarantees integrity and authenticity</li>
            </ul>
          </section>

          {/* SECTION: LEGAL */}
          <section id="legal" className="py-16 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
              6. Legal Disclaimer
            </h2>

            <p className="text-[#475569] mb-4">
              This methodological estimation is provided “as is”. Certif-Scope assumes no liability for inaccuracies in user-provided financial inputs.
            </p>

            <p className="text-[#475569] mb-4">
              This is not a certified carbon audit nor a regulated CSRD declaration. It is intended for informational and voluntary compliance purposes.
            </p>

            <p className="text-xs text-[#94A3B8]">
              Any modification invalidates the document.
            </p>
          </section>

          {/* CTA BOTTOM */}
          <div className="text-center mt-6 mb-14">
            <a href="#top" className="text-[#1FB6C1] hover:text-[#0B3A63] font-semibold">
              Back to top ↑
            </a>
          </div>

        </div>
      </div>
    </>
  );
          }
