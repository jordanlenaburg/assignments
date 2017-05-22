let palinFinder = function (string) {
    if (string.length <= 1) return true;
    string = string.toLowerCase();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s+]/g, "");
    console.log(string);
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if(string[i] !== string[string.length - 1 - i])return false;
    };
    return true;
};

console.log(palinFinder("RaCe CaR!!"));