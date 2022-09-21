const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ff4o8b',
  e2e: {
    baseUrl: 'http://localhost:3000/',
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "mochawesome-report",
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
});
