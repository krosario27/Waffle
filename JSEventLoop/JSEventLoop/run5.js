// npm install xmlhttprequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var start = new Date();

var getASync = function () {
    try {
		const url = 'https://run.mocky.io/v3/0684bfcb-ffd0-41ab-8e7a-02d64b0dacd5';
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", url); // false for synchronous request
		xmlHttp.send(null);
		let callEnd = new Date() - start;
		console.log(xmlHttp.responseText);
		console.info('Call execution time: %dms', callEnd);
    } catch (error) {
        console.error(error);
    }
}

var foo = getASync;
var bar = getASync;
var baz = getASync;

foo();
bar();
baz();

var end = new Date() - start;
console.info('Execution time: %dms', end);