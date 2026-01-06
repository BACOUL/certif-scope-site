import Head from 'next/head';
import AssessmentForm from '../components/AssessmentForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Head>
        <title>Certif-Scope | Fast Carbon Assessment</title>
        <meta name="description" content="Get your CSRD compliant carbon certificate in 5 minutes" />
      </Head>

      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl">
            Certif-Scope
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Professional Carbon Assessment for European SMEs
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm font-medium text-blue-600">
            <span>✓ EU CSRD Compliant</span>
            <span>✓ 5-Minute Process</span>
            <span>✓ 99€ Flat Fee</span>
          </div>
        </header>

        <section id="assessment-tool">
          <AssessmentForm />
        </section>

        <footer className="mt-20 border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Certif-Scope Europe. Method: GHG Protocol Spend-based Assessment.</p>
        </footer>
      </main>
    </div>
  );
}
