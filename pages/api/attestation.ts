import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

/* Replace placeholders in HTML */
function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return html;
}

/* Compute SHA-256 hash */
function computeHash(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Unique attestation ID
    const attestationId = uuidv4();
    const report = req.body;

    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    // Base URL for QR and registry API
    const baseUrl = req.headers.origin || "https://certif-scope.vercel.app";

    // Verification URL (QR code points here)
    const verifyUrl = `${baseUrl}/verify?id=${attestationId}&hash=__HASH__`;

    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl);

    // Fill HTML template
    const filledHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: new Date().toISOString(),
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1 || 0),
      SCOPE_2: String(report.scope2 || 0),
      SCOPE_3: String(report.scope3 || 0),
      TOTAL: String(report.total || 0),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: new Date().toISOString(),
      QR_CODE: qrCodeDataUrl
    });

    // Determine chromium executable path for Vercel
    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    // Launch headless browser
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.setContent(filledHTML, { waitUntil: "networkidle0" });

    // Render PDF
    const pdfBuffer = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" }
    });

    await browser.close();

    // Compute SHA-256 hash
    const pdfHash = computeHash(pdfBuffer);

    // Register attestation in GitHub
    const registerRes = await fetch(`${baseUrl}/api/register-attestation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: attestationId,
        hash: pdfHash
      })
    });

    if (!registerRes.ok) {
      return res.status(500).json({
        error: "Attestation generated but registry update failed",
        id: attestationId,
        hash: pdfHash
      });
    }

    // Replace placeholder hash inside verifyUrl returned to frontend
    const finalVerifyUrl = verifyUrl.replace("__HASH__", pdfHash);

    // Deliver PDF + metadata
    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      verifyUrl: finalVerifyUrl,
      pdfBase64: pdfBuffer.toString("base64")
    });

  } catch (err: any) {
    console.error("ATT-ERROR:", err);
    return res.status(500).json({
      error: "PDF generation failed",
      details: err.message
    });
  }
}
