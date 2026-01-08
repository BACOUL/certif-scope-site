import Head from "next/head";

export default function Legal() {
  return (
    <>
      <Head>
        <title>Legal Notice — Certif-Scope</title>

        <meta
          name="description"
          content="Mandatory legal notice for Certif-Scope: operator identification, hosting provider, liabilities, service nature, and contact information."
        />

        <link rel="canonical" href="https://certif-scope.com/legal" />
        <meta name="robots" content="index, follow" />

        {/* OG */}
        <meta property="og:title" content="Legal Notice — Certif-Scope" />
        <meta
          property="og:description"
          content="Official legal information for the Certif-Scope service: operator identity, hosting, responsibilities and disclaimer."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://certif-scope.com/legal" />
        <meta property="og:image" content="https://certif-scope.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certif-Scope — Legal Notice" />
        <meta
          name="twitter:description"
          content="Official legal information for the Certif-Scope platform."
        />
        <meta name="twitter:image" content="https://certif-scope.com/og-image.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://certif-scope.com/legal",
              description:
                "Mandatory legal notice for the Certif-Scope automated carbon estimation service.",
              publisher: {
                "@type": "Organization",
                name: "Certif-Scope"
              }
            }),
          }}
        />
      </Head>

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
            Legal Notice
          </h1>

          <p className="text-center text-[#475569] max-w-[700px] mx-auto mb-12">
            Mandatory legal information for the Certif-Scope service, published in accordance with Articles 6-III and 19 of Law n°2004-575 (LCEN).
          </p>

          {/* 1 — Operator */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Operator of the website</h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              Certif-Scope is operated by:<br /><br />
              <strong>Jeason Alexandre Bacoul</strong><br />
              Entrepreneur Individuel<br />
              SIREN : <strong>999356439</strong><br />
              Registered office: 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France<br />
              VAT regime: franchise en base — VAT not applicable (Article 293 B of the CGI)<br />
              Contact email:{" "}
              <a href="mailto:support@certif-scope.com" className="text-[#1FB6C1]">
                support@certif-scope.com
              </a>
            </p>
          </section>

          {/* 2 — Hosting */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Hosting provider</h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              The website is hosted by:<br /><br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723 — United States<br />
              Website:{" "}
              <a href="https://vercel.com" className="text-[#1FB6C1]" target="_blank">
                vercel.com
              </a>
            </p>
          </section>

          {/* 3 — Intellectual Property */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Intellectual property</h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              All content published on Certif-Scope (text, structure, logos, layout, design)
              is protected by applicable intellectual property laws.
              Any reproduction, modification, or redistribution is prohibited without prior written consent.
            </p>
          </section>

          {/* 4 — Purpose */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Purpose of the service</h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              Certif-Scope provides a simplified greenhouse gas estimation based solely on information entered by the user.
              The generated attestation is an <strong>informative, non-audited estimation</strong> intended for pre-compliance, 
              supplier qualification and ESG-related requests.<br /><br />
              It is <strong>not</strong> a CO₂ audit, <strong>not</strong> a CSRD declaration, <strong>not</strong> a certification, and <strong>not</strong> an accredited assessment.
            </p>
          </section>

          {/* 5 — Liability */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Liability disclaimer</h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              The operator cannot be held responsible for:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>incorrect or fraudulent data entered by the user,</li>
              <li>misuse or misinterpretation by third parties,</li>
              <li>decisions made by banks, insurers, clients or partners based on the attestation,</li>
              <li>service interruptions due to hosting or network issues.</li>
            </ul>

            <p className="text-[#475569] leading-relaxed text-sm mt-3">
              The operator’s responsibility is limited exclusively to generating the document 
              and maintaining the independent verification system.
            </p>
          </section>

          {/* 6 — External links */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">External links</h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              External links may appear on the website.  
              The operator declines responsibility for their content, accuracy, or availability.
            </p>
          </section>

          {/* 7 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Contact</h2>
            <p className="text-[#475569] text-sm">
              For any legal inquiry, please contact:<br />
              <a href="mailto:support@certif-scope.com" className="text-[#1FB6C1] font-semibold">
                support@certif-scope.com
              </a>
            </p>
          </section>

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
