var ask = require("readline-sync");
console.log("Welcome to the dungeon of DOOOOOOOOOOM!!!!!!!!!\n");
var playerName = ask.question("What is the name of your Doomed character? ");

function numGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function statGeneration() {
    var stats = [];
    for (var i = 1; i <= 4; i++) {
        stats.push(numGenerator(2, 5));
    }
    return stats;
}

function PlayerCreation() {
    this.stats = statGeneration();
    this.name = playerName;
    this.xp = 0;
    this.str = this.stats[0];
    this.acc = this.stats[1];
    this.con = this.stats[2];
    this.def = this.stats[3] + 10;
    this.hp = 1;
    this.weapon = {
        type: "weapon",
        stat: 0
    };
    this.accessory = {
        type: "accessory",
        stat: 0
    };
    this.armor = {
        type: "armor",
        stat: 0
    };
    this.shield = {
        type: "shield",
        stat: 0
    };
    this.characterSheet = function () {
        console.log("\tName: " + this.name + "\n\tHP: " + this.hp + "\n\tXP: " + this.xp + "\n\tStr: " + this.str + "\n\tAcc: " + this.acc + "\n\tCon: " + this.con + "\n\tDef: " + this.def + "\n\tWeapon: " + this.weapon.stat + "\n\tAccessory: " + this.accessory.stat + "\n\tArmor: " + this.armor.stat + "\n\tShield: " + this.shield.stat);
    }
}

function getItemType() {
    var items = ["weapon", "accessory", "armor", "shield"];
    return items[numGenerator(0, 3)];
}

function getItemQuality() {
    if (player.xp < 5) {
        return 1;
    } else if (player.xp < 10) {
        return numGenerator(1, 2);
    } else if (player.xp < 15) {
        return numGenerator(1, 3);
    } else if (player.xp < 30) {
        return numGenerator(2, 3);
    } else if (player.xp < 45) {
        return 3;
    } else {
        return 5;
    }
}

function ItemGenerator() {
    this.type = getItemType();
    this.quality = getItemQuality();
    this.stat = numGenerator(1, 5) * this.quality;
}

function getEnemyType() {
    var possibleEnemies = ["rat", "goblin", "ork", "giant", "Trogdor the Burninator"];
    if (player.xp < 5) {
        return possibleEnemies[numGenerator(0, 1)];
    } else if (player.xp < 20) {
        return possibleEnemies[numGenerator(0, 2)];
    } else if (player.xp < 40) {
        return possibleEnemies[numGenerator(1, 3)];
    } else if (player.xp < 60) {
        return possibleEnemies[numGenerator(2, 3)];
    } else {
        return possibleEnemies[4];
    }

}

function getEnemyLevel(type) {
    switch (type) {
    case "rat":
        return 1;
    case "goblin":
        return numGenerator(1, 3);
    case "ork":
        return numGenerator(4, 8);
    case "giant":
        return numGenerator(10, 15);
    case "Trogdor the Burninator":
        return 20;
    }
}

function EnemyGenerator() {
    this.type = getEnemyType();
    this.level = getEnemyLevel(this.type);
    this.str = this.level;
    this.acc = this.level;
    this.con = this.level;
    this.def = this.level + 7;
    this.hp = this.con + this.level + 1;
    this.xp = this.level;
}

function movePhase() {
    switch (ask.keyIn("The only way is forward")) {
    case "w":
        console.log("you walk forward\n");
        randomEncounter();
        break;
    case "i":
        player.characterSheet();
        break;
    case "q":
        console.log("you can't take it anymore\n");
        player.hp = 0;
        break;
    }
}

function escapeCheck() {
    if (numGenerator(1, 2) === 2) {
        escape = true;
        console.log("you escaped\n");
    } else {
        console.log("you failed to escape, and bad things happen.\n");
        enemyAttack();
    }
}

function fightAction() {
    switch (ask.keyIn("What is your action?\n")) {
    case "a":
        playerAttack(), 1500;
        if (baddie.hp > 0) {
            enemyAttack(), 1500;
        }
        break;
    case "r":
        escapeCheck();
    }
}

