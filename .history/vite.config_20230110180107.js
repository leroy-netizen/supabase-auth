import { defineConfig } from "vite";
import EnvironmentPlugin from 'vite-plugin-environment'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin()],
  server: {
    port: process.env.VITE_DEVELOPMENT_PORT || 3000,
  },
});







