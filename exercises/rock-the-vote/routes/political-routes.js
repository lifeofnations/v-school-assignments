var express = require("express");
var uuid = require("uuid");
var politicalRoutes = express.Router();

var issues = [];
function Issue(title, des, img) {
    this.title = title;
    this.description = des;
    this.img = img;
    this.upVotes = 0;
    this.downVotes = 0;
    this.comments = [];
    this._id = uuid.v4();
}

issues.push(new Issue("John Oliver for President!", "because, yes!", "http://cdn.thedailybeast.com/content/dailybeast/articles/2015/02/12/john-oliver-s-rant-against-a-bully-president-made-it-all-the-way-to-ecuador/jcr:content/image.crop.800.500.jpg/47459394.cached.jpg"));
issues.push(new Issue("Politics are Stupid!", "...why are you still reading... go away!", "https://s-media-cache-ak0.pinimg.com/736x/63/c2/ff/63c2ff47b61aa95d2d2778ea9befb693.jpg"));
issues.push(new Issue("Cats Fix Everything!", "Apparantly they can run a country better than People", "http://a.scpr.org/i/1a25c324d4d3a0d98f71e0c5fcc69bfc/50195-full.jpg"));
issues.push(new Issue("Cats Start Mass Genocide!", "...apparantly cats also hate everything...", "http://static.fjcdn.com/pictures/Evil_50b9c4_2219334.jpg"));
issues.push(new Issue("Cats travel to Space!", "The last frontier to be conquered by felines!", "https://res.cloudinary.com/teepublic/image/private/s--uIpMdI5C--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1446155896/production/designs/37072_1.jpg"));
issues.push(new Issue("Cats Cause Apocalypse", "The Cats decided to end the world!", "http://31.media.tumblr.com/tumblr_m2ut9qqIzi1qcphveo1_500.jpg"));

politicalRoutes.route("/")
    .get(function(req, res) {
        res.send(issues);
    })
    .post(function(req, res) {
        issues.push(new Issue(title, des, img));
        res.send(issues);
    })

politicalRoutes.route("/:id")
    .get(function(req, res) {
        for (var i = 0; i < issues.length; i++) {
            if (issues[i]._id === req.params.id) {
                return res.send(issues[i]);
            }
        }
        res.send("not found")
    })
    .put(function(req, res) {
        for (var i = 0; i < issues.length; i++) {
            if (issues[i]._id === req.params.id) {
                for (key in req.body) {
                    issues[i][key] = req.body[key];
                }
                return res.send(issues[i]);
            }
        }
        res.send("not found")
    })
    .delete(function(req, res) {
        for (var i = 0; i < issues.length; i++) {
            if (issues[i]._id === req.params.id) {
                issues.splice(i, 1);
                return res.send(issues);
            }
        }
        res.send("not found")
    })



module.exports = politicalRoutes;
