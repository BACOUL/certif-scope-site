// =====================================================
// RENDER ATTESTATION — VERSION PRO v5
// Compatible avec carbonEngine v5, attestationTemplate v5
// =====================================================

import { attestationTemplate } from "./attestationTemplate";

export type AttestationData = {
  attestationId: string;
  companyName: string;
  country: string;
  sector: string;
  period: string;
  year: number;

  scope1: number;
  scope2: number;
  scope3: number;
  total: number;

  methodologyVersion: string;
  coefficients: Record<string, number>;

  qrCodeUrl?: string;
  hash?: string;
  generatedAt?: string;
};

export function fillAttestationTemplate(data: AttestationData): string {
  // Vérification minimale
  if (!data.companyName) throw new Error("companyName missing in AttestationData");
  if (typeof data.total !== "number") throw new Error("total missing or invalid in AttestationData");

  const s1 = Number(data.scope1 || 0);
  const s2 = Number(data.scope2 || 0);
  const s3 = Number(data.scope3 || 0);
  const total = Number(data.total || 0);

  const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0.0";
  const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0.0";
  const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0.0";

  const hashFull = data.hash || "NOT_GENERATED";
  const hashShort = hashFull.substring(0, 10);

  // Génération de table coefficients pour le PDF
  const coefficientsTable = Object.entries(data.coefficients)
    .map(
      ([key, value]) =>
        `<tr><td>${key}</td><td>${value} kg CO₂</td></tr>`
    )
    .join("");

  const COEFFICIENTS_HTML = `
    <table border="1" cellspacing="0" cellpadding="6" width="100%">
      <thead>
        <tr>
          <th>Coefficient</th>
          <th>Value (kg CO₂)</th>
        </tr>
      </thead>
      <tbody>
        ${coefficientsTable}
      </tbody>
    </table>
  `;

  const QR_HTML = data.qrCodeUrl
    ? `<img src="${data.qrCodeUrl}" alt="QR Code" width="120" height="120" />`
    : `<p>QR Code non généré.</p>`;

  const map: Record<string, any> = {
    COMPANY_NAME: data.companyName,
    COUNTRY: data.country,
    BUSINESS_SECTOR: data.sector,
    YEAR: data.year.toString(),
    PERIOD: data.period,

    SCOPE1: s1.toFixed(2),
    SCOPE2: s2.toFixed(2),
    SCOPE3: s3.toFixed(2),
    TOTAL: total.toFixed(2),

    PCT_SCOPE1: pct1,
    PCT_SCOPE2: pct2,
    PCT_SCOPE3: pct3,

    METHODOLOGY_VERSION: data.methodologyVersion,
    COEFFICIENTS_TABLE: COEFFICIENTS_HTML,

    ATTESTATION_ID: data.attestationId,
    GENERATED_AT: data.generatedAt || new Date().toISOString(),

    HASH: hashFull,
    HASH_SHORT: hashShort,
    QR_BLOCK: QR_HTML
  };

  let html = attestationTemplate;

  // Remplacement strict
  for (const key in map) {
    const value = String(map[key] ?? "");
    html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
  }

  return html;
    }
