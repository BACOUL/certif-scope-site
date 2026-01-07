import Link from 'next/link';

export default function Regulation() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* BACK LINK */}
        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1] hover:text-[#17A2AC]"
        >
          ← Back to Certif-Scope
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-black mb-4 text-[#0B3A63]">
          Regulatory context for SME carbon footprint reporting
        </h1>

        <p className="text-sm text-slate-600 mb-12">
          Certif-Scope is a service operated by <strong>TimeProofs</strong>.
        </p>

        <div className="space-y-12 text-[#334155] leading-relaxed">

          {/* CSRD */}
          <section>
            <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
              1. CSRD: what it covers
            </h2>
            <p className="text-sm">
              The Corporate Sustainability Reporting Directive (CSRD) applies
              directly to large and listed companies operating in the European
              Union. It requires them to publish standardized sustainability
              information, including greenhouse gas (GHG) emissions, under the
              European Sustainability Reporting Standards (ESRS).
            </p>
          </section>

          {/* SCOPE 3 */}
          <section>
            <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
              2. Scope 3 and the value chain
            </h2>
            <p className="text-sm mb-3">
              A key requirement of CSRD is the reporting of <strong>Scope 3
              emissions</strong>, which include indirect emissions occurring
              across the entire value chain.
            </p>
            <p className="text-sm">
              As a result, large companies must collect carbon data from their
              suppliers, subcontractors and partners — including SMEs that are
              not themselves subject to CSRD.
            </p>
          </section>

          {/* INDIRECT OBLIGATIONS */}
          <section>
            <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
              3. Indirect obligations for SMEs
            </h2>
            <p className="text-sm mb-3">
              While most SMEs are not legally required to publish a CSRD report,
              they are increasingly requested to provide carbon footprint
              information by:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>Large corporate clients subject to CSRD</li>
              <li>Banks and financial institutions</li>
              <li>Public or private procurement processes</li>
              <li>ESG questionnaires and due diligence requests</li>
            </ul>
          </section>

          {/* VSME */}
          <section>
            <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
              4. The role of the VSME standard
            </h2>
            <p className="text-sm mb-3">
              To address this indirect pressure, European regulators introduced
              the <strong>VSME (Voluntary Sustainability Reporting Standard for
              SMEs)</strong>.
            </p>
            <p className="text-sm">
              VSME provides a simplified and proportionate framework enabling
              SMEs to respond credibly to carbon data requests without the
              complexity of a full CSRD report.
            </p>
          </section>

          {/* WHY ATTESTATION */}
          <section>
            <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
              5. Why a carbon footprint attestation matters
            </h2>
            <p className="text-sm mb-3">
              In practice, SMEs are increasingly expected to provide a
              documented, structured and explainable carbon footprint estimate.
            </p>
            <p className="text-sm">
              A methodological attestation allows SMEs to demonstrate seriousness,
              transparency and alignment with recognized standards, while clearly
              stating the scope and limits of the estimation.
            </p>
          </section>

          {/* LIMITS */}
          <section>
            <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
              6. Scope and limitations
            </h2>
            <p className="text-sm mb-3">
              The Certif-Scope attestation is a <strong>methodological,
              screening-level estimate</strong>. It does not constitute:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>A statutory CSRD filing</li>
              <li>A certified carbon audit</li>
              <li>A regulatory approval or official declaration</li>
            </ul>
            <p className="text-sm mt-3">
              It is designed to support ESG questionnaires, banking due diligence
              and value-chain reporting requests.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-2">
              In summary
            </h2>
            <p className="text-sm">
              Certif-Scope helps SMEs navigate the growing regulatory pressure
              created by CSRD and Scope 3 requirements, by providing a clear,
              proportionate and defensible carbon footprint attestation aligned
              with European expectations.
            </p>
          </section>

          {/* LEGAL LINKS */}
          <div className="pt-6 text-sm text-[#475569]">
            <p>
              For legal and compliance information, see also:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><Link href="/legal" className="text-[#1FB6C1]">Legal Notice</Link></li>
              <li><Link href="/privacy" className="text-[#1FB6C1]">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="text-[#1FB6C1]">Refund Policy</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
          }
