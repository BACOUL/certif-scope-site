export default function Legal() {
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
            Legal Notice
          </h1>

          <p className="text-center text-[#475569] max-w-[700px] mx-auto mb-12">
            Mandatory legal information for the Certif-Scope service, published in accordance with Articles 6-III and 19 of Law n°2004-575 (LCEN).
          </p>

          {/* 1 — Operator */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Operator of the website
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              Certif-Scope is operated by:
              <br /><br />
              <strong>Jeason Alexandre Bacoul</strong><br />
              Entrepreneur Individuel<br />
              SIREN : <strong>999356439</strong><br />
              Adresse : 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France<br />
              Régime TVA : franchise en base – TVA non applicable (article 293 B du CGI)<br />
              Email de contact : <a href="mailto:support@certif-scope.com" className="text-[#1FB6C1]">support@certif-scope.com</a>
            </p>
          </section>

          {/* 2 — Hosting */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Hosting provider
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              The website is hosted by:
              <br /><br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723 – United States<br />
              Website: <a href="https://vercel.com" className="text-[#1FB6C1]" target="_blank">vercel.com</a>
            </p>
          </section>

          {/* 3 — Intellectual Property */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Intellectual property
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              All content published on Certif-Scope (texts, structure, layout, trademarks, logos, design elements) 
              is protected by applicable intellectual property law.  
              Any reproduction, modification or redistribution is prohibited without explicit authorization.
            </p>
          </section>

          {/* 4 — Purpose of the service */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Purpose and nature of the service
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              Certif-Scope provides a simplified carbon estimation based on user-submitted information.  
              The attestation generated is an <strong>informative, non-audited estimation</strong> intended for pre-compliance, vendor qualification, 
              banking ESG scoring, and supply-chain documentation.
              <br /><br />
              It is <strong>not</strong> an official CO₂ audit, <strong>not</strong> a CSRD report, <strong>not</strong> a certification and <strong>not</strong> a regulated assessment.
              It relies entirely on data provided by the user, which the operator cannot verify independently.
            </p>
          </section>

          {/* 5 — Responsibility */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Liability disclaimer
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              The operator cannot be held responsible for:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>incorrect, incomplete, or fraudulent data entered by the user,</li>
              <li>misuse or misinterpretation of the attestation by third parties,</li>
              <li>decisions made by banks, insurers, clients or partners based on the document,</li>
              <li>service interruptions caused by hosting or network failures.</li>
            </ul>

            <p className="text-[#475569] leading-relaxed text-sm mt-3">
              The responsibility of the operator is limited to providing the generated document and maintaining 
              the independent verification system.
            </p>
          </section>

          {/* 6 — External Links */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              External links
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              The website may contain links to external websites.  
              The operator declines any responsibility for their content or accessibility.
            </p>
          </section>

          {/* 7 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Contact
            </h2>
            <p className="text-[#475569] text-sm">
              For any legal request, you may contact:<br />
              <a href="mailto:support@certif-scope.com" className="text-[#1FB6C1] font-semibold">
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
