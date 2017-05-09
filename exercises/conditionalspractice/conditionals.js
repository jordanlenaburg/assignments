function compareNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else {
        console.log(num1 + " is less than " + num2);
    };
}

function secondCompare(num1, num2) {
    if (num1 > num2) {
        return(num1);
    } else {
        return(num2);
    };
}

function monkeyTrouble(aSmile, bSmile) {

    if (aSmile === bSmile) {
        console.log("We are in TROUBLE");
    } else {
        console.log("Whew! We are NOT in trouble");
    };
};

function date() {

    var d = new Date();
    var time = d.getHours();
    var displayTime = ""

    if (time < 12) {
        displayTime = "Good Morning";
    } else if (time < 17) {
        displayTime = "Good Afternoon";
    } else {
        displayTime = "Good Evening";
    }
    console.log(displayTime);
};

compareNumber(4, 5);
console.log("The number which is greater is: " + secondCompare(7, 10));
monkeyTrouble(1, 1);
date();
