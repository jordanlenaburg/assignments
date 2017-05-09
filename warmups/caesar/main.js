var readline = require('readline-sync');
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var result = "";
for (var i = 0; i < input.length; i++) {
    var charcode = input[i].charCodeAt();
    if (charcode > 'a'.charCodeAt() && charcode < 'z'.charCodeAt()) {
        charcode += shift;
    }
    if (charcode > 'z'.charCodeAt()) {
        charcode -= 26;
    }
    result += String.fromCharCode(charcode);
}
console.log(result);
