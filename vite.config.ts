import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: { sourcemap: true },
  server: {
    port: 30001,
    strictPort: true,
  },
});
