const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: true,

    env: {
      DEFAULT_USER: process.env.DEFAULT_USER || 'standard_user',
    },

    setupNodeEvents(on, config) {
      // you can register other event listeners here if needed
      return config;
    },
  },
});
