import { calculateCarbon } from "./carbonEngine";
import { renderAttestation } from "./renderAttestation";
import crypto from "crypto";

export async function generateDynamicAttestation(input: any) {
  const report = calculateCarbon(input);

  const attestationId = crypto.randomUUID();
  const raw = `${attestationId}:${JSON.stringify(report)}:${Date.now()}`;
  const hash = crypto.createHash("sha256").update(raw).digest("hex");

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://certif-scope.com/verify?id=${attestationId}&hash=${hash}`;

  const pdfBase64 = await renderAttestation({
    companyName: input.companyName || "",
    sector: input.sector || "",
    country: input.country || "France",
    period: input.period || new Date().getFullYear().toString(),
    scope1: report.scope1,
    scope2: report.scope2,
    scope3: report.scope3,
    total: report.total,
    attestationId,
    hash,
    methodologyVersion: "3.1",
    generationTimestamp: new Date().toISOString(),
    issueDate: new Date().toISOString(),
    preparedOn: new Date().toISOString(),
    qrCodeUrl
  });

  return {
    attestationId,
    hash,
    verifyUrl: `https://certif-scope.com/verify?id=${attestationId}&hash=${hash}`,
    pdfBase64,
    report
  };
}
