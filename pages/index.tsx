import { useState } from "react";
import AssessmentForm from "../components/AssessmentForm";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-xl font-black tracking-tight hover:opacity-80 transition-opacity duration-200">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest text-[#64748B]">
              <a href="#how-it-works" className="hover:text-[#1FB6C1]">How it works</a>
              <a href="#regulatory-context" className="hover:text-[#1FB6C1]">CSRD Context</a>
              <a href="#methodology" className="hover:text-[#1FB6C1]">Methodology</a>
              <a href="#faq" className="hover:text-[#1FB6C1]">FAQ</a>
              <Link href="/refund-policy" className="hover:text-[#1FB6C1]">Refund Policy</Link>
              <Link href="/verify" className="text-[#1FB6C1] hover:text-[#17A2AC]">Verify</Link>
              <Link href="/legal" className="hover:text-[#1FB6C1]">Legal</Link>
            </nav>

            <a
              href="#assessment"
              className="bg-[#0D3152] text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-lg hover:bg-[#123d63]"
            >
              Start Assessment
            </a>
          </div>

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
          <div className="md:hidden bg-white border-t border-slate-200">
            <nav className="flex flex-col px-6 py-6 gap-4 text-sm font-semibold text-[#475569]">
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
              <a href="#regulatory-context" onClick={() => setMenuOpen(false)}>CSRD Context</a>
              <a href="#methodology" onClick={() => setMenuOpen(false)}>Methodology</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <Link href="/refund-policy" onClick={() => setMenuOpen(false)}>Refund Policy</Link>
              <Link href="/verify" onClick={() => setMenuOpen(false)}>Verify</Link>
              <Link href="/legal" onClick={() => setMenuOpen(false)}>Legal</Link>
            </nav>
          </div>
        )}
      </header>

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-6 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[#E6F6F7] text-[#0B3A63]">
          ESG pre-compliance for SMEs
        </span>

        <h1 className="text-3xl md:text-5xl font-black mb-6 text-[#0B3A63]">
          Instant SME Carbon Footprint Attestation<br/>
          <span className="text-[#1FB6C1]">Scope 1 · Scope 2 · Scope 3 estimation</span>
        </h1>

        <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-10">
          Instantly calculate your emissions using a recognized spend-based methodology.
          Get a professional PDF attestation for ESG questionnaires, banks and partners.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#assessment"
            className="inline-flex bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-[#17A2AC]"
          >
            Start my assessment
          </a>

          <Link href="/sample-pdf" className="text-sm text-[#64748B] underline decoration-dotted hover:text-[#0B3A63]">
            View sample PDF
          </Link>

          <Link
            href="/verify"
            className="text-sm text-[#64748B] underline decoration-dotted hover:text-[#0B3A63]"
          >
            Verify an existing attestation
          </Link>
        </div>

        <p className="mt-8 text-sm text-[#64748B]">
          Free preview · No account required · Pay only to download the official PDF
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h3 className="text-xl font-bold text-[#0B3A63] mb-6">Why €99 ?</h3>
        <div className="text-sm text-[#475569] max-w-2xl mx-auto space-y-2 leading-relaxed">
          <p>The attestation is a professionally formatted PDF including:</p>
          <div className="font-medium text-[#334155] space-y-1">
            <p>Scope 1, 2 & 3 calculation summary</p>
            <p>Methodology & regulatory context</p>
            <p>Bank-ready format</p>
            <p>Timestamp and unique identifier</p>
            <p>Ready to share with banks and partners</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <section id="regulatory-context" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B3A63] mb-4">
            Why this attestation is now required
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            SMEs now face carbon data requests from clients, banks, insurers and supply-chain partners.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">CSRD & Scope 3</h3>
            <p className="text-sm text-[#475569]">
              Large companies must report Scope 3. Suppliers must provide carbon indicators.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">Banks & ESG risk</h3>
            <p className="text-sm text-[#475569]">
              Carbon exposure is integrated into credit scoring.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">VSME standard</h3>
            <p className="text-sm text-[#475569]">
              EU simplified framework for SMEs to provide consistent carbon indicators.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            ['01', 'Enter your data', 'Only turnover and energy cost required.'],
            ['02', 'Instant estimation', 'Spend-based calculation runs locally.'],
            ['03', 'Download attestation', 'A ready-to-share PDF after payment.']
          ].map(([step, title, text]) => (
            <div key={step}>
              <div className="text-[#1FB6C1] text-3xl font-black mb-4">{step}</div>
              <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
              <p className="text-sm text-[#475569]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="methodology" className="bg-[#E6F6F7] py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-[#334155]">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0B3A63]">
            Methodology
          </h2>

          <p className="text-center max-w-2xl mx-auto">
            Screening-level estimation based on GHG Protocol spend-based principles and ADEME emission factors.
          </p>

          <ul className="bg-white border border-slate-200 rounded-xl p-6 list-disc pl-6 text-sm space-y-2">
            <li><strong>Scope 1:</strong> Direct emissions</li>
            <li><strong>Scope 2:</strong> Indirect energy emissions</li>
            <li><strong>Scope 3:</strong> Upstream/Downstream screening</li>
          </ul>
        </div>
      </section>

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

      <section id="faq" className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-black text-center text-[#0B3A63] mb-10">
          FAQ
        </h2>

        <div className="space-y-6">
          {[
            ['Is this legally binding?', 'No. This is a methodological attestation.'],
            ['Is this accepted by banks?', 'Yes, it provides the indicators they request.'],
            ['Can I edit the PDF?', 'No. The file is locked to preserve authenticity.'],
            ['Is my data stored?', 'No. Everything runs locally.'],
            ['Who is this for?', 'SMEs responding to ESG and banking requests.'],
            ['What do I receive?', 'A downloadable PDF carbon footprint attestation.']
          ].map(([q, a]) => (
            <div key={q} className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-1">{q}</h3>
              <p className="text-sm text-[#475569]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0B3A63] text-[#CBD5E1] py-12 px-6 text-center">
        <p className="mb-4 text-sm font-medium">
          © 2026 Certif-Scope — Independent ESG Service
        </p>

        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <Link href="/legal" className="hover:text-white">Legal</Link>
          <Link href="/refund-policy" className="hover:text-white">Refund Policy</Link>
          <Link href="/verify" className="hover:text-white">Verify</Link>
          <a href="#top" className="hover:text-white">Back to top</a>
        </div>
      </footer>

    </div>
  );
}
