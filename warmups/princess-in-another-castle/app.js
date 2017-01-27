function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var player = {
    name: "Mario",
    totalCoins: 3,
    status: "Big",
    star: false,
    setName: function(namePicked) {
        this.name = namePicked;
    },
    gotHit: function() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
                break;
        }
    },
    gotPowerup: function() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                break;
        }
    },
    gameActive: true,
    addCoin: function() {
        this.totalCoins++;
    },
    print: function() {
        console.log(`Name: ${this.name}\nCoins: ${this.totalCoins}\nStatus: ${this.status}\nStar: ${this.star}\nGameActive:`);
    }
}

function randomAction() {
    var number = randomNumber(0, 2);
    console.log(number);
    if (!player.gameActive) {
        console.log("Dead");
    } else if (number === 0) {
        player.gotHit();
    } else if (number === 1) {
        player.gotPowerup();
    } else {
        player.addCoin();
    }
}

player.print();
randomAction();
player.print();
randomAction();
player.print();
randomAction();
player.print();


