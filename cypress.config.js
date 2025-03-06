import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "64by1r",
  e2e: {
    baseUrl: "http://localhost:6006",
    supportFile: "cypress/support/e2e.js",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
