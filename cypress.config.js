const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k2hhsm",
  allowCypressEnv: false,
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});
