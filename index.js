#!/usr/bin/env node
var expression = process.argv.slice(2).join('');
var regexp = /[\d+\+\-\*\/\%\d+]/g;

if (expression !== null && expression.match(regexp)) {
  var matched = expression.match(regexp).join('');
  console.log (eval(matched));
} else {
  console.log("wrong input");
}
