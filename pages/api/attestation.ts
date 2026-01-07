import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { fillAttestationTemplate } from "../../lib/attestationTemplate";

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

    const s1 = Number(report.scope1 || 0);
    const s2 = Number(report.scope2 || 0);
    const s3 = Number(report.scope3 || 0);
    const total = Number(report.total || 0);

    const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0";
    const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0";
    const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0";

    // FIRST PASS — HTML WITHOUT QR/HASH
    const htmlInitial = fillAttestationTemplate({
      attestationId,
      issueDate: now.toISOString(),
      companyName: report.companyName || "N/A",
      sector: report.sector || "N/A",
      country: report.country || "France",
      period: report.period || "FY2024",
      scope1: s1,
      scope2: s2,
      scope3: s3,
      total,
      scope1Percent: pct1,
      scope2Percent: pct2,
      scope3Percent: pct3,
      preparedOn: now.toISOString(),
      qrCodeUrl: "",
      hash: ""
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

    // HASH BASED ON FIRST PDF
    const pdfHash = computeHash(tmpPdfBuffer);
    const shortHash = pdfHash.substring(0, 8) + "...";

    // QR CODE generation
    const verifyUrl = `${baseUrl}/verify?id=${attestationId}&hash=${pdfHash}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl);

    // FINAL PASS — HTML WITH QR + HASH
    const htmlFinal = fillAttestationTemplate({
      attestationId,
      issueDate: now.toISOString(),
      companyName: report.companyName || "N/A",
      sector: report.sector || "N/A",
      country: report.country || "France",
      period: report.period || "FY2024",
      scope1: s1,
      scope2: s2,
      scope3: s3,
      total,
      scope1Percent: pct1,
      scope2Percent: pct2,
      scope3Percent: pct3,
      preparedOn: now.toISOString(),
      qrCodeUrl: qrDataUrl,
      hash: pdfHash
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

    // OPTIONAL: Register the attestation in storage
    await fetch(`${baseUrl}/api/register-attestation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: attestationId, hash: pdfHash })
    });

    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      hashShort: shortHash,
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
