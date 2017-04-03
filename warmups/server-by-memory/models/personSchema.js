var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    carsOwned: [{
        type: Schema.Types.ObjectId,
        ref: "MemoryCar"
    }]
});

module.exports = mongoose.model("MemoryPerson", personSchema);