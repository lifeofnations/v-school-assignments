var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: String,
    password: {
        type: String,
        required: true,
        match: [/^\+([\.-])]
    },
    admin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPassworkExpires: Date
});
//where the hash is happening
userSchema.pre("save", function (next) {
   var user = this;
   if (!user.isModified("password")) return next();
   bcrypt.hash(user.password, 10, function (err, hash) {
       if (err) return next(err);
       user.password = hash;
       next();
   });
});
//what will decrypt the submited password
userSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

userSchema.methods.withoutPassword = function () {
    var user = this.toObject();
    delete user.password;
    return user;
}