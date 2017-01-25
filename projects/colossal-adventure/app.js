//The Dungeon of Doom!/////////////////////////////////////////////////////////////////////////////////////
var ask = require("readline-sync");
console.log("Welcome to the dungeon of DOOOOOOOOOOM!!!!!!!!!\n");
var player = new PlayerCreation();
console.log("Greetings, " + player.name + "\nYou have been cast into the 'Dungeon of Doom' for crimes you did not commit.\nYou have one hope..\nSurvive long enough to face and defeat Trogdor!\nDo this, and you will earn your freedom!\n");
var baddie = {};
console.log("W-walk, I-inventory, ESC-quit\n")
if (player.name === "God") {
    player.str = 40;
    player.acc = 40;
    player.con = 40;
    player.def = 40;
}
while (player.hp > 0) {
    player.escape = false;
    resetHealth();
    movePhase();
}
console.log("\nYou died, and no one cares...\n");

//Constructors/////////////////////////////////////////////////////////////////////////////////////////////
function PlayerCreation() {
    this.stats = statGeneration();
    this.name = ask.question("What is the name of your Doomed character? ");
    this.xp = 0;
    this.str = this.stats[0];
    this.acc = this.stats[1];
    this.con = this.stats[2];
    this.def = this.stats[3] + 10;
    this.hp = 1;
    this.escape = false;
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
        console.log("\tName: " + this.name + "\n\tHP: " + this.hp + "\n\tXP: " + this.xp + "\n\tStr: " + this.str + " +" + this.weapon.stat + "\n\tAcc: " + this.acc + " +" + this.accessory.stat + "\n\tCon: " + this.con + " +" + this.armor.stat + "\n\tDef: " + this.def + " +" + this.shield.stat + "\n\tWeapon: " + this.weapon.stat + "\n\tAccessory: " + this.accessory.stat + "\n\tArmor: " + this.armor.stat + "\n\tShield: " + this.shield.stat);
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

function ItemGenerator() {
    this.type = getItemType();
    this.quality = getItemQuality();
    this.stat = numGenerator(1, 5) * this.quality;
}

//player helpers//////////////////////////////////////////////////////////////////////////////
function resetHealth() {
    player.hp = (player.con + player.armor.stat) * 2;
}

function statGeneration() {
    var stats = [];
    for (var i = 1; i <= 4; i++) {
        stats.push(numGenerator(2, 5));
    }
    return stats;
}

function numGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//item helpers/////////////////////////////////////////////////////////////////////////////////
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

//enemy helpers////////////////////////////////////////////////////////////////
function getEnemyType() {
    var possibleEnemies = ["Dire Badger", "Kobold", "Black Slime", "Beholder", "Trogdor the Burninator"];
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
    case "Dire Badger":
        return 1;
    case "Kobold":
        return numGenerator(1, 3);
    case "Black Slime":
        return numGenerator(4, 8);
    case "Beholder":
        return numGenerator(10, 15);
    case "Trogdor the Burninator":
        return 20;
    }
}

// functions for the main phases of gameplay/////////////////////////////////////////////
function movePhase() {
    switch (ask.keyIn("\n" + moveFlavor())) {
    case "w":
        console.log(walkingFlavor());
        randomEncounter();
        break;
    case "i":
        player.characterSheet();
        break;
    case "q":
        console.log("You can't take it anymore..\n");
        player.hp = 0;
        break;
    }
}

function moveFlavor() {
    var flavorText = [
        "The only way is forward..",
        "The way is dark, but you must press on..",
        "For a moment you are hopefull, but the feeling is fleeting..",
        "Dim torches cast eerie shadows..",
        "The hall is well lit... you wish it wasn't..",
        "Your mind is assaulted with visions of your own death",
        "You think you hear laughter in the distance..",
        "You see a faint light in the distance..",
        "A piercing shreek shatters your nerves..",
        "An annoying farie finds you and wont stop asking questions.."
    ];
    return flavorText[numGenerator(0, 9)];
}

