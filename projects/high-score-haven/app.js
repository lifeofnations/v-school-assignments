var scoreEntry = document.getElementById("high-score-entry");
var addGame = document.getElementById("add-new");
var gameTables = document.getElementById("game-tables")
var games = {
    Mario: "game"
};

function scoreTypeCheck() {
    if (addGame["score-type"].value === "score-high") {
        return "High Scores";
    } else {
        return "Best Times";
    }
}

function gameAdder() {
    var game = addGame.elements["new-game"].value;
    var scoreType = addGame.elements["score-type"].value;
    if (games[game]) {
        alert("We are already recording that game, what are you doing?!!!");
    } else if (scoreType === "" || game === "") {
        alert("Your an idiot!");
    } else {
        gameTables.innerHTML += (`<h3>${game}</h3>
        <h4>${scoreTypeCheck()}</h4>
        <table class="table table-responsive">
           <thead>
               <tr>
                    <th>Name</td>
                    <th>Date</td>
                    <th>Score</td>
                    <th>Insult</td>
               </tr>
            </thead>
            <tbody id="${game}">
            </tbody>
        </table>`);
    }
    scoreEntry.elements["game-select"].innerHTML += (`<option value="${game}">${game}</option>`);
    games[game] = "game";
}

function insult() {
    var insults = [
        "You Suck!",
        "Take that Loser!",
        "I'm better than everyone that has a lesser score than me!!!",
        "Of course I didn't cheat...",
        "I'm unstopable!",
        "..."
    ]
    if (document.getElementById("insult-check").checked) {
        return insults[Math.floor(Math.random() * 6)];
    } else {
        return "";
    }
}

function addScore() {
    var name = scoreEntry.elements["your-name"].value;
    var date = scoreEntry.elements["date"].value;
    var game = scoreEntry.elements["game-select"].value;
    var score = scoreEntry.elements["score-entry"].value;
    if (name === "" || date === "" || score === "") {
        alert("Follow directions, or just quit!");
        return;
    } else if (score == 0) {
        alert("We are looking for Winners not Loosers!");
        return;
    }
    document.getElementById(game).innerHTML += (`
        <tr>
            <td>${name}</td>
            <td>${date}</td>
            <td>${score}</td>
            <td>${insult()}</td>
        </tr>`);
}
scoreEntry.elements["score-submit"].addEventListener("click", addScore);
addGame.elements["new-game-submit"].addEventListener("click", gameAdder);