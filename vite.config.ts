import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
// https://vitejs.dev/config/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
});
