const path = require("path");
const aliases = {
  "@modules": path.join(__dirname, "./modules"),
  "@components": path.join(__dirname, "./components"),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (cf) => {
    const config = { ...cf };

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...aliases,
    };

    return config;
  },
};

module.exports = nextConfig;
