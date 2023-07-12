import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import type { UserConfig } from "vite";
import { VitePluginPages } from "vite-plugin-gh-pages";

export default defineConfig(({ mode }): UserConfig & { hmr?: boolean } => {
  return {
    base: "https://annavilnid.github.io/thoth/",
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          // свойства для настройки SVGR
        },
      }),
      VitePluginPages(),
    ],
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    hmr: true,
  };
});
