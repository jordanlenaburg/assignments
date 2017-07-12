let chai = require("chai");
let assert = chai.assert;
let exp = require("../app")

describe("A function ", () => {
    it("should return the middle two characters of a string as a string", () => {
        assert.equal(exp.middleStr("jordan"), "rd")
        assert.equal(exp.middleStr("candycanes"), "yc")
    })
    it("should throw an error when given an odd length str", () => {
        assert.throws(() => {exp.middleStr("allen")}, "String is odd")
    })
    it("should throw an error when given a str less than 2 char", () => {
        assert.throws(() => {exp.middleStr("a")}, "String is not two char")
        assert.throws(() => {exp.middleStr("")}, "String is not two char")
    })
})
