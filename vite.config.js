import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://yoliday-backendd.onrender.com",
    },
  },
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "server/data/data.json"),
    },
  },
});
