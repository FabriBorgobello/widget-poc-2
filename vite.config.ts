import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx", // Path to your entry file
      name: "MyWidget", // Name of the global variable
      fileName: "my-widget",
      formats: ["iife"], // Build as an Immediately Invoked Function Expression
    },
    rollupOptions: {
      // Don't externalize anything; bundle all dependencies
    },
    minify: true, // Minify the output for production
  },
});
