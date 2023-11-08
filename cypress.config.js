const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { rm } = require('fs');

module.exports = defineConfig({
  projectId: 'ma9xj2',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {downloadFile}),
      on('task', {
        deleteFolder(folderName) {
          return new Promise((resolve, reject) => {
            rm(folderName, { maxRetries: 10, recursive: true }, (err) => {
              if(err) {
                console.error(err)
              }
              resolve(null)
            })
          })
        }
      })
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
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
});
