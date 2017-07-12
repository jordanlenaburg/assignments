// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.

// Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.

var exp = {
    lastDigit: function (a, b) {
        return Math.abs((parseInt(a) - parseInt(b)) % 10) === 0
    },
    minusFirstAndLast: function (str) {
        if (str.length < 2){
            throw "String has less than 2 characters"
        }
        return str.slice(1, str.length - 1)
    }
};

module.exports = exp;