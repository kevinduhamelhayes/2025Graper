"use client";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import type { PricingPlan } from "@/types";
import React from "react"

export const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative p-8 rounded-xl shadow-lg transition-all duration-300 ${
        plan.featured
          ? "bg-blue-600 text-white scale-105"
          : "bg-white dark:bg-gray-800 hover:shadow-xl"
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
          {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
        </span>
        {typeof plan.price === "number" && (
          <span className="text-lg ml-2">/mes</span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start">
            <CheckIcon className="w-5 h-5 mt-1 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          plan.featured
            ? "bg-white text-blue-600 hover:bg-gray-100"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
};