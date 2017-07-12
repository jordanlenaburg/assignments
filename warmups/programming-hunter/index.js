let exp = {
    matchingWords: function (str) {
        arr = str.split(" ");
        let count = {};
        let finalArr = [];
        let result = arr.reduce((prev, current) =>{
            if (!count[current]){
                prev[current] = 0
            }
            prev[current]++;
            return prev;
        }, count);
        for (let prop in result) {
            if (result[prop] > 1) {
                finalArr.push(prop)
            }
        }
        return finalArr;
    }
};

console.log(exp.matchingWords("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."));

module.exports = exp;