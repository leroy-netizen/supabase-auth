import { defineConfig } from "vite";
import {environment}
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_DEVELOPMENT_PORT || 3000,
  },
});







