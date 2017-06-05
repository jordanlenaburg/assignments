var ask = require("readline-sync");

var int1 = parseInt(ask.question("Please enter the first integer\n"));
var int2 = parseInt(ask.question("Please enter the second integer\n"));
var operation = ask.question("Please enter the operation to perform:\n\tA:Add S:Subtract M:Multiply D:Divide E:Exponent\n");
operation.toLowerCase();

switch (operation) {
    case "a":
        var equ = require("./add");
        console.log("Answer:\t" + equ(int1, int2));
    case "s":
        var equ = require("./subtract").subtract;
        console.log("Answer:\t" + equ(int1, int2));
    case "m":
        var equ = require("./multiply");
        console.log("Answer:\t" + equ.multiply(int1, int2));
    case "d":
        var equ = require("./division");
        console.log("Answer:\t" + equ(int1, int2));
    case "e":
        var equ = require("./exponential");
        console.log("Answer:\t" + equ(int1, int2));
}
