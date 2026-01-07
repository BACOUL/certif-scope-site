import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, hash } = req.body;

  // Basic JSON validation
  if (typeof id !== "string" || typeof hash !== "string") {
    return res.status(400).json({ error: "Invalid ID or hash format" });
  }

  if (id.length < 10 || hash.length !== 64) {
    return res.status(400).json({ error: "Malformed ID or hash" });
  }

  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return res.status(500).json({ error: "Missing GitHub token" });
    }

    const GH_URL =
      "https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json";

    // === 1) Fetch latest version of attestations.json ===
    const raw = await fetch(GH_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });

    if (!raw.ok) {
      return res.status(500).json({
        error: "Unable to fetch attestations.json",
        ghStatus: raw.status,
      });
    }

    const file = await raw.json();

    // === 2) Decode existing content ===
    let json;
    try {
      const existingContent = Buffer.from(file.content, "base64").toString("utf8");
      json = JSON.parse(existingContent);
    } catch {
      // Fallback in case file is missing or corrupted
      json = { attestations: [] };
    }

    // === 3) Prevent duplicates ===
    const exists = json.attestations.find((item: any) => item.id === id);
    if (exists) {
      return res.status(200).json({ success: true, note: "Already registered" });
    }

    // === 4) Append new entry ===
    json.attestations.push({
      id,
      hash,
      timestamp: new Date().toISOString(),
    });

    const updatedContent = Buffer.from(
      JSON.stringify(json, null, 2)
    ).toString("base64");

    // === 5) Commit to GitHub ===
    const commitRes = await fetch(GH_URL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Register attestation ${id}`,
        content: updatedContent,
        sha: file.sha, // required for updates
      }),
    });

    if (!commitRes.ok) {
      const text = await commitRes.text();
      return res.status(500).json({
        error: "GitHub commit failed",
        ghStatus: commitRes.status,
        details: text,
      });
    }

    return res.status(200).json({ success: true, id, hash });
  } catch (err: any) {
    console.error("REGISTER ERROR:", err);
    return res
      .status(500)
      .json({ error: "Unexpected server error", details: err.message });
  }
  }
