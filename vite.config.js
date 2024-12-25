import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiUrl = import.meta.env.VITE_API_URL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/api": {
        target: apiUrl,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
