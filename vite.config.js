import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
  ],
  server: {
    open: true, // Automatically open browser on npm run dev
    port: 5173,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
    coverage: {
      provider: "v8",
    },
  },
});
