export default function Terms() {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-[#334155] font-sans" id="top">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] py-4 px-6 md:px-12 z-40 shadow-sm">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <a
              href="/"
              className="text-[#0B3A63] font-semibold hover:text-[#1FB6C1] transition flex items-center gap-2"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4L6 9L12 14" />
              </svg>
              Back to Certif-Scope
            </a>

            <a
              href="/verify"
              className="text-sm text-[#1FB6C1] font-bold hover:text-[#0B3A63]"
            >
              Verify Attestation
            </a>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-[900px] mx-auto pt-14 px-6 md:px-12 pb-28">

          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-10">
            Terms & Refund Policy
          </h1>

          <p className="text-center text-[#475569] max-w-[700px] mx-auto mb-12">
            These terms define the conditions of use of Certif-Scope and the rules applicable to digital
            attestation purchases. They comply with EU digital services and consumer protection legislation.
          </p>

          {/* 1 — Service Definition */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              1. Nature of the service
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope provides a simplified CO₂ estimation based on user-provided information.
              The generated document is an <strong>informative attestation</strong> designed for ESG questionnaires,
              banks, insurers, procurement platforms and supply-chain partners.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              It is <strong>not</strong> an official audit, <strong>not</strong> a CSRD report, <strong>not</strong> a certified assessment,
              and <strong>not</strong> a regulated verification.  
              Calculations depend entirely on the accuracy of the information entered by the user.
            </p>
          </section>

          {/* 2 — Digital Product Delivery */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              2. Digital delivery
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              The attestation is delivered instantly in digital format (PDF) after payment.
              Download is immediate and automatic.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              As defined by EU Directive 2011/83/EU on consumer rights, the right of withdrawal does not apply
              once the user explicitly requests immediate access to a digital product.
            </p>
          </section>

          {/* 3 — Refund Policy */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              3. Refund policy
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Due to the nature of instant digital delivery, <strong>no refunds are possible</strong> once the PDF has
              been generated and made available for download.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              Refunds are only possible in the following exceptional situations:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>double payment or duplicate order</li>
              <li>technical error preventing file generation</li>
              <li>payment processed but no download available</li>
            </ul>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              All refund requests must be submitted to:  
              <a
                href="mailto:contact@timeproofs.io"
                className="text-[#1FB6C1] font-semibold"
              >
                contact@timeproofs.io
              </a>
            </p>
          </section>

          {/* 4 — User Responsibility */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              4. User responsibility
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              The user is solely responsible for the accuracy of the data entered.  
              Certif-Scope cannot modify, validate or verify inputs provided by the user.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              Any consequences arising from incorrect, incomplete or unverifiable inputs remain the sole responsibility of the user.
            </p>
          </section>

          {/* 5 — Liability Limitations */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              5. Liability limitations
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope cannot be held liable for:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>user-submitted incorrect or fraudulent data</li>
              <li>interpretation or usage of the attestation by third parties</li>
              <li>decisions by banks, insurers or partners based on the document</li>
              <li>service interruptions or hosting failures</li>
            </ul>
          </section>

          {/* 6 — Payment Processing */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              6. Payment processing
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Payments are securely processed by Stripe.  
              Certif-Scope does not store credit card information or banking details.
            </p>
          </section>

          {/* 7 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Contact
            </h2>

            <p className="text-[#475569] text-sm">
              For questions about terms or refund requests:<br />
              <a
                href="mailto:contact@timeproofs.io"
                className="text-[#1FB6C1] font-semibold"
              >
                contact@timeproofs.io
              </a>
            </p>
          </section>

          {/* Back to top */}
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
