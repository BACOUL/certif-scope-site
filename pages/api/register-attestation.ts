import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, hash } = req.body;

  if (!id || !hash) {
    return res.status(400).json({ error: "Missing id or hash" });
  }

  try {
    const token = process.env.GITHUB_TOKEN;

    // 1) Charger le fichier existant depuis GitHub
    const raw = await fetch(
      "https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json",
      { headers: { Authorization: `token ${token}` } }
    );

    const file = await raw.json();

    // 2) Décoder le contenu base64
    const existingContent = Buffer.from(file.content, "base64").toString();
    const json = JSON.parse(existingContent);

    // 3) Ajouter la nouvelle attestation
    json.attestations.push({
      id,
      hash,
      timestamp: new Date().toISOString()
    });

    // 4) Encoder en base64
    const updatedContent = Buffer.from(JSON.stringify(json, null, 2)).toString("base64");

    // 5) Commit sur GitHub via API
    await fetch(
      "https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json",
      {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Add attestation ${id}`,
          content: updatedContent,
          sha: file.sha,
        }),
      }
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "GitHub update failed", details: err });
  }
}
