var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://seok-study.tistory.com?name=cranberry');
console.log(querystring.parse(parsedObject.query));