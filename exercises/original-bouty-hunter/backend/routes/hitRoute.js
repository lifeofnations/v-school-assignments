var express = require("express");
var hitRoutes = express.Router();
var Hit = require("../models/hit");

hitRoutes.route("/")
    .get(function (req, res) {
        Hit.find(function (err, hits) {
            if (err) return res.status(500).send(err);
            res.send(hits);
        });
    })
    .post(function (req, res) {
        var hit = new Hit(req.body);
        hit.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(hit);
        });
    });

hitRoutes.route("/:id")
    .get(function (req, res) {
        Hit.findById(req.params.id, function (err, hit) {
            if (err) return res.status(500).send(err);
            res.send(hit);
        });
    })
    .delete(function (req, res) {
        Hit.findByIdAndRemove(req.params.id, function (err) {
            if (err) return res.status(500).send(err);
            res.send({"seekAndDestroy": "Success!!!"});
        });
    })
    .put(function (req, res) {
        Hit.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedHit) {
            if (err) return res.status(500).send(err);
            res.send(updatedHit);
        });
    });

module.exports = hitRoutes;