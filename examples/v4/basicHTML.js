
var htmlReporter = require('pa11y/reporter/html');
var pa11y = require('pa11y');
var fs = require('file-system');

// Create a test instance with some default options
var test = pa11y({
   actions: [
   ],
   ignore: [
     'notice'
   ],
   screenCapture: './examples/output/homepage.png',
  	// Log what's happening to the console
  	log: {
  		debug: console.log.bind(console),
  		error: console.error.bind(console),
  		info: console.log.bind(console)
  	}
});

test.run('localhost:4200/', function(error, results) {
  if (error) {
    return console.error(error.message);
  }
  var htmlResults = htmlReporter.process(results, 'localhost:4200/');
  fs.writeFile('examples/output/report.html', htmlResults, function(err) {})
});
