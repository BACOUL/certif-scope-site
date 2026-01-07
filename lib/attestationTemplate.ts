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
      font-family: -apple-system, BlinkMacSystemFont, Inter, Arial, sans-serif;
      color: var(--text-main);
      background: white;
      font-size: 14px;
      line-height: 1.6;
    }

    h1, h2, h3 { color: var(--blue-dark); margin: 0 0 12px 0; }
    h1 { font-size: 26px; }
    h2 { font-size: 18px; margin-top: 36px; }
    h3 { font-size: 15px; margin-top: 24px; }

    .header {
      border-bottom: 2px solid var(--border);
      padding-bottom: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .brand {
      font-size: 22px;
      font-weight: 800;
    }

    .meta {
      font-size: 12px;
      color: var(--text-muted);
    }

    .qr-box img { width: 130px; height: 130px; }

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
      margin-top: 14px;
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

    .graph {
      margin-top: 18px;
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .bar {
      height: 14px;
      border-radius: 6px;
    }

    /* PAGE BREAK FOR PDF */
    .page-break {
      page-break-before: always;
      margin-top: 40px;
    }

    .footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
      font-size: 12px;
      color: var(--text-muted);
    }
  </style>
</head>

<body>

  <!-- PAGE 1 ------------------------------------------------ -->
  <div class="header">
    <div>
      <div class="brand">
        <span style="color:#0B3A63;">Certif-</span><span style="color:#1FB6C1;">Scope</span>
      </div>
      <div class="meta">
        Carbon Footprint Attestation (Methodological) — v3<br>
        Document ID: {{ATTESTATION_ID}} · Issued {{ISSUE_DATE_UTC}} (UTC)
      </div>
    </div>

    <div class="qr-box">
      <img src="{{QR_CODE}}" alt="QR Verification" />
      <div class="meta">Scan to verify authenticity</div>
    </div>
  </div>

  <!-- ENTITY -->
  <div class="section">
    <h2>1. Entity identification</h2>
    <p><strong>Company name:</strong> {{COMPANY_NAME}}</p>
    <p><strong>Business sector:</strong> {{BUSINESS_SECTOR}}</p>
    <p><strong>Country:</strong> {{COUNTRY}}</p>
    <p><strong>Assessment period:</strong> {{ASSESSMENT_PERIOD}}</p>
  </div>

  <!-- EXECUTIVE SUMMARY -->
  <div class="section">
    <h2>2. Executive summary</h2>
    <p>
      This methodological attestation provides a standardized CO₂e estimation for the assessed period.
      All calculations follow a simplified GHG Protocol–inspired spend-based model.
    </p>

    <div class="box">
      <p><strong>Scope 1:</strong> {{SCOPE_1}} tCO₂e</p>
      <p><strong>Scope 2:</strong> {{SCOPE_2}} tCO₂e</p>
      <p><strong>Scope 3:</strong> {{SCOPE_3}} tCO₂e</p>
      <p><strong>Total estimated emissions:</strong> {{TOTAL}} tCO₂e</p>
    </div>

    <!-- GRAPHIC REPRESENTATION -->
    <div class="graph">
      <div style="width:120px;">Scope 1</div>
      <div class="bar" style="width: calc({{SCOPE_1}} * 4px); background:#1FB6C1;"></div>
      <div>{{SCOPE_1}} t</div>
    </div>

    <div class="graph">
      <div style="width:120px;">Scope 2</div>
      <div class="bar" style="width: calc({{SCOPE_2}} * 4px); background:#0B3A63;"></div>
      <div>{{SCOPE_2}} t</div>
    </div>

    <div class="graph">
      <div style="width:120px;">Scope 3</div>
      <div class="bar" style="width: calc({{SCOPE_3}} * 4px); background:#475569;"></div>
      <div>{{SCOPE_3}} t</div>
    </div>
  </div>

  <!-- TABLE -->
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
        <tr><td>Scope 1</td><td>Direct emissions</td><td>{{SCOPE_1}} tCO₂e</td></tr>
        <tr><td>Scope 2</td><td>Energy indirect emissions</td><td>{{SCOPE_2}} tCO₂e</td></tr>
        <tr><td>Scope 3</td><td>Value-chain emissions (screening)</td><td>{{SCOPE_3}} tCO₂e</td></tr>
      </tbody>
    </table>
  </div>

  <!-- PAGE BREAK -->
  <div class="page-break"></div>

  <!-- PAGE 2 ------------------------------------------------ -->
  <h2>4. Methodology (detailed)</h2>
  <p>
    The estimation model uses a spend-based conversion aligned with the GHG Protocol guidelines.
    It converts annual financial expenditure into CO₂e using standardized emission factors.
  </p>

  <h3>4.1 Calculation principles</h3>
  <ul>
    <li>Fuel expenses × emission factor = Scope 1 CO₂e</li>
    <li>Electricity expenses × emission factor = Scope 2 CO₂e</li>
    <li>Annual revenue × sector coefficient = Scope 3 CO₂e</li>
  </ul>

  <h3>4.2 Limits of the model</h3>
  <p>
    This attestation provides a screening-level estimation.  
    It does not include activity-based inputs or primary emission factors from suppliers.
  </p>

  <h2>5. Regulatory context</h2>
  <p>
    This document supports:
  </p>
  <ul>
    <li>ESG screening questionnaires</li>
    <li>Banking and financing pre-assessment</li>
    <li>Supply-chain sustainability requests (Scope 3)</li>
  </ul>

  <h2>6. Data handling & confidentiality</h2>
  <p>
    All calculations are performed locally.  
    Certif-Scope does not store business inputs, ensuring full confidentiality.
  </p>

  <h2>7. Legal notice & usage limitations</h2>
  <p>
    This attestation is an estimation, not a certified audit and not a CSRD declaration.
    It must not be used for regulatory reporting or official carbon accounting submissions.
  </p>

  <div class="footer">
    Issued by Certif-Scope — Subsidiary of TimeProofs<br>
    Contact: support@certif-scope.com<br>
    Methodology v{{METHODOLOGY_VERSION}} · Generated {{GENERATION_TIMESTAMP}} (UTC)
  </div>

</body>
</html>
`;
