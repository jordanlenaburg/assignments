var isPenguinsTurn;

function Team(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function () {
        if (this.population > 0) {
            return true;
        } else {
            return false;
        };
    };
}


var penguins = new Team("penguins", 1000000);
var communists = new Team("communists", 1000000);

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onHit(party) {
    //    isPenguinsTurn = !isPenguinsTurn;
    party.population = party.population - randNum(10000, 200000);
    console.log(party.name + " got nuked and have " + party.population + " population left.");
}

function onMiss(party) {
    //    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " did not get hit");
}

function sendNuke(party) {
    var success = randNum(0, 3);
    if (success === 0) {
        onHit(party);
    } else {
        onMiss(party);
    }
}


if (randNum(0, 1) === 1) {
    isPenguinsTurn = true;
    sendNuke(penguins);
} else {
    isPenguinsTurn = false;
    sendNuke(communists);
}
console.log(penguins.isAlive());
console.log(communists.isAlive());
while (penguins.isAlive() === true && communists.isAlive() === true) {

    if (isPenguinsTurn === false) {
        sendNuke(communists);
        isPenguinsTurn = true;
    } else {
        sendNuke(penguins);
        isPenguinsTurn = false;
    }
}


console.log("Game over");
