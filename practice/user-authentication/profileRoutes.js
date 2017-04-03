var express = require("express");
var profileRoutes = express.Router();
var User = require("./userSchema");

profileRoutes.put("/me", function (req, res) {
   User.findById(req.user._id, function (err, user) {
       if (err) return res.status(500).send(err);
       if (!user) return res.status(403).send({success: false, message: "no user found"});

       //user.password = req.body.password || user.password;

       for (var key in user.toObject()) {
               user[key] = req.body[key] || user[key];
       }

       user.save(function (err) {
           if (err) return res.status(500).send(err);
           res.send({success: tue, message: "Updated", user: user.withoutPassword()});
       })
   })
});

module.exports = profileRoutes;
//will update a user including password