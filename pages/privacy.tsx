import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Certif-Scope</title>

        <meta
          name="description"
          content="Certif-Scope operates with a strict no-storage policy. No financial data, company information, emissions results, or personal identifiers are collected or retained."
        />

        <link rel="canonical" href="https://certif-scope.com/privacy" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="Privacy Policy — Certif-Scope" />
        <meta
          property="og:description"
          content="Learn how Certif-Scope ensures GDPR compliance with a strict no-data-storage architecture."
        />
        <meta property="og:url" content="https://certif-scope.com/privacy" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://certif-scope.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy — Certif-Scope" />
        <meta
          name="twitter:description"
          content="Certif-Scope does not collect or store user data. All calculations run locally in your browser."
        />
        <meta name="twitter:image" content="https://certif-scope.com/og-image.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivacyPolicy",
              name: "Certif-Scope Privacy Policy",
              url: "https://certif-scope.com/privacy",
              description:
                "Certif-Scope operates with a strict no-storage policy and performs all calculations locally, ensuring maximum GDPR compliance.",
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
            <a href="/verify" className="text-sm text-[#1FB6C1] font-bold hover:text-[#0B3A63]">
              Verify Attestation
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-[900px] mx-auto pt-14 px-6 md:px-12 pb-28">

          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-10">
            Privacy Policy
          </h1>

          <p className="text-center text-[#475569] max-w-[700px] mx-auto mb-12">
            This privacy policy explains how Certif-Scope handles information in compliance with EU law,
            using a strict <strong>no-storage</strong> architecture. The service operates fully without
            collecting or retaining user data.
          </p>

          {/* 1 — Data handling principles */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              1. Data handling principles
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              Certif-Scope follows a privacy-first model:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>No account creation</li>
              <li>No cookies for tracking or analytics</li>
              <li>No user profiling</li>
              <li>No retention of assessment inputs</li>
              <li>No transmission of calculation inputs to servers</li>
            </ul>

            <p className="text-sm text-[#475569] mt-4">
              All calculations occur locally in the user’s browser.
            </p>
          </section>

          {/* 2 — Data not stored */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              2. Information that is not stored
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope does <strong>not</strong> store:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>company name</li>
              <li>sector/industry information</li>
              <li>revenue or expenditure inputs</li>
              <li>electricity or fuel values</li>
              <li>calculated emissions (Scopes 1, 2, 3)</li>
              <li>pdf data or document content</li>
              <li>IP addresses or device identifiers</li>
            </ul>
          </section>

          {/* 3 — Stored data */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              3. What data is stored
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Only the <strong>attestation ID</strong> and its <strong>SHA-256 integrity hash</strong>
              are stored for verification purposes.
            </p>

            <p className="text-sm text-[#475569] mt-3">
              No personal or business data is linked to this registry entry.
            </p>

            {/* REQUIRED GDPR CLARIFICATION ADDED */}
            <p className="text-sm text-[#475569] mt-3">
              These technical elements are kept indefinitely for verification purposes unless a removal request is submitted by the user.
              This storage is justified under GDPR Art. 6(1)(c) and Art. 6(1)(f), as it is required to ensure attestation authenticity.
            </p>
          </section>

          {/* 4 — Legal basis */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              4. Legal basis under GDPR
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Under GDPR (Regulation 2016/679), the following principles apply:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li><strong>Art. 6(1)(b)</strong> — minimal processing required to generate the attestation</li>
              <li><strong>Art. 6(1)(c)</strong> — ESG pre-compliance documentation</li>
              <li><strong>Art. 5(1)(c)</strong> — strict minimisation of processed data</li>
              <li><strong>Art. 5(1)(e)</strong> — no storage beyond necessity</li>
            </ul>
          </section>

          {/* 5 — Third-party services */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              5. Third-party services
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope does not use analytics, tracking, advertising networks, or third-party monitoring tools.
            </p>

            <p className="text-sm text-[#475569] mt-3 leading-relaxed">
              Payments (if applicable) are securely processed by Stripe.  
              Certif-Scope does not store credit card or billing information.
            </p>
          </section>

          {/* 6 — User rights */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              6. User rights under GDPR
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Since no personal data is stored, most GDPR rights (access, rectification, deletion)
              do not apply. Users may however request:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>review of registry entries linked to an attestation ID</li>
              <li>removal of an entry upon justified request</li>
            </ul>
          </section>

          {/* 7 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Contact
            </h2>
            <p className="text-[#475569] text-sm">
              For privacy-related questions:<br />
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
