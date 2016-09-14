// ./node_modules/.bin/slimerjs test5.js

var url="https://twitter.com/users/username_available?username=conte";

var page = require('webpage').create();

var resources = {};

page.onResourceRequested = function(request) {
	//resources[request.url] = 0;
}

page.onResourceReceived = function(response) {
	resources[response.url] = response;
};

page.onLoadFinished = function(status) {
	console.log(JSON.stringify(resources));
	phantom.exit();
};

page.open(url, {
	method: 'get',
	headers: {
		'Accept-Encoding': 'gzip,deflate,sdch',
		'Content-Type': 'application/json; charset=utf-8'
	},
	encoding: 'utf8'
});