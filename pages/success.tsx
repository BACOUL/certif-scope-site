import React, { useEffect, useState } from "react";

export default function SuccessPage() {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [pdfData, setPdfData] = useState<string | null>(null);
  const [attestationId, setAttestationId] = useState<string | null>(null);
  const [hash, setHash] = useState<string | null>(null);
  const [verifyUrl, setVerifyUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("certif-scope-report");
      if (stored) setReport(JSON.parse(stored));
    } catch (e) {
      console.error("Failed to load stored report", e);
    }
  }, []);

  async function handleGeneratePDF() {
    if (!report) {
      setError("No report found. Please restart the assessment.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/attestation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "PDF generation failed");
      }

      setPdfData(data.pdfBase64);
      setAttestationId(data.id);
      setHash(data.hash);
      setVerifyUrl(data.verifyUrl);

      const link = document.createElement("a");
      link.href = `data:application/pdf;base64,${data.pdfBase64}`;
      link.download = "certif-scope-attestation.pdf";
      link.click();
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  function copy(value: string, type: "id" | "hash") {
    navigator.clipboard.writeText(value);
    if (type === "id") {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 1500);
    } else {
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 1500);
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">

      <h1 className="text-3xl font-black text-center text-[#0B3A63] mb-6">
        Payment confirmed — your certified attestation is ready
      </h1>

      <p className="text-center text-[#475569] mb-10 text-sm">
        Your CO₂ attestation has been calculated successfully.
        Click the button below to generate and download your certified PDF.
        <br />
        <span className="text-[#1FB6C1]">
          Do not close this page until the download completes.
        </span>
      </p>

      {!report && (
        <div className="text-center text-red-600 text-lg font-semibold">
          No report found — please restart the assessment.
        </div>
      )}

      {report && (
        <div className="bg-white rounded-2xl shadow border p-8 space-y-6">

          {/* SUMMARY */}
          <h2 className="text-xl font-bold text-[#0B3A63]">Summary</h2>

          <p><strong>Company:</strong> {report.companyName}</p>
          <p><strong>Sector:</strong> {report.sector}</p>
          <p><strong>Total emissions:</strong> {report.total} tCO₂e</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 p-4 rounded-xl text-center">
              <p className="text-xs text-slate-500">Scope 1</p>
              <p className="text-2xl font-bold text-[#0B3A63]">{report.scope1}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-center">
              <p className="text-xs text-slate-500">Scope 2</p>
              <p className="text-2xl font-bold text-[#0B3A63]">{report.scope2}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-center">
              <p className="text-xs text-slate-500">Scope 3</p>
              <p className="text-2xl font-bold text-[#0B3A63]">{report.scope3}</p>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <button
            onClick={handleGeneratePDF}
            disabled={loading}
            className="w-full bg-[#1FB6C1] text-white font-bold py-4 rounded-xl hover:bg-[#17A2AC] transition"
          >
            {loading ? "Generating PDF…" : "Download certified PDF"}
          </button>

          {error && (
            <p className="text-red-600 text-center font-semibold">{error}</p>
          )}

          {/* DETAILS AFTER GENERATION */}
          {pdfData && (
            <div className="pt-6 border-t mt-6 space-y-4">
              <h3 className="text-lg font-bold text-[#0B3A63]">Attestation details</h3>

              <div className="flex items-center gap-3">
                <p><strong>ID:</strong> {attestationId}</p>
                <button
                  onClick={() => copy(attestationId!, "id")}
                  className="text-xs px-2 py-1 bg-slate-200 rounded hover:bg-slate-300"
                >
                  {copiedId ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <p><strong>SHA-256:</strong> {hash}</p>
                <button
                  onClick={() => copy(hash!, "hash")}
                  className="text-xs px-2 py-1 bg-slate-200 rounded hover:bg-slate-300"
                >
                  {copiedHash ? "Copied!" : "Copy"}
                </button>
              </div>

              {verifyUrl && (
                <p>
                  <strong>Verification link:</strong>{" "}
                  <a
                    href={verifyUrl}
                    target="_blank"
                    className="text-[#1FB6C1] underline"
                  >
                    {verifyUrl}
                  </a>
                </p>
              )}

              {/* Manual fallback */}
              <div className="mt-4">
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = `data:application/pdf;base64,${pdfData}`;
                    link.download = "certif-scope-attestation.pdf";
                    link.click();
                  }}
                  className="text-sm text-[#1FB6C1] underline"
                >
                  Download again (fallback)
                </button>
              </div>
            </div>
          )}

          {/* VERIFY DIRECT CTA */}
          {attestationId && hash && (
            <div className="mt-6 text-center">
              <a
                href={`/verify?id=${attestationId}&hash=${hash}`}
                className="inline-block text-sm font-semibold text-[#0B3A63] hover:text-[#1FB6C1] underline"
              >
                Verify this attestation →
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
                                  }
