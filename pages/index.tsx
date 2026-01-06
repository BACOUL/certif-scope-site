import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-100">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">
          CERTIF-SCOPE
        </div>
        <div className="flex gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#how-it-works" className="hover:text-blue-600">
            How it works
          </a>
          <a href="#methodology" className="hover:text-blue-600">
            Methodology
          </a>
          <Link href="/legal" className="hover:text-blue-600">
            Legal
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          A carbon footprint attestation
          <br />
          <span className="text-blue-600">
            trusted by banks and buyers
          </span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
          Certif-Scope helps SMEs generate a standardized carbon footprint
          attestation aligned with the <strong>VSME standard</strong> and
          compatible with <strong>CSRD value-chain reporting</strong>.
          <br />
          Designed for ESG questionnaires, financing requests and tenders.
        </p>

        <a
          href="#assessment"
          className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Start your assessment
        </a>
      </header>

      {/* WHY IT MATTERS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-black mb-4">
            Why carbon data is now expected
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Even when not directly subject to CSRD, SMEs are increasingly required
            to provide carbon footprint indicators as part of their economic
            relationships.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-blue-600 mb-3">
              Corporate buyers
            </h3>
            <p className="text-sm text-slate-500">
              Large companies subject to CSRD must report Scope 3 emissions and
              increasingly request carbon data from their suppliers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-blue-600 mb-3">
              Banks & financing
            </h3>
            <p className="text-sm text-slate-500">
              Financial institutions integrate ESG criteria into credit analysis
              and often request standardized carbon indicators.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-blue-600 mb-3">
              Tenders & procurement
            </h3>
            <p className="text-sm text-slate-500">
              Public and private tenders increasingly expect documented greenhouse
              gas emissions as part of supplier evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-black mb-12 text-center">
          How Certif-Scope works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-blue-600 font-black text-3xl mb-4">1</div>
            <h3 className="font-bold mb-2">Enter your data</h3>
            <p className="text-sm text-slate-500">
              Provide high-level accounting information (revenue, energy,
              expenses) directly in your browser.
            </p>
          </div>

          <div>
            <div className="text-blue-600 font-black text-3xl mb-4">2</div>
            <h3 className="font-bold mb-2">Automated calculation</h3>
            <p className="text-sm text-slate-500">
              Emissions are calculated instantly using standardized,
              spend-based factors aligned with recognized frameworks.
            </p>
          </div>

          <div>
            <div className="text-blue-600 font-black text-3xl mb-4">3</div>
            <h3 className="font-bold mb-2">Download attestation</h3>
            <p className="text-sm text-slate-500">
              Receive a clear, structured PDF attestation ready to share with
              partners, banks or procurement teams.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section
        id="methodology"
        className="bg-slate-50 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center">
            Transparent & recognized methodology
          </h2>

          <div className="space-y-6 text-slate-700">
            <p>
              The calculation engine relies on a{' '}
              <strong>spend-based estimation method</strong> inspired by the{' '}
              <strong>GHG Protocol Corporate Standard</strong>.
              Accounting expenditures are matched with official emission factors
              from the <strong>ADEME Base Empreinte</strong>.
            </p>

            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold mb-2">Emission scopes covered</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Scope 1:</strong> Direct emissions (fuel, refrigerants).
                </li>
                <li>
                  <strong>Scope 2:</strong> Indirect energy emissions
                  (electricity).
                </li>
                <li>
                  <strong>Scope 3:</strong> Value-chain emissions estimated using
                  sector-based spend factors.
                </li>
              </ul>
            </div>

            <p className="text-sm text-slate-500">
              Results are indicative and designed for pre-compliance and partner
              reporting. They do not replace a full carbon audit conducted by an
              accredited third party.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="assessment"
        className="max-w-4xl mx-auto py-20 px-6"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-2">
            Start your assessment
          </h2>
          <p className="text-slate-400">
            Free simulation · €99 for the downloadable attestation
          </p>
        </div>

        <AssessmentForm />
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-500 py-12 px-6 text-center">
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
