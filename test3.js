//https://twitter.com/users/username_available?username=conte

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

var usernames = ["crayon", "stylo", "feutre", "taille-crayon", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "decoupage", "pliage", "pli", "colle", "affaire", "boite", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "de", "domino", "puzzle", "cube", "perle", "chose", "forme : carre", "rond", "pate a modeler", "tampon", "livre", "histoire", "bibliotheque", "image", "album", "titre", "bande dessinee", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "etiquette", "carte d’appel : affiche", "alphabet", "appareil", "camescope", "cassette", "cede", "cederom", "chaine", "chanson", "chiffre", "contraire", "difference", "doigt", "ecran", "ecriture", "film", "fois", "idee", "instrument", "intrus", "lettre", "liste", "magnetoscope", "main", "micro", "modele", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prenom", "question", "radio", "sens", "tambour", "telecommande", "telephone", "television", "trait", "trompette", "voix", "xylophone", "zero"];

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