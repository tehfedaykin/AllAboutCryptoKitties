// A ver basic example of running Pa11y programmatically
'use strict';

const pa11y = require('pa11y');
//const htmlReporter = require('pa11y/reporter/html');
const htmlReporter = require('pa11y-reporter-html');
const fs = require('fs');

async function runPa11y() {
    try {
        const results = await pa11y('http://localhost:4200/');
        //console.log(results);
        console.log('done');
        const html = htmlReporter.results(results);
        console.log(html);

        fs.writeFile('report.html', html, function(err) {})


        // Do something with the results
    } catch (error) {
        // Handle the error
    }
}

runPa11y();
