// An example of running Pa11y programmatically
'use strict';

var jennifersReporter = require('../jennifers-reporter/reporter');
var pa11y = require('pa11y');
var fs = require('file-system');

// Create a test instance with some default options
var test = pa11y({
   actions: [
   ],
   ignore: [
     'notice'
   ],
  	// Log what's happening to the console
  	log: {
  		debug: console.log.bind(console),
  		error: console.error.bind(console),
  		info: console.log.bind(console)
  	}

});

// Test http://localhost:4200/
test.run('http://localhost:4200/', function(error, results) {
	if (error) {
		return console.error(error.message);
	}

  var htmlResults = jennifersReporter.process(results, 'http://localhost:4200/');

  fs.writeFile('examples/output/report.html', htmlResults, function(err) {})

});
