import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Your backend server URL
        changeOrigin: true, // Ensures that the origin of the request is modified
        secure: false, // Set to true if you're using HTTPS on the backend
      },
    },
  },
});
