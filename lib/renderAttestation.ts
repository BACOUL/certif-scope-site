// ===============================
// Type complet avec QR_CODE
// ===============================
export type AttestationData = {
  COMPANY_NAME: string;
  BUSINESS_SECTOR: string;
  COUNTRY: string;
  ASSESSMENT_PERIOD: string;

  SCOPE_1: string;
  SCOPE_2: string;
  SCOPE_3: string;
  TOTAL: string;

  ATTESTATION_ID: string;
  ISSUE_DATE_UTC: string;
  GENERATION_TIMESTAMP: string;
  METHODOLOGY_VERSION: string;

  QR_CODE: string;
};

// ===============================
// Fonction de rendu HTML
// ===============================
export function renderAttestationHTML(data: AttestationData): string {
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Carbon Footprint Attestation — Certif-Scope</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="font-family: Arial, sans-serif; padding: 20px;">

  <h1>Carbon Footprint Attestation</h1>

  <p><strong>Company:</strong> {{COMPANY_NAME}}</p>
  <p><strong>Business sector:</strong> {{BUSINESS_SECTOR}}</p>
  <p><strong>Country:</strong> {{COUNTRY}}</p>
  <p><strong>Assessment period:</strong> {{ASSESSMENT_PERIOD}}</p>

  <h2>Emissions</h2>
  <p><strong>Scope 1:</strong> {{SCOPE_1}} tCO₂e</p>
  <p><strong>Scope 2:</strong> {{SCOPE_2}} tCO₂e</p>
  <p><strong>Scope 3:</strong> {{SCOPE_3}} tCO₂e</p>
  <p><strong>Total:</strong> {{TOTAL}} tCO₂e</p>

  <h2>Attestation details</h2>
  <p><strong>Attestation ID:</strong> {{ATTESTATION_ID}}</p>
  <p><strong>Issue date (UTC):</strong> {{ISSUE_DATE_UTC}}</p>
  <p><strong>Generated at:</strong> {{GENERATION_TIMESTAMP}}</p>
  <p><strong>Methodology version:</strong> {{METHODOLOGY_VERSION}}</p>

  <h2>Verification</h2>
  <p>Scan the QR code below to verify authenticity:</p>
  <img src="{{QR_CODE}}" alt="Verification QR Code" style="width:180px; height:180px;" />

</body>
</html>
`;

  // Injection sécurisée des valeurs
  for (const [key, value] of Object.entries(data)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }

  return html;
}
