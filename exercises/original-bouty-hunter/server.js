var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use("/bounties", require("./backend/routes/hitRoute"));

//var bounties = [];

// function Hit (first, last, reward, type) {
//     this.firstName = first;
//     this.lastName = last;
//     this.living = true;
//     this.bountyAmount = reward;
//     this.type = type;
//     this.id = uuid.v4();
// }
//
// bounties.push(new Hit("Luke", "Skywalker", 5000, "Jedi"));
// bounties.push(new Hit("Bubba", "Blip", 48000, "?"));
// bounties.push(new Hit("Anikin", "Skywalker", 1, "Lame"));
// bounties.push(new Hit("Jabba", "Hutt", 0, "Revenge"));
// bounties.push(new Hit("that One", "Ewok", 10000000000, "Jedi"));
//
mongoose.connect("mongodb://localhost/bobabounties", function (err) {
    if (err) throw err;
    console.log("DBGO!!!");
});

app.listen(8000, function() {
    console.log("I'm listening");
});