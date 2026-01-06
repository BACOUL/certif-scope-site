import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';

import { renderAttestationHTML } from '../../lib/renderAttestation';
import { calculateCarbonFootprint } from '../../lib/carbonEngine';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      companyName,
      sector,
      country,
      period,
      revenue,
      fuelSpent,
      electricitySpent
    } = req.body;

    if (!companyName || !sector || !revenue) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 🔒 Server-side recalculation (anti-fraud)
    const result = calculateCarbonFootprint({
      sector,
      revenue: Number(revenue),
      fuelSpent: Number(fuelSpent || 0),
      electricitySpent: Number(electricitySpent || 0)
    });

    const now = new Date();

    const html = renderAttestationHTML({
      COMPANY_NAME: companyName,
      BUSINESS_SECTOR: sector,
      COUNTRY: country || 'N/A',
      ASSESSMENT_PERIOD: period || 'N/A',

      SCOPE_1: String(result.scope1),
      SCOPE_2: String(result.scope2),
      SCOPE_3: String(result.scope3),
      TOTAL: String(result.total),

      ATTESTATION_ID: `CS-${now.getTime()}`,
      ISSUE_DATE_UTC: now.toISOString().split('T')[0],
      GENERATION_TIMESTAMP: now.toISOString(),
      METHODOLOGY_VERSION: 'v3'
    });

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm'
      }
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="certif-scope-attestation.pdf"'
    );

    return res.status(200).send(pdf);
  } catch (error) {
    console.error('[ATTESTATION_ERROR]', error);
    return res.status(500).json({ error: 'Attestation generation failed' });
  }
  }
