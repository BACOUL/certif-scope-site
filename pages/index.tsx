import { useState } from 'react';
import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-[#64748B]">
            <a href="#how-it-works" className="hover:text-[#1FB6C1]">How it works</a>
            <a href="#regulatory-context" className="hover:text-[#1FB6C1]">Regulation</a>
            <a href="#methodology" className="hover:text-[#1FB6C1]">Methodology</a>
            <a href="#faq" className="hover:text-[#1FB6C1]">FAQ</a>
            <Link href="/legal" className="hover:text-[#1FB6C1]">Legal</Link>
          </nav>

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
              <a href="#regulatory-context" onClick={() => setMenuOpen(false)}>Regulation</a>
              <a href="#methodology" onClick={() => setMenuOpen(false)}>Methodology</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
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
          A carbon footprint attestation<br />
          <span className="text-[#1FB6C1]">for real-world decisions</span>
        </h1>

        <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-10">
          Generate a standardized, spend-based carbon footprint attestation
          aligned with the <strong>VSME standard</strong> and compatible with
          <strong> CSRD value-chain expectations</strong>.
        </p>

        <a
          href="#assessment"
          className="inline-flex bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-[#17A2AC] transition"
        >
          Start my assessment
        </a>

        <div className="mt-6">
          <a
            href="https://buy.stripe.com/test_5kQ9ATf031jK6EidNd1kA00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white border border-[#1FB6C1] text-[#1FB6C1] font-bold px-6 py-3 rounded-xl hover:bg-[#E6F6F7] transition"
          >
            Test Stripe payment (€99)
          </a>
        </div>

        <p className="mt-4 text-sm text-[#64748B]">
          No account · No data storage · Payment only if you download the attestation
        </p>
      </section>

      {/* ================= TRUST ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          ['What this is', 'A standardized methodological carbon footprint attestation for ESG and procurement.'],
          ['What this is not', 'Not a CSRD filing. Not a certified audit. Not a regulatory declaration.'],
          ['Privacy-first', 'All calculations are performed locally. No raw data is stored.']
        ].map(([title, text]) => (
          <div key={title} className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
            <p className="text-sm text-[#475569]">{text}</p>
          </div>
        ))}
      </section>

      {/* ================= REGULATION ================= */}
      <section id="regulatory-context" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B3A63] mb-4">
            Why this attestation is now required
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Even when not directly subject to CSRD, SMEs are increasingly required
            to provide carbon data due to regulatory pressure on larger entities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">CSRD & Scope 3</h3>
            <p className="text-sm text-[#475569]">
              Large companies must report Scope 3 emissions, forcing suppliers and SMEs
              to provide reliable carbon indicators.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">Banks & ESG risk</h3>
            <p className="text-sm text-[#475569]">
              Financial institutions increasingly integrate carbon exposure
              into credit and risk assessment.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">VSME standard</h3>
            <p className="text-sm text-[#475569]">
              A simplified and proportionate framework designed specifically for SMEs.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            ['01', 'Enter your data', 'Revenue and energy expenses only.'],
            ['02', 'Instant estimation', 'Spend-based calculation using recognized factors.'],
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

      {/* ================= METHODOLOGY ================= */}
      <section id="methodology" className="bg-[#E6F6F7] py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-[#334155]">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0B3A63]">
            Methodology
          </h2>

          <p>
            Spend-based estimation inspired by the <strong>GHG Protocol</strong>,
            using official emission factors from <strong>ADEME Base Empreinte</strong>.
          </p>

          <ul className="bg-white border border-slate-200 rounded-xl p-6 list-disc pl-6 text-sm space-y-2">
            <li><strong>Scope 1:</strong> Direct emissions</li>
            <li><strong>Scope 2:</strong> Indirect energy emissions</li>
            <li><strong>Scope 3:</strong> Value-chain emissions (screening level)</li>
          </ul>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
        <AssessmentForm />
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-black text-center text-[#0B3A63] mb-10">
          FAQ
        </h2>

        <div className="space-y-6">
          {[
            ['Is this legally binding?', 'No. This is a methodological attestation.'],
            ['Is my data stored?', 'No. All calculations run locally.'],
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

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0B3A63] text-[#CBD5E1] py-12 px-6 text-center">
        <p className="mb-4">
          © 2026 TimeProofs — Jeason Bacoul · SIREN 999 356 439
        </p>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <Link href="/legal" className="hover:text-white">Legal notice</Link>
          <a href="#top" className="hover:text-white">Back to top</a>
          <a href="mailto:contact@timeproofs.io" className="hover:text-white">Contact</a>
        </div>
      </footer>

    </div>
  );
           }
