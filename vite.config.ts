import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import type { UserConfig } from "vite";
import path from "path";

//export default defineConfig(({ mode }): UserConfig & { hmr?: boolean } => {
//return {
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // свойства для настройки SVGR
      },
    }),
  ],
  base: "/thoth/",
  server: {
    open: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  // hmr: true,
  //};
});
