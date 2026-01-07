export const attestationTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Carbon Footprint Attestation — Certif-Scope</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    :root {
      --blue-dark: #0B3A63;
      --blue-light: #1FB6C1;
      --text-main: #1E293B;
      --text-muted: #475569;
      --border: #E2E8F0;
      --bg-soft: #F8FAFC;
    }

    body {
      margin: 0;
      padding: 40px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif;
      color: var(--text-main);
      background: white;
      font-size: 14px;
      line-height: 1.6;
    }

    h1, h2, h3 { color: var(--blue-dark); margin: 0 0 12px 0; }
    h1 { font-size: 26px; }
    h2 { font-size: 18px; margin-top: 36px; }

    .header {
      border-bottom: 2px solid var(--border);
      padding-bottom: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .brand {
      font-size: 20px;
      font-weight: 800;
    }

    .meta {
      font-size: 12px;
      color: var(--text-muted);
    }

    .qr-box {
      text-align: right;
    }

    .qr-box img {
      width: 120px;
      height: 120px;
    }

    .section { margin-bottom: 28px; }

    .box {
      background: var(--bg-soft);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      margin-top: 12px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 13px;
    }

    th, td {
      border: 1px solid var(--border);
      padding: 10px 12px;
      text-align: left;
    }

    th {
      background: #F1F5F9;
      font-weight: 600;
    }

    .footer {
      margin-top: 48px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
      font-size: 12px;
      color: var(--text-muted);
    }
  </style>
</head>

<body>

  <!-- HEADER WITH QR -->
  <div class="header">
    <div>
      <div class="brand">
        <span style="color:#0B3A63;">Certif-</span><span style="color:#1FB6C1;">Scope</span>
      </div>
      <div class="meta">
        Carbon Footprint Attestation (Methodological) · Version v3<br />
        Document ID: {{ATTESTATION_ID}} · Issued {{ISSUE_DATE_UTC}} (UTC)
      </div>
    </div>

    <div class="qr-box">
      <img src="{{QR_CODE}}" alt="QR Code Verification" />
      <div class="meta">Scan to verify</div>
    </div>
  </div>

  <!-- 1. ENTITY IDENTIFICATION -->
  <div class="section">
    <h2>1. Entity identification</h2>
    <p><strong>Company name:</strong> {{COMPANY_NAME}}</p>
    <p><strong>Business sector:</strong> {{BUSINESS_SECTOR}}</p>
    <p><strong>Country:</strong> {{COUNTRY}}</p>
    <p><strong>Assessment period:</strong> {{ASSESSMENT_PERIOD}}</p>
  </div>

  <!-- 2. EXECUTIVE SUMMARY -->
  <div class="section">
    <h2>2. Executive summary</h2>
    <p>
      This document provides a <strong>methodological carbon footprint attestation</strong>
      based on standardized estimation methods.
    </p>

    <div class="box">
      <p><strong>Scope 1:</strong> {{SCOPE_1}} tCO₂e</p>
      <p><strong>Scope 2:</strong> {{SCOPE_2}} tCO₂e</p>
      <p><strong>Scope 3:</strong> {{SCOPE_3}} tCO₂e</p>
      <p class="total"><strong>Total estimated emissions:</strong> {{TOTAL}} tCO₂e</p>
    </div>
  </div>

  <!-- 3. EMISSIONS BY SCOPE -->
  <div class="section">
    <h2>3. Emissions by scope</h2>

    <table>
      <thead>
        <tr>
          <th>Scope</th>
          <th>Description</th>
          <th>Estimated emissions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Scope 1</td>
          <td>Direct emissions</td>
          <td>{{SCOPE_1}} tCO₂e</td>
        </tr>
        <tr>
          <td>Scope 2</td>
          <td>Indirect energy emissions</td>
          <td>{{SCOPE_2}} tCO₂e</td>
        </tr>
        <tr>
          <td>Scope 3</td>
          <td>Value-chain emissions (screening level)</td>
          <td>{{SCOPE_3}} tCO₂e</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 4. METHODOLOGY -->
  <div class="section">
    <h2>4. Methodology</h2>
    <p>
      This assessment applies a <strong>spend-based estimation approach</strong> inspired by the GHG Protocol.
    </p>
  </div>

  <!-- 5. REGULATORY CONTEXT -->
  <div class="section">
    <h2>5. Regulatory context</h2>
    <p>
      This attestation supports ESG and CSRD Scope 3 data requests from banks and partners.
    </p>
  </div>

  <!-- 6. DATA PROCESSING -->
  <div class="section">
    <h2>6. Data processing & confidentiality</h2>
    <p>
      All calculations are performed <strong>locally</strong> in the user’s device. No raw data is stored.
    </p>
  </div>

  <!-- 7. LEGAL -->
  <div class="section">
    <h2>7. Legal notice & limitations</h2>
    <p>
      This is a <strong>methodological attestation</strong>, not a certified audit nor a CSRD filing.
    </p>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    Issued by Certif-Scope · Methodology version {{METHODOLOGY_VERSION}}<br />
    Generation timestamp (UTC): {{GENERATION_TIMESTAMP}}
  </div>

</body>
</html>
`;
