"use client";
import { loadStripe } from "@stripe/stripe-js";

export default function PricingPage() {
  const handleSubscribe = async (priceId: string) => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });
    const { url } = await response.json();
    window.location.href = url;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Elige un Plan</h1>
      <button
        onClick={() => handleSubscribe("price_123")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Plan Básico - $10/mes
      </button>
    </div>
  );
}