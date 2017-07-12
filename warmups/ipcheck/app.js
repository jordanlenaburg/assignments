let exp = {

    validIp: (str) => {

        if (str.indexOf(".") === -1) {
            return false
        }

        let array = str.split(".");

        if (array.length > 4) {
            return false
        }

        if (array[0] !== 10 || array[0] !== 172 || array[0] !== 192) {
            return false
        }

        if (array[1] !== 10 || array[1] !== 172 || array[1] !== 192) {
            return false
        }


    }


};

module.exports = exp;