import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: path.resolve(__dirname, "github"),
  base: "./",
  plugins: [react()],
  publicDir: "public",
  build: {
    outDir: path.resolve(__dirname, "github-pages"),
    emptyOutDir: true,
  },
});
