/*
 * Primary file for the API
 *
 */

//  Dependencies
const server = require("./lib/server");
const workers = require("./lib/workers");
const cli = require("./lib/cli");
const exampleDebuggingProblem = require("./lib/exampleDebuggingProblem");

// Declare the app
let app = {};

// Init function
app.init = () => {
  // Start the server
  debugger;
  server.init();
  debugger;

  // Start the workers
  debugger;
  workers.init();
  debugger;

  // Start the CLI, but make sure it starts last
  debugger;
  setTimeout(() => {
    debugger;
    cli.init();
    debugger;
  }, 50);
  debugger;

  // Set foo at 1
  debugger;
  var foo = 1;
  console.log("Just assigned 1 to foo");
  debugger;

  // Increment foo
  foo++;
  console.log("Just incremented foo");
  debugger;

  // Square foo
  console.log("Just squared foo");
  foo = foo * foo;
  debugger;

  // Convert foo to a string
  console.log("Just converted foo to string");
  foo = foo.toString();
  debugger;

  // Call the init script that will throw
  exampleDebuggingProblem.init();
  console.log("Just called the library");
  debugger;
};

// Execute
app.init();

// Export the app
module.exports = app;
