function Party(name, population) {
    name = this.name;
    population = 1000000;
}



var penguins = new Party("Penguins");
var commie = new Party("Communists");

function sendNuke(party, onHit, onMiss) {
    var rand = Math.random();
    party = ; //object who will be attacked
    if (rand < .50) {
        function onHit(party) {
            console.log(party.name + " has hit the enemy with a Nuculear Strike!");
            party.population -= Math.floor(rand * 10000)
            console
            //callback function to be called if attack is successful
        }
    } else {
        function onMiss(party) {
            console.log(party.name + " has missed the enemy with an unsuccessful Nuculear Strike!");
        } //callback function to be called if attack is unsuccessful
    }
}


var start = Math.random();
if (start < .50) {
    //penguin attack
} else {
    //commie attack
}

function nextAttack() {
    if (party === penguins) {
        sendNuke(commie)
    } else {
        sendNuke(penguins)
    }
}
