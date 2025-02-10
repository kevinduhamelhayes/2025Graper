import { handlers } from "./lib/auth";
import { authConfig } from "./lib/auth.config";

export const { GET, POST } = handlers;
export const dynamic = "force-dynamic"; // Necesario para Vercel