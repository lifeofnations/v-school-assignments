var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

var games = [];

function Game(name, dev) {
    this.name = name;
    this.dev = dev;
}

games.push(new Game("Mass Effect", "Bioware"));
games.push(new Game("Assassin's Creed", "Ubisoft"));
games.push(new Game("Demons' Souls", "From Software"));
games.push(new Game("Final Fantasy", "Square Enix"));
games.push(new Game("Dragon Age", "Bioware"));
games.push(new Game("Bloodborne", "From Software"));
games.push(new Game("Pillars of Eternity", "Obsidion"));
games.push(new Game("Starbound", "Chuckle Fish"));

app.get("/games", function(req, res) {
    if (req.query.dev) {
        var querryArray = [];
        for (var i = 0; i < games.length; i++) {
            if (games[i].dev === req.query.dev) {
                querryArray.push(games[i]);
            }
        }
        return res.send(querryArray);
    }
    res.send(games);
})






app.listen(8000, function() {
    console.log("I'm listening!");
})