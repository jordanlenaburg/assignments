var ask = require("readline-sync");
var a = ask.question("Please enter the first integer: ");
var b = ask.question("Please enter the second integer: ");
var c = ask.question("Please enter the third integer: ");
var sum = 0;

function fixTeen(n) {
    if (n < 13 || n > 19 || n == 15 || n == 16) {
        return n;
    } else {
        return 0;
    }
}

function noTeenSum(a, b, c) {
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);
    sum = parseInt(a) + parseInt(b) + parseInt(c);
}

noTeenSum(a, b, c);

console.log(sum);
