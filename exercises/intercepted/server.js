var express = require("express");
var app = express();
var bodyParse = require("body-parser");
var changer = require("./changer");

var thing = 
    {
        name: "greg",
        crime: "being weird",
        bounty: "456 cents"
    }

app.use(bodyParse.json());
app.use(changer.addDino);

app.get("/things", function (req, res) {
    console.log(req.dinosaur);
    thing.dinosaur = req.dinosaur;
    res.send(thing);
})



app.listen(8000, function () {
    console.log("I see you!");
})