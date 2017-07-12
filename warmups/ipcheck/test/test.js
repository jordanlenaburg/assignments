let chai = require("chai");
let assert = chai.assert;
let exp = require("../app");

describe("A function ", () => {
    it("should return true if the string is a valid IP address within the allowable range of private IP addresses", () => {
        assert.equal(exp.validIp("10.0.0.0"), true);
        assert.equal(exp.validIp("176.16.1.10"), true);
        assert.equal(exp.validIp("192.168.2.90"), true);
    });
    it("should return false if the string does not fall within the allowable range of IP addresses", () => {
        assert.equal(exp.validIp("11.0.0.0"), false);
        assert.equal(exp.validIp("172.32.0.0"), false);
        assert.equal(exp.validIp("192.169.0.0"), false);
        assert.equal(exp.validIp("192.169.0.0.15"), false);
        assert.equal(exp.validIp("blah"), false);
    })
});