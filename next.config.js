/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para despliegue en Vercel
  output: process.env.NODE_ENV === "production" ? undefined : "export",
  distDir: process.env.NODE_ENV === "development" ? ".next" : ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Ignorar errores de TypeScript durante la compilación
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  // Excluir las rutas API de la exportación estática
  //trailingSlash: true,
  // Configuración para manejar módulos de Node.js en el navegador
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // No intentar resolver estos módulos en el cliente
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        dns: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
