import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_DEVELOPMENT_PORT  || 3000,
  },
} );

