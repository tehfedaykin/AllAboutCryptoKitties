// A ver basic example of running Pa11y programmatically
'use strict';

const pa11y = require('pa11y');

pa11y('http://localhost:4200/', {
  actions: [
  ],
   // Log what's happening to the console
   log: {
     debug: console.log.bind(console),
     error: console.error.bind(console),
     info: console.log.bind(console)
   }
    // Options go here
}).then((results) => {
    // Do something with the results
    console.log(results);
});
