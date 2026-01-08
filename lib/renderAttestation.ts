import { attestationTemplate } from "./attestationTemplate";

export type AttestationData = {
  attestationId: string;
  issueDate: string;
  preparedOn: string;
  companyName: string;
  sector: string;
  country: string;
  period: string;

  scope1: number;
  scope2: number;
  scope3: number;
  total: number;

  methodologyVersion?: string;
  qrCodeUrl?: string;
  hash?: string;
  generationTimestamp?: string;
};

export function fillAttestationTemplate(data: AttestationData): string {
  const total = Number(data.total || 0);
  const s1 = Number(data.scope1 || 0);
  const s2 = Number(data.scope2 || 0);
  const s3 = Number(data.scope3 || 0);

  const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0";
  const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0";
  const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0";

  const fullHash = String(data.hash || "PENDING");
  const shortHash = fullHash.substring(0, 8);

  const map: Record<string, string> = {
    ATTESTATION_ID: data.attestationId,
    ISSUE_DATE_UTC: data.issueDate.split("T")[0],
    PREPARED_ON: data.preparedOn.split("T")[0],

    COMPANY_NAME: data.companyName,
    BUSINESS_SECTOR: data.sector,
    COUNTRY: data.country,
    ASSESSMENT_PERIOD: data.period,

    SCOPE_1: s1.toFixed(2),
    SCOPE_2: s2.toFixed(2),
    SCOPE_3: s3.toFixed(2),
    TOTAL: total.toFixed(2),

    SCOPE_1_PERCENT: pct1,
    SCOPE_2_PERCENT: pct2,
    SCOPE_3_PERCENT: pct3,

    METHODOLOGY_VERSION: data.methodologyVersion || "3.1",
    GENERATION_TIMESTAMP: data.generationTimestamp || new Date().toISOString(),

    QR_CODE: data.qrCodeUrl
      ? `<img src="${data.qrCodeUrl}" width="120" height="120" alt="QR Code Verification" />`
      : "",

    HASH: fullHash,
    HASH_SHORT: shortHash
  };

  let html = attestationTemplate;

  for (const key in map) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), String(map[key]));
  }

  return html;
}
