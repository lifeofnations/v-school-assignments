var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 2117;
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());


app.listen(port, function () {
    console.log("engage!");
});