var ask = require("readline-sync");
var playing = true;
var flavor = [
    "You are walking down the street.\nSuddenly,",
    "You wake up, when suddenly,",
    "Suddenly,",
    "You come to a forest.\nSuddenly,",
    "You are about to walk out of a building,\nwhen suddenly,",
    "You are standing at the edge of a cliff.\nSuddenly,"
]
var situations = [
    " a Dinosaur appears and it looks really hungry...",
    " tomatos start to fall from the sky...",
    " you feel really tired...",
    " the elastic on your underpants gives out...",
    " a building colapses on you...",
    " you step on a bananna peel..."
]

function getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min + 1))) + min;
}

function aSituation() {
    var answer = ask.question(flavor[getRandom(5, 0)] + situations[getRandom(5, 0)] + ",\nWhat do you do? ");
    var isDead = getRandom(2, 0);
    if (answer === "don't die") {
        console.log("\nYou win");
        playing = false;
    } else if (answer === "die") {
        console.log("\nWow, you're pathetic...");
        playing = false;
    } else if (isDead === 0) {
        console.log("\nYou died...\nMake better choices next time.");
        playing = false;
    } else {
        console.log("\nYou didn't die, good job!\n");
    }
}

console.log("\nHi, don't die\n");
while (playing) {
    aSituation();
}
console.log("\n\tthe end\n\n");