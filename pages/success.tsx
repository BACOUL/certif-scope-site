import { useEffect, useState } from "react";
import Link from "next/link";

export default function Success() {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [attestationId, setAttestationId] = useState("");
  const [hash, setHash] = useState("");
  const [pdfBase64, setPdfBase64] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("certif-scope-report");
    if (data) {
      setReport(JSON.parse(data));
      setReady(true);
    }
  }, []);

  const generatePDF = async () => {
    if (!report) return;

    setLoading(true);

    const res = await fetch("/api/attestation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(report),
    });

    if (!res.ok) {
      setLoading(false);
      alert("Error generating attestation.");
      return;
    }

    const json = await res.json();

    setAttestationId(json.id);
    setHash(json.hash);
    setPdfBase64(json.pdfBase64);

    // cleanup for security
    localStorage.removeItem("certif-scope-report");

    setLoading(false);
  };

  const downloadPDF = () => {
    if (!pdfBase64) return;

    const link = document.createElement("a");
    link.href = "data:application/pdf;base64," + pdfBase64;
    link.download = "certif-scope-attestation.pdf";
    link.click();
  };

  if (!ready) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto text-center py-20 px-6">
      <h1 className="text-3xl font-bold text-[#0B3A63]">Payment confirmed ✓</h1>

      <p className="mt-4 text-slate-600">
        Your official carbon footprint attestation is ready for generation.
      </p>

      <div className="mt-10 bg-white border rounded-xl p-6 shadow-md">
        <p className="text-sm text-slate-500">Company</p>
        <p className="font-bold text-[#0B3A63]">{report.companyName}</p>

        <p className="mt-4 text-sm text-slate-500">Total footprint</p>
        <p className="text-3xl font-extrabold text-[#0B3A63]">
          {report.total} tCO₂e
        </p>
      </div>

      {!pdfBase64 && (
        <button
          onClick={generatePDF}
          disabled={loading}
          className="mt-10 w-full bg-[#1FB6C1] text-white font-bold py-4 rounded-xl hover:bg-[#17A2AC] transition disabled:opacity-50"
        >
          {loading ? "Generating PDF…" : "Generate official PDF"}
        </button>
      )}

      {pdfBase64 && (
        <>
          <button
            onClick={downloadPDF}
            className="mt-10 w-full bg-[#1FB6C1] text-white font-bold py-4 rounded-xl hover:bg-[#17A2AC] transition"
          >
            Download attestation PDF
          </button>

          <div className="mt-8 bg-white border rounded-xl p-6 text-left shadow">
            <h3 className="text-lg font-bold text-[#0B3A63] mb-2">
              Attestation details
            </h3>

            <p className="text-xs text-slate-500">Attestation ID</p>
            <p className="font-mono text-sm break-all mb-4">{attestationId}</p>

            <p className="text-xs text-slate-500">SHA-256 Hash</p>
            <p className="font-mono text-sm break-all">{hash}</p>

            <Link
              href={`/verify?id=${attestationId}&hash=${hash}`}
              className="mt-6 inline-block text-center w-full bg-[#0D3152] text-white font-semibold py-3 rounded-lg hover:bg-[#123d63]"
            >
              Verify now
            </Link>
          </div>
        </>
      )}

      <p className="mt-6 text-sm text-slate-500">
        Your attestation includes a unique ID, timestamp and SHA-256 verification.
      </p>
    </div>
  );
      }
