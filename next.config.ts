import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    typedEnv: true,
    typedRoutes: true,
    turbopackFileSystemCacheForDev: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
