var mongoose = require("mongoose");

var ponySchema = new mongoose.Schema({
    name: {
        type: String,
        requiered: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        default: "Anonymous"
    }
});

module.exports = mongoose.model("MyLittlePony", ponySchema);