import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Stripe instance avec API version requise
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-12-15.clover',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Crée la session de paiement Checkout
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],

      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Carbon Footprint Official Attestation',
            },
            unit_amount: 9900, // 99€
          },
          quantity: 1,
        },
      ],

      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ id: session.id });

  } catch (err: any) {
    return res.status(500).json({
      error: 'Stripe error',
      message: err.message || 'Unknown error',
    });
  }
}
