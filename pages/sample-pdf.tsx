import React from "react";
import Link from "next/link";

export default function SamplePDF() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1] hover:text-[#17A2AC]"
        >
          ← Back to Certif-Scope
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-6 text-[#0B3A63]">
          Sample Carbon Footprint Attestation
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          Below is a preview of the official attestation PDF that you receive after completing the assessment and
          processing payment.  
          The sample includes the same structure as the generated version:
        </p>

        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mb-10">
          <li>Company identification</li>
          <li>Scope 1, Scope 2 and Scope 3 indicators</li>
          <li>Methodology summary</li>
          <li>Regulatory context</li>
          <li>Unique attestation ID</li>
          <li>Timestamp and SHA-256 verification hash</li>
        </ul>

        {/* PDF IMAGE PREVIEW */}
        <div className="bg-white border border-slate-200 rounded-xl shadow p-6 mb-10 text-center">
          <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
            Visual preview (low resolution)
          </h2>

          <img
            src="/sample-pdf-preview.png"
            alt="Sample PDF preview"
            className="w-full border rounded-lg shadow"
          />

          <p className="text-xs text-slate-500 mt-3">
            This is a visual extract for demonstration only.  
            Layout and formatting in the generated PDF are full-quality.
          </p>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="text-center">
          <a
            href="/sample-attestation.pdf"
            download
            className="inline-block bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#17A2AC] transition"
          >
            Download sample PDF
          </a>
        </div>

        {/* FOOTER NOTICE */}
        <p className="text-xs text-slate-500 text-center mt-8">
          The downloadable sample is static.  
          Your real attestation will include a unique UUID, timestamp and cryptographic hash.
        </p>

      </div>
    </div>
  );
}
