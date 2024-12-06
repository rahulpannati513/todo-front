// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "http://sample-env.eba-imm5kpf6.eu-north-1.elasticbeanstalk.com", // Your HTTP backend URL
        changeOrigin: true, // Changes the origin of the request to the target URL
        secure: false, // Allows requests to an insecure HTTP backend (important in dev)
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes `/api` prefix before forwarding to backend
      },
    },
  },
});
