import { useState, useEffect } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState<null | { valid: boolean; item?: any }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load query params when page loads
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const qid = params.get("id");
    const qhash = params.get("hash");

    if (qid) setId(qid);
    if (qhash) setHash(qhash);

    // auto-verify only if parameters are complete
    if (qid && qhash && qhash.length === 64) {
      verify(qid, qhash);
    }
  }, []);

  async function verify(customId?: string, customHash?: string) {
    const finalId = (customId || id).trim();
    const finalHash = (customHash || hash).trim();

    // Basic client-side checks
    if (finalId.length < 20) {
      setError("Invalid Attestation ID.");
      return;
    }

    if (!/^[a-fA-F0-9]{64}$/.test(finalHash)) {
      setError("Invalid SHA-256 hash format.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const sources = [
        "https://raw.githubusercontent.com/BACOUL/certif-scope/main/attestations.json",
        "/attestations.json",
      ];

      let json: any = null;

      for (const src of sources) {
        try {
          const res = await fetch(src, { cache: "no-store" });
          if (res.ok) {
            json = await res.json();
            break;
          }
        } catch {
          continue;
        }
      }

      if (!json || !Array.isArray(json.attestations)) {
        setError("Verification service unavailable.");
        setLoading(false);
        return;
      }

      const match = json.attestations.find(
        (item: any) =>
          String(item.id).trim() === finalId &&
          String(item.hash).trim().toLowerCase() === finalHash.toLowerCase()
      );

      setResult(
        match
          ? { valid: true, item: match }
          : { valid: false }
      );
    } catch (err) {
      setError("Unexpected server error. Please try later.");
    }

    setLoading(false);
  }

  const ready =
    id.trim().length >= 20 && /^[a-fA-F0-9]{64}$/.test(hash.trim());

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] px-6 py-16">
      <div className="max-w-2xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1] hover:text-[#17A2AC]"
        >
          ← Back to Certif-Scope
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-2 text-[#0B3A63]">
          Verify Attestation
        </h1>

        <p className="text-xs text-slate-500 mb-6">
          Certif-Scope is operated by TimeProofs. Support: <strong>contact@certif-scope.com</strong>
        </p>

        {/* INPUT CARD */}
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
            onClick={() => verify()}
            disabled={loading || !ready}
            className={`w-full py-3 rounded-lg text-white font-semibold shadow-md transition ${
              ready
                ? "bg-[#1FB6C1] hover:bg-[#17A2AC]"
                : "bg-slate-300 cursor-not-allowed"
            }`}
          >
            {loading ? "Verifying..." : "Verify Attestation"}
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="mt-6 text-red-600 font-semibold text-center">
            {error}
          </p>
        )}

        {/* RESULT */}
        {result && (
          <div className="mt-10 p-6 bg-white border border-slate-300 rounded-xl shadow-sm">

            {result.valid ? (
              <>
                <p className="text-green-600 font-bold text-xl mb-2">
                  ✔ VALID — Attestation Authentic
                </p>

                <p className="text-sm text-slate-700 mb-4">
                  The ID and SHA-256 hash match the official registry.
                </p>

                <div className="mt-4 text-sm text-slate-700 space-y-1">
                  <p><strong>ID:</strong> {id}</p>
                  <p><strong>SHA-256:</strong> {hash}</p>
                  <p><strong>Timestamp:</strong> {result.item.timestamp}</p>
                </div>
              </>
            ) : (
              <>
                <p className="text-red-600 font-bold text-xl mb-2">
                  ✖ INVALID — No match found
                </p>
                <p className="text-sm text-slate-700">
                  The provided ID and hash do not appear in the registry.
                </p>
              </>
            )}

          </div>
        )}

        <div className="text-center mt-10 text-xs text-slate-500 space-x-4">
          <Link href="/legal" className="text-[#1FB6C1]">Legal</Link>
          <Link href="/privacy" className="text-[#1FB6C1]">Privacy</Link>
          <Link href="/refund-policy" className="text-[#1FB6C1]">Refund Policy</Link>
        </div>
      </div>
    </div>
  );
  }
