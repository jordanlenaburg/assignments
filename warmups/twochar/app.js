let exp = {
    middleStr: (str) => {
        if (str.length < 2) {
            throw "String is not two char"
        }
        if (str.length % 2 === 1) {
            throw "String is odd"
        }
        let array = str.split("")
        return array[(str.length / 2) - 1] + array[str.length / 2]
    }
}

module.exports = exp;
