import { fillAttestationTemplate } from "./attestationTemplate";
import { toBuffer } from "html-pdf-node";

export async function renderAttestation(data: any) {
  const html = fillAttestationTemplate({
    companyName: data.companyName || "",
    sector: data.sector || "",
    country: data.country || "France",
    period: data.period || new Date().getFullYear().toString(),
    scope1: data.scope1 || 0,
    scope2: data.scope2 || 0,
    scope3: data.scope3 || 0,
    total: data.total || 0,
    attestationId: data.attestationId,
    hash: data.hash,
    methodologyVersion: data.methodologyVersion || "3.1",
    generationTimestamp: data.generationTimestamp || new Date().toISOString(),
    issueDate: data.issueDate || new Date().toISOString(),
    preparedOn: data.preparedOn || new Date().toISOString(),
    qrCodeUrl: data.qrCodeUrl || ""
  });

  const file = { content: html };

  const pdfBuffer = await toBuffer(file, {
    format: "A4",
    printBackground: true,
    margin: {
      top: "15mm",
      bottom: "15mm",
      left: "12mm",
      right: "12mm"
    }
  });

  return pdfBuffer.toString("base64");
}
