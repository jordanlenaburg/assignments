let chai = require("chai");
let assert = chai.assert;
let exp = require("../app");

describe("A function ", () => {
    it("should return the string concat'd with itself num times", () => {
        assert.equal(exp.recursive("wtf", 2), "wtfwtf")
        assert.equal(exp.recursive("test", 5), "testtesttesttesttest")
    });
    it("should return false if not given a string", () => {
        assert.equal(exp.recursive(1, 2), false)

    });
    it("should return false if given a number less than 1", () => {
        assert.equal(exp.recursive("wtf", 0), false)

    })
});