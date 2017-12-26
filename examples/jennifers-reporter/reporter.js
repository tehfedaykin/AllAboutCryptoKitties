'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
	begin: emptyFunction,
	error: reportError,
	debug: emptyFunction,
	info: emptyFunction,
	results: reportResults,
	process: buildHtml,
  buildDashboard: buildDashboard
};

function emptyFunction() {}

function reportError(message) {
	console.error(message);
}

function reportResults(results, url) {
	console.log(buildHtml(results, url));
}

function buildHtml(results, url) {
	var renderMain = template(path.join(__dirname, '/report.html'));
	return renderMain({
		date: new Date(),
		errorCount: results.filter(isError).length,
		warningCount: results.filter(isWarning).length,
		noticeCount: results.filter(isNotice).length,
    screenGrab: results.screenGrab,
		results: buildResultsHtml(results),
		url: url
	});
}

function buildResultsHtml(results) {
	var renderResult = template(path.join(__dirname, '/result.html'));
	return results.map(function(result) {
    result.codeLink = result.code.split('.')[3];
		result.typeLabel = upperCaseFirst(result.type);
		return renderResult(result);
	}).join('');
}

function buildDashboard(results, app) {
  var renderMain = template(path.join(__dirname, '/dash.html'));
	return renderMain({
		date: new Date(),
		results: buildPage(results),
		app: app
	});
}

function buildPage(results) {
  var renderResult = template(path.join(__dirname, '/page.html'));
	return results.map(function(result) {
		return renderResult(result);
	}).join('');
}

function template(filePath) {
	var content = fs.readFileSync(filePath, 'utf-8');
	return function(context) {
		var output = content;
		Object.keys(context).forEach(function(key) {
			output = output.replace(new RegExp('\\{' + key + '\\}', 'g'), escapeHtml(context[key]));
			output = output.replace(new RegExp('\\{' + key + '\\|raw\\}', 'g'), context[key]);
		});
		return output.replace(/\s+/g, ' ').trim();
	};
}

function upperCaseFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function escapeHtml(html) {
	return String(html)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function isError(result) {
	return (result.type === 'error');
}

function isNotice(result) {
	return (result.type === 'notice');
}

function isWarning(result) {
	return (result.type === 'warning');
}
