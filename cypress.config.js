import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "src/**/*.{cy.ts,cy.tsx}",
  },
  e2e: {
    specPattern: [],
    setupNodeEvents(on, config) {},
  },
});
