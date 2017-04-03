var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    engine: String,
    miles: Number
});

module.exports = mongoose.model("MemoryCar", carSchema);