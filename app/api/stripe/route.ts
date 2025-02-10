import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { priceId, userId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    customer: user.stripeCustomerId,
    payment_method_types: ["card"],
    line_items: [{
      price: priceId,
      quantity: 1,
    }],
    mode: "subscription",
    success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXTAUTH_URL}/pricing`,
    subscription_data: {
      trial_period_days: 14, // Free trial de 14 días
    },
  });

  return Response.json({ url: session.url });
}