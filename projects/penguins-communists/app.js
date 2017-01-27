var penguins = new PartyMaker("The Penguins", 4, 1000);
var communists = new PartyMaker("The Communists", 6.5, 650);
var turn = getNumber(1, 2);
var theWar = setInterval(launchNuke, 4000);

function warEnd() {
    clearInterval(theWar);
    if (penguins.population <= 0) {
        console.log("The Communists Win!");
    } else {
        console.log("The Penguins Win!");
    }
}

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function PartyMaker(name, acc, dmg) {
    this.name = name;
    this.population = 1000000;
    this.accuracy = acc;
    this.damage = dmg;
}

function launchNuke() {
    if (penguins.population <= 0 || communists.population <= 0) {
        warEnd();
    } else if (turn % 2 === 0) {
        console.log("The Penguins just launched a NUKE!");
        sendNuke(penguins, onHit, onMiss);
    } else {
        console.log("The Communists just launched a NUKE!");
        sendNuke(communists, onHit, onMiss);
    }
}

function sendNuke(party, onHit, onMiss) {
    if (getNumber(1, 10) <= party.accuracy) {
        onHit(party);
    } else {
        onMiss(party);
    }
    turn += 1;
}

function onHit(party) {
    var damage = getNumber(100, 200) * party.damage;
    if (party === penguins) {
        console.log("The Penguins Hit!!! " + damage + " Commies Killed! Power Overwheling!!!!!!\n");
        communists.population -= damage;
    } else {
        console.log("The Communists Hit! " + damage + " Penguins eradicated! Pew Pew!\n");
        penguins.population -= damage;
    }
    console.log(`\tPenguins: ${penguins.population} Communists: ${communists.population}\n\n`);
}

function onMiss(party) {
    if (party === penguins) {
        console.log("The Penguins miss... Oh well. Their missles are just too heavy to fly straight.\n");
    } else {
        console.log("The Communists miss. Such failures will not be tolerated. Execute the person responsible!!!!!\n");
        party.population -= 1;
    }
    console.log(`\tPenguins: ${penguins.population} Communists: ${communists.population}\n\n`);
}