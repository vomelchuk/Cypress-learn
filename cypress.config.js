const cypress = require("cypress");
const { defineConfig } = require("cypress")
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: ['**/*.feature','**/*.test.js'],
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  env:{
      uniqueEmail: null,
      password: "Passw0rd",
      token: null,
      basketId: null,
      operationId: null
    }
  },
});