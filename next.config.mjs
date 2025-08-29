/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 基本SEO配置
  compress: true,
  poweredByHeader: false,
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出（如果需要）
  output: 'export',
  // 代码分割优化
  webpack: (config, { dev, isServer }) => {
    // 生产环境启用更细粒度的代码分割
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000, // 最小 chunk 大小（20KB）
        maxSize: 24414016, // 最大 chunk 大小（约 23.3 MiB，预留空间）
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
  // 压缩静态资源
  compress: true,
};

module.exports = nextConfig;
