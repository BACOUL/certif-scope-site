// =====================================================
// RENDER ATTESTATION — VERSION PRO SYNC v5
// Compatible with carbonEngine v5 + attestationTemplate v5
// =====================================================

import { attestationTemplate } from "./attestationTemplate";

export type AttestationData = {
  attestationId: string;
  companyName: string;
  sector: string;
  country: string;
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
  issueDate?: string;
  preparedOn?: string;
  generatedAt?: string;
};

export function fillAttestationTemplate(data: AttestationData): string {
  // Parsing valeurs
  const s1 = Number(data.scope1 || 0);
  const s2 = Number(data.scope2 || 0);
  const s3 = Number(data.scope3 || 0);
  const total = Number(data.total || 0);

  const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0.0";
  const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0.0";
  const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0.0";

  const hashFull = data.hash || "NOT_GENERATED";
  const hashShort = hashFull.substring(0, 10);

  const coefficientsHtml = Object.entries(data.coefficients)
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td><td>Internal factor v5</td></tr>`)
    .join("");

  const COEFFICIENTS_TABLE = `
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Coefficient</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>${coefficientsHtml}</tbody>
    </table>
  `;

  const QR_CODE = data.qrCodeUrl
    ? `<img src="${data.qrCodeUrl}" width="120" height="120" alt="QR Code Verification" />`
    : `<div style="font-size:11px;color:#94A3B8;">QR not generated</div>`;

  const map: Record<string, string> = {
    ATTESTATION_ID: data.attestationId,
    COMPANY_NAME: data.companyName,
    BUSINESS_SECTOR: data.sector,
    COUNTRY: data.country,
    ASSESSMENT_PERIOD: data.period,
    YEAR: String(data.year),

    SCOPE_1: s1.toFixed(2),
    SCOPE_2: s2.toFixed(2),
    SCOPE_3: s3.toFixed(2),
    TOTAL: total.toFixed(2),

    SCOPE_1_PERCENT: pct1,
    SCOPE_2_PERCENT: pct2,
    SCOPE_3_PERCENT: pct3,

    HASH: hashFull,
    HASH_SHORT: hashShort,

    METHODOLOGY_VERSION: data.methodologyVersion,
    COEFFICIENTS_TABLE,

    QR_CODE,

    ISSUE_DATE_UTC: (data.issueDate || new Date().toISOString()).split("T")[0],
    PREPARED_ON: (data.preparedOn || new Date().toISOString()).split("T")[0],
    GENERATION_TIMESTAMP: data.generatedAt || new Date().toISOString(),
  };

  let html = attestationTemplate;

  Object.keys(map).forEach((k) => {
    html = html.replace(new RegExp(`{{${k}}}`, "g"), map[k]);
  });

  return html;
}
