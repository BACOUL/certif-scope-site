import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">

          <div className="text-2xl font-black tracking-tight text-center md:text-left">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </div>

          <nav className="flex gap-6 text-xs font-bold uppercase tracking-widest text-[#64748B]">
            <a href="#how-it-works" className="hover:text-[#1FB6C1] transition">
              How it works
            </a>
            <a href="#methodology" className="hover:text-[#1FB6C1] transition">
              Methodology
            </a>
            <a href="#faq" className="hover:text-[#1FB6C1] transition">
              FAQ
            </a>
            <Link href="/legal" className="hover:text-[#1FB6C1] transition">
              Legal
            </Link>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-6 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[#E6F6F7] text-[#0B3A63]">
          ESG pre-compliance for SMEs
        </span>

        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-[#0B3A63]">
          A carbon footprint attestation
          <br />
          <span className="text-[#1FB6C1]">
            for real-world decisions
          </span>
        </h1>

        <p className="text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto mb-10">
          Generate a standardized, spend-based carbon footprint attestation
          aligned with the <strong>VSME standard</strong> and compatible with
          <strong> CSRD value-chain expectations</strong>.
        </p>

        <a
          href="#assessment"
          className="inline-flex items-center justify-center bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-[#17A2AC] transition"
        >
          Start my assessment
        </a>

        <p className="mt-4 text-sm text-[#64748B]">
          No account · No data storage · €99 only if you download the attestation
        </p>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">
              What this is
            </h3>
            <p className="text-sm text-[#475569]">
              A standardized, methodological carbon footprint attestation
              designed for ESG reporting, partner questionnaires and procurement.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">
              What this is not
            </h3>
            <p className="text-sm text-[#475569]">
              Not a CSRD filing. Not a certified audit. Not a regulatory
              declaration.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-[#0B3A63] mb-2">
              Privacy-first
            </h3>
            <p className="text-sm text-[#475569]">
              All calculations are performed locally in your browser.
              No raw data is transmitted or stored.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B3A63]">
            How it works
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            ['01', 'Enter your data', 'Revenue and energy expenses only.'],
            ['02', 'Instant estimation', 'Spend-based calculation using recognized factors.'],
            ['03', 'Download attestation', 'A ready-to-share PDF after payment.']
          ].map(([step, title, text]) => (
            <div key={step}>
              <div className="text-[#1FB6C1] font-black text-3xl mb-4">{step}</div>
              <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
              <p className="text-sm text-[#475569]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="bg-[#E6F6F7] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center text-[#0B3A63]">
            Methodology
          </h2>

          <div className="space-y-6 text-[#334155]">
            <p>
              Certif-Scope applies a <strong>spend-based estimation method</strong>
              inspired by the <strong>GHG Protocol</strong>, using emission factors
              from the <strong>ADEME Base Empreinte</strong>.
            </p>

            <ul className="bg-white rounded-xl border border-slate-200 p-6 list-disc pl-6 text-sm space-y-2">
              <li><strong>Scope 1:</strong> Direct emissions</li>
              <li><strong>Scope 2:</strong> Indirect energy emissions</li>
              <li><strong>Scope 3:</strong> Value-chain emissions</li>
            </ul>

            <p className="text-sm text-[#475569]">
              Results are indicative and intended for pre-compliance and partner
              reporting only.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B3A63]">
            Start your assessment
          </h2>
          <p className="text-[#64748B] mt-2">
            Free preview · €99 only if you download the attestation
          </p>
        </div>

        <AssessmentForm />
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-black mb-10 text-center text-[#0B3A63]">
          FAQ
        </h2>

        <div className="space-y-6">
          {[
            ['Is this legally binding?', 'No. This is a methodological attestation for reporting purposes.'],
            ['Is my data stored?', 'No. All calculations run locally in your browser.'],
            ['Who is this for?', 'SMEs responding to ESG requests from banks or clients.'],
            ['What do I receive?', 'A downloadable PDF carbon footprint attestation.']
          ].map(([q, a], i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-1">{q}</h3>
              <p className="text-sm text-[#475569]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B3A63] text-[#CBD5E1] py-12 px-6 text-center">
        <p className="mb-4">
          © 2026 TimeProofs — Jeason Bacoul (Sole Proprietor) · SIREN 999 356 439
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
