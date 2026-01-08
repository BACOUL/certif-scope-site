import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Instant carbon footprint attestation for SMEs — compliant with EU proportionality rules. Generate Scope 1, 2, 3 estimations instantly."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Certif-Scope — Instant SME CO₂ Attestation" />
        <meta
          property="og:description"
          content="Generate and verify SME carbon footprint attestations. EU-compliant, instant, verifiable by hash + QR."
        />
        <meta property="og:url" content="https://certif-scope.com/" />
        <meta property="og:image" content="https://certif-scope.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certif-Scope — Instant CO₂ Attestation" />
        <meta
          name="twitter:description"
          content="Instant CO₂ attestation for SMEs — verifiable, structured, EU-compliant."
        />
        <meta name="twitter:image" content="https://certif-scope.com/og-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://certif-scope.com/" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
