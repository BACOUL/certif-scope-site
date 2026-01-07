import type { NextApiRequest, NextApiResponse } from "next";

/**
 * This endpoint writes (ID, SHA-256) into GitHub attestations.json.
 * It is called server-side by /api/attestation only.
 * It must be POST-only, atomic and consistent.
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, hash } = req.body;

  // -----------------------------
  // 1) Basic validation
  // -----------------------------
  if (typeof id !== "string" || typeof hash !== "string") {
    return res.status(400).json({ error: "Invalid ID or hash format" });
  }

  if (!/^[a-fA-F0-9]{64}$/.test(hash)) {
    return res.status(400).json({ error: "Invalid SHA-256 hash" });
  }

  if (id.length < 20) {
    return res.status(400).json({ error: "Invalid attestation ID" });
  }

  // -----------------------------
  // 2) Ensure GitHub token exists
  // -----------------------------
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "Missing GitHub token" });
  }

  const GH_URL =
    "https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json";

  try {
    // -----------------------------
    // 3) Get existing file
    // -----------------------------
    const raw = await fetch(GH_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });

    let file;
    let existingJson;

    if (raw.status === 404) {
      // File does not exist yet → create structure
      existingJson = { attestations: [] };
      file = null;
    } else if (!raw.ok) {
      return res.status(500).json({
        error: "Unable to fetch attestations.json",
        githubStatus: raw.status,
      });
    } else {
      file = await raw.json();

      try {
        const decoded = Buffer.from(file.content, "base64").toString("utf8");
        existingJson = JSON.parse(decoded);
      } catch {
        existingJson = { attestations: [] };
      }
    }

    // -----------------------------
    // 4) De-duplicate entries
    // -----------------------------
    const exists = existingJson.attestations.find((item: any) => item.id === id);
    if (exists) {
      return res.status(200).json({
        success: true,
        note: "Already registered",
        id,
        hash,
      });
    }

    // -----------------------------
    // 5) Append new entry
    // -----------------------------
    existingJson.attestations.push({
      id,
      hash,
      timestamp: new Date().toISOString(),
    });

    const newContent = Buffer.from(
      JSON.stringify(existingJson, null, 2)
    ).toString("base64");

    // -----------------------------
    // 6) Commit updated file
    // -----------------------------
    const commitBody: any = {
      message: `Register attestation ${id}`,
      content: newContent,
    };

    if (file?.sha) {
      commitBody.sha = file.sha;
    }

    const commitRes = await fetch(GH_URL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commitBody),
    });

    if (!commitRes.ok) {
      const details = await commitRes.text();
      return res.status(500).json({
        error: "GitHub commit failed",
        githubStatus: commitRes.status,
        details,
      });
    }

    // -----------------------------
    // 7) Success
    // -----------------------------
    return res.status(200).json({ success: true, id, hash });
  } catch (err: any) {
    console.error("REGISTER-ERROR:", err);
    return res.status(500).json({
      error: "Unexpected server error",
      details: err.message,
    });
  }
}
