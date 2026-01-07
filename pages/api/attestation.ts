import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

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

  try {
    const report = req.body;
    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    const attestationId = uuidv4();
    const now = new Date();

    const baseUrl =
      req.headers.origin ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://certif-scope.com";

    // FIRST PASS — HTML WITHOUT QR
    const htmlInitial = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: now.toISOString(),
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1 || 0),
      SCOPE_2: String(report.scope2 || 0),
      SCOPE_3: String(report.scope3 || 0),
      TOTAL: String(report.total || 0),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: now.toISOString(),
      QR_CODE: "",
      HASH: ""
    });

    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser1 = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless
    });

    const page1 = await browser1.newPage();
    await page1.setContent(htmlInitial, { waitUntil: "networkidle0" });

    const tmpPdfBuffer = await page1.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" }
    });

    await browser1.close();

    // HASH AFTER FIRST PDF
    const pdfHash = computeHash(tmpPdfBuffer);

    // QR CODE GENERATION
    const verifyUrl = `${baseUrl}/verify?id=${attestationId}&hash=${pdfHash}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl);

    // SECOND PASS — FINAL HTML WITH QR + HASH
    const htmlFinal = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: now.toISOString(),
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1 || 0),
      SCOPE_2: String(report.scope2 || 0),
      SCOPE_3: String(report.scope3 || 0),
      TOTAL: String(report.total || 0),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: now.toISOString(),
      QR_CODE: qrDataUrl,
      HASH: pdfHash
    });

    const browser2 = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless
    });

    const page2 = await browser2.newPage();
    await page2.setContent(htmlFinal, { waitUntil: "networkidle0" });

    const finalPdfBuffer = await page2.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" }
    });

    await browser2.close();

    // REGISTER IN GITHUB VIA INTERNAL API
    await fetch(`${baseUrl}/api/register-attestation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: attestationId, hash: pdfHash })
    });

    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      verifyUrl,
      pdfBase64: finalPdfBuffer.toString("base64")
    });

  } catch (err: any) {
    console.error("ATT-ERROR:", err);
    return res.status(500).json({
      error: "PDF generation failed",
      details: err.message
    });
  }
}
