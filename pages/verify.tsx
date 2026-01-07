import { useState } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState<null | { valid: boolean; item?: any }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleVerify() {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/BACOUL/certif-scope/main/attestations.json",
        { cache: "no-store" }
      );

      if (!res.ok) {
        setError("Unable to fetch verification registry.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      if (!data.attestations || !Array.isArray(data.attestations)) {
        setError("Invalid registry format.");
        setLoading(false);
        return;
      }

      const match = data.attestations.find(
        (item: any) =>
          item.id.trim() === id.trim() &&
          item.hash.trim().toLowerCase() === hash.trim().toLowerCase()
      );

      setResult(match ? { valid: true, item: match } : { valid: false });
    } catch (err) {
      setError("Verification failed. Try again later.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] px-6 py-16">
      <div className="max-w-2xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1] hover:text-[#17A2AC]"
        >
          ← Back to Certif-Scope
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-8 text-[#0B3A63]">
          Verify Attestation
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Enter the Attestation ID and SHA-256 shown on the document to confirm authenticity.
        </p>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-6">

          <div>
            <label className="text-sm font-semibold text-slate-700">Attestation ID</label>
            <input
              type="text"
              placeholder="e.g. 123e4567-e89b-12d3-a456..."
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="mt-2 w-full border border-slate-300 rounded-lg p-3 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">SHA-256 Hash</label>
            <input
              type="text"
              placeholder="64-character SHA-256 hash"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              className="mt-2 w-full border border-slate-300 rounded-lg p-3 text-sm"
            />
          </div>

          <button
            onClick={handleVerify}
            disabled={loading}
            className="w-full bg-[#1FB6C1] hover:bg-[#17A2AC] text-white font-semibold py-3 rounded-lg shadow-md transition text-center"
          >
            {loading ? "Verifying..." : "Verify Attestation"}
          </button>
        </div>

        {error && (
          <p className="mt-6 text-red-600 font-semibold text-center">{error}</p>
        )}

        {result && (
          <div className="mt-10 p-6 bg-white border border-slate-300 rounded-xl shadow-sm">
            {result.valid ? (
              <>
                <p className="text-green-600 font-bold text-xl mb-2">
                  ✔ VALID — Attestation Authentic
                </p>
                <p className="text-sm text-slate-700">
                  The attestation hash matches the official registry.
                </p>
              </>
            ) : (
              <>
                <p className="text-red-600 font-bold text-xl mb-2">
                  ✖ INVALID — Hash Mismatch
                </p>
                <p className="text-sm text-slate-700">
                  The entered ID and/or hash do not match any registered attestation.
                </p>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
                }
