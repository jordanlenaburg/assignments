let chai = require("chai");
let assert = chai.assert;
let exp = require("../index");

describe("A function ", function () {

    it("should return an array of all matching words", function () {
        assert.deepEqual(exp.matchingWords("lorem lorem ipsum"), ["lorem"]);
        assert.deepEqual(exp.matchingWords("lorem ipsum"), []);
        assert.deepEqual(exp.matchingWords("bob blue green bob green"), ["bob", "green"])
    })

});

