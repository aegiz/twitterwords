// phantomjs test.js "AdrienRahier"
var page = new WebPage()
, output = { errors: [], results: null };
if (phantom.args.length == 0) {
    console.log('You must specify a twitter username ex "AdrienRahier"');
    phantom.exit(1);
}
page.open('http://twitter.com/' + phantom.args[0], function (status) {
    if (status !== 'success') {
        output.errors.push('Unable to access network');
    } else {
        console.log(page.title);
    }
    phantom.exit();
});
