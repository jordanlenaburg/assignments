function Operation() {
    this.multiply = function (int1, int2) {
        return int1 * int2;
    };
}
module.exports = new Operation;
