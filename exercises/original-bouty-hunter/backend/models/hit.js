var mongoose = require("mongoose");

var hitSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isLiving: {
        type: Boolean,
        default: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("bobabounty", hitSchema);