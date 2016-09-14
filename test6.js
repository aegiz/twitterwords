// casperjs --web-security=no test6.js

/*
var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
  }
});


casper.start().then(function() {
    this.open('https://twitter.com/users/username_available?username=conte', {
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    });
});

casper.then(function() {
    require('utils').dump(this.getPageContent());
});

casper.run(function() {
    this.exit();
});
*/

var casper = require('casper').create({
    pageSettings: {
        webSecurityEnabled: false
    }
});

var url = 'https://twitter.com/users/username_available?username=whatever';

casper.start('about:blank', function() {
   this.download(url, "hop.json");
   var json = require('hop.json');
	require('utils').dump(json);
	casper.echo(json.reason);
});

casper.run(function() {
    this.echo('Done.').exit();
});


