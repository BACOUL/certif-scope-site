import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteerCore from "puppeteer-core";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { attestationTemplate } from "../../lib/attestationTemplate";

function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return html;
}

// ------------------------------------------------------
// HASH SHA-256
// ------------------------------------------------------
function computeHash(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ------------------------------------------------------
    // 1) Générer l'UUID unique pour l'attestation
    // ------------------------------------------------------
    const attestationId = uuidv4();

    const report = req.body;
    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    // ------------------------------------------------------
    // 2) Générer HTML rempli
    // ------------------------------------------------------
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
      GENERATION_TIMESTAMP: new Date().toISOString()
    });

    // ------------------------------------------------------
    // 3) Générer le PDF avec Chromium / Puppeteer
    // ------------------------------------------------------
    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.setContent(filledHTML, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "a4",
      printBackground: true
    });

    await browser.close();

    // ------------------------------------------------------
    // 4) Calculer le hash SHA-256 du PDF
    // ------------------------------------------------------
    const pdfHash = computeHash(pdfBuffer);
    console.log("PDF HASH:", pdfHash);
    console.log("ATTESTATION ID:", attestationId);

    // ------------------------------------------------------
    // 5) Stockage LOCAL ID + HASH dans /public/attestations.json
    // (Ne fonctionne pas sur Vercel — seulement en local)
    // ------------------------------------------------------
    const filePath = path.join(process.cwd(), "public", "attestations.json");

    let jsonData = { attestations: [] };

    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf8");
      jsonData = JSON.parse(raw);
    }

    jsonData.attestations.push({
      id: attestationId,
      hash: pdfHash,
      timestamp: new Date().toISOString()
    });

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    // ------------------------------------------------------
    // 6) Retourner le PDF au client
    // ------------------------------------------------------
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=attestation.pdf");
    return res.send(pdfBuffer);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "PDF generation failed", details: err });
  }
  }
