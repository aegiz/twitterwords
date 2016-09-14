//https://twitter.com/users/username_available?username=conte
// Launch command : casperjs test3.js

/*

	- Votre nom d’utilisateur ne peut contenir plus de 15 caractères. Votre vrai nom peut en contenir davantage (20 caractères), mais les noms d’utilisateur doivent rester courts, pour des raisons de lisibilité.

	- Les noms d’utilisateur se composent uniquement de caractères alphanumériques (lettres de A à Z, nombres de 0 à 9) et de traits de soulignement, comme indiqué plus haut. Vérifiez que le nom d’utilisateur de votre choix ne contient aucun symbole, tiret ou espace.

	- Il se peut que le nom d’utilisateur soit utilisé par un compte suspendu ou désactivé. Les noms d’utilisateur de ces comptes ne peuvent pas être utilisés immédiatement. Vous devrez donc utiliser un autre nom d’utilisateur.



*/

/* var casper = require('casper').create();
var startTime = Date.now();
var fs = require('fs');

var finalDatas = [];

casper.start('about:blank');

var usernames = ["crayon", "stylo"];

casper.each(usernames, function(casper, username) {
  casper.thenOpen("http://twitter.com/" + username, function() {
  		var result = {};
  		result.username = username;
  		result.exist = this.getTitle();
  		finalDatas.push(result);
  		this.echo("Done: " + username);
    });
});

casper.run(function() {
	fs.write('./result.json', JSON.stringify(finalDatas, null, '\t'), 'w');
	this.echo("Done in " + (Date.now() - startTime)/1000 + "s", "INFO");
	this.exit();
});

*/

// $ casperjs test3.js --web-security=no

var casper = require('casper').create();
var wsurl = 'https://twitter.com/users/username_available?username=conte';

casper.start();

var utils = require('utils');

casper.options.onResourceRequested = function(C, requestData, request) {
    //utils.dump(requestData.headers);
};
casper.options.onResourceReceived = function(C, response) {
    utils.dump(response);
};

casper.open(wsurl, {
  method: 'get',
   headers: {
       'Content-Type': 'application/json; charset=utf-8'
   },
   encoding: 'utf8'
}).then(function(data) {
    //this.echo('GOT it.' + data);
    //require('utils').dump(data);
});

casper.run();


