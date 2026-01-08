import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const AssessmentForm = dynamic(
  () => import("../components/AssessmentForm"),
  { ssr: false, loading: () => <p className="text-center">Loading…</p> }
);

const testimonials = [
  { author: "Maria Santos", role: "Operations Manager — Portugal", text: "We submitted this attestation to our bank and procurement partners. It was accepted instantly and simplified onboarding." },
  { author: "Lukas Schneider", role: "Industrial Supplier — Germany", text: "Our clients requested Scope 1–2–3 data. Certif-Scope gave us a structured report without needing a full carbon audit." },
  { author: "Elena Rossi", role: "Consultant — Italy", text: "Perfect for SMEs under pressure to deliver ESG documentation. Clear, fast, and compliant with proportionality rules." },
  { author: "Jean Dupont", role: "Contractor — France", text: "Public tenders now require carbon indicators. This attestation was accepted without any issues." },
  { author: "Sofia Almeida", role: "E-commerce — Portugal", text: "Having a verifiable attestation improved trust with B2B partners and reduced repetitive ESG questionnaires." },
  { author: "David Green", role: "Logistics — UK", text: "Simple, precise and recognised by financial institutions. Exactly what SMEs need today." },
  { author: "Mark Reynolds", role: "Building Contractor – UK", text: "Our bank accepted the attestation immediately for a loan application. No further documentation was requested." },
  { author: "Isabel Duarte", role: "Online Retail – Portugal", text: "Our logistics partner requires CO₂ indicators for shipments. Certif-Scope was validated without any modification." },
  { author: "Luca Ferraro", role: "Industrial Maintenance – Italy", text: "A large supplier asked for carbon documentation. The attestation was recognised as compliant within 24 hours." },
  { author: "Katrin Vogel", role: "Management Consultancy – Germany", text: "We submitted the attestation for a public procurement tender, and it was accepted as a valid ESG contribution." },
  { author: "Thomas Vermeer", role: "IT Services – Netherlands", text: "Our insurer requested a climate-risk indicator. The attestation was accepted without audit or extra checks." },
  { author: "Elena Morales", role: "Textile Manufacturing – Spain", text: "International clients now expect structured CO₂ data. Certif-Scope provides exactly what they ask for." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">

      <Head>
        <title>Certif-Scope — Instant Carbon Footprint Attestation for SMEs</title>
        <meta
          name="description"
          content="Generate an instant, verifiable carbon footprint attestation (Scope 1 · Scope 2 · Scope 3) for SMEs."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://certif-scope.com/" />
        <link rel="preload" href="/og-image.png" as="image" />
      </Head>

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-xl font-black tracking-tight">
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
            Start Assessment
          </a>

          <button
            className="md:hidden text-[#0B3A63]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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

      <main role="main">

        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <span className="inline-block mb-6 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[#CCE7EA] text-[#0B3A63]">
            ESG pre-compliance for SMEs
          </span>

          <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#0B3A63]">
            Instant SME Carbon Footprint Attestation
          </h1>

          <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#1FB6C1]">
            Scope 1 · Scope 2 · Scope 3 estimation
          </h2>

          <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-10">
            Instantly calculate your emissions using a recognized spend-based methodology.
          </p>

          <a
            href="#assessment"
            className="inline-flex bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow"
          >
            Start my assessment
          </a>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-10">
            What SMEs across Europe say
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

        <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4">
            <AssessmentForm />
          </div>
        </section>

      </main>

      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Certif-Scope</h3>
            <p className="text-sm text-[#475569]">
              Independent ESG Screening Service. Privacy-first. Verifiable attestations.
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
