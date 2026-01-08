export function generateDynamicSections(scopes: Record<string, number>) {
  let rows = "";
  let charts = "";
  const total = Object.values(scopes).reduce((acc, v) => acc + v, 0) || 1;

  for (const [label, value] of Object.entries(scopes)) {
    const pct = ((value / total) * 100).toFixed(1);

    rows += `
      <tr>
        <td><strong>${label}</strong></td>
        <td>${value} tCO₂e</td>
        <td>${pct}%</td>
      </tr>
    `;

    charts += `
      <div class="chart-row">
        <div class="chart-label">${label}</div>
        <div class="chart-bar-bg">
          <div class="chart-bar-fill" style="width:${pct}%; background:#1FB6C1;"></div>
        </div>
        <div class="chart-value">${value} t</div>
      </div>
    `;
  }

  return { rows, charts };
}
