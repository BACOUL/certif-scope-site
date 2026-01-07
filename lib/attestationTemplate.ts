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
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, Inter, Arial, sans-serif;
      color: var(--text-main);
      background: white;
      font-size: 14px;
      line-height: 1.6;
      position: relative;
    }

    /* Optimized watermark for premium layout */
    .watermark {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      font-size: 40px;
      font-weight: 800;
      color: rgba(148, 163, 184, 0.05);
      z-index: -1;
      pointer-events: none;
      white-space: nowrap;
      text-transform: uppercase;
    }

    h1, h2, h3 { color: var(--blue-dark); margin: 0 0 12px 0; }
    h1 { font-size: 26px; }
    h2 { font-size: 18px; margin-top: 40px; padding-bottom: 6px; border-bottom: 2px solid #dbe7f4; }
    h3 { font-size: 15px; margin-top: 24px; font-weight: 600; color: var(--text-main); }

    /* ===== PREMIUM LAYOUT UPGRADE ===== */

    /* 1. document-header compact premium */
    .header {
      padding-bottom: 15px;
      padding-top: 10px;
      margin-bottom: 15px;
      border-bottom: 2px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    /* 2. subtle line under brand */
    .brand::after {
      content: "";
      display: block;
      width: 60%;
      height: 3px;
      background: linear-gradient(90deg, var(--blue-dark), var(--blue-light));
      margin-top: 6px;
      border-radius: 3px;
    }

    .brand {
      font-size: 24px;
      font-weight: 800;
    }

    .meta {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.4;
    }

    .qr-box {
      text-align: right;
    }
    .qr-box img {
      width: 120px;
      height: 120px;
      padding: 6px;
      border: 1px solid #d8e2ef;
      border-radius: 8px;
      background: white;
    }

    .section { margin-bottom: 18px; margin-top: 20px; page-break-inside: avoid; }

    /* 3. premium result card */
    .box {
      background: white;
      border-radius: 12px;
      border: 1px solid #d8e2ef;
      box-shadow: 0 2px 6px rgba(0,0,0,0.06);
      padding: 20px;
      margin-top: 12px;
    }

    /* Visual improvements for tables (premium) */
    table {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      border-collapse: separate;
      border-spacing: 0;
      margin-top: 14px;
      font-size: 13px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }

    td, th {
      padding: 8px 10px;
      border: 1px solid #d6e2f0;
      text-align: left;
    }

    th {
      background: linear-gradient(90deg, #e8f1f7, #f7fafc);
      font-weight: 600;
      color: var(--blue-dark);
    }

    tr:nth-child(even) td {
      background: #f9fbfd;
    }

    .chart-row {
      display: flex;
      align-items: center;
      margin-top: 12px;
      gap: 15px;
    }
    .chart-label {
      width: 100px;
      font-size: 12px;
      font-weight: 500;
      color: var(--text-muted);
    }
    .chart-bar-bg {
      flex-grow: 1;
      background: #E2E8F0;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
    }
    .chart-bar-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.4s ease-out;
    }
    .chart-value {
      width: 80px;
      text-align: right;
      font-size: 12px;
      font-weight: 600;
    }

    .footer {
      margin-top: 40px;
      padding-top: 25px;
      border-top: 2px solid #dce6f2;
      font-size: 10px;
      color: var(--text-muted);
    }
    
    .hash-block {
      font-family: monospace;
      font-size: 10px;
      background: #F1F5F9;
      padding: 8px;
      word-break: break-all;
      border-radius: 4px;
      margin-top: 8px;
      color: #334155;
      border-left: 3px solid var(--blue-dark);
    }

    .page-num {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 10px;
      color: var(--text-muted);
    }

    ul { margin-top: 5px; padding-left: 20px; }
    li { margin-bottom: 4px; }

    .container { max-width: 760px; margin: 0 auto; padding: 0 20px; }

    @media print {
      .watermark { display:none; }
      body { background: white; color: #000; }
      .qr-box img { page-break-inside: avoid; }
    }

    /* ===== END PREMIUM UPGRADE ===== */
  </style>
</head>

<body>
  <div class="container">

  <div class="watermark">CERTIF-SCOPE · NON-AUDIT ESTIMATION</div>

  <div class="header">
    <div>
      <div class="brand">
        <span style="color:#0B3A63;">Certif-</span><span style="color:#1FB6C1;">Scope</span>
      </div>
      <div class="meta" style="margin-top:8px;">
        <strong>Carbon Footprint Attestation (Methodological)</strong><br>
        ID: {{ATTESTATION_ID}}<br>
        Methodology v{{METHODOLOGY_VERSION}}<br>
        Issued: {{ISSUE_DATE_UTC}} (UTC)
      </div>
    </div>

    <div class="qr-box">
      {{QR_CODE}}
      <div class="meta" style="margin-top:4px; font-weight:bold;">Verify at: https://certif-scope.com/verify</div>
      <div class="meta">Validation code: {{HASH_SHORT}}</div>
    </div>
  </div>

  <div class="section">
    <h2>1. Entity Identification</h2>
    <table style="margin-top:10px; border:none;">
        <tr style="border:none;"><td style="border:none; padding:4px 0;"><strong>Company Name:</strong></td><td style="border:none; padding:4px 0;">{{COMPANY_NAME}}</td></tr>
        <tr style="border:none;"><td style="border:none; padding:4px 0;"><strong>Business Sector:</strong></td><td style="border:none; padding:4px 0;">{{BUSINESS_SECTOR}}</td></tr>
        <tr style="border:none;"><td style="border:none; padding:4px 0;"><strong>Country:</strong></td><td style="border:none; padding:4px 0;">{{COUNTRY}}</td></tr>
        <tr style="border:none;"><td style="border:none; padding:4px 0;"><strong>Assessment Period:</strong></td><td style="border:none; padding:4px 0;">{{ASSESSMENT_PERIOD}}</td></tr>
    </table>
  </div>

  <div class="section">
    <h2>2. Executive Summary</h2>
    <p>
      This methodological attestation provides a standardized CO₂e estimation for the assessed period.
      Calculations follow a simplified spend-based model inspired by the GHG Protocol.
    </p>

    <div class="box">
      <div style="display:flex; justify-content:space-between; align-items:flex-end;">
        <div>
           <div style="font-size:12px; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px;">Total Estimated Emissions</div>
           <div style="font-size:32px; font-weight:800; color:var(--blue-dark); line-height:1.2;">{{TOTAL}} <span style="font-size:16px; font-weight:600;">tCO₂e</span></div>
        </div>
        <div style="text-align:right;">
           <div style="font-size:12px; color:var(--text-muted);">Scope 1</div>
           <div style="font-weight:600;">{{SCOPE_1}} t</div>
           <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Scope 2</div>
           <div style="font-weight:600;">{{SCOPE_2}} t</div>
           <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Scope 3</div>
           <div style="font-weight:600;">{{SCOPE_3}} t</div>
        </div>
      </div>
    </div>

    <div class="box" style="margin-top:20px; padding:16px;">
      <h3 style="margin:0 0 10px 0; font-size:15px;">Key Highlights</h3>
      <ul style="margin:0; padding-left:18px; font-size:12px; color:var(--text-muted);">
        <li>Total footprint: <strong>{{TOTAL}} tCO₂e</strong></li>
        <li>Scope 3 dominates at <strong>{{SCOPE_3_PERCENT}}%</strong></li>
        <li>Emission factors updated — Methodology v{{METHODOLOGY_VERSION}}</li>
      </ul>
    </div>
    
    <div class="chart-section" style="margin-top:25px;">
      <h3>Visual Breakdown</h3>
      
      <div class="chart-row">
        <div class="chart-label">Scope 1</div>
        <div class="chart-bar-bg">
           <div class="chart-bar-fill" style="width: {{SCOPE_1_PERCENT}}%; background:#0B3A63;"></div>
        </div>
        <div class="chart-value">{{SCOPE_1}} t</div>
      </div>

      <div class="chart-row">
        <div class="chart-label">Scope 2</div>
        <div class="chart-bar-bg">
           <div class="chart-bar-fill" style="width: {{SCOPE_2_PERCENT}}%; background:#1FB6C1;"></div>
        </div>
        <div class="chart-value">{{SCOPE_2}} t</div>
      </div>

      <div class="chart-row">
        <div class="chart-label">Scope 3</div>
        <div class="chart-bar-bg">
           <div class="chart-bar-fill" style="width: {{SCOPE_3_PERCENT}}%; background:#94A3B8;"></div>
        </div>
        <div class="chart-value">{{SCOPE_3}} t</div>
      </div>
      
      <div style="font-size:10px; color:#94A3B8; margin-top:8px; text-align:right;">* Bars represent relative contribution to total footprint</div>
    </div>
  </div>

  <div class="section">
    <h2>3. Emissions Detail</h2>
    <table role="table" aria-label="Détail des émissions">
      <thead>
        <tr>
          <th width="20%">Scope</th>
          <th width="50%">Description</th>
          <th width="30%">Estimated Emissions</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Scope 1</strong></td><td>Direct emissions (Fuel, Gas)</td><td>{{SCOPE_1}} tCO₂e</td></tr>
        <tr><td><strong>Scope 2</strong></td><td>Indirect energy emissions (Electricity)</td><td>{{SCOPE_2}} tCO₂e</td></tr>
        <tr><td><strong>Scope 3</strong></td><td>Value-chain emissions (Screening)</td><td>{{SCOPE_3}} tCO₂e</td></tr>
        <tr style="background:#F8FAFC; font-weight:bold;">
          <td colspan="2" style="text-align:right;">TOTAL</td>
          <td>{{TOTAL}} tCO₂e</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Single hash-block (kept once, before Regulatory Context) -->
  <div class="hash-block">{{HASH}}</div>

  <div class="section">
    <h2>4. Regulatory Context</h2>
    <ul>
      <li>Banking compliance and financing pre-assessment</li>
      <li>ESG questionnaires and supply-chain requests</li>
      <li>Internal awareness and baseline estimation</li>
    </ul>
  </div>

  <div class="section">
    <h2>5. Methodology</h2>
    <p>This methodological assessment applies a standardized spend-based CO₂e conversion aligned with GHG Protocol guidelines. All calculations use EUR reference factors.</p>
    
    <h3>5.1 Calculation Logic</h3>
    <ul>
      <li><strong>Scope 1:</strong> Fuel expenses × emission factor</li>
      <li><strong>Scope 2:</strong> Electricity expenses × emission factor</li>
      <li><strong>Scope 3:</strong> Annual revenue × sector intensity coefficient</li>
    </ul>
    
    <p style="font-size:13px; color:var(--text-muted); margin-top:10px;">
      <em>Source of emission factors: ADEME Base Empreinte® and recognized monetary ratios for the specific business sector.</em>
    </p>

    <h3>5.2 Purpose & Limitations</h3>
    <p>This provides a <strong>screening-level estimate</strong> suitable for:</p>
    <ul>
        <li>Banking compliance & financing pre-assessment</li>
        <li>ESG questionnaires & supply-chain requests</li>
        <li>Internal awareness & baseline setting</li>
    </ul>
    <p>
      It does not replace a physical carbon audit (activity-based) required for regulatory CSRD reporting for large entities.
    </p>

    <!-- ====================== 1) AJOUT TABLEAU COEFFICIENTS ====================== -->
    <div class="section">
      <h3>5.3 Emission Factors Used</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Coefficient</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scope 1 — Fuel</td>
            <td>0.0002 tCO₂e/€</td>
            <td>ADEME Base Empreinte® v2023.1</td>
          </tr>
          <tr>
            <td>Scope 2 — Electricity</td>
            <td>0.0001 tCO₂e/€</td>
            <td>ADEME Base Empreinte® v2023.1</td>
          </tr>
          <tr>
            <td>Scope 3 — Sector Screening</td>
            <td>0.00005 tCO₂e/€</td>
            <td>Sector Monetary Ratios 2023 (GHG Protocol)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- ====================== END TABLE COEFFICIENTS ====================== -->

  </div>

  <div class="section">
    <h2>6. Data Privacy & Integrity</h2>
    <p>
      <strong>Privacy-First:</strong> All raw financial data processing is performed locally on the client-side. Certif-Scope does not store the user's revenue or expense data.
    </p>
    <p>
      <strong>Authenticity:</strong> This document is cryptographically hashed. The unique hash displayed above ensures the integrity of the emitted values.
    </p>
  </div>

  <div class="section">
    <h2>7. Legal Disclaimer</h2>
    <p style="font-size:12px; color:var(--text-muted); text-align:justify;">
      This attestation is a methodological estimation provided "as is". Certif-Scope (and its parent entity) assumes no liability for the accuracy of the financial inputs provided by the user. This document is not a certified audit under ISO 14064 standards nor a regulatory declaration. It is intended for informational and voluntary compliance purposes only.
    </p>
    <p style="font-size:10px;color:#94A3B8; margin-top:5px;">Any modification invalidates the document.</p>
  </div>

  <div class="footer">
    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
      <div>
        <strong>Certif-Scope</strong> — Independent ESG Service<br>
        Generated by Certif-Scope v1.0<br>
        Jurisdiction: France (EU)<br>
        Support: contact@certif-scope.com<br>
        <div style="margin-top:6px;">Prepared for: {{COMPANY_NAME}}</div>
        <div style="font-size:9px;color:#94A3B8;">Prepared on: {{PREPARED_ON}}</div>
      </div>
      <div style="text-align:right;">
        <div style="margin-bottom:4px;">Issued by Certif-Scope Automated Engine</div>
        <div style="font-size:9px; text-transform:uppercase; color:#94A3B8;">Non-human signature</div>
        <div style="margin-top:8px;">ID: {{ATTESTATION_ID}}</div>
      </div>
    </div>
    <div style="text-align:center; margin-top:20px;">
        <div style="font-size:10px;color:#64748B; margin-top:6px;">Verify: https://certif-scope.com/verify?id={{ATTESTATION_ID}}</div>
        <div style="font-size:9px;margin-top:4px;color:#94A3B8;">Privacy policy: https://certif-scope.com/privacy</div>
    </div>
  </div>

  <!-- CERTIF-SCOPE-MACHINE-DATA
  ATTESTATION_ID={{ATTESTATION_ID}}
  ISSUE_DATE={{ISSUE_DATE_UTC}}
  METHOD_VERSION={{METHODOLOGY_VERSION}}
  GENERATED={{GENERATION_TIMESTAMP}}
  COMPANY_NAME={{COMPANY_NAME}}
  BUSINESS_SECTOR={{BUSINESS_SECTOR}}
  COUNTRY={{COUNTRY}}
  ASSESSMENT_PERIOD={{ASSESSMENT_PERIOD}}
  TOTAL={{TOTAL}}
  SCOPE_1={{SCOPE_1}}
  SCOPE_2={{SCOPE_2}}
  SCOPE_3={{SCOPE_3}}
  SCOPE_1_PERCENT={{SCOPE_1_PERCENT}}
  SCOPE_2_PERCENT={{SCOPE_2_PERCENT}}
  SCOPE_3_PERCENT={{SCOPE_3_PERCENT}}
  HASH={{HASH}}
  HASH_SHORT={{HASH_SHORT}}
  QR_CODE={{QR_CODE}}
  PREPARED_ON={{PREPARED_ON}}
  END-CERTIF-SCOPE-MACHINE-DATA -->

  </div>
</body>
</html>
`;

export function fillAttestationTemplate(data) {
  const total = Number(data.total || 0);
  const s1 = Number(data.scope1 || 0);
  const s2 = Number(data.scope2 || 0);
  const s3 = Number(data.scope3 || 0);

  const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0";
  const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0";
  const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0";

  const fullHash = String(data.hash || "PENDING");
  // shortHash will be generated by the template (not provided by API)
  const shortHash = fullHash.substring(0, 8);

  const map = {
    ATTESTATION_ID: data.attestationId || "",
    ISSUE_DATE_UTC: (data.issueDate || new Date().toISOString()).split("T")[0],
    COMPANY_NAME: data.companyName || "",
    BUSINESS_SECTOR: data.sector || "",
    COUNTRY: data.country || "France",
    ASSESSMENT_PERIOD: data.period || new Date().getFullYear().toString(),
    SCOPE_1: s1.toFixed(2),
    SCOPE_2: s2.toFixed(2),
    SCOPE_3: s3.toFixed(2),
    TOTAL: total.toFixed(2),
    SCOPE_1_PERCENT: pct1,
    SCOPE_2_PERCENT: pct2,
    SCOPE_3_PERCENT: pct3,
    METHODOLOGY_VERSION: data.methodologyVersion || "3.1",
    // keep full ISO timestamp for generation timestamp to avoid instability in hash
    GENERATION_TIMESTAMP: data.generationTimestamp || new Date().toISOString(),
    // PREPARED_ON stabilized to date-only string
    PREPARED_ON: (data.preparedOn || data.issueDate || new Date().toISOString()).split("T")[0],
    QR_CODE: data.qrCodeUrl
      ? `<img src="${data.qrCodeUrl}" width="120" height="120" alt="QR Code Verification" />`
      : "",
    HASH: fullHash
    // NOTE: HASH_SHORT is intentionally NOT provided by the API; template will compute it below
  };

  let html = attestationTemplate;

  for (const key in map) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), String(map[key]));
  }

  // Generate HASH_SHORT from HASH inside the template (do not rely on API)
  html = html.replace(new RegExp(`{{HASH_SHORT}}`, "g"), String(shortHash));

  // Ensure any leftover placeholders for QR_CODE are replaced with empty string if not provided
  html = html.replace(new RegExp(`{{QR_CODE}}`, "g"), map.QR_CODE || "");

  return html;
}
