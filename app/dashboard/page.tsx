"use client";
import { BarChart, Metric, Title } from "@tremor/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const chartData = [
  { date: "Ene", usuarios: 45, ingresos: 1200 },
  { date: "Feb", usuarios: 52, ingresos: 1500 },
  { date: "Mar", usuarios: 68, ingresos: 2100 },
];

export default function DashboardPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-1/3 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-96 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <Title className="mb-8 text-3xl font-bold">
        Bienvenido, {session?.user?.name}
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Usuarios activos" value="1,234" />
        <MetricCard title="Ingresos mensuales" value="$15,230" />
        <MetricCard title="Tasa de conversión" value="23.4%" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <Title className="mb-4">Rendimiento mensual</Title>
        <BarChart
          data={chartData}
          categories={["usuarios", "ingresos"]}
          dataKey="date"
          colors={["blue-400", "green-400"]}
          yAxisWidth={60}
          showAnimation
        />
      </div>
    </div>
  );
}

function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{title}</p>
      <Metric className="text-3xl font-bold">{value}</Metric>
    </div>
  );
}