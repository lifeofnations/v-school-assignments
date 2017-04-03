var express = require("express");
var personRouter = express.Router();
var Person = require("../models/personSchema");

personRouter.route("/")
    .get(function (req, res) {
        Person.find(function (err, persons) {
            if (err) return res.status(500).send("not found");
            res.send(persons);
        })
    })
    .post(function (req, res) {
        var newPerson = new Person(req.body);
        newPerson.save(function (err, person) {
            if (err) return res.status(500).send("not found");
            res.status(201).send(person);
        })
    });

personRouter.route("/:id")
    .get(function (req, res) {
        Person.findById(req.params.id, function (err, person) {
            if (err) return res.status(500).send("not found");
            res.send(person);
        })
    })
    .put(function (req, res) {
        Person.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedPerson) {
            if (err) return res.status(500).send("not found");
            res.send(updatedPerson);
        })
    })
    .delete(function (req, res) {
        Person.findByIdAndRemove(req.params.id, function (err) {
            if (err) return res.status(500).send("not found");
            res.send({searchAndDestroy: true});
        })
    });

module.exports = personRouter;