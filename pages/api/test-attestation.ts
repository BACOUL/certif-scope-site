import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

function computeHash(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return html;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const report = req.body;

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    // 1) Generate initial HTML without QR
    const html1 = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: "TEST-ID",
      ISSUE_DATE_UTC: new Date().toISOString(),
      COMPANY_NAME: report.companyName,
      BUSINESS_SECTOR: report.sector,
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1),
      SCOPE_2: String(report.scope2),
      SCOPE_3: String(report.scope3),
      TOTAL: String(report.total),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: new Date().toISOString(),
      QR_CODE: "" // placeholder
    });

    await page.setContent(html1, { waitUntil: "networkidle0" });
    const firstPdf = await page.pdf({ format: "a4", printBackground: true });

    const hash = computeHash(firstPdf);

    // 2) Generate QR
    const qr = await QRCode.toDataURL(`https://certif-scope.com/test?hash=${hash}`);

    const html2 = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: "TEST-ID",
      ISSUE_DATE_UTC: new Date().toISOString(),
      COMPANY_NAME: report.companyName,
      BUSINESS_SECTOR: report.sector,
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1),
      SCOPE_2: String(report.scope2),
      SCOPE_3: String(report.scope3),
      TOTAL: String(report.total),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: new Date().toISOString(),
      QR_CODE: qr
    });

    await page.setContent(html2, { waitUntil: "networkidle0" });
    const finalPdf = await page.pdf({ format: "a4", printBackground: true });

    await browser.close();

    return res.status(200).json({
      ok: true,
      pdfBase64: finalPdf.toString("base64"),
      hash
    });

  } catch (e) {
    console.error("PDF ERROR", e);
    return res.status(500).json({ error: "PDF generation failed" });
  }
}
