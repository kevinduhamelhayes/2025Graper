"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import LoginButton from "../app/components/LoginButton";
import Link from "next/link";
import React from "react";
const FeatureCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string 
}) => (
  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
    <Image 
      src={icon} 
      alt={title} 
      width={40} 
      height={40} 
      className="mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex justify-between items-center mb-20">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={25}
          priority
        />
        {session ? (
          <Link 
            href="/dashboard" 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Ir al Dashboard
          </Link>
        ) : (
          <LoginButton />
        )}
      </nav>

      <main className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          Transforma tu negocio con <span className="text-blue-500">Graper</span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          La plataforma todo en uno para gestión inteligente. Prueba gratis durante 14 días.
        </p>

        {!session && (
          <div className="flex flex-col gap-4">
            <LoginButton />
            <p className="text-sm text-gray-500">
              Regístrate con Google o GitHub para comenzar tu prueba gratuita
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Potente Dashboard"
            description="Accede a métricas en tiempo real y análisis avanzados"
            icon="/chart.svg"
          />
          <FeatureCard
            title="Gestión Integrada"
            description="Todo lo que necesitas en un solo lugar"
            icon="/gear.svg"
          />
          <FeatureCard
            title="Seguridad Garantizada"
            description="Protección de datos nivel empresarial"
            icon="/shield.svg"
          />
        </div>
      </main>

      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Graper. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}