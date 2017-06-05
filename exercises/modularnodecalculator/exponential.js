function exponent(int1, int2) {
    var ans = int1;
    for (var i = 1; i < int2; i++) {
        ans = ans * int1;
    }
    return ans;
};

module.exports = exponent;
