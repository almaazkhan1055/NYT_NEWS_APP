import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom", // ✅ Use jsdom to simulate the browser
    globals: true,
    setupFiles: "./src/test/setup.js", // ✅ Setup file for additional configurations
  },
});
