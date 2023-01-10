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
module.exports = {
  configureServer: app => {
    // Load environment variables from .env.local file
    dotenv.config();
  },
};
This will configure the server to load variables from the local file, you could use dotenv.config({path: '.env.local'}) if you want to specify the path of the file.

Keep in mind that this way of working with environment variables is specific to the Vite development server, and will not work in a production environment. For production, you will need to set the environment variables in a different way.





