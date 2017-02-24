var express = require("express");
var ponyRoutes = express.Router();
var MyLittlePony = require("../models/ponySchema");
var authenticate = require("../middleware/ponyAuthentication");

ponyRoutes.route("/")
    .get(function (req, res) {
        MyLittlePony.find(function (err, allPonies) {
            if (err) return res.status(500).send(err);
            res.send(allPonies);
        });
    })
    .post(function (req, res) {
        if (authenticate(req.body)) {
            var pony = new MyLittlePony(req.body);
            pony.save(function (err) {
                if (err) return res.status(500).send(err);
                res.status(201).send(pony);
            });
        } else {
            res.status(400).send("Invalid name or missing img");
        }
    });

ponyRoutes.route("/:id")
    .get(function (req, res) {
        MyLittlePony.findById(req.params.id, function (err, onePony) {
            if (err) return res.status(500).send(err);
            res.send(onePony);
        });
    })
    .put(function (req, res) {
        MyLittlePony.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedPony) {
            if (err) return res.status(500).send(err);
            res.send(updatedPony);
        });
    })
    .delete(function (req, res) {
        MyLittlePony.findByIdAndRemove(req.params.id, function (err) {
            if (err) return res.status(500).send(err);
            res.send({seekAndDestroy: "success!"});
        });
    });

module.exports = ponyRoutes;
