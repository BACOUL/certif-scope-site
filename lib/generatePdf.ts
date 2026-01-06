// /lib/generatePdf.ts

import PDFDocument from "pdfkit";
import { Readable } from "stream";

export function generateAttestationPDF(data: {
  companyName: string;
  scope1: number;
  scope2: number;
  scope3: number;
  total: number;
}) {
  const doc = new PDFDocument({
    size: "A4",
    margin: 50
  });

  const stream = new Readable();
  stream._read = () => {};

  doc.on("data", (chunk) => stream.push(chunk));
  doc.on("end", () => stream.push(null));

  doc.fontSize(24).text("Carbon Footprint Attestation", { align: "center" });
  doc.moveDown();

  doc.fontSize(14).text(`Company: ${data.companyName}`);
  doc.text(`Scope 1: ${data.scope1} tCO2e`);
  doc.text(`Scope 2: ${data.scope2} tCO2e`);
  doc.text(`Scope 3: ${data.scope3} tCO2e`);
  doc.text(`Total: ${data.total} tCO2e`, { underline: true });

  doc.moveDown();
  doc.fontSize(10).text("This attestation is automatically generated and certified.", {
    align: "center"
  });

  doc.end();

  return stream;
}
