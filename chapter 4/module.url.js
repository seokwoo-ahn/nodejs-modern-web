const { parse, resolve } = require('path')
var url = require('url')

var parsedObject = url.parse('http://www.hanb.co.kr/trackback/1920381049');
console.log(parsedObject);
var recoveredUrl = url.format(parsedObject);
console.log(recoveredUrl);