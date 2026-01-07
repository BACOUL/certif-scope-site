import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Use origin or fallback domain
    const origin =
      req.headers.origin ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://certif-scope.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      client_reference_id: req.body?.companyName || "certif-scope",

      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 9900,
            product_data: {
              name: "Carbon Footprint Official Attestation",
            },
          },
          quantity: 1,
        },
      ],

      allow_promotion_codes: false,
      payment_intent_data: {
        description: "Certif-Scope Carbon Attestation",
      },

      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return res.status(200).json({ id: session.id });
  } catch (err: any) {
    console.error("STRIPE ERROR:", err);
    return res.status(500).json({ error: "Stripe error", details: err.message });
  }
}
