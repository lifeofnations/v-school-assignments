var location = require("./location");
var ask = require("readline-sync");
var grid = [];
var displayGrid = [];
var totalShips = 0;
var empty = 0;
var lossCondition = 0;
var tries = 0;
var hits = 0;

function fire(cord) {
    cord = cord.split(",");
    var x = cord[0];
    var y = cord[1];
    if (cord.length !== 2) {
        console.log("\nEnter real coordinates");
    } else if (Number(cord[0]) > 10 || Number(cord[0]) < 1 || Number(cord[1]) > 10 || Number(cord[1]) < 1) {
        console.log("\nOnly numbers 1 - 10");
    } else {
        if (grid[Math.abs(y - 11)][x - 1].isShip && !grid[10 % (y - 1)][x - 1].hit) {
            console.log("\nYou HIT!!!!!!")
            grid[Math.abs(y - 11)][x - 1].hit = true;
            displayGrid[Math.abs(y - 10)][x] = "X";
            totalShips--;
        } else {
            console.log("\nYou missed, lol!")
            grid[Math.abs(y - 11)][x - 1].hit = true;
            displayGrid[Math.abs(y - 10)][x] = "@";
        }
        tries++;
    }
}


for (var i = 10; i >= 0; i--) {
    var row = [];
    var displayRow = [i.toString()]
    for (var j = 1; j <= 10; j++) {
        var coordinate = new location;
        var display = coordinate.display;
        if (coordinate.isShip) {
            totalShips++;
        } else {
            empty++;
        }
        if (i === 0) {
            displayRow.push(j.toString());
        } else {
            displayRow.push(display);
        }
        row.push(coordinate);
    }
    grid.push(row);
    displayGrid.push(displayRow);
    lossCondition = Math.ceil(empty / totalShips) + 10;
}
console.log("\nENTER CORRDINATES TO FIRE.. X,Y");

while (tries <= lossCondition && hits < 3) {
    console.log("\n" + tries + " of " + lossCondition + " attempts");
    console.log(totalShips + " ships remaining")
    console.log(displayGrid);
    var cord = ask.question("\nWHERE WILL YOU FIRE!!!!!!!!!!!!!!");
    fire(cord);  
}
if(hits >= 3) {
    console.log("You actually won!");
} else {
    console.log("You were exicuted due to your incompetence...");
}
