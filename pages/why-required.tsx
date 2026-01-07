import Link from "next/link";

export default function WhyRequired() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">

      {/* HEADER SPACER */}
      <div className="h-20"></div>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-[#0B3A63] mb-6">
          Why this attestation is now requested by multiple stakeholders
        </h1>

        <p className="text-lg text-[#475569] leading-relaxed mb-10">
          SMEs across Europe are increasingly asked to provide carbon indicators by banks,
          supply-chain partners, insurers and large corporations. This demand is driven by
          Scope 3 reporting obligations and risk-based regulatory frameworks, not by a
          specific mandated format. Under EU law, no institution can require a single official
          template for SME carbon data—only consistent, verifiable indicators.
        </p>
      </section>


      {/* 7 ACTORS CARDS */}
      <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

        {[
          ["Large Corporations & Buyers", "They need supplier carbon data to complete their Scope 3 reporting under CSRD."],
          ["Banks & Lenders", "Carbon exposure influences credit risk models. SMEs must provide emissions indicators."],
          ["Insurance Companies", "Climate-related risk assessment increasingly includes insured companies’ GHG footprint."],
          ["Investors & Funds", "ESG scoring frameworks request basic carbon intensity data from portfolio companies."],
          ["Public Procurement", "Tenders now include environmental scoring criteria requiring carbon indicators."],
          ["Certification & ESG Platforms", "SaaS procurement tools require simplified CO₂e values for vendor onboarding."],
          ["Supply-Chain Platforms", "B2B partners request carbon intensity to meet sustainability reporting obligations."]
        ].map(([title, text]) => (
          <div key={title} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
            <p className="text-sm text-[#475569]">{text}</p>
          </div>
        ))}
      </section>


      {/* REGULATORY PRINCIPLE */}
      <section className="bg-white py-16 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
            EU Regulatory Principle: No Mandatory Format for SMEs
          </h2>

          <p className="text-[#475569] leading-relaxed mb-6">
            Under the EU principle of proportionality applied in CSRD, ESRS and banking
            guidelines (EBA/ECB), <strong>SMEs cannot be forced to use a single specific carbon
            reporting format</strong>. Institutions may request indicators, but must accept:
          </p>

          <ul className="list-disc pl-6 text-sm text-[#475569] space-y-2">
            <li>simplified carbon estimations</li>
            <li>screening-level methodologies</li>
            <li>sector-based emission factors</li>
            <li>equivalent, verifiable documents from third-party providers</li>
          </ul>

          <p className="mt-6 text-sm text-[#0B3A63] font-semibold">
            This means that a bank or partner cannot legally reject your data solely
            because it does not follow their internal template.
          </p>
        </div>
      </section>


      {/* BENEFITS FOR SMEs */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-black text-[#0B3A63] mb-8">Benefits for SMEs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            ["Instant compliance", "Provide required indicators in minutes instead of weeks of consulting work."],
            ["Low cost vs audit", "A full carbon audit costs €3,000–€15,000+. Screening estimation delivers the essentials."],
            ["Accepted everywhere", "Banks, large buyers and ESG platforms only need consistent indicators—not certification."],
            ["Confidential", "All calculations run locally in your browser. No financial data is stored or transmitted."]
          ].map(([title, text]) => (
            <div key={title} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
              <p className="text-sm text-[#475569]">{text}</p>
            </div>
          ))}

        </div>
      </section>


      {/* BACK LINK */}
      <section className="text-center py-12">
        <Link href="/" className="text-[#1FB6C1] font-semibold">
          ← Back to homepage
        </Link>
      </section>

    </div>
  );
          }
