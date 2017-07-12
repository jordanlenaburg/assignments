var chai = require("chai");
var assert = chai.assert;
var calc = require("../app");

describe("A calculator ", function () {
    it("should return the sum of two numbers", function () {
        assert.equal(calc.add(2,2), 4);
        assert.equal(calc.add(-1,-1), -2);
    });
    it("should return the difference of two numbers", function () {
        assert.equal(calc.sub(2,2), 0);
        assert.equal(calc.sub(-1,-1), 0);
    });
    it("should return the product of two numbers", function () {
        assert.equal(calc.mul(2,2), 4);
        assert.equal(calc.mul(-1,-1), 1);
    });
    it("should return the dividend of two numbers", function () {
        assert.equal(calc.div(2,2), 1);
        assert.equal(calc.div(-4, 2), -2);
    });
    it("should return the modulo of two numbers", function () {
        assert.equal(calc.mod(2,2), 0);
        assert.equal(calc.mod(-5, 2), -1);
    });
});

