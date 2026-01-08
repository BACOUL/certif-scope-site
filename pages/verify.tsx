import { useState, useEffect } from "react";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState<null | { valid: boolean; item?: any }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const qid = params.get("id");
    const qhash = params.get("hash");

    if (qid) setId(qid);
    if (qhash) setHash(qhash);

    if (qid && qhash && /^[a-f0-9]{64}$/i.test(qhash)) {
      verify(qid, qhash);
    }
  }, []);

  async function verify(customId?: string, customHash?: string) {
    const finalId = (customId || id).trim();
    const finalHash = (customHash || hash).trim().toLowerCase();

    if (finalId.length < 20) {
      setError("Invalid Attestation ID.");
      return;
    }
    if (!/^[a-f0-9]{64}$/i.test(finalHash)) {
      setError("Invalid SHA-256 hash format.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const sources = [
        "https://raw.githubusercontent.com/BACOUL/certif-scope/main/attestations.json",
        "/attestations.json"
      ];

      let registry: any = null;

      for (const src of sources) {
        try {
          const r = await fetch(src, { cache: "no-store" });
          if (r.ok) {
            registry = await r.json();
            break;
          }
        } catch {}
      }

      if (!registry || !Array.isArray(registry.attestations)) {
        setError("Verification service unavailable.");
        setLoading(false);
        return;
      }

      const match = registry.attestations.find(
        (a: any) =>
          String(a.id).trim() === finalId &&
          String(a.hash).trim().toLowerCase() === finalHash
      );

      setResult(match ? { valid: true, item: match } : { valid: false });
    } catch {
      setError("Unexpected server error.");
    }

    setLoading(false);
  }

  const ready =
    id.trim().length >= 20 &&
    /^[a-f0-9]{64}$/i.test(hash.trim());

  return (
    <div className="w-full min-h-screen bg-white text-[#334155] font-sans" id="top">

      {/* HEADER */}
      <div className="sticky top-0 bg-white border-b border-[#E2E8F0] py-4 px-6 md:px-12 z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-[#0B3A63] font-semibold hover:text-[#1FB6C1] transition flex items-center gap-2"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4L6 9L12 14" />
            </svg>
            Back to Certif-Scope
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[900px] mx-auto pt-14 px-6 md:px-12 pb-28">

        <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-4">
          Verify Attestation
        </h1>

        <p className="text-center text-[#475569] text-sm mb-8">
          Independent automated validation of ID + SHA-256 hash
        </p>

        {/* FORM */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-sm max-w-xl mx-auto space-y-6">

          <div>
            <label className="text-sm font-semibold">Attestation ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="mt-2 w-full border border-[#CBD5E1] rounded-lg p-3 text-sm"
              placeholder="Auto-filled via QR code"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">SHA-256 Hash</label>
            <input
              type="text"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              className="mt-2 w-full border border-[#CBD5E1] rounded-lg p-3 text-sm"
              placeholder="64 characters"
            />
          </div>

          <button
            onClick={() => verify()}
            disabled={!ready || loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              ready ? "bg-[#1FB6C1] hover:bg-[#17A2AC]" : "bg-slate-300 cursor-not-allowed"
            }`}
          >
            {loading ? "Verifying..." : "Verify Attestation"}
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-center mt-6 text-red-600 font-semibold">{error}</p>
        )}

        {/* RESULT */}
        {result && (
          <div className="mt-10 p-8 bg-white border border-[#E2E8F0] rounded-xl shadow-sm max-w-xl mx-auto">

            {result.valid ? (
              <>
                <p className="text-green-600 font-bold text-xl text-center mb-4">
                  ✔ VALID — Official Record Found
                </p>

                <div className="text-sm text-[#475569] space-y-1">
                  <p><strong>ID:</strong> {id}</p>
                  <p><strong>SHA-256:</strong> {hash}</p>
                  <p><strong>Registered:</strong> {result.item.timestamp}</p>
                </div>
              </>
            ) : (
              <>
                <p className="text-red-600 font-bold text-xl text-center mb-4">
                  ✖ INVALID — No Matching Record
                </p>
                <p className="text-sm text-center text-[#475569]">
                  The ID + hash are not present in the Certif-Scope registry.
                </p>
              </>
            )}

          </div>
        )}

        {/* FOOTER LINKS */}
        <div className="text-center mt-10 text-xs text-[#475569] space-x-6">
          <a href="/legal" className="text-[#1FB6C1] hover:text-[#0B3A63]">Legal</a>
          <a href="/privacy" className="text-[#1FB6C1] hover:text-[#0B3A63]">Privacy</a>
          <a href="/terms" className="text-[#1FB6C1] hover:text-[#0B3A63]">Terms & Refund</a>
        </div>

        <div className="text-center mt-8 mb-24">
          <a href="#top" className="text-[#1FB6C1] hover:text-[#0B3A63] font-semibold">
            Back to top ↑
          </a>
        </div>
      </div>
    </div>
  );
}
