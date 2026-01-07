import React, { useEffect, useState } from "react";

export default function SuccessPage() {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [pdfData, setPdfData] = useState<string | null>(null);
  const [attestationId, setAttestationId] = useState<string | null>(null);
  const [hash, setHash] = useState<string | null>(null);
  const [verifyUrl, setVerifyUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load previously stored report
  useEffect(() => {
    try {
      const stored = localStorage.getItem("certif-scope-report");
      if (stored) {
        setReport(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load stored report", e);
    }
  }, []);

  // Generate PDF via backend
  const handleGeneratePDF = async () => {
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

      // Trigger automatic download
      const link = document.createElement("a");
      link.href = `data:application/pdf;base64,${data.pdfBase64}`;
      link.download = "certif-scope-attestation.pdf";
      link.click();

    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-[#0B3A63] text-center mb-8">
        Payment confirmed — Your attestation is ready
      </h1>

      {!report && (
        <div className="text-center text-red-600 text-lg">
          No report data found. Please redo the evaluation.
        </div>
      )}

      {report && (
        <div className="bg-white rounded-2xl shadow border p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#0B3A63]">Summary</h2>

          <p><strong>Company:</strong> {report.companyName}</p>
          <p><strong>Sector:</strong> {report.sector}</p>
          <p><strong>Estimated total:</strong> {report.total} tCO₂e</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 p-4 rounded-xl text-center">
              <p className="text-xs text-slate-500">Scope 1</p>
              <p className="text-xl font-bold text-[#0B3A63]">{report.scope1}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl text-center">
              <p className="text-xs text-slate-500">Scope 2</p>
              <p className="text-xl font-bold text-[#0B3A63]">{report.scope2}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl text-center">
              <p className="text-xs text-slate-500">Scope 3</p>
              <p className="text-xl font-bold text-[#0B3A63]">{report.scope3}</p>
            </div>
          </div>

          <button
            onClick={handleGeneratePDF}
            disabled={loading}
            className="w-full bg-[#1FB6C1] text-white font-bold py-4 rounded-xl"
          >
            {loading ? "Generating PDF…" : "Download attestation PDF"}
          </button>

          {error && (
            <p className="text-red-600 text-center font-semibold">{error}</p>
          )}

          {pdfData && (
            <div className="pt-6 border-t mt-6">
              <h3 className="text-lg font-bold">Attestation details</h3>

              <p><strong>ID:</strong> {attestationId}</p>
              <p><strong>SHA-256:</strong> {hash}</p>

              {verifyUrl && (
                <p>
                  <strong>Verification:</strong>{" "}
                  <a href={verifyUrl} target="_blank" className="text-blue-600 underline">
                    {verifyUrl}
                  </a>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
                }
