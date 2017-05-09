function Party(name, population) {
    name = this.name;
    population = 1000000;
}

var penguins = new Party("Penguins");
var commie = new Party("Communists");

function sendNuke(party, onHit, onMiss) {
    if (party === commie) {
        var others = penguins;
    } else {
        var others = commie;
    }
    if (party.population < 1) {
        console.log(others.name + " has defeated " + party.name + "! It is a sad day for the world.");
        return;
    }
    var rand = Math.random();
    //    party; //object who will be attacked
    if (rand < .50) {
        function onHit(party) {
            console.log(others.name + " has hit the enemy with a Nuculear Strike!");
            party.population -= Math.floor(rand * 10000);
            console.log(party.name + " now has " + party.population + " people left!");
            nextAttack();
            //callback function to be called if attack is successful
        }
    } else {
        function onMiss(party) {
            console.log(others.name + " has missed " + party.name + " with an unsuccessful Nuculear Strike!");
            nextAttack();
        } //callback function to be called if attack is unsuccessful
    }
}


var start = Math.random();
if (start < .50) {
    sendNuke(commie);
} else {
    sendNuke(penguins);
}

function nextAttack() {
    if (party === penguins) {
        sendNuke(commie);
    } else {
        sendNuke(penguins);
    }
}
