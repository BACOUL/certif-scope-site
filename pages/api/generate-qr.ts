import type { NextApiRequest, NextApiResponse } from "next";
import QRCode from "qrcode";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { id, hash } = req.body || {};

  if (!id || typeof id !== "string" || id.trim().length < 20) {
    res.status(400).json({ error: "Invalid attestation ID" });
    return;
  }

  if (!hash || typeof hash !== "string" || !/^[a-f0-9]{64}$/i.test(hash.trim())) {
    res.status(400).json({ error: "Invalid SHA-256 hash format" });
    return;
  }

  const url = `https://certif-scope.com/verify?id=${encodeURIComponent(id.trim())}&hash=${encodeURIComponent(hash.trim())}`;

  try {
    const pngBase64 = await QRCode.toDataURL(url, {
      errorCorrectionLevel: "H",
      margin: 1,
      scale: 6
    });

    res.status(200).json({
      success: true,
      id,
      hash,
      qr: pngBase64
    });
  } catch (err) {
    res.status(500).json({ error: "QR generation failed" });
  }
}
