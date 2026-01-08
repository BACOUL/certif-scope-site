export default function Terms() {
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

        {/* CONTENT */}
        <div className="max-w-[900px] mx-auto pt-14 px-6 md:px-12 pb-28">

          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-10">
            Terms & Refund Policy
          </h1>

          <p className="text-center text-[#475569] max-w-[700px] mx-auto mb-12">
            These Terms apply to the use of Certif-Scope and to the purchase of digital attestations.  
            By generating or downloading an attestation, you agree to these terms.
          </p>

          {/* 1 — Nature of the service */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">1. Nature of the Service</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope provides a simplified CO₂ estimation based solely on user-submitted information.  
              The generated attestation is:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>an informative, non-audited estimation,</li>
              <li>not a regulated carbon audit,</li>
              <li>not a CSRD-compliant report,</li>
              <li>not a certified lifecycle analysis,</li>
              <li>not independently verified by a third party.</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              All calculations are performed locally in the user's browser.  
              The operator cannot verify the authenticity or accuracy of the data entered by the user.
            </p>
          </section>

          {/* 2 — Payment and pricing */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">2. Payment & Pricing</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Payment is required only when downloading the official PDF attestation.  
              Processing is handled exclusively by <strong>Stripe</strong>.  
              Certif-Scope never stores or receives credit card information.
            </p>
          </section>

          {/* 3 — Digital content and EU refund rules */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              3. Refund Policy — Digital Content (EU Law)
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Under Directive (EU) 2011/83, the right of withdrawal does <strong>not</strong> apply to digital goods delivered immediately after purchase.
            </p>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              Since the attestation is:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>generated instantly,</li>
              <li>downloaded immediately,</li>
              <li>non-revocable and uniquely hashed,</li>
              <li>technically impossible to "return",</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              The purchase is considered <strong>final and non-refundable</strong>.
            </p>
          </section>

          {/* 4 — User responsibility */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              4. User Responsibility
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Users are fully responsible for the accuracy of the data they enter.  
              Certif-Scope cannot verify or correct input data and cannot be held liable for:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>false, incorrect or incomplete information provided by the user,</li>
              <li>interpretations made by banks, insurers or clients,</li>
              <li>decisions taken by third parties based on the attestation.</li>
            </ul>
          </section>

          {/* 5 — Verification registry */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">5. Verification Registry</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Only the following information is stored to enable independent verification:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li><strong>Attestation ID</strong></li>
              <li><strong>SHA-256 hash</strong> of the PDF</li>
              <li><strong>Timestamp</strong> of issuance</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              No personal or business data is stored.
            </p>
          </section>

          {/* 6 — Limitation of liability */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              6. Limitation of Liability
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              The operator’s liability is strictly limited to providing the generated PDF and maintaining  
              a functional verification mechanism.  
              No guarantee is given regarding acceptance of the document by third parties.
            </p>
          </section>

          {/* 7 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Contact
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              For questions related to these Terms or the Refund Policy:<br />
              <a href="mailto:contact@certif-scope.com" className="text-[#1FB6C1] font-semibold">
                contact@certif-scope.com
              </a>
            </p>
          </section>

          {/* BACK TO TOP */}
          <div className="text-center mt-10 mb-16">
            <a href="#top" className="text-[#1FB6C1] hover:text-[#0B3A63] font-semibold">
              Back to top ↑
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
