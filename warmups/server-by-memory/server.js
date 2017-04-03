var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 2117;
var mongoose = require("mongoose");
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use("/cars", require("./routes/carRoutes"));
app.use("/persons", require("./routes/personRoutes"));


mongoose.connect("mongodb://localhost/serverbymemory", function (err) {
    if (err) throw err;
    console.log("memorydbGO!");
});
app.listen(port, function () {
    console.log("Engage!");
});