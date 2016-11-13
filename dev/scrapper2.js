/*
  This file is using the twitter signup checker to verify if a username is available or not
  casperjs --web-security=no main2.js --ignore-ssl-errors=true
*/

var startTime = Date.now();
var fs = require('fs');
fs.makeTree('contents');

var casper = require('casper').create({
    pageSettings: {
        webSecurityEnabled: false
    }
});

var result = {};
var usernames = ["crayon", "domino"];

casper.start('about:blank');
casper.each(usernames, function(casper, username) {
	var url = "https://twitter.com/users/username_available?username=" + username;
  casper.thenOpen(url, function() {
  		this.echo(username, "COMMENT");
  		this.download(url, "./contents/" + username + ".json");
	   var json = require("./contents/" + username + ".json");
	   result[username] = json.reason;
    });
});

casper.run(function() {
	fs.write('./result2.json', JSON.stringify(result, null, '\t'), 'w');
    this.echo("Done in " + (Date.now() - startTime)/1000 + "s", "INFO").exit();
});


