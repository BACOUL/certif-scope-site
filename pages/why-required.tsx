import Head from "next/head";

export default function WhyRequired() {
  return (
    <>
      <Head>
        <title>Why Carbon Attestation is Required — Certif-Scope</title>

        <meta
          name="description"
          content="Learn why banks, insurers, supply-chain partners, procurement platforms and large companies now request CO₂ indicators from SMEs. CSRD, ESRS, proportionality, and EU regulatory context explained in a simple structured format."
        />

        <link rel="canonical" href="https://certif-scope.com/why-required" />
        <meta name="robots" content="index, follow" />

        {/* OG / SOCIAL */}
        <meta property="og:title" content="Why Carbon Attestation is Required — Certif-Scope" />
        <meta
          property="og:description"
          content="SMEs across Europe now must provide carbon indicators to banks, insurers, tenders and supply-chain partners. Understand why and how Certif-Scope meets EU criteria."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://certif-scope.com/why-required" />
        <meta property="og:image" content="https://certif-scope.com/og-image.png" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Carbon Attestation is Required" />
        <meta
          name="twitter:description"
          content="Understand why European SMEs must now provide carbon footprint data to major stakeholders."
        />
        <meta name="twitter:image" content="https://certif-scope.com/og-image.png" />

        {/* STRUCTURED DATA FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why do SMEs need to provide carbon data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Banks, insurers, procurement platforms and large corporations now require structured CO₂ indicators for ESG scoring and CSRD supply-chain compliance."
                  }
                },
                {
                  "@type": "Question",
                  name: "Is there an official EU format for SME carbon reporting?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Under EU proportionality rules, simplified and reasonable CO₂ estimates are accepted for SMEs."
                  }
                },
                {
                  "@type": "Question",
                  name: "Can a bank refuse Certif-Scope?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Banks can request carbon data, but cannot force SMEs to follow a proprietary format. Any structured, traceable estimate must be accepted."
                  }
                }
              ]
            }),
          }}
        />
      </Head>

      {/* ============================================= PAGE CONTENT ============================================= */}

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

        {/* MAIN BLOCK */}
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10 pt-10 px-6 md:px-12">

          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-4">
            Why this attestation is now required
          </h1>

          <p className="text-sm text-center text-[#1FB6C1] uppercase tracking-widest font-bold mb-4">
            Required by clients, banks, insurers and supply-chain partners
          </p>

          <div className="text-center mb-6">
            <a href="/#assessment"
              className="inline-block bg-[#1FB6C1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#17A2AC]">
              Generate my CO₂ attestation
            </a>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0B3A63]">
            Why SME carbon data is now systematically requested
          </h2>

          <h3 className="text-center text-[#475569] text-base font-medium mt-2">
            A structural shift driven by CSRD, banking ESG scoring and supply-chain compliance
          </h3>

          <p className="text-center text-[#475569] max-w-[800px] mx-auto">
            European SMEs face a growing number of carbon data requests from banks, insurers, clients, investors and supply-chain partners. There is currently no single mandatory EU format for SMEs—yet all major actors now expect a structured CO₂ indicator.
          </p>

          <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-6 text-sm leading-relaxed shadow-sm">
            <strong>TL;DR:</strong><br />
            SMEs must increasingly provide carbon indicators because large companies, banks, insurers and procurement platforms require them for compliance.<br />
            EU law does not impose a mandatory format — any structured and verifiable CO₂ indicator must be accepted.
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold mt-6">
            <a href="#actors" className="text-[#1FB6C1] hover:text-[#0B3A63]">7 actors</a>
            <a href="#regulation" className="text-[#1FB6C1] hover:text-[#0B3A63]">Regulations</a>
            <a href="#benefits" className="text-[#1FB6C1] hover:text-[#0B3A63]">SME benefits</a>
            <a href="#top" className="text-[#1FB6C1] hover:text-[#0B3A63]">Top ↑</a>
          </div>

          {/* ================ 7 ACTORS BLOCK ================ */}

          <section className="bg-[#F8FAFC] py-20 px-6 md:px-12 rounded-xl">
            <h2 id="actors" className="text-2xl font-black text-[#0B3A63] mb-10">
              The 7 major actors requesting carbon data from SMEs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                ["Large Corporations / Supply-Chain", "They need supplier data for mandatory Scope 3 reporting under CSRD."],
                ["Procurement Platforms", "Carbon indicators are now required in purchasing systems."],
                ["Banks & Financial Institutions", "ESG indicators influence credit scoring and risk exposure."],
                ["Insurance Companies", "Climate exposure impacts underwriting and premiums."],
                ["Investors & Funds", "They assess governance quality and long-term risk."],
                ["B2B Clients", "They request emissions data for vendor qualification."],
                ["Public Tenders", "ESG scoring and carbon documentation are selection criteria."]
              ].map(([title, text]) => (
                <div key={title} className="bg-white border border-[#E2E8F0] rounded-[14px] p-5 shadow-sm hover:shadow-md hover:-translate-y-1">
                  <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
                  <p className="text-sm text-[#475569]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TIMELINE */}
          <div className="text-center mt-10 mb-16">
            <p className="text-sm text-[#475569] mb-3">These requirements have accelerated since 2023 :</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-[#64748B]">
              {["2023: CSRD enters into force", "2024: ESRS technical standards applied", "2025: Supplier data mandatory for large groups"]
                .map((t, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#1FB6C1] rounded-full mb-2"></div>
                    {t}
                  </div>
                ))}
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <table className="w-full text-sm border border-[#E2E8F0] rounded-xl overflow-hidden">
            <thead className="bg-[#E6F6F7] text-[#0B3A63] font-bold">
              <tr>
                <th className="p-3 border-r border-[#E2E8F0]">Large companies (CSRD)</th>
                <th className="p-3">SMEs</th>
              </tr>
            </thead>
            <tbody className="text-[#475569]">
              <tr>
                <td className="p-3 border-r border-[#E2E8F0]">Mandatory detailed reporting (Scope 1, 2, 3)</td>
                <td className="p-3">Only simplified indicators required</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-[#E2E8F0]">Audits and formal controls</td>
                <td className="p-3">No audit required under proportionality</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-[#E2E8F0]">ESRS full compliance</td>
                <td className="p-3">“Reasonable and accessible” data accepted</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-black text-[#0B3A63] mt-4">
            Legal foundation in EU regulations
          </h2>

          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-6 mt-6 shadow-sm text-sm text-[#065F46]">
            <strong>Important clarification:</strong><br />
            There is no legally mandated EU format for SME carbon reporting.
            SMEs may submit simplified estimates as long as they are structured, traceable and proportionate.
          </div>

          <blockquote className="border-l-4 border-[#1FB6C1] pl-4 py-3 text-sm text-[#475569] italic bg-[#F8FAFC] rounded-md">
            “SMEs may provide reasonable and proportionate estimates.  
            No mandatory audit or certified methodology shall be required.”
            <br />
            — ESRS E1, Appendix B (European Commission)
          </blockquote>

          <section className="bg-white py-20 px-6 md:px-12">
            <h2 id="regulation" className="text-2xl font-black text-[#0B3A63] mb-6">
              European Regulatory Framework
            </h2>

            <p className="text-[#475569] mb-10">
              Several EU regulations explain why carbon indicators are becoming universal requirements — without imposing a strict methodology on SMEs.
            </p>

            {[
              [
                "CSRD Directive (2022/2464)",
                "Large companies must report Scope 1, 2 and 3 emissions. This requires supplier data, but SMEs are not forced into audits or a specific format.",
                "Directive (EU) 2022/2464 — Article 19a(2), Article 29a(2)"
              ],
              [
                "ESRS E1 & E1-4 Technical Standards",
                "ESRS require emissions data from supply chains. SMEs may provide simplified and proportionate estimates.",
                "ESRS E1 Appendix B"
              ],
              [
                "EU Principle of Proportionality (Art. 6 ESRS)",
                "SMEs cannot be required to produce documents exceeding their resources.",
                "ESRS General Requirements — Art. 6"
              ],
              [
                "No mandatory EU carbon format for SMEs",
                "There is no official or certified PDF format required for SMEs. Any structured indicator must be accepted.",
                ""
              ],
              [
                "Can a bank refuse this attestation?",
                "Banks may request data, but cannot impose a proprietary format under proportionality and non-discrimination rules.",
                ""
              ]
            ].map(([title, body, ref]) => (
              <div key={title} className="mb-8">
                <h3 className="text-xl font-bold text-[#0B3A63] mb-2">{title}</h3>
                <p className="text-[#475569]">{body}</p>
                {ref && <p className="text-[#475569] mt-2 text-sm italic">Reference: {ref}</p>}
              </div>
            ))}

          </section>

          {/* BENEFITS SECTION */}
          <section className="bg-[#F8FAFC] py-14 px-6 md:px-12 rounded-xl mt-10">
            <h2 id="benefits" className="text-2xl font-black text-[#0B3A63] mb-6 text-center">
              Why this benefits SMEs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                ["Avoid project rejection", "Many clients reject offers without a carbon indicator."],
                ["Improve credit scoring", "Banks integrate carbon exposure into financing decisions."],
                ["Remain eligible for tenders", "Public and private tenders increasingly require ESG data."],
                ["Stay competitive in supply-chains", "Large corporations request consistent supplier emissions data."]
              ].map(([title, body]) => (
                <div key={title} className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
                  <p className="text-sm text-[#475569]">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ACCEPTANCE BLOCK */}
          <section className="bg-white py-16 px-6 md:px-12 rounded-xl mt-16">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-6 text-center">
              Accepted across all major stakeholder categories
            </h2>

            <p className="text-center text-[#475569] max-w-[800px] mx-auto mb-10">
              This attestation provides the exact indicators required by banks, insurers, supply-chain partners,
              procurement platforms, investors and clients. It complies with EU proportionality rules.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#475569]">
              {[
                "Banks: accepted in ESG credit scoring requests",
                "Insurance companies: accepted for climate-risk underwriting",
                "Procurement platforms: matches standard CO₂ indicator fields",
                "Large corporations: aligns with CSRD supplier data requirements",
                "Public tenders: accepted as “proportionate CO₂ disclosure”",
                "B2B clients and partners: used for vendor qualification"
              ].map((item, i) => (
                <li key={i} className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
                  ✔ {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-[#E6F6F7] border border-[#BAE6FD] rounded-xl p-6 text-[#0B3A63] text-base text-center">
              This attestation consolidates all required indicators into a single structured, verifiable document.  
              It complies with EU proportionality rules and is accepted across all major stakeholder categories.
            </div>

            <div className="text-center mt-10">
              <a href="/#assessment"
                className="inline-block bg-[#1FB6C1] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#17A2AC]">
                Generate my CO₂ attestation
              </a>
            </div>

            <div className="text-center mt-4">
              <a href="/verify"
                className="text-[#1FB6C1] font-semibold hover:text-[#0B3A63]">
                Verify an attestation →
              </a>
            </div>

            <div className="text-center mt-6 mb-14">
              <a href="#top" className="text-[#1FB6C1] hover:text-[#0B3A63] font-semibold">
                Back to top ↑
              </a>
            </div>

          </section>

        </div>
      </div>

      <style jsx>{`
        #actors, #regulation, #benefits {
          scroll-margin-top: 120px;
        }
      `}</style>
    </>
  );
                }
