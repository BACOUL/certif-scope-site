import { useState } from "react";

async function computeHash(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function extractTextFromPDF(file: File): Promise<string> {
  if (typeof window === "undefined") return "";

  const lib = ["pdfjs-dist", "build", "pdf"].join("/");
  const worker = ["pdfjs-dist", "build", "pdf.worker.entry"].join("/");

  // Dynamic string → Turbopack cannot statically resolve
  const pdfjsLib: any = await import(/* @vite-ignore */ lib);
  const pdfjsWorker: any = await import(/* @vite-ignore */ worker);

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((x: any) => x.str).join(" ");
  }

  return text;
}

export default function VerifyPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "valid" | "invalid">(null);
  const [extractedId, setExtractedId] = useState("");
  const [printedHash, setPrintedHash] = useState("");
  const [computedHash, setComputedHash] = useState("");

  const handleVerify = async () => {
    if (!file) return;

    setLoading(true);
    setStatus(null);

    const realHash = await computeHash(file);
    setComputedHash(realHash);

    const text = await extractTextFromPDF(file);

    const idMatch = text.match(/ATTESTATION ID[:\s]+([A-Za-z0-9\-]+)/i);
    const hashMatch = text.match(/SHA-256[:\s]+([a-f0-9]{64})/i);

    const foundId = idMatch ? idMatch[1] : "";
    const foundHash = hashMatch ? hashMatch[1] : "";

    setExtractedId(foundId);
    setPrintedHash(foundHash);

    if (foundHash && foundHash.toLowerCase() === realHash.toLowerCase()) {
      setStatus("valid");
    } else {
      setStatus("invalid");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-black text-[#0B3A63] mb-6">
          Verify Attestation
        </h1>

        <div className="bg-white border p-8 rounded-xl shadow-sm space-y-6">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-sm"
          />

          <button
            onClick={handleVerify}
            disabled={!file || loading}
            className="w-full bg-[#1FB6C1] text-white py-3 rounded-lg"
          >
            {loading ? "Verifying…" : "Verify PDF"}
          </button>
        </div>

        {status && (
          <div className="mt-10 bg-white border p-6 rounded-xl shadow-sm">
            {status === "valid" ? (
              <p className="text-green-600 font-bold text-xl mb-2">
                ✔ VALID — Authentic
              </p>
            ) : (
              <p className="text-red-600 font-bold text-xl mb-2">
                ✖ INVALID — Modified
              </p>
            )}

            <div className="text-sm text-slate-700 mt-4 space-y-2">
              <p><strong>Extracted ID:</strong> {extractedId || "Not found"}</p>
              <p><strong>Printed hash:</strong> {printedHash || "Not found"}</p>
              <p><strong>Computed hash:</strong> {computedHash}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
