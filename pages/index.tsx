import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { testimonials } from "../components/testimonials";

const AssessmentForm = dynamic(() => import("../components/AssessmentForm"), {
  ssr: false,
  loading: () => <p className="text-center">Loading…</p>
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <Head>
        <title>Certif-Scope — Certified CO₂ Attestation for SMEs (Scope 1 · Scope 2 · Scope 3)</title>

        <meta
          name="description"
          content="Generate a certified carbon footprint attestation instantly. Full Scope 1, Scope 2 and Scope 3 emissions. Accepted by banks, procurement and insurers."
        />

        <meta
          name="keywords"
          content="certified carbon report, CO2 attestation SME, scope 1 2 3 emissions, ESG documentation, procurement compliance, carbon certificate"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://certif-scope.com/en/" />

        <link rel="alternate" href="https://certif-scope.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://certif-scope.com/fr/" hrefLang="fr" />
        <link rel="alternate" href="https://certif-scope.com/de/" hrefLang="de" />
        <link rel="alternate" href="https://certif-scope.com/" hrefLang="x-default" />

        <meta property="og:title" content="Certified CO₂ Attestation for SMEs" />
        <meta
          property="og:description"
          content="Instant CO₂ attestation trusted by banks, procurement and insurers."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {/* ================= HEADER ================ */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-xl font-black">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
            <Link href="/why-required">Why Required</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/verify">Verify</Link>
            <Link href="/legal">Legal</Link>
          </nav>

          <a
            href="#assessment"
            className="hidden md:inline-flex bg-[#1FB6C1] text-white text-xs font-bold px-5 py-3 rounded-lg"
          >
            Generate Attestation
          </a>

          <button className="md:hidden text-[#0B3A63]" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6">
            <nav className="flex flex-col gap-4 text-sm font-semibold text-[#475569]">
              <Link href="/why-required" onClick={() => setMenuOpen(false)}>Why Required</Link>
              <Link href="/methodology" onClick={() => setMenuOpen(false)}>Methodology</Link>
              <Link href="/verify" onClick={() => setMenuOpen(false)}>Verify</Link>
              <Link href="/legal" onClick={() => setMenuOpen(false)}>Legal</Link>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================ */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16 text-center">

        <h1 className="text-4xl md:text-5xl font-black text-[#0B3A63] mb-3 leading-tight">
          Instant Certified Carbon Attestation for SMEs
        </h1>

        <h2 className="text-lg md:text-xl font-semibold text-[#1FB6C1] mb-4">
          Scope 1 • Scope 2 • Scope 3 Emissions
        </h2>

        <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-8">
          Generate a certified carbon footprint attestation instantly.
          Trusted by European banks, procurement teams and insurers.
        </p>

        {/* ---- CTA buttons ---- */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

          <a
            href="#assessment"
            className="bg-[#1FB6C1] text-white font-bold px-8 py-3 rounded-xl shadow text-lg"
          >
            Generate Attestation
          </a>

          <Link
            href="/verify"
            className="bg-[#0B3A63] text-white font-bold px-8 py-3 rounded-xl shadow text-lg"
          >
            Verify Attestation
          </Link>

        </div>

        {/* ---- Proof social simple sans chiffres ---- */}
        <p className="mt-6 text-sm font-medium text-[#0B3A63] opacity-80">
          Trusted by financial institutions and procurement teams across Europe
        </p>

        {/* ---- Link sample ---- */}
        <div className="mt-4 flex flex-col items-center">
          <Link href="/sample-pdf" className="text-sm underline text-[#1FB6C1] font-medium">
            View sample attestation
          </Link>
        </div>

      </section>

      {/* ================= HOW IT WORKS ================ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">How it works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="font-bold text-[#0B3A63] mb-2">1. Enter your data</h3>
            <p className="text-[#475569] text-sm">
              Add annual values per category. No documents required.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="font-bold text-[#0B3A63] mb-2">2. Instant calculation</h3>
            <p className="text-[#475569] text-sm">
              Our engine applies recognized Scope 1–2–3 factors.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="font-bold text-[#0B3A63] mb-2">3. Download your attestation</h3>
            <p className="text-[#475569] text-sm">
              Certified PDF accepted by banks & procurement.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY SMEs USE IT ================ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-10">
          Why European SMEs Use Certif-Scope
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-lg">
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Accepted by banks for financing applications.
          </li>
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Valid for procurement documentation & supplier onboarding.
          </li>
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Used by insurers requiring climate-risk indicators.
          </li>
        </ul>
      </section>

      {/* ================= TESTIMONIALS ================ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          Testimonials from European SMEs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-sm text-[#475569] mb-4">“{t.text}”</p>
              <p className="font-bold text-[#0B3A63]">{t.author}</p>
              <p className="text-xs text-[#64748B]">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= METHODOLOGY ================ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-10">
          Methodology Overview
        </h2>

        <p className="text-center text-[#475569] max-w-3xl mx-auto mb-10">
          Certif-Scope uses a spend-based calculation aligned with the GHG Protocol.
          Emissions are derived from monetary activity and standardized emission factors
          covering Scope 1, Scope 2, and Scope 3.
        </p>
      </section>

      {/* ================= FAQ ================ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          FAQ — Carbon Attestation for SMEs
        </h2>

        <div className="space-y-6 text-[#475569]">

          <details className="bg-white border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-[#0B3A63] cursor-pointer">Is the attestation accepted by banks?</summary>
            <p className="mt-2 text-sm">Yes. Most European banks require a carbon indicator.</p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-[#0B3A63] cursor-pointer">Does it include Scope 3 emissions?</summary>
            <p className="mt-2 text-sm">Yes, using recognized spend-based factors.</p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-[#0B3A63] cursor-pointer">Is it compliant with ESG requirements?</summary>
            <p className="mt-2 text-sm">Yes, aligned with EU proportionality rules.</p>
          </details>
        </div>
      </section>

      {/* ================= FORM SECTION ================ */}
      <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4">
          <AssessmentForm />
        </div>
      </section>

      {/* ================= FOOTER ================ */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Certif-Scope</h3>
            <p className="text-sm text-[#475569]">
              Instant certified carbon footprint attestation for SMEs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Legal</h3>
            <ul className="text-sm text-[#475569] space-y-1">
              <li><Link href="/legal">Legal Notice</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Refund</Link></li>
              <li><Link href="/verify">Verify Attestation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Contact</h3>
            <p className="text-sm text-[#475569]">contact@certif-scope.com</p>
          </div>
        </div>
      </footer>

    </div>
  );
      }
