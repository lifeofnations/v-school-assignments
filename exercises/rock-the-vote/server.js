var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var path = require("path");
var port = process.env.PORT || 2117;


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use("/issues", require("./routes/political-routes"))



app.listen(port, function() {
    console.log("Engage! " + port);
})