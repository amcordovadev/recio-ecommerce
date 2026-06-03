import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // 1. Forzar exportación estática
  // output: 'export',

  // 2. IMPORTANTE: GitHub Pages suele usar rutas como /nombre-del-repo/
  // Si tu repo se llama "recio-ecommerce", descomenta la siguiente línea:
  // basePath: '/recio-ecommerce',

  // 3. Ya lo tenemos, pero por seguridad:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
