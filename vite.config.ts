import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import type { UserConfig } from "vite";

export default defineConfig(({ mode }): UserConfig & { hmr?: boolean } => {
  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          // свойства для настройки SVGR
        },
      }),
    ],
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    hmr: true,
  };
});
