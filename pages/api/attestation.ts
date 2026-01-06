import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import { generatePdf } from '../../lib/generatePdf';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    companyName,
    sector,
    revenue,
    fuelSpent,
    electricitySpent,
    scope1,
    scope2,
    scope3,
    total
  } = req.body;

  const id = randomUUID();

  const pdfBuffer = await generatePdf({
    id,
    companyName,
    sector,
    revenue,
    fuelSpent,
    electricitySpent,
    scope1,
    scope2,
    scope3,
    total
  });

  const outputDir = path.join(process.cwd(), 'attestations');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const pdfPath = path.join(outputDir, `${id}.pdf`);
  fs.writeFileSync(pdfPath, pdfBuffer);

  return res.status(200).json({
    id,
    downloadUrl: `/attestations/${id}.pdf`
  });
}
