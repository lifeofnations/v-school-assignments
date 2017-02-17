var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var app = express();
var path = require("path"); //no need to npm this one

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));  //public referes to the path in you project

var bounties = [];

function Hit (first, last, reward, type) {
    this.firstName = first;
    this.lastName = last;
    this.living = true;
    this.bountyAmount = reward;
    this.type = type;
    this.id = uuid.v4();
}

bounties.push(new Hit("Luke", "Skywalker", 5000, "Jedi"));
bounties.push(new Hit("Bubba", "Blip", 48000, "?"));
bounties.push(new Hit("Anikin", "Skywalker", 1, "Lame"));
bounties.push(new Hit("Jabba", "Hutt", 0, "Revenge"));
bounties.push(new Hit("that One", "Ewok", 10000000000, "Jedi"));

app.get("/bounties", function(req, res) {
    res.send(bounties);
});

app.get("/bounties/:id", function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.id) {
            return res.send(bounties[i]);
        }
    }
    res.status(404).send("not found");
});

app.post("/bounties", function(req, res) {
    console.log(req.body);
    var data = req.body;
    bounties.push(new Hit(data.first, data.last, data.reward, data.type));
    res.send(bounties);
})

app.delete("/bounties/:id", function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.id) {
            bounties.splice(i, 1);
            return res.send("It's done..");
        }
    }
    res.status(404).send("ummm... no!");
});

app.put("/bounties/:id", function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        var update = req.body;
        if (bounties[i].id === req.params.id) {
            if (update.first) bounties[i].firstName = update.first;
            if (update.last) bounties[i].lastName = update.last;
            if (update.living) bounties[i].living = update.living;
            if (update.reward) bounties[i].bountyAmount = update.reward;
            if (update.type) bounties[i].type = update.type;
            return res.send(bounties[i]);
        }
    }
    res.status(404).send("BEEEEEP!!!!!!!");
})

app.listen(8000, function() {
    console.log("I'm listening");
})