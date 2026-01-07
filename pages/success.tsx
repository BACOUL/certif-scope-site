import { useEffect, useState } from "react";

export default function Success() {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("certif-scope-report");
    if (data) {
      setReport(JSON.parse(data));
      setReady(true);
    }
  }, []);

  const downloadPDF = async () => {
    if (!report) return;

    setLoading(true);

    // Appel à ton backend PDF
    const res = await fetch("/api/generate-attestation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(report),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "certif-scope-attestation.pdf";
    link.click();

    window.URL.revokeObjectURL(url);
    setLoading(false);
  };

  if (!ready) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto text-center py-20 px-6">
      <h1 className="text-3xl font-bold text-[#0B3A63]">Payment confirmed ✓</h1>

      <p className="mt-4 text-slate-600">
        Your official carbon footprint attestation is ready for download.
      </p>

      <div className="mt-10 bg-white border rounded-xl p-6 shadow-md">
        <p className="text-sm text-slate-500">Company</p>
        <p className="font-bold text-[#0B3A63]">{report.companyName}</p>

        <p className="mt-4 text-sm text-slate-500">Total footprint</p>
        <p className="text-3xl font-extrabold text-[#0B3A63]">{report.total} tCO₂e</p>
      </div>

      <button
        onClick={downloadPDF}
        disabled={loading}
        className="mt-10 w-full bg-[#1FB6C1] text-white font-bold py-4 rounded-xl hover:bg-[#17A2AC] transition disabled:opacity-50"
      >
        {loading ? "Generating PDF…" : "Download official PDF"}
      </button>

      <p className="mt-6 text-sm text-slate-500">
        Your attestation includes a unique ID, timestamp, QR code and SHA-256 verification.
      </p>
    </div>
  );
}
