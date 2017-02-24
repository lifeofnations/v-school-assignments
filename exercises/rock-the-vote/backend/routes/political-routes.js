var express = require("express");
var politicalRoutes = express.Router();
var AllTheIssues = require("../models/all-the-issues");

politicalRoutes.route("/")
    .get(function(req, res) {
        AllTheIssues.find(function (err, politicalissues) {
            if (err) return res.status(500).send(err);
            res.send(politicalissues);
        });
    })
    .post(function(req, res) {
        var issue = new AllTheIssues(req.body);
        issue.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(issue);
        });
    });

politicalRoutes.route("/:id")
    .get(function(req, res) {
        AllTheIssues.findById(req.params.id, function (err, issue) {
            if (err) return res.status(500).send(err);
            res.send(issue);
        });
    })
    .put(function(req, res) {
        AllTheIssues.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedIssue) {
            if (err) return res.status(500).send(err);
            res.send(updatedIssue);
        });
    })
    .delete(function(req, res) {
        AllTheIssues.findByIdAndRemove(req.params.id, req.body, function (err) {
            if (err) return res.status(500).send(err);
            res.send({"seekAndDestroy": "success!"});
        });
    });

module.exports = politicalRoutes;



// var issues = [];
// function Issue(title, des, img) {
//     this.title = title;
//     this.description = des;
//     this.img = img;
//     this.upVotes = 0;
//     this.downVotes = 0;
//     this.comments = [];
//     this._id = uuid.v4();
// }

// issues.push(new Issue("John Oliver for President!", "because, yes!", "http://cdn.thedailybeast.com/content/dailybeast/articles/2015/02/12/john-oliver-s-rant-against-a-bully-president-made-it-all-the-way-to-ecuador/jcr:content/image.crop.800.500.jpg/47459394.cached.jpg"));
// issues.push(new Issue("Politics are Stupid!", "...why are you still reading... go away!", "https://s-media-cache-ak0.pinimg.com/736x/63/c2/ff/63c2ff47b61aa95d2d2778ea9befb693.jpg"));
// issues.push(new Issue("Cats Fix Everything!", "Apparantly they can run a country better than People", "http://a.scpr.org/i/1a25c324d4d3a0d98f71e0c5fcc69bfc/50195-full.jpg"));
// issues.push(new Issue("Cats Start Mass Genocide!", "...apparantly cats also hate everything...", "http://static.fjcdn.com/pictures/Evil_50b9c4_2219334.jpg"));
// issues.push(new Issue("Cats travel to Space!", "The last frontier to be conquered by felines!", "https://res.cloudinary.com/teepublic/image/private/s--uIpMdI5C--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1446155896/production/designs/37072_1.jpg"));
// issues.push(new Issue("Cats Cause Apocalypse", "The Cats decided to end the world!", "http://31.media.tumblr.com/tumblr_m2ut9qqIzi1qcphveo1_500.jpg"));