const CustomReporter = require('./jest-reporters/myReporter');

/** @type {import('jest').Config} */
const config = {
  displayName: {
    "color": "blue",
    "name": "Password Tests"
  },
  expand:true,
  reporters: ['jest-allure', 'default', 'summary']
};

module.exports = config;