function fightPhase() {
    baddie = new EnemyGenerator();
    console.log("Lv. " + baddie.level + " " + baddie.type + " appears!");
    console.log(baddie);
    console.log("A-attack R-run\n");
    while (player.hp > 0 && baddie.hp > 0) {
        console.log("\tPlayerHP: " + player.hp + " EnemyHP: " + baddie.hp);
        fightAction()
        if (escape) {
            break;
        }
    }
    if (escape || player.hp <= 0) {
        return 0;
    } else if (baddie.type === "Trogdor the Burninator") {
        ask.keyIn("\nCongradulations, you won! You live a long and healthy life!\nHowever, you will be forever alone.\nFor you have just slain the Kingdome's great and benevolent leader..\n\n..press any key to continue..");
        player.hp = 0;
    } else {
        console.log("\nYou are Victorious!");
        treasureReward();
        player.xp += baddie.xp;
    }
}

function playerAttack() {
    if (numGenerator(1, 20) + player.acc + player.accessory.stat >= baddie.def) {
        var damage = numGenerator(Math.floor((player.str +player.weapon.stat) / 2) , player.str + player.weapon.stat);
        console.log("You hit and deal " + damage + " damage");
        baddie.hp -= damage;
    } else {
        console.log("You miss!");
    }
}

function enemyAttack() {
    if (numGenerator(1, 20) + baddie.acc >= player.def + player.shield.stat) {
        var damage = numGenerator(1, baddie.str);
        console.log("Enemy Hits! Deals " + damage + " damage!\n");
        player.hp -= damage;
    } else {
        console.log("Enemy Miss!\n");
    }
}

function randomEncounter() {
    if (numGenerator(0, 2) === 2) {
        fightPhase();
    } else if (numGenerator(0, 4) === 4) {
        treasureReward();
    }
}

function treasureReward() {
    var treasure = new ItemGenerator();
    console.log("You found treasure!\n");
    console.log(treasure.type);
    if (player.weapon.type === treasure.type) {
        if (player.weapon.stat < treasure.stat) {
            player.weapon = treasure;
            console.log("Bigger is better! +" + treasure.stat + " str\n");
        } else {
            console.log("You have seen sticks sharper\n");
        }
    } else if (player.accessory.type === treasure.type) {
        if (player.accessory.stat < treasure.stat) {
            player.accessory = treasure;
            console.log("Oooh, a shiney necklace +" + treasure.stat + " acc\n");
        } else {
            console.log("You thought jewlrey was supposed to be shiney..\n");
        }
    } else if (player.armor.type === treasure.type) {
        if (player.armor.stat < treasure.stat) {
            player.armor = treasure;
            resetHealth();
            console.log("It may not make you move faster, but it can sure take a hit! +" + treasure.stat + " con\n");
        } else {
            console.log("Whoever died wearing this is still rotting inside... Best leave it be.\n");
        }
    } else {
        if (player.shield.stat < treasure.stat) {
            player.shield = treasure;
            console.log("Always bring protection! +" + treasure.stat + " def\n");
        } else {
            console.log("While great in theory, there just isn't a way to use a door as a shield...\nUnless you are a coward of course..\n")
        }
    }
}

function resetHealth() {
    player.hp = (player.con + player.armor.stat) * 2;
}
console.log("Greetings, " + playerName + "\nYou have been cast into the 'Dungeon of Doom' for crimes you did not commit.\nYou only have one hope..\nSurvive long enough to face and defeat Trogdor!\nDo this, and you will earn your freedom!\n");
var player = new PlayerCreation();
var baddie = {};
var escape = false;
console.log("W-walk, I-inventory, ESC-quit\n")
if (player.name === "God") {
    player.str = 40;
    player.acc = 40;
    player.con = 40;
    player.def = 40;
}

while (player.hp > 0) {
    escape = false;
    resetHealth();
    movePhase();
}
//walking
//will use "w" key to walk and run random algoritim to determine if player will be attacked 1/3 or 1/4 chance

//if enemy appears
//enemy is random, minimum of 3 enemys
//user decides to attack or run
//if attacking, choose random attack power between a min and max
//if running use random 1 or 2 (50%) chance of escape
//after attacking or running, the enemy attacks back for random damage.
//if player kills enemy, can give some health and a special item.
//if player gets killed, cool death message and game ends.

//.keyIn

//inventory
//award items
//allow user to enter 'print' into the console to display player name, HP, and each item in invetory
console.log("\nYou died, and no one cares...\n")