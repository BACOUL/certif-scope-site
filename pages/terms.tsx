import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Refund Policy — Certif-Scope</title>

        <meta
          name="description"
          content="Terms of use and refund policy for Certif-Scope. Learn about digital delivery, non-refundable policy, user responsibility, and EU-compliant consumer rights."
        />

        <link rel="canonical" href="https://certif-scope.com/terms" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="Terms & Refund Policy — Certif-Scope" />
        <meta
          property="og:description"
          content="Read the full terms of use and refund rules for digital attestation purchases."
        />
        <meta property="og:url" content="https://certif-scope.com/terms" />
        <meta property="og:type" content="article" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Terms & Refund Policy",
              url: "https://certif-scope.com/terms",
              description:
                "Terms and refund conditions applicable to Certif-Scope, including EU digital content rules and refund exceptions.",
              publisher: {
                "@type": "Organization",
                name: "Certif-Scope",
                url: "https://certif-scope.com"
              }
            })
          }}
        />
      </Head>

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
            attestation purchases. They comply with EU digital content and consumer protection regulations.
          </p>

          {/* 1 — Service Definition */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              1. Nature of the service
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope provides a simplified CO₂ estimation based on user-provided information.
              The generated document is an <strong>informative attestation</strong> intended for ESG questionnaires,
              banks, insurers, procurement platforms and supply-chain partners.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              It is <strong>not</strong> a CSRD-compliant report, <strong>not</strong> a certified carbon audit,
              and <strong>not</strong> a regulated verification.  
              Calculations rely entirely on the data entered by the user.
            </p>
          </section>

          {/* 2 — Digital Product Delivery */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              2. Digital delivery
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              The attestation is generated instantly in digital PDF format once payment is confirmed.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              In accordance with EU Directive 2011/83/EU, the right of withdrawal does not apply once
              the user requests immediate digital delivery and acknowledges the resulting waiver.
            </p>
          </section>

          {/* 3 — Refund Policy */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              3. Refund policy
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Due to instant digital delivery, <strong>no refunds are possible</strong> once the PDF has been generated.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              Refunds are only granted in exceptional cases:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>duplicate payment</li>
              <li>payment processed but file not generated</li>
              <li>technical failure preventing successful download</li>
            </ul>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              Refund requests must be submitted to:  
              <a
                href="mailto:support@certif-scope.com"
                className="text-[#1FB6C1] font-semibold"
              >
                support@certif-scope.com
              </a>
            </p>
          </section>

          {/* 4 — User Responsibility */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              4. User responsibility
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              The user is fully responsible for the accuracy, completeness and reliability of the data entered.
            </p>

            <p className="text-sm text-[#475569] mt-4 leading-relaxed">
              Certif-Scope cannot verify or correct submitted values.  
              Any consequences resulting from inaccurate data are the responsibility of the user.
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
              <li>incorrect or fraudulent user inputs</li>
              <li>misinterpretation of the attestation by third parties</li>
              <li>decisions made by banks, insurers or partners</li>
              <li>hosting outages or network interruptions</li>
            </ul>
          </section>

          {/* 6 — Payment Processing */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              6. Payment processing
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Payments are securely processed by Stripe.  
              No banking data is stored by Certif-Scope.
            </p>
          </section>

          {/* 7 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Contact
            </h2>

            <p className="text-[#475569] text-sm">
              For questions or refund requests:<br />
              <a
                href="mailto:support@certif-scope.com"
                className="text-[#1FB6C1] font-semibold"
              >
                support@certif-scope.com
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
