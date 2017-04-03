var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var port = process.env.PORT || 2117;
var path = require("path");
var config = require("./config");
var expressJwt = require("express-jwt");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", expressJwt({secret: config.secret}));

app.use("/auth", require("./authRoutes"));
app.use("api/todos", require("./todoRoutes"));
app.use("/api/profile", require("./profileRoutes"));

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("connected to db");
});
app.listen(port, function () {
    console.log("Engage!");
})
