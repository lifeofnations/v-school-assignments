var ask = require("readline-sync");

console.log("Welcome to the dungeon of DOOOOOOOOOOM!!!!!!!!!");
//var playerName = ask.question("What is the name of your Doomed character ");
var stats = [];
function numGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function statGeneration() {
    stats = [];
    for (var i = 1; i <= 4; i++) {
        stats.push(numGenerator(1, 4));
    }
}
statGeneration();
console.log(stats);

function PlayerCreation() {
    this.name = playerName;
    this.str = stats[0];
    this.acc = stats[1];
    this.con = stats[2];
    this.def = stats[3];
    this.HP = this.con * 2;
    this.weapon = "none";
    this.acessory = "none";
    this.armor = "none";
    this.shield = "none";
    this.characterSheet = function() {
        console.log("\tName: " + this.name + "\n\tStr: " + this.str + "\n\tAcc: " + this.acc + "\n\tCon: " + this.con + "\n\tDef: " + this.def + "\n\tWeapon: " + this.weapon + "\n\tAcessory: " + this.acessory + "\n\tArmor: " + this.armor + "\n\tShield: " + this.shield);
    }
    
}
//build a player object
    //char name
    //will have 4 stats str, acc, def, con, 
    //will have items armor+con, weapon+str, shield+def, accessory+acc *strongest will be auto equiped*
    //print method to view stats and such.












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

//inventory
    //award items
    //allow user to enter 'print' into the console to display player name, HP, and each item in invetory
