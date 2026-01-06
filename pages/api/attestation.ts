import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteerCore from "puppeteer-core";
import { attestationTemplate } from "../../lib/attestationTemplate";

function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`\\[\\[${key}\\]\\]`, "g"), data[key]);
  }
  return html;
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

    const filledHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: report.id || "N/A",
      ISSUE_DATE: new Date().toISOString(),
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: "France",
      PERIOD: "FY2024",
      SCOPE1: String(report.scope1 || 0),
      SCOPE2: String(report.scope2 || 0),
      SCOPE3: String(report.scope3 || 0),
      TOTAL: String(report.total || 0),
      GENERATED_AT: new Date().toISOString(),
    });

    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(filledHTML, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=attestation.pdf");
    return res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "PDF generation failed", details: err });
  }
}
