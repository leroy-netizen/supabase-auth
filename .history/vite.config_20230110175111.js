import { defineConfig } from "vite";
imp
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_DEVELOPMENT_PORT || 3000,
  },
});







