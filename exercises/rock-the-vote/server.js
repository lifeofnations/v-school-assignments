var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 2117;
var AllTheIssues = require("./backend/models/all-the-issues");


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use("/issues", require("./backend/routes/political-routes"));

mongoose.connect("mongodb://localhost/politicalissues", function (err) {
    if (err) {
        throw err;
    }
    console.log("DataBase GO!!!");
});

app.listen(port, function() {
    console.log("Engage! " + port);
});