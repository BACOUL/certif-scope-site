import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function generatePdf({
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
}: {
  id: string;
  companyName: string;
  sector: string;
  revenue: number;
  fuelSpent: number;
  electricitySpent: number;
  scope1: number;
  scope2: number;
  scope3: number;
  total: number;
}) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]); // A4
  const font = await pdf.embedFont(StandardFonts.Helvetica);

  const title = "Carbon Footprint Attestation";
  const date = new Date().toISOString().slice(0, 10);

  let y = 780;
  const line = (text: string, size = 12) => {
    page.drawText(text, { x: 50, y, size, font, color: rgb(0, 0, 0) });
    y -= 28;
  };

  page.drawText(title, {
    x: 50,
    y,
    size: 22,
    font,
    color: rgb(0, 0.25, 0.45)
  });

  y -= 50;

  line(`Attestation ID: ${id}`);
  line(`Date: ${date}`);
  line(`Company: ${companyName}`);
  line(`Sector: ${sector}`);
  line(`Annual Revenue: €${revenue.toLocaleString()}`);
  line(`Fuel Expenses: €${fuelSpent.toLocaleString()}`);
  line(`Electricity Expenses: €${electricitySpent.toLocaleString()}`);

  y -= 20;
  line(`Carbon Footprint Results:`, 14);

  line(`Scope 1: ${scope1} tCO₂e`);
  line(`Scope 2: ${scope2} tCO₂e`);
  line(`Scope 3: ${scope3} tCO₂e`);
  line(`Total: ${total} tCO₂e`, 14);

  y -= 40;
  line(`This PDF is automatically generated and certified by Certif-Scope.`);
  line(`Verification reference: ${id}`);

  const pdfBytes = await pdf.save();
  return Buffer.from(pdfBytes);
    }
