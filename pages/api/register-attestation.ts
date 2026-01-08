import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Secure registry writer for (ID + SHA256) → GitHub attestations.json
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  /**
   * ORIGIN VALIDATION (host + origin headers)
   */
  const host = req.headers.host || "";
  const origin = req.headers.origin || "";

  const allowedHosts = [
    "localhost",
    "127.0.0.1",
    "certif-scope.com",
    "certif-scope-1l9lckqit-jeason1.vercel.app",
    "vercel.app"
  ];

  const allowed =
    allowedHosts.some(h => host.includes(h)) ||
    allowedHosts.some(h => origin.includes(h));

  if (!allowed) {
    return res.status(403).json({ error: "Forbidden origin" });
  }

  /**
   * INPUT VALIDATION
   */
  let { id, hash } = req.body;

  if (typeof id !== "string" || typeof hash !== "string") {
    return res.status(400).json({ error: "ID and hash must be strings" });
  }

  if (id.trim().length < 20) {
    return res.status(400).json({ error: "Invalid attestation ID format" });
  }

  hash = hash.trim().toLowerCase();

  if (!/^[a-f0-9]{64}$/.test(hash)) {
    return res.status(400).json({ error: "Invalid SHA-256 hash format" });
  }

  /**
   * GITHUB CONFIG
   */
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "GitHub token missing" });
  }

  const GH_URL =
    "https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json";

  try {
    /**
     * 1) READ CURRENT REGISTRY
     */
    const raw = await fetch(GH_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      },
      cache: "no-store"
    });

    let file;
    let existing;

    if (raw.status === 404) {
      existing = { attestations: [] };
      file = null;
    } else {
      file = await raw.json();

      try {
        const decoded = Buffer.from(file.content, "base64").toString("utf8");
        existing = JSON.parse(decoded);
      } catch {
        existing = { attestations: [] };
      }
    }

    /**
     * 2) DUPLICATE CHECKS
     */
    const byId = existing.attestations.find((a: any) => a.id === id);
    if (byId) {
      return res.status(200).json({
        success: true,
        info: "ID already registered",
        id,
        hash
      });
    }

    const byHash = existing.attestations.find((a: any) => a.hash === hash);
    if (byHash) {
      return res.status(400).json({
        error: "Hash already registered",
        existingId: byHash.id
      });
    }

    /**
     * 3) INSERT NEW ENTRY
     */
    existing.attestations.push({
      id,
      hash,
      hashShort: hash.substring(0, 8) + "...",
      timestamp: new Date().toISOString()
    });

    const newContent = Buffer.from(
      JSON.stringify(existing, null, 2)
    ).toString("base64");

    /**
     * 4) COMMIT TO GITHUB
     */
    const commitBody: any = {
      message: `Add attestation ${id}`,
      content: newContent,
      sha: file?.sha
    };

    let commitRes = await fetch(GH_URL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commitBody)
    });

    /**
     * 409 MERGE CONFLICT → RELOAD + RETRY
     */
    if (commitRes.status === 409) {
      const freshReq = await fetch(GH_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json"
        }
      });

      const fresh = await freshReq.json();
      commitBody.sha = fresh.sha;

      commitRes = await fetch(GH_URL, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(commitBody)
      });
    }

    if (!commitRes.ok) {
      const text = await commitRes.text();
      return res.status(500).json({
        error: "GitHub commit failed",
        details: text
      });
    }

    return res.status(200).json({
      success: true,
      id,
      hash
    });

  } catch (err: any) {
    console.error("REGISTER ERROR:", err);
    return res.status(500).json({
      error: "Unexpected error",
      details: err.message
    });
  }
        }
