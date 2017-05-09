var input = "bookkeeper larry";
var inputStr = input.split("");
var misfits = [];
var notMisfits = [];
function noDups(inputStr) {
    for (i = 0; i < inputStr.length; i++) {
        var checkDuplicate = inputStr[i];
 //       console.log(checkDuplicate + " = " + inputStr[i + 1]);
        if (checkDuplicate === inputStr[i + 1]) {
            misfits.push(checkDuplicate);
        } else {
            notMisfits.push(checkDuplicate);
        }
    }

}
noDups(inputStr);
console.log("Your original string is: " + input);
console.log("Your string without duplicate letters is: " + notMisfits.join(""));
console.log("The misfits for your string are: " + misfits.join(""));