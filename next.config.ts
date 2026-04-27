import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // No `output: "export"` — Vercel's Next builder needs `.next`; export-only `out/` breaks deploy.
  basePath: "",
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
