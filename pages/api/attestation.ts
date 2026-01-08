import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { renderAttestation } from "../../lib/renderAttestation";

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
      (req.headers.origin as string) ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const scopes = report.scopes || {};
    const total = Object.values(scopes).reduce((acc: number, v: any) => acc + Number(v || 0), 0);

    const dataInitial = {
      attestationId,
      issueDate: now.toISOString(),
      companyName: report.companyName || "N/A",
      sector: report.sector || "N/A",
      year: report.year || `${now.getFullYear()}`,
      country: report.country || "France",
      scopes,
      total,
      preparedOn: now.toISOString(),
      qrCodeUrl: "",
      hash: ""
    };

    const htmlInitial = renderAttestation(dataInitial);

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

    const pdfHash = computeHash(tmpPdfBuffer);

    const verifyUrl = `${baseUrl}/verify?id=${attestationId}&hash=${pdfHash}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl);

    const dataFinal = {
      ...dataInitial,
      hash: pdfHash,
      qrCodeUrl: qrDataUrl
    };

    const htmlFinal = renderAttestation(dataFinal);

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

    await fetch(`${baseUrl}/api/register-attestation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: attestationId, hash: pdfHash })
    });

    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      hashShort: pdfHash.substring(0, 8),
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
