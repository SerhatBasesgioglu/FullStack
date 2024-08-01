import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      src: "/src",
      "@/components": "/src/components",
      "@/util": "/src/util",
    },
  },
});
