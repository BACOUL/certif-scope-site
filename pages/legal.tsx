import React from 'react';
import Link from 'next/link';

export default function LegalScope() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* BACK */}
        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1] hover:text-[#17A2AC]"
        >
          ← Back to Certif-Scope
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-black mb-12 text-[#0B3A63]">
          Legal Scope & Limitations
        </h1>

        <div className="space-y-10">

          {/* 1. NATURE OF THE ATTESTATION */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              1. Nature of the Attestation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The Certif-Scope attestation is an <strong>indicative estimation</strong> of
              greenhouse gas emissions based on financial expenditure data voluntarily
              submitted by the user. Calculations are performed using a standardized
              <strong>spend-based methodology</strong>, commonly used for rapid carbon
              screening and pre-compliance reporting.
              <br /><br />
              This attestation is <strong>not</strong> an official certification, audit,
              or regulatory declaration.
            </p>
          </section>

          {/* 2. NON-AUDIT / NON-CSRD */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              2. Non-audit / Non-CSRD Statement
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope does <strong>not</strong> provide CSRD-compliant sustainability
              statements, certified GHG Protocol audits, or ISO 14064 verifications.
              <br /><br />
              Companies subject to regulatory reporting must rely on accredited
              third-party auditors or certified carbon assessors.
            </p>
          </section>

          {/* 3. LIMITATIONS OF THE METHODOLOGY */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              3. Methodological Limitations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The spend-based method provides a high-level estimation and may differ
              from activity-based methods requiring precise quantities (kWh, litres,
              kilometres, tonnes, etc.).
              <br /><br />
              Sectors such as manufacturing, heavy industry, construction, and transport
              may exhibit higher variability due to operational intensity and supply
              chain structure.
            </p>
          </section>

          {/* 4. LIABILITY & RESPONSIBILITY */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              4. Liability & User Responsibility
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope cannot be held liable for incorrect, incomplete, or misleading
              information provided by the user. The accuracy of the estimation is
              entirely dependent on the validity of the input data.
              <br /><br />
              The attestation must not be used as legally binding evidence of emissions
              or regulatory compliance without independent verification.
            </p>
          </section>

          {/* 5. USE OF THE ATTESTATION */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              5. Permitted Uses
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              This attestation may be shared with:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 leading-relaxed mt-2">
              <li>Banks and financial partners</li>
              <li>Insurers</li>
              <li>Clients and procurement platforms</li>
              <li>Investors or ESG evaluators</li>
              <li>Business partners requesting carbon information</li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              It serves solely as an <strong>informative indicator</strong> or
              <strong> pre-compliance document</strong>, not as a certified verification.
            </p>
          </section>

          {/* 6. DATA HANDLING & CONFIDENTIALITY */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              6. Data Handling & Confidentiality
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope does not permanently store personal or financial data.
              Calculations are processed ephemerally. Only technical identifiers
              (attestation ID + hash) may be retained to enable document integrity
              verification.
              <br /><br />
              No business data is stored, resold, or transferred to third parties.
            </p>
          </section>

          {/* 7. VERIFICATION LOGIC */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              7. Document Verification
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Each attestation includes:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 leading-relaxed mt-2">
              <li>A unique identifier (UUID)</li>
              <li>A SHA-256 cryptographic hash</li>
              <li>A verification QR code linking to the integrity check page</li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              Verification confirms that the document has not been altered, but does
              not validate input accuracy.
            </p>
          </section>

          {/* 8. THIRD-PARTY REVIEW DISCLAIMER */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              8. Third-Party Review Disclaimer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Banks, insurers, procurement teams, or investors must interpret the
              attestation as an <strong>estimate only</strong>.  
              Any certified reporting must be based on an independently verified
              carbon assessment.
            </p>
          </section>

        </div>

        {/* FOOTER */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
          Last updated: January 2026
        </div>
      </div>
    </div>
  );
            }
