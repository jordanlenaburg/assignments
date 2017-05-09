var ask = require("readline-sync");
var input = ask.question("Please input the string you would like reversed\n");
var array = input.split("");
var finished = "";
var reversed1 = array.forEach(function (letter) {
    if (letter.charCodeAt() > "a".charCodeAt() && letter.charCodeAt() < "z".charCodeAt()) {
        finished += letter.toUpperCase();
    } else {
        finished += letter.toLowerCase();
    }
})

var reversed2 = array.map(function (letter) {
    if (letter.charCodeAt() > "a".charCodeAt() && letter.charCodeAt() < "z".charCodeAt()) {
        return letter.toUpperCase();
    } else {
        return letter.toLowerCase();
    }
})

console.log(finished);
console.log(reversed2.join(""));
