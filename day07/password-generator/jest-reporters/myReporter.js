// Those two packages supply the types we need to
// build our custom reporter
const { TestContext , Reporter } = require("@jest/reporters");
const { AggregatedResult } = require("@jest/test-result");

// Our reporter implements only the onRunComplete lifecycle
// function, run after all tests have completed
class CustomReporter {
  async onRunComplete(_, results) {
    // TODO Add Slack webhook trigger
    console.log('Your report is available!');
  }
}

module.exports = CustomReporter