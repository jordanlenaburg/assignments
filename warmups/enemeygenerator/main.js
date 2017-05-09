var enemies = []

function Enemy() {
    this.type = typeGen();
    this.hitPoints = hp(this.type);
    this.defense = (this.hitPoints * 3);
}

function typeGen() {
    var rand = Math.random();
    if (rand <= .33) {
        return "Ancient Dragon";
    } else if (rand >= .66) {
        return "Prowler";
    } else {
        return "Mighty Grunt";
    }
};


function hp(gen) {
    if (gen === "Ancient Dragon") {
        return (Math.floor((Math.random() * 20)) + 81);
    } else if (gen === "Prowler") {
        return (Math.floor((Math.random() * 20)) + 50);
    } else {
        return (Math.floor((Math.random() * 20)) + 20);
    }
}

for (var i = 0; i < 100; i++) {
    var bad = new Enemy();
    enemies.push(bad);
}
console.log(enemies);
