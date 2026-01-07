import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl md:text-4xl font-black mb-12 text-[#0B3A63]">
          Privacy Policy
        </h1>

        <div className="space-y-10">

          {/* 1. DATA MINIMIZATION */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              1. Data Minimization Principle
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope only processes the minimum amount of information necessary
              to provide the service. No personal, financial, or operational data
              is permanently stored on servers.
            </p>
          </section>

          {/* 2. LOCAL PROCESSING */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              2. Local Processing of Input Data
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All carbon footprint calculations are performed <strong>locally</strong>
              in the user’s browser. No raw business data (revenue, expenses,
              energy bills, activity details, etc.) is transmitted or stored by Certif-Scope.
            </p>
          </section>

          {/* 3. TECHNICAL METADATA */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              3. Technical Data Stored for Verification
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To enable document authenticity verification, Certif-Scope may store:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
              <li>Attestation ID (UUID)</li>
              <li>Cryptographic hash (SHA-256) of the PDF</li>
              <li>Timestamp of generation</li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              These technical identifiers do not contain sensitive or personal data.
            </p>
          </section>

          {/* 4. NO THIRD-PARTY SHARING */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              4. No Third-Party Sharing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope does not sell, rent, share, or transfer any user data to
              third parties. No tracking cookies, analytics scripts, or advertising
              technologies are used.
            </p>
          </section>

          {/* 5. PAYMENT SECURITY */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              5. Payment Security (Stripe)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Payments are processed securely via <strong>Stripe</strong>.
              Certif-Scope never receives or stores card details.
            </p>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Stripe is fully PCI-DSS compliant and responsible for all sensitive
              payment processing.
            </p>
          </section>

          {/* 6. DATA RETENTION */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              6. Data Retention and Deletion
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope retains only technical identifiers necessary for
              verifying the integrity of an attestation. No other data is stored.
              <br /><br />
              Users may request deletion of attestation metadata by contacting:
              <strong> contact@timeproofs.io</strong>
            </p>
          </section>

          {/* 7. USER RIGHTS */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              7. User Rights (GDPR)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Under GDPR, users have the right to request:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
              <li>Access to stored technical identifiers</li>
              <li>Correction of incorrect entries (ID/hash)</li>
              <li>Deletion of stored metadata</li>
            </ul>
          </section>

          {/* 8. CONTACT */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              8. Contact
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For privacy-related questions:
              <br />
              <strong>contact@timeproofs.io</strong>
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
