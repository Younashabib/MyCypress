const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/1-getting-started",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    //baseUrl: "https://automationteststore.com/",
    //baseUrl: "https://www.webdriveruniversity.com/",
    env: {
      first_name: "Sarah", //Making a Global Variable and used in contact-us (WebDriver Uni).
      webDriverUni_WebPage: "https://www.webdriveruniversity.com/",
      //AutomationStore_WebPage: "https://automationteststore.com/", //See automation Test Store > Variables and Cy-Commands >     cy.visit(Cypress.env("AutomationStore_WebPage") + "index.php?rt=content/contact");
    },
  },
});
