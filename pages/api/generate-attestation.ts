import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';
import crypto from 'crypto';
import QRCode from 'qrcode';
import { fillAttestationTemplate } from '../../lib/attestationTemplate';
import { calculateCarbonFootprint } from '../../lib/carbonEngine';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { companyName, sector, country, period, revenue, fuelSpent, electricitySpent } = req.body;

    if (!companyName || !sector || !revenue) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // CARBON ENGINE
    const calc = calculateCarbonFootprint({
      sector,
      revenue: Number(revenue),
      fuelSpent: Number(fuelSpent || 0),
      electricitySpent: Number(electricitySpent || 0)
    });

    const attestationId = uuidv4();
    const now = new Date();

    // ROBUST DOMAIN RESOLUTION
    const origin =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
      (req.headers.host ? `https://${req.headers.host}` : null) ||
      "http://localhost:3000";

    const s1 = calc.scope1;
    const s2 = calc.scope2;
    const s3 = calc.scope3;
    const total = calc.total;

    const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0";
    const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0";
    const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0";

    // ================= FIRST PASS (NO QR, NO HASH) =================
    const htmlInitial = fillAttestationTemplate({
      attestationId,
      issueDate: now.toISOString(),
      preparedOn: now.toISOString(),
      companyName,
      sector,
      country: country || "N/A",
      period: period || `${now.getFullYear()}`,
      scope1: s1,
      scope2: s2,
      scope3: s3,
      total,
      scope1Percent: pct1,
      scope2Percent: pct2,
      scope3Percent: pct3,
      qrCodeUrl: "",
      hash: ""
    });

    const execPath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser1 = await puppeteer.launch({
      args: chromium.args,
      executablePath: execPath,
      headless: chromium.headless
    });

    const page1 = await browser1.newPage();
    await page1.setContent(htmlInitial, { waitUntil: "networkidle0" });

    const tmpPdf = await page1.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "15mm", bottom: "15mm", left: "15mm", right: "15mm" }
    });

    await browser1.close();

    // HASH COMPUTATION
    const pdfHash = crypto.createHash("sha256").update(tmpPdf).digest("hex");
    const hashShort = pdfHash.substring(0, 8);

    // QR CODE GENERATION
    const verifyUrl = `${origin}/verify?id=${attestationId}&hash=${pdfHash}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl);

    // ================= SECOND PASS (WITH QR + HASH) =================
    const htmlFinal = fillAttestationTemplate({
      attestationId,
      issueDate: now.toISOString(),
      preparedOn: now.toISOString(),
      companyName,
      sector,
      country: country || "N/A",
      period: period || `${now.getFullYear()}`,
      scope1: s1,
      scope2: s2,
      scope3: s3,
      total,
      scope1Percent: pct1,
      scope2Percent: pct2,
      scope3Percent: pct3,
      qrCodeUrl: qrDataUrl,
      hash: pdfHash
    });

    const browser2 = await puppeteer.launch({
      args: chromium.args,
      executablePath: execPath,
      headless: chromium.headless
    });

    const page2 = await browser2.newPage();
    await page2.setContent(htmlFinal, { waitUntil: "networkidle0" });

    const finalPdf = await page2.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "15mm", bottom: "15mm", left: "15mm", right: "15mm" }
    });

    await browser2.close();

    // REGISTER ATTESTATION
    const reg = await fetch(`${origin}/api/register-attestation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: attestationId, hash: pdfHash })
    });

    if (!reg.ok) {
      console.error("REGISTRY_ERROR:", await reg.text());
      // But we still return the PDF even if registry fails
    }

    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      hashShort,
      verifyUrl,
      pdfBase64: finalPdf.toString("base64")
    });

  } catch (err: any) {
    console.error("ATTESTATION_ERROR:", err);
    return res.status(500).json({
      error: "Attestation generation failed",
      details: err.message
    });
  }
  }
