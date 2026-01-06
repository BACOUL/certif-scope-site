import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1E293B]">
      {/* HEADER */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-3">
          <img
            src="/logo-certif-scope.png"
            alt="Certif-Scope"
            className="h-9 w-auto"
          />
        </div>
        <div className="flex gap-6 text-xs font-bold text-[#64748B] uppercase tracking-widest">
          <a href="#how-it-works" className="hover:text-[#1FB6C1]">
            How it works
          </a>
          <a href="#methodology" className="hover:text-[#1FB6C1]">
            Methodology
          </a>
          <Link href="/legal" className="hover:text-[#1FB6C1]">
            Legal
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <span className="inline-block mb-6 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[#E6F6F7] text-[#0B3A63]">
            ESG pre-compliance · SME focused
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#0B3A63]">
            A carbon footprint attestation
            <br />
            <span className="text-[#1FB6C1]">
              finance teams can rely on
            </span>
          </h1>

          <p className="text-xl text-[#475569] leading-relaxed max-w-3xl mx-auto mb-12">
            Generate a standardized, spend-based carbon footprint attestation
            aligned with the <strong>VSME standard</strong> and compatible with
            <strong> CSRD value-chain expectations</strong>.
            <br />
            Designed for banks, corporate buyers and procurement teams.
          </p>

          <a
            href="#assessment"
            className="inline-flex items-center justify-center bg-[#1FB6C1] text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-[#17A2AC] transition"
          >
            Calculate my footprint
          </a>
        </div>
      </header>

      {/* WHY IT MATTERS */}
      <section className="bg-[#E6F6F7] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-[#0B3A63]">
            Why carbon data is now expected
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Even when not legally required under CSRD, SMEs are increasingly
            expected to provide carbon indicators to remain financeable and
            competitive.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Corporate buyers',
              text:
                'Large companies subject to CSRD must report Scope 3 emissions and therefore request carbon data from their suppliers.'
            },
            {
              title: 'Banks & financing',
              text:
                'Financial institutions integrate ESG criteria into credit analysis and increasingly require standardized carbon indicators.'
            },
            {
              title: 'Tenders & procurement',
              text:
                'Public and private tenders now expect documented greenhouse gas emissions as part of supplier evaluation.'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-[#1FB6C1] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#475569]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="max-w-6xl mx-auto py-24 px-6"
      >
        <h2 className="text-3xl font-black mb-16 text-center text-[#0B3A63]">
          How Certif-Scope works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              step: '01',
              title: 'Enter high-level data',
              text:
                'Provide revenue and energy expenses directly in your browser. No raw data leaves your device.'
            },
            {
              step: '02',
              title: 'Instant calculation',
              text:
                'Emissions are estimated instantly using spend-based factors aligned with recognized frameworks.'
            },
            {
              step: '03',
              title: 'Download attestation',
              text:
                'Generate a structured PDF attestation ready to share with banks, buyers or procurement teams.'
            }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-[#1FB6C1] font-black text-4xl mb-6">
                {item.step}
              </div>
              <h3 className="font-bold mb-3 text-[#0B3A63]">
                {item.title}
              </h3>
              <p className="text-sm text-[#475569]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section
        id="methodology"
        className="bg-[#E6F6F7] py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center text-[#0B3A63]">
            Transparent & recognized methodology
          </h2>

          <div className="space-y-8 text-[#334155]">
            <p>
              Certif-Scope relies on a{' '}
              <strong>spend-based estimation approach</strong> inspired by the{' '}
              <strong>GHG Protocol Corporate Standard</strong>.
              Accounting data is matched with official emission factors from the{' '}
              <strong>ADEME Base Empreinte</strong>.
            </p>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#1FB6C1] shadow-sm">
              <h4 className="font-bold mb-3 text-[#0B3A63]">
                Emission scopes covered
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Scope 1:</strong> Direct emissions (fuel, refrigerants)
                </li>
                <li>
                  <strong>Scope 2:</strong> Indirect energy emissions
                  (electricity)
                </li>
                <li>
                  <strong>Scope 3:</strong> Value-chain emissions estimated using
                  sector-based spend factors
                </li>
              </ul>
            </div>

            <p className="text-sm text-[#475569]">
              Results are indicative and intended for pre-compliance and partner
              reporting. They do not replace a regulatory filing or an accredited
              carbon audit.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="assessment"
        className="max-w-4xl mx-auto py-24 px-6"
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black mb-3 text-[#0B3A63]">
            Start your assessment
          </h2>
          <p className="text-[#64748B]">
            Free preview · €99 for the downloadable attestation
          </p>
        </div>

        <AssessmentForm />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B3A63] text-[#CBD5E1] py-12 px-6 text-center">
        <p className="mb-4">
          © 2026 TimeProofs — Jeason Bacoul (Sole Proprietor) · SIREN 999 356 439
        </p>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <Link href="/legal" className="hover:text-white">
            Legal notice
          </Link>
          <Link href="/legal" className="hover:text-white">
            Terms
          </Link>
          <a
            href="mailto:contact@timeproofs.io"
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
              }
