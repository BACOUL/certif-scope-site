import Link from "next/link";

export default function SamplePDF() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* BACK */}
        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1] hover:text-[#17A2AC]"
        >
          ← Back to Certif-Scope
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-black mb-6 text-[#0B3A63]">
          Sample Carbon Footprint Attestation
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          Certif-Scope is a service operated by <strong>TimeProofs</strong>.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Below is a preview of the official attestation generated after payment.
        </p>

        <ul className="text-sm text-slate-700 space-y-1 mb-10">
          <li>• Company identification</li>
          <li>• Scope 1, Scope 2 and Scope 3 indicators</li>
          <li>• Methodology summary</li>
          <li>• Regulatory context</li>
          <li>• Unique attestation ID & timestamp</li>
          <li>• SHA-256 verification hash</li>
        </ul>

        {/* PREVIEW */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-8">
          <h2 className="text-center font-bold text-[#0B3A63] mb-4">
            Visual preview
          </h2>

          <img
            src="/sample-attestation.png"
            alt="Sample Attestation Preview"
            className="w-full rounded-md border"
          />

          <p className="text-center text-xs text-slate-500 mt-2">
            Watermarked preview of the attestation.
          </p>
        </div>

        {/* DOWNLOAD BUTTON */}
        <a
          href="/sample-attestation.png"
          download="sample-attestation.png"
          className="block w-full text-center bg-[#1FB6C1] text-white font-bold py-4 rounded-xl hover:bg-[#17A2AC] transition"
        >
          Download sample attestation
        </a>

        {/* LEGAL LINKS */}
        <div className="mt-10 text-center text-xs text-[#64748B] space-y-1">
          <p>For legal information:</p>
          <p>
            <Link href="/legal" className="text-[#1FB6C1]">Legal Notice</Link> ·{" "}
            <Link href="/privacy" className="text-[#1FB6C1]">Privacy Policy</Link> ·{" "}
            <Link href="/refund-policy" className="text-[#1FB6C1]">Refund Policy</Link>
          </p>
        </div>

      </div>
    </div>
  );
          }
