// Launch command : casperjs main1.js

/*

	- Votre nom d’utilisateur ne peut contenir plus de 15 caractères. Votre vrai nom peut en contenir davantage (20 caractères), mais les noms d’utilisateur doivent rester courts, pour des raisons de lisibilité.

	- Les noms d’utilisateur se composent uniquement de caractères alphanumériques (lettres de A à Z, nombres de 0 à 9) et de traits de soulignement, comme indiqué plus haut. Vérifiez que le nom d’utilisateur de votre choix ne contient aucun symbole, tiret ou espace.

	- Il se peut que le nom d’utilisateur soit utilisé par un compte suspendu ou désactivé. Les noms d’utilisateur de ces comptes ne peuvent pas être utilisés immédiatement. Vous devrez donc utiliser un autre nom d’utilisateur.

*/


var casper = require('casper').create();
var startTime = Date.now();
var fs = require('fs');

var finalDatas = [];

casper.start('about:blank');

var usernames = ["crayon", "domino"];

casper.each(usernames, function(casper, username) {
  casper.thenOpen("http://twitter.com/" + username, function() {
  		var result = {};
  		result.username = username;
  		result.exist = this.getTitle();
  		finalDatas.push(result);
      this.echo(username, "COMMENT");
    });
});

casper.run(function() {
	fs.write('./result.json', JSON.stringify(finalDatas, null, '\t'), 'w');
	this.echo("Done in " + (Date.now() - startTime)/1000 + "s", "INFO");
	this.exit();
});
