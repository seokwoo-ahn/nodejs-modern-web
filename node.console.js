const { time, timeEnd } = require("console");

console.time("start")
console.log('숫자: %d + %d = %d', 274, 52, 273+52, 23342);
console.log('문자열: %s', 'hello world', 'izone', 'wow');
console.log('JSON: %j', { name: 'chaewon'});
console.timeEnd("start")