var express = require("express");
var authRoutes = express.Router();
var User = require("./userSchema");
var jwt = require("jsonwebtoken");
var config = require("./config");
var async = require("async");
var crypto = require("crypto");
var sendgrid = require("sendgrid")(config.sendgridApiKey);


authRoutes.route("/signup")
    .post(function (req, res) {
        User.find({email: req.body.email}, function (err, existingUser) {
            if (err) return res.status(500).send(err);
            if (existingUser.length) return res.send({success: false, message: "user name already exists"});
            var newUser = new User(req.body);
            newUser.save(function (err) {
                if (err) return res.status(500).send(err);
                res.status(201).send({success: true, user: newUser, message: "good job"});
            })
        })
    });

authRoutes.route("/login")
    .post(function (req, res) {
        User.findOne({email: req.body.email}, function (err, user) {
            if (err) return res.status(500).send(err);
            if (!user) {
                return res.status(401).send({success: false, message: "invalid email or password"});
            }  //calling the check password function down here
            user.checkPassword(req.body.password, function (err, isMatch) {
                if (err) return res.status(403).send(err);
                if (!isMatch) return res.status(403).send({success: false, message: "invalid, go away!"});
                var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
                res.send({
                    success: true,
                    token: token,
                    user: user.withoutPassword(),
                    message: "you are authenticated, here is a token.. good job...?"
                })
            });
        })
    });

authRoutes.route("/forgot")
    .post(function (req, res) {
        async.waterfall([
            //generate random string with crypto
            function (done) {
                crypto.randomBytes(20, function (err, buf) {
                    var token = buf.toString("hex");
                    done(err, token);
                });
            },
            //find the user and update the resetPasswordToken and resetPasswordExpires
            function (token, done) {
                User.findOne({email: req.body.email}, function (err, user) {
                    if (err) return done(err);
                    if (!user) return res.status(404).send({success: true, message: "the email isn't regestered"});
                    user.resetPassworkToken = token;
                    user.resetPasswordExpires = Date.now() + 3600000; //one hour from now
                    user.save(function (err) {
                        if (err) return done(err);
                        done(null, token, user);
                    })
                })
            },
            //send email with password reset link
            function (token, user, done) {
                var helper = sendgrid.mail;
                var fromEmail = new helper.Email("noreply@mycooltodoapp.cash");
                var toEmail = new helper.Email(user.email);
                var subject = "You todoapp password reset link";
                var content = new helper.Content("text/plain", 'You are receiving this because you (or someone else) ' +
                    'have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/#/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n');
                var mail = new helper.Mail(fromEmail, subject, toEmail, content);
                var request = sendgrid.emptyRequest({
                    method: "POST",
                    path: "/v3/mail/send",
                    body: mail.toJSON()
                });
                sendgrid.API(request, function (err, response) {
                    if (err) return done(err);
                    done(null, "finally DONE! EMAIL Sent");
                })
            }
        ], function (err, result) {
            if (err) return res.status(400).send(err);
            res.status(202).send({success: true});
        });
    });

authRoutes.post("/reset", function (req, res) {
    User.findOne({resetPasswordToken: req.body.resetToken}, function (err, user) {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send({message: "bad token"});
        var now = Date.now();
        if (now > user.resetPasswordExpires) return res.status(404).send({message: "to late"});
        user.password = req.body.password || user.password;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        user.save(function (err) {
            if (err) return res.status(500).send(err);
            res.send({success: true, message: "password succesfully changed"});
        })
    })
});

module.exports = authRoutes;