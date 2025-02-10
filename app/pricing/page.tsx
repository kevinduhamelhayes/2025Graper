"use client";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/pricing-card";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Starter",
    price: "0",
    features: [
      "Acceso básico al dashboard",
      "3 proyectos activos",
      "Soporte por email",
      "Prueba de 14 días",
    ],
    cta: "Comenzar prueba",
  },
  {
    name: "Pro",
    price: "29",
    features: [
      "Acceso completo al dashboard",
      "Proyectos ilimitados",
      "Soporte prioritario 24/7",
      "Informes avanzados",
      "Integraciones API",
    ],
    cta: "Elegir Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    features: [
      "Solución personalizada",
      "Gestión dedicada",
      "SLA 99.9%",
      "Entrenamiento equipo",
      "Seguridad premium",
    ],
    cta: "Contactar ventas",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Planes para cada necesidad
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Elige el plan que mejor se adapte a tus objetivos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}