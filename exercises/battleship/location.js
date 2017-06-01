function Location() {
    if (Math.floor(Math.random() * 5) + 1 > 4) {
        this.isShip = true;
    } else {
        this.isShip = false;
    };
    this.hit = false;
    this.miss = false;
    this.display = ".";
    this.continuedShip = false;
}

module.exports = Location;
