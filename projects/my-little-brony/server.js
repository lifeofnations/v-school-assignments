var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 2117;
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use("/ponies", require("./backend/routes/ponyRoutes"));


mongoose.connect("mongodb://localhost/mylittleponies", function (err) {
    if (err) throw err;
    console.log("Database GO!");
});
app.listen(port, function () {
    console.log("engage!");
});