function Party(name) {
    this.name = name;
    this.population = 1000000;
}

var penguins = new Party("Penguins");
var commie = new Party("Communists");
var whosTurn = ""

var start = Math.random();
if (start < .50) {
    sendNuke(commie, onHit, onMiss);
    whosTurn = "commie"
} else {
    sendNuke(penguins, onHit, onMiss);
    whosTurn = "penguin"
}

function onHit(party) {
    console.log(party.name + " has been hit with a Nuclear Strike!");
    var dmg = Math.floor(Math.random() * 500000)
    party.population -= dmg;
    console.log(party.name + " now has " + party.population + " people left!");
    nextAttack();
}

function onMiss(party) {
    console.log(party.name + " was missed by an unsuccessful Nuclear Strike!");
    nextAttack();
}

function sendNuke(party, onHit, onMiss) {
    console.log(party.name + " will be attacked.");
    if (party.population < 1) {
        console.log(party.name + " has been defeated! It is a sad day for the world.");
        return;
    };
    if (whosTurn === "commie") {
        whosTurn = "penguin";
    } else {
        whosTurn = "commie";
    };
    var rand = Math.random();
    if (rand < .50) {
        onHit(party)
    } else {
        onMiss(party);
    }

}



function nextAttack() {
    if (whosTurn === "commie") {
        sendNuke(penguins, onHit, onMiss);
    } else {
        sendNuke(commie, onHit, onMiss);
    }
}
