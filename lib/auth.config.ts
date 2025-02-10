import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = {
  providers: [Google],
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true, // Necesario para Vercel
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    }
  }
} satisfies NextAuthConfig;