var chai = require("chai");
var assert = chai.assert;
var exp = require("../app");

describe("A Function ", function () {
    it("should return true if the last digit of two ints is the same", function () {
        assert.equal(exp.lastDigit(47, 17), true);
        assert.equal(exp.lastDigit(35, 25), true)
    });
    it("should return false if the last digit of two ints is not the same", function () {
        assert.equal(exp.lastDigit(47, 19), false);
        assert.equal(exp.lastDigit(35, 27), false)
    });
});

describe("minusFirstAndLast ", function () {
    it("should return the string minus the first and last letter", function () {
        assert.equal(exp.minusFirstAndLast("hello"), "ell");
        assert.equal(exp.minusFirstAndLast("hi"), "")
    })
});
