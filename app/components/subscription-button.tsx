"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

export function SubscriptionButton({ plan }: { plan: any }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      return router.push("/login");
    }

    try {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
      
      const response = await fetch("/api/stripe/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          customerId: session.user.stripeCustomerId,
        }),
      });

      const { sessionId } = await response.json();
      
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      toast.error("Error al procesar la suscripción");
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      className={`w-full ${
        plan.featured ? "bg-white text-blue-600 hover:bg-gray-100" : ""
      }`}
      size="lg"
    >
      {plan.cta}
    </Button>
  );
}