var money = 99;

function makeItRain(money) {
    money = money.toString();
    money = money.split("");
    if (money.length < 2) {
        money.splice(0, 0, "0", "0");
    } else if (money.length < 3) {
        money.splice(0, 0, "0");
    }
    money.splice(-2, 0, ".");
    var posOfFirst = money.length % 3;
    for (var i = (posOfFirst); i < money.length; i += 4) {
        money.splice(i, 0, ",");
    }
    money.splice(-4, 1);
    money.splice(0, 0, "$");
    var newMoney = money.join("");
    console.log(newMoney);
}

makeItRain(money);