function walkingFlavor() {
    var flavorText = [
        "You stumble forward.",
        "A trapdoor opens and you fall into the depths below, your landing cushioned by the bodies of victims past.",
        "You travel down a flight of crumbling stairs",
        "Footsteps echo you for a moment, when you pause to listen, they stop.",
        "Your path is blocked by a trap of spining blades.. you find another route.",
        "Something falls from the celing and knocks you out.. you awaken sometime later.",
        "You make your way deeper in to the depths of the dungeon.",
        "The walls dissapear and you find yourself in an empty void, you wander aimlessly for hours.\nEventually, you emerge somewhere back in the dungeon.",
        "You suddenly awake, unaware of how long you have been asleap.",
        "Something wraps around your leg and drags you down a dark tunnel.. \nBy the time you manage to comprehend what has happend, whatever grabbed you is gone.",
    ];
    return flavorText[numGenerator(0, 9)];
}

function randomEncounter() {
    if (numGenerator(0, 2) === 2) {
        fightPhase();
    } else if (numGenerator(0, 4) === 4) {
        treasureReward();
    }
}

function fightPhase() {
    baddie = new EnemyGenerator();
    console.log("\nLv. " + baddie.level + " " + baddie.type + " appears!");
    console.log("\tA-attack R-run\n");
    while (player.hp > 0 && baddie.hp > 0) {
        console.log("\tPlayerHP: " + player.hp + " EnemyHP: " + baddie.hp);
        fightAction()
        if (player.escape) {
            break;
        }
    }
    if (player.escape || player.hp <= 0) {
        return 0;
    } else if (baddie.type === "Trogdor the Burninator") {
        ask.keyIn("\nCongradulations, you won! You live a long and healthy life!\n\n..press any key to continue..");
        player.hp = 0;
    } else {
        console.log("\nYou are Victorious!");
        treasureReward();
        player.xp += baddie.xp;
    }
}

//functions for Combat///////////////////////////////////////////////////////////////
function fightAction() {
    switch (ask.keyIn(" ")) {
    case "a":
        playerAttack();
        if (baddie.hp > 0) {
            enemyAttack();
        }
        break;
    case "r":
        escapeCheck();
        break;
    }
}

function escapeCheck() {
    if (baddie === "Trogdor the Burninator") {
        console.log("No one escapes Trogdor!");
        enemyAttack();
    } else if (numGenerator(1, 2) === 2) {
        player.escape = true;
        console.log("you escaped\n");
    } else {
        console.log("you failed to escape, and bad things happen.\n");
        enemyAttack();
    }
}

function playerAttack() {
    if (numGenerator(1, 20) + player.acc + player.accessory.stat >= baddie.def) {
        var damage = numGenerator(Math.floor((player.str +player.weapon.stat) / 2) , player.str + player.weapon.stat);
        console.log("\t\tYou hit and deal " + damage + " damage");
        baddie.hp -= damage;
    } else {
        console.log("\t\tYou miss!");
    }
}

function enemyAttack() {
    if (numGenerator(1, 20) + baddie.acc >= player.def + player.shield.stat) {
        var damage = numGenerator(1, baddie.str);
        console.log("\t\tEnemy Hits! Deals " + damage + " damage!\n");
        player.hp -= damage;
    } else {
        console.log("\t\tEnemy Miss!\n");
    }
}
///////////////TREASURE!!!!!!!!!//////////////////////
function treasureReward() {
    var treasure = new ItemGenerator();
    console.log("\nYou found treasure!\n");
    console.log(treasure.type + " *" + treasure.quality);
    if (player.weapon.type === treasure.type) {
        if (player.weapon.stat < treasure.stat) {
            player.weapon = treasure;
            console.log("Bigger IS better! +" + treasure.stat + " str\n");
        } else {
            console.log("You have seen sticks sharper..\n");
        }
    } else if (player.accessory.type === treasure.type) {
        if (player.accessory.stat < treasure.stat) {
            player.accessory = treasure;
            console.log("Oooh, a shiney necklace! +" + treasure.stat + " acc\n");
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
