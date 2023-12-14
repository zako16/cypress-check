const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'http://167.114.201.175:5001/',
    headless: true,
    specPattern: './cypress/api/*.js',
    defaultCommandTimeout: 10000,
  },
});
