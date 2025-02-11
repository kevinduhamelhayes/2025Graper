export type PricingPlan = {
  name: string;
  price: number | string;
  features: string[];
  cta: string;
  featured?: boolean;
  type: "free" | "premium" | "enterprise";
};