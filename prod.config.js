const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ma9xj2',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://www.amazon.com",
    viewportHeight: 1000,
    viewportWidth: 1500,
    defaultCommandTimeout: 4000,
    execTimeout: 60000,
    taskTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    downloadsFolder: "cypress/mydownloads",
    screenshotsFolder: "cypress/screenshots",
    fixturesFolder: "cypress/fixtures",
    videosFolder: "cypress/videos"
  },
  env: {
    "searchString": "iphone 15"
  }
});