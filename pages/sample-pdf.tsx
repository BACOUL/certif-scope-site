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

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Below is a preview of the official attestation PDF that you receive
          after completing the assessment and processing payment.
        </p>

        <ul className="text-sm text-slate-700 space-y-1 mb-10">
          <li>• Company identification</li>
          <li>• Scope 1, Scope 2 and Scope 3 indicators</li>
          <li>• Methodology summary</li>
          <li>• Regulatory context</li>
          <li>• Unique attestation ID</li>
          <li>• Timestamp and SHA-256 verification hash</li>
        </ul>

        {/* PREVIEW IMAGE */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-8">
          <h2 className="text-center font-bold text-[#0B3A63] mb-4">
            Visual preview (low resolution)
          </h2>

          <img
            src="/sample-attestation.png"
            alt="Sample Attestation Preview"
            className="w-full rounded-md border"
          />

          <p className="text-center text-xs text-slate-500 mt-2">
            This is a visual extract for demonstration only.
          </p>
        </div>

        {/* DOWNLOAD BUTTON */}
        <a
          href="/sample-attestation.png"
          download="sample-attestation.png"
          className="block w-full text-center bg-[#1FB6C1] text-white font-bold py-4 rounded-xl hover:bg-[#17A2AC] transition"
        >
          Download sample PDF
        </a>

      </div>
    </div>
  );
}
