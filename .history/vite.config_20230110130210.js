import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    import.meta.env.VITE_DEVELOPMENT_PORT  || 3000,
  },
} );







