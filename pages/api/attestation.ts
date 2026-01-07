import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

// replace {{KEY}} in template
function fill(template: string, data: Record<string, string>) {
  return Object.entries(data).reduce((html, [key, value]) => {
    return html.replace(new RegExp(`{{${key}}}`, "g"), value);
  }, template);
}

// sha256
function sha(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const report = req.body;
    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    // Always compute URLs safely
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (req.headers.origin ?? "https://certif-scope.com");

    const attestationId = uuidv4();
    const now = new Date().toISOString();

    // ---- INITIAL HTML (no QR) ----
    const htmlStep1 = fill(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: now,
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: report.country || "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1),
      SCOPE_2: String(report.scope2),
      SCOPE_3: String(report.scope3),
      TOTAL: String(report.total),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: now,
      QR_CODE: "",
      HASH: ""
    });

    const executablePath =
      (await chromium.executablePath) || "/usr/bin/google-chrome-stable";

    // only ONE chromium session
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.setContent(htmlStep1, { waitUntil: "load" });

    const pdfTmp = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" }
    });

    const pdfHash = sha(pdfTmp);

    // Create verification link
    const verifyUrl = `${baseUrl}/verify?id=${attestationId}&hash=${pdfHash}`;
    const qrImage = await QRCode.toDataURL(verifyUrl);

    // ---- FINAL HTML (with QR + hash) ----
    const htmlFinal = fill(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: now,
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: report.country || "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1),
      SCOPE_2: String(report.scope2),
      SCOPE_3: String(report.scope3),
      TOTAL: String(report.total),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: now,
      QR_CODE: qrImage,
      HASH: pdfHash
    });

    await page.setContent(htmlFinal, { waitUntil: "load" });

    const finalPdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" }
    });

    await browser.close();

    // ---- REGISTER IN GITHUB SAFELY ----
    const reg = await fetch(`${baseUrl}/api/register-attestation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: attestationId,
        hash: pdfHash
      })
    });

    if (!reg.ok) {
      return res.status(500).json({
        error: "Registry update failed — attestation not saved",
        id: attestationId,
        hash: pdfHash
      });
    }

    // ---- SUCCESS ----
    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      verifyUrl,
      pdfBase64: finalPdf.toString("base64")
    });

  } catch (err: any) {
    console.error("ATTESTATION ERROR:", err);
    return res.status(500).json({
      error: "PDF generation failed",
      details: err.message
    });
  }
               }
