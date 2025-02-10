// components/LoginButton.tsx
"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function LoginButton() {
  return (
    <button onClick={() => signIn("google")} className="...">
      <Image src="/google.svg" width={20} height={20} alt="Google Logo" />
      Comenzar prueba gratuita
    </button>
  
)
}
  
export default LoginButton;

