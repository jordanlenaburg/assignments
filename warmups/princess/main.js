var player = {
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    star: false,
    setName: function (namePicked) {
        this.name = namePicked
    },
    gotHit: function () {
        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false
        }
    },
    gotPowerup: function () {
        if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Small") {
            this.status = "Big"
        }
    },
    gameActive: true,
    addCoin: function () {
        this.totalCoins++
    },
    print: function () {
        console.log("\n\tName: " + this.name + "\n\tTotal Coins: " + this.totalCoins + "\n\tStatus: " + this.status + "\n\tStar: " + this.star + "\n")
    }
}

function pickName() {
    var pick = Math.random();
    if (pick < .5) {
        player.setName("Mario")
    } else {
        player.setName("Luigi")
    }
}

function rand() {
    var num = Math.floor(Math.random() * 3);
    if (player.gameActive === false) {
        console.log("\n\tGAME OVER\n");
        return
    }
    if (num === 0) {
        player.gotHit();
        player.print();
    } else if (num === 1) {
        player.gotPowerup();
        player.print();
    } else if (num === 2) {
        player.addCoin();
        player.print();
    }
    if (player.status === "Dead") {
        console.log("\n\tGAME OVER\n");
        return
    }
}

pickName();

rand();
rand();
rand();
