import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    URL_APLICACAO: "http://localhost:5173",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
