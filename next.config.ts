import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration for Cesium
  turbopack: {
    resolveAlias: {
      // Alias cesium to the built version
      cesium: "cesium/Build/Cesium/Cesium.js",
    },
  },

  // Use webpack for backwards compatibility
  webpack: (config, { isServer }) => {
    // Don't parse cesium as it's already built
    config.module.noParse = /\/cesium\.js$/;
    
    // Handle cesium module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      cesium$: "cesium/Build/Cesium/Cesium.js",
    };

    // Add cesium to externals for server-side rendering
    if (isServer) {
      config.externals = [...(config.externals || []), "cesium"];
    }

    return config;
  },
  
  // Set environment variables for Cesium
  env: {
    CESIUM_BASE_URL: "/cesium/",
  },
  
  // Fix workspace root warning
  outputFileTracingRoot: "/Users/nickmagidson/Desktop/space/sat-app",
  
  // Disable strict mode to avoid Cesium compatibility issues
  reactStrictMode: false,
};

export default nextConfig;
