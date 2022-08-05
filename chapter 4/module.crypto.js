var crypto = require('crypto');

var shasum = crypto.createHash('sha1');
shasum.update('IZONE');
var output = shasum.digest('hex');

console.log('IZONE_sha1:', output);

var key = 'secret key!!!!';
var input = 'IZONE';

// createCipher deprecated warning
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('input:' + input);
console.log('cipheredText:' + cipher);
console.log('decipheredText:', decipheredOutput)