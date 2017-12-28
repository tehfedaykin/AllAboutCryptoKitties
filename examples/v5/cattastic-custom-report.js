// An example of running Pa11y programmatically
'use strict';

var jennifersReporter = require('../jennifers-reporter/reporter');
var pa11y = require('pa11y');
var fs = require('file-system');

//puppeteer broke window.push state =(
var tests = [
  {
    name: 'home',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
      ]
    }
  },
  {
    name: 'about',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
        'click element [href="/about"]',
  			'wait for path to be /about'
      ]
    }
  },
  {
    name: 'about-kitties',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
        'click element [href="/about"]',
  			'wait for path to be /about',
  			'click element [href="/about/kitties"]',
  			'wait for path to be /about/kitties'
      ]
    }
  },
  {
    name: 'about-requirements',
    url: 'http://localhost:4200',
    testOptions: {
      actions: [
        'click element [href="/about"]',
  			'wait for path to be /about',
  			'click element [href="/about/requirements"]',
  			'wait for path to be /about/requirements'
      ]
    }
  },
  {
    name: 'about-purchasing',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
        'click element [href="/about"]',
  			'wait for path to be /about',
  			'click element [href="/about/purchasing"]',
  			'wait for path to be /about/purchasing'
      ]
    }
  },
  {
    name: 'ethereum101-modal',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
        'click element [href="/ethereum101"]',
  			'wait for path to be /ethereum101'
      ]
    }
  },
  {
    name: 'ethereum101',
    url: 'http://localhost:4200/',
    testOptions: {
      wait: 500,
      actions: [
        'click element [href="/ethereum101"]',
  			'wait for path to be /ethereum101'
        //'wait for element #myButton to be visible',
        //'click element #myButton',
        //'wait for element modal-container to be hidden'
      ],
      hideElements: '.gas-advert'
    }
  },
  {
    name: 'resources',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
        'click element [href="/resources"]',
  			'wait for path to be /resources'
      ]
    }
  }
]


function runTest(test) {
  test.testOptions.screenCapture = './examples/output/' + test.name +'.png'
  var options = test.testOptions;
  pa11y(test.url, options).then((results) => {
      results.screenGrab = test.name + '.png';
      var htmlResults = jennifersReporter.process(results, test.url, true);
      fs.writeFile('examples/output/'+ test.name + '.html', htmlResults, function(err) {})
  });
}

for (var i = 0; i < tests.length; i++) {
  runTest(tests[i])
}

var htmlResults = jennifersReporter.buildDashboard(tests, 'Cryptokitties');
fs.writeFile('examples/output/index.html', htmlResults, function(err) {})
