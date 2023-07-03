// vite.config.ts
import { defineConfig } from "file:///Users/anna/Documents/thoth/node_modules/vite/dist/node/index.js";
import react from "file:///Users/anna/Documents/thoth/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/anna/Documents/thoth/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          // свойства для настройки SVGR
        }
      })
    ],
    esbuild: {
      jsxInject: `import React from 'react'`
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW5uYS9Eb2N1bWVudHMvdGhvdGhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hbm5hL0RvY3VtZW50cy90aG90aC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYW5uYS9Eb2N1bWVudHMvdGhvdGgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcbmltcG9ydCB0eXBlIHsgVXNlckNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pOiBVc2VyQ29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgc3Zncih7XG4gICAgICAgIHN2Z3JPcHRpb25zOiB7XG4gICAgICAgICAgLy8gXHUwNDQxXHUwNDMyXHUwNDNFXHUwNDM5XHUwNDQxXHUwNDQyXHUwNDMyXHUwNDMwIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0M0RcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzggU1ZHUlxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICBlc2J1aWxkOiB7XG4gICAgICBqc3hJbmplY3Q6IGBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnYCxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsb0JBQW9CO0FBQ2hTLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFHakIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQWtCO0FBQ3BELFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxRQUNILGFBQWE7QUFBQTtBQUFBLFFBRWI7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
