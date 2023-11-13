import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // SVGR
      },
    }),
  ],
  // gh-pages base: "/thoth/"
  // https://thothpay.com base: "/"
  base: "/",
  server: {
    open: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        "404": path.resolve(__dirname, "404.html"),
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  // hmr: true,
  //};
});
