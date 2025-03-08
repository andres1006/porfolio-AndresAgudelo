/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comentamos output: "export" para permitir rutas API
  // output: "export",
  distDir: process.env.NODE_ENV === "development" ? ".next" : "out",
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
