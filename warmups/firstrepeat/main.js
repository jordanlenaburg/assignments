let firstRepeat = function (string) {
    let breakLetters = [];
    let check = string[0];
    let letterSwitch = false;
    for (let i = 1; i < string.length; i++) {
        if (string[i] === check) {
            if (letterSwitch) {
                continue;
            } else {
                letterSwitch = !letterSwitch;
            };
        } else if (letterSwitch) {
            breakLetters.push(string[i]);
            check = string[i];
            letterSwitch = !letterSwitch;
        } else {
            check = string[i];
        }
    };
    console.log("Break Letters: " + breakLetters);
    return;
};

firstRepeat("abcdefghijklmnopqrstuvwxyz");
