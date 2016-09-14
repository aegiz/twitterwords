// ./node_modules/.bin/slimerjs test4.js

var url="http://en.wikipedia.org/wiki/Internet";

var fs=require('fs');

var page = require('webpage').create();

fs.makeTree('contents');

//page.captureContent = [ /.*/ ];

page.onResourceRequested = function(requestData, networkRequest) {
	//console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};

page.onResourceReceived = function(response) {
	console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));
	if(response.stage!="end" || !response.bodySize)return;

	var matches = response.url.match(/[/]([^/]+)$/);
	var fname = "contents/"+matches[1];

	console.log("Saving "+response.bodySize+" bytes to "+fname);
	fs.write(fname,response.body);
};

page.onResourceError = function(response) {
	consol.log("Error" + response);
}



page.open(url,function(){
	phantom.exit();
});