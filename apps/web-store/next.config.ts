import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Cargar variables de entorno desde la raíz del monorepo
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  // Asegurar que Next.js pueda encontrar el .env en la raíz
  experimental: {
    // Para turbopack en monorepo
  },
};

export default nextConfig;
