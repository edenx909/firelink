import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.igdb.com/v4", // Target IGDB API
        changeOrigin: true, // Ensures the request origin is correctly set
        secure: false, // In case the API uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, ""), // Strip the /api prefix
      },
    },
  },
});
