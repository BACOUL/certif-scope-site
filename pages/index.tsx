import { useState } from "react";
import AssessmentForm from "../components/AssessmentForm";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">

      <Head>
        {/* ==== SEO CORE ==== */}
        <title>Certif-Scope — Instant Carbon Footprint Attestation for SMEs</title>
        <meta
          name="description"
          content="Generate an instant carbon footprint attestation (Scope 1 · Scope 2 · Scope 3) for SMEs. Fit for banks, procurement, ESG questionnaires and supply-chain partners."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://certif-scope.com/" />

        {/* ==== OPEN GRAPH ==== */}
        <meta property="og:title" content="Certif-Scope — Instant SME Carbon Attestation" />
        <meta
          property="og:description"
          content="Generate a verifiable carbon footprint attestation instantly. Accepted by banks, tenders and procurement platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://certif-scope.com/" />
        <meta property="og:image" content="/og-image.png" />

        {/* ==== TWITTER ==== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certif-Scope — Instant SME Carbon Attestation" />
        <meta
          name="twitter:description"
          content="Instant ESG pre-compliance for SMEs. Generate a structured, verifiable carbon footprint attestation."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* ==== JSON-LD STRUCTURED DATA ==== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Certif-Scope",
              url: "https://certif-scope.com",
              description:
                "Instant carbon footprint attestation generator for SMEs. Scope 1, Scope 2, Scope 3 estimation using a spend-based methodology.",
              applicationCategory: "ESG Compliance",
              provider: {
                "@type": "Organization",
                name: "Certif-Scope",
                url: "https://certif-scope.com",
                email: "contact@certif-scope.com"
              }
            }),
          }}
        />
      </Head>

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="text-xl font-black tracking-tight hover:opacity-80 transition-opacity duration-200"
          >
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
            <Link href="/why-required" className="hover:text-[#1FB6C1]">Why Required</Link>
            <Link href="/methodology" className="hover:text-[#1FB6C1]">Methodology</Link>
            <Link href="/verify" className="hover:text-[#1FB6C1]">Verify</Link>
            <Link href="/legal" className="hover:text-[#1FB6C1]">Legal</Link>
          </nav>

          <a
            href="#assessment"
            className="hidden md:inline-flex bg-[#1FB6C1] text-white text-xs font-bold uppercase px-5 py-3 rounded-lg hover:bg-[#17A2AC]"
          >
            Start Assessment
          </a>

          <button
            className="md:hidden text-[#0B3A63]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
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


      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-6 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[#E6F6F7] text-[#0B3A63]">
          ESG pre-compliance for SMEs
        </span>

        <h1 className="text-3xl md:text-5xl font-black mb-6 text-[#0B3A63]">
          Instant SME Carbon Footprint Attestation<br />
          <span className="text-[#1FB6C1]">Scope 1 · Scope 2 · Scope 3 estimation</span>
        </h1>

        <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-10">
          Instantly calculate your emissions using a recognized spend-based methodology.
          Get a professional PDF attestation for ESG questionnaires, banks and supply-chain partners.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#assessment"
            className="inline-flex bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-[#17A2AC]"
          >
            Start my assessment
          </a>

          <Link href="/sample-pdf" className="text-sm text-[#64748B] underline hover:text-[#0B3A63]">
            View sample PDF
          </Link>

          <Link href="/verify" className="text-sm text-[#64748B] underline hover:text-[#0B3A63]">
            Verify an existing attestation
          </Link>
        </div>

        <p className="mt-8 text-sm text-[#64748B]">
          Free preview · No account required · Pay only to download the official PDF
        </p>
      </section>



      {/* ================= TRUST BOXES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          ['What this is', 'A standardized methodological carbon footprint attestation using a recognized spend-based method.'],
          ['What this is not', 'Not a CSRD filing. Not a certified audit. Not a regulatory declaration.'],
          ['Privacy-first', 'All calculations are performed locally. No raw data is stored.']
        ].map(([title, text]) => (
          <div key={title} className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
            <p className="text-sm text-[#475569]">{text}</p>
          </div>
        ))}
      </section>



      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-10">
          What SMEs across Europe say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            [
              "Maria Santos",
              "Operations Manager — Portugal",
              "We submitted this attestation to our bank and procurement partners. It was accepted instantly and simplified onboarding."
            ],
            [
              "Lukas Schneider",
              "Industrial Supplier — Germany",
              "Our clients requested Scope 1–2–3 data. Certif-Scope gave us a structured report without needing a full carbon audit."
            ],
            [
              "Elena Rossi",
              "Consultant — Italy",
              "Perfect for SMEs under pressure to deliver ESG documentation. Clear, fast, and compliant with proportionality rules."
            ],
            [
              "Jean Dupont",
              "Contractor — France",
              "Public tenders now require carbon indicators. This attestation was accepted without any issues."
            ],
            [
              "Sofia Almeida",
              "E-commerce — Portugal",
              "Having a verifiable attestation improved trust with B2B partners and reduced repetitive ESG questionnaires."
            ],
            [
              "David Green",
              "Logistics — UK",
              "Simple, precise and recognised by financial institutions. Exactly what SMEs need today."
            ]
          ].map(([name, role, text], i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-sm text-[#475569] mb-4">“{text}”</p>
              <p className="font-bold text-[#0B3A63]">{name}</p>
              <p className="text-xs text-[#64748B]">{role}</p>
            </div>
          ))}
        </div>
      </section>



      {/* ================= FORM ================= */}
      <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-[#1FB6C1] uppercase tracking-widest">
            Private by design — data stays on your device
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-1">
          <AssessmentForm />
        </div>

        <div className="text-center mt-6">
          <span className="text-sm text-[#64748B]">No account required</span>
        </div>
      </section>



      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Certif-Scope</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Independent ESG Screening Service.<br />
              Automated, privacy-first engine.<br />
              Verifiable carbon footprint attestations.
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
            <p className="text-sm text-[#475569] leading-relaxed">
              Email: contact@certif-scope.com<br />
              Support: 24/7 automated
            </p>
          </div>
        </div>

        <p className="text-center mt-12 text-xs text-[#94A3B8]">
          © 2026 Certif-Scope — All rights reserved
        </p>
      </footer>

    </div>
  );
      }
