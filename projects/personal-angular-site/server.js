
var express = require("express");
var app = express();
var port = process.env.PORT || 2117;
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());








app.listen(port, function() {
    console.log("Engage!");
})