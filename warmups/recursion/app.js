let exp = {
    recursive: (str, num) => {
        if (typeof str !== "string" || num < 1) return false;
        if (num === 1) {
            return str;
        } else {
            return str + exp.recursive(str, num - 1)
        }
    }
};

module.exports = exp;