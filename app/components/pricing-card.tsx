"use client";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubscriptionButton } from "@/components/subscription-button";

export function PricingCard({ plan, index }: { plan: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative p-8 rounded-2xl shadow-xl ${
        plan.featured
          ? "bg-blue-500 text-white dark:bg-blue-600"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      {plan.featured && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-3 py-1 rounded-bl-xl text-sm font-bold">
          Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">
          {plan.price === "0" ? "Gratis" : `$${plan.price}`}
        </span>
        {plan.price !== "Personalizado" && (
          <span className="text-gray-500 dark:text-gray-400">/mes</span>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-center">
            <CheckIcon className="w-5 h-5 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <SubscriptionButton plan={plan} />
    </motion.div>
  );
}