import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-100">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">CERTIF-SCOPE</div>
        <div className="flex gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <Link href="/legal" className="hover:text-blue-600">Conformité</Link>
          <a href="#methode" className="hover:text-blue-600">Méthodologie</a>
        </div>
      </nav>

      {/* HERO : POURQUOI L'ATTESTATION ? */}
      <header className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Votre Bilan Carbone <span className="text-blue-600">Réglementaire</span> en 5 minutes.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Répondez aux exigences de la <strong>Directive CSRD</strong> et du standard européen <strong>VSME</strong>. 
          Une attestation officielle pour vos dossiers bancaires, appels d'offres et rapports de durabilité.
        </p>
      </header>

      {/* SECTION LOI & UTILITÉ */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-4">Obligation CSRD</h3>
            <p className="text-sm text-slate-500">
              La directive (UE) 2022/2464 impose aux PME de fournir des données extra-financières à leurs partenaires commerciaux et financiers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-4">Accès au Crédit</h3>
            <p className="text-sm text-slate-500">
              Les banques exigent désormais un score carbone pour accorder des financements (critères ESG). Certif-Scope fournit le justificatif requis.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-4">Appels d'Offres</h3>
            <p className="text-sm text-slate-500">
              Prenez l'avantage sur vos concurrents en joignant une attestation de gaz à effet de serre (GES) conforme au GHG Protocol.
            </p>
          </div>
        </div>
      </section>

      {/* MÉTHODOLOGIE DE CALCUL EXPLICITE */}
      <section id="methode" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-black mb-8 text-center">Une Méthodologie Certifiée</h2>
        <div className="space-y-6 text-slate-700">
          <p>
            Notre moteur de calcul utilise la <strong>méthode monétaire (Spend-based method)</strong> du <strong>GHG Protocol Corporate Standard</strong>. 
            Nous croisons vos dépenses comptables avec les <strong>facteurs d'émission de la Base Empreinte de l'ADEME</strong>.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
            <h4 className="font-bold mb-2">Détail du calcul :</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Scope 1 :</strong> Émissions directes (Combustibles fossiles, gaz réfrigérants).</li>
              <li><strong>Scope 2 :</strong> Émissions indirectes liées à l'énergie (Électricité).</li>
              <li><strong>Scope 3 :</strong> Chaîne de valeur (Achats de biens et services selon le secteur).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LE FORMULAIRE */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black italic">Commencer l'évaluation</h2>
          <p className="text-slate-400">Gratuit pour tester, 99€ pour l'attestation officielle.</p>
        </div>
        <AssessmentForm />
      </section>

      <footer className="bg-slate-900 text-slate-500 py-12 px-6 text-center">
        <p className="mb-4">© 2026 TimeProofs (EI Jeason Bacoul) - SIREN 999 356 439</p>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <Link href="/legal" className="hover:text-white">Mentions Légales</Link>
          <Link href="/legal" className="hover:text-white">CGV</Link>
          <a href="mailto:contact@timeproofs.io" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}
