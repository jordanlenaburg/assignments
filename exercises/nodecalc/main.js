var ask = require("readline-sync");

var str1 = ask.question("What is the first number?\t")
var str2 = ask.question("What is the second number?\t")
var calc = ask.question("What operation would you like to perform?\nPlease type one: Add Subtract Multiply\t");

if (calc === "add") {
    add();
} else if (calc === "subtract") {
    sub();
} else if (calc === "multiply") {
    mul();
} else {
    console.log("You did not enter a correct operation. Please check your spelling and try again")
}

function add() {
    console.log((str1 * 1) + (str2 * 1));
};

function sub() {
    console.log(str1 - str2);
};

function mul() {
    console.log(str1 * str2);
};
