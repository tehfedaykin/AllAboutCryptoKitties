// An example of running Pa11y programmatically
'use strict';

var jennifersReporter = require('../jennifers-reporter/reporter');
var pa11y = require('pa11y');
var fs = require('file-system');


var tests = [
  {
    name: 'home',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
      ],
      ignore: [
        'notice'
      ],
      log: {
        error: console.error.bind(console),
      }
    }
  },
  {
    name: 'about',
    url: 'http://localhost:4200/about',
    testOptions: {
      actions: [
      ],
      ignore: [
        'notice'
      ],
      log: {
        error: console.error.bind(console),
      }
    }
  },
  {
    name: 'about-kitties',
    url: 'http://localhost:4200/about/kitties',
    testOptions: {
      actions: [
      ],
      ignore: [
        'notice'
      ],
      log: {
        error: console.error.bind(console),
      }
    }
  },
  {
    name: 'about-requirements',
    url: 'http://localhost:4200/about/requirements',
    testOptions: {
      actions: [
      ],
      ignore: [
        'notice'
      ],
      log: {
        error: console.error.bind(console),
      }
    }
  },
  {
    name: 'about-purchasing',
    url: 'http://localhost:4200/about/purchasing',
    testOptions: {
      actions: [
      ],
      ignore: [
        'notice'
      ],
      log: {
        error: console.error.bind(console),
      }
    }
  },
  {
    name: 'ethereum101-modal',
    url: 'http://localhost:4200/ethereum101',
    testOptions: {
      actions: [
      ],
      ignore: [
        'notice'
      ],
      log: {
        error: console.error.bind(console)
      }
    }
  },
  {
    name: 'ethereum101',
    url: 'http://localhost:4200/ethereum101',
    testOptions: {
      actions: [
        'click element #myButton',
        'wait for element modal-container to be hidden'
      ],
      ignore: [
        'notice',
        'warning'
      ],
      hideElements: '.gas-advert',
      log: {
        error: console.error.bind(console)
      }
    }
  },
  {
    name: 'resources',
    url: 'http://localhost:4200/resources',
    testOptions: {
      actions: [
      ],
      ignore: [
        'notice'
      ],
      log: {
        error: console.error.bind(console)
      }
    }
  }
]


function runTest(test) {
  test.testOptions.screenCapture = './examples/output/' + test.name +'.png'
  var pa11ytest = pa11y(test.testOptions);
  pa11ytest.run(test.url, function(error, results) {
  	if (error) {
  		return console.error(error.message);
  	}
    results.screenGrab = test.name + '.png';
    var htmlResults = jennifersReporter.process(results, test.url);
    fs.writeFile('examples/output/'+ test.name + '.html', htmlResults, function(err) {})
  });
}


for (var i = 0; i < tests.length; i++) {
  runTest(tests[i])
}

var htmlResults = jennifersReporter.buildDashboard(tests, 'Cryptokitties');
fs.writeFile('examples/output/index.html', htmlResults, function(err) {})
