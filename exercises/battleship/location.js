function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shipGenerator() {
    if (getRandom(0, 4) === 0) return true;
    return false;
}

function Location () {
    this.isShip = shipGenerator();
    this.hit = false;
    this.display = "O";
}

module.exports = Location;