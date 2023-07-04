/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  optimizeDeps: {
    exclude: ["@postnord/web-components/loader"], // see https://github.com/vitejs/vite/issues/12434
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/variables.scss";
          @import "pn-design-assets/pn-assets/styles/_pn-colors";
        `,
      },
    },
  },
});
