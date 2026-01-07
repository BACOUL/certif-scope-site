import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

const BROWSERLESS_KEY = process.env.BROWSERLESS_KEY;

function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return html;
}

function computeHash(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!BROWSERLESS_KEY) {
    return res.status(500).json({ error: "Missing BROWSERLESS_KEY" });
  }

  try {
    const report = req.body;

    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    const attestationId = uuidv4();
    const issueDate = new Date().toISOString();

    // 1️⃣ HTML sans QR code
    const tempHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: issueDate,
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1 || 0),
      SCOPE_2: String(report.scope2 || 0),
      SCOPE_3: String(report.scope3 || 0),
      TOTAL: String(report.total || 0),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: issueDate,
      QR_CODE: ""
    });

    // 2️⃣ Générer premier PDF pour hash
    const pdf1 = await fetch(`https://chrome.browserless.io/pdf?token=${BROWSERLESS_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: tempHTML,
        options: { printBackground: true, format: "A4" }
      })
    }).then(r => r.arrayBuffer());

    const hash = computeHash(Buffer.from(pdf1));

    // 3️⃣ QR code avec URL de vérification
    const verifyUrl = `https://certif-scope.com/verify?id=${attestationId}&hash=${hash}`;
    const qrDataURL = await QRCode.toDataURL(verifyUrl);

    // 4️⃣ HTML final avec QR code
    const finalHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: issueDate,
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1 || 0),
      SCOPE_2: String(report.scope2 || 0),
      SCOPE_3: String(report.scope3 || 0),
      TOTAL: String(report.total || 0),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: issueDate,
      QR_CODE: `<img src="${qrDataURL}" style="width:140px"/>`
    });

    // 5️⃣ Générer PDF final
    const pdf2 = await fetch(`https://chrome.browserless.io/pdf?token=${BROWSERLESS_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: finalHTML,
        options: { printBackground: true, format: "A4" }
      })
    }).then(r => r.arrayBuffer());

    // 6️⃣ Retour JSON
    res.status(200).json({
      id: attestationId,
      hash,
      verifyUrl,
      pdfBase64: Buffer.from(pdf2).toString("base64"),
      test: true
    });

  } catch (error: any) {
    console.error("BROWSERLESS_ERROR", error);
    res.status(500).json({
      error: "PDF generation failed",
      details: error?.message || String(error)
    });
  }
}
