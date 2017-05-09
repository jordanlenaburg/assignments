function first(num1, num2) {
    return num1 + num2;
};
var second = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
};

function third(num1) {
    if (num1 % 2 === 1) {
        return "odd";
    } else {
        return "even";
    }
};
var fourth = function (str1) {
    if (str1.length <= 20) {
        return str1.concat(str1);
    } else {
        str1 = str1.slice(0, str1.length / 2);
        return str1;
    }
}

function optionalFirst(n) {
    var fib = [0, 1];

    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }

    function getSum(total, num) {
        return total + num;
    }
    console.log("The total sum of these Fibbonacci numbers is: " + fib.reduce(getSum, 1))
}
//optionalFirst(10)

function optionalSecond(a, b, c) {
    var x = (-b + Math.sqrt(b * b - (4 * a * c))) / (2 * a);
    var xAlt = (-b - Math.sqrt(b * b - (4 * a * c))) / (2 * a);
    console.log("x is " + x + " or " + xAlt)
}

//optionalSecond(1, 3, -4)
//optionalSecond(9, 12, 4)

function optionalThird(str) {
    var currentCount = 0;
    var finalCount = "";
    for (var i = 0; i < str.length; i++) {
//        console.log(str[i]);
        var maxCount = 0;
        for (var j = 0; j < str.length; j++) {
            var key = str[i];
            if (key === str[j]) {
                maxCount++;
            }
            if (maxCount > currentCount) {
                currentCount = maxCount;
                finalCount = str[i];
            }
        }

    }
    console.log("The most frequent character in the string is " + finalCount + ", which was found " + currentCount + " times.")
}
//optionalThird("aaaabbbbbbbccccccdddeeeeeefffggggggghhhijj")
