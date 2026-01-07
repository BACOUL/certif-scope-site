import React from 'react';
import Link from 'next/link';

export default function RefundPolicy() {
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
        <h1 className="text-3xl md:text-4xl font-black mb-4 text-[#0B3A63]">
          Refund Policy
        </h1>

        <p className="text-sm text-slate-600 mb-10">
          Certif-Scope is a service operated by <strong>TimeProofs</strong>.
        </p>

        <div className="space-y-10">

          {/* 1. General Statement */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              1. Digital Service Refund Conditions
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope provides an instantly delivered digital service.  
              Once the payment is confirmed, the carbon footprint attestation is
              generated automatically and made available for immediate download.
            </p>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              According to EU Directive 2011/83/UE on consumer rights, the right of
              withdrawal does <strong>not apply</strong> to digital content or services
              delivered immediately with the user’s prior consent.
            </p>
          </section>

          {/* 2. Instant Delivery Confirmation */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              2. Instant Delivery Confirmation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              By ordering a Certif-Scope attestation, the user explicitly agrees that:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-2 leading-relaxed">
              <li>The service is executed immediately upon payment.</li>
              <li>The PDF attestation is generated automatically after confirmation.</li>
              <li>No withdrawal or cancellation is possible once generation has started.</li>
            </ul>
          </section>

          {/* 3. Non-refundable Items */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              3. Non-refundable Situations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The following situations are <strong>not eligible</strong> for refunds:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-2 leading-relaxed">
              <li>Attestation generated successfully.</li>
              <li>User entered incorrect information voluntarily or by mistake.</li>
              <li>PDF downloaded but not used by the customer or third party.</li>
              <li>Partner, bank, or insurer requests a different format or additional information.</li>
            </ul>
          </section>

          {/* 4. Refund Exceptions */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              4. Exceptional Refund Cases
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Refunds may be considered only in exceptional cases where:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-2 leading-relaxed">
              <li>No attestation was generated due to a technical system failure.</li>
              <li>The payment was duplicated by mistake (double charge).</li>
            </ul>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              These situations will be reviewed manually by support.
            </p>
          </section>

          {/* 5. Contact */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              5. Contact for Refund-related Requests
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For refund-related inquiries (technical failure only), please contact:
              <br />
              <strong>support@certif-scope.com</strong>
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
