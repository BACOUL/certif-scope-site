import React from "react";
import Link from "next/link";

export default function Legal() {
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
          Legal Notice (Mentions légales)
        </h1>

        <div className="space-y-10">

          {/* 1. EDITOR */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              1. Website Editor
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope is a service operated by:
              <br /><br />
              <strong>TimeProofs — Jeason Alexandre Bacoul</strong><br />
              Entrepreneur individuel<br />
              SIREN: 999356439<br />
              Address: 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France
              <br /><br />
              Contact email: <strong>support@certif-scope.com</strong>
            </p>
          </section>

          {/* 2. HOSTING */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              2. Hosting Provider
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              This site is hosted by Vercel Inc.
              <br /><br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA<br />
              <a
                href="https://vercel.com"
                target="_blank"
                className="text-[#1FB6C1]"
              >
                https://vercel.com
              </a>
            </p>
          </section>

          {/* 3. RESPONSIBILITY */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              3. Responsibility & Liability
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The publisher cannot be held responsible for direct or indirect damage
              resulting from access to the site or use of the information displayed.
              Content may evolve at any time without notice.
            </p>
          </section>

          {/* 4. INTELLECTUAL PROPERTY */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All text, graphics, logos, icons, and structure of the site are protected
              under intellectual property law. Any reproduction or distribution,
              in whole or in part, without authorization is prohibited.
            </p>
          </section>

          {/* 5. PERSONAL DATA */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              5. Personal Data
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope does not store user financial or operational data.
              Calculations are processed locally in the user’s browser.
              <br /><br />
              Only technical metadata (attestation ID + hash) may be stored to allow
              document authenticity verification.
              <br /><br />
              For more details, see our{" "}
              <Link href="/privacy" className="text-[#1FB6C1] underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          {/* 6. CONTACT */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              6. Contact
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For legal or administrative inquiries, contact:
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
