import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Add trailingSlash to ensure paths are resolved correctly with static export
  // especially for index.html files in subdirectories.
  trailingSlash: true, 
  // For static export, especially to services like GitHub Pages,
  // it's often best to disable Next.js image optimization if you're not using a custom loader
  // or if your images are already optimized. This avoids issues with the default loader
  // which expects a Next.js server environment.
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory on GitHub Pages (e.g., username.github.io/repo-name),
  // you would need to set basePath and assetPrefix.
  // For example:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
  // This example assumes deployment to the root of a custom domain or username.github.io
};

export default nextConfig;

module.exports = {
  output: 'export' // Enables static HTML exports
}