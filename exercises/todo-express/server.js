var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var port = process.env.PORT || 2117;

app.use(bodyParser.json());
app.use("/todos", require("./todo-routes"));

app.listen(port, function() {
    console.log("Engage! " + port);
})