var express = require("express");
var carRouter = express.Router();
var Car = require("../models/carSchema");

carRouter.route("/")
    .get(function (req, res) {
        Car.find(function (err, cars) {
            if (err) return res.status(500).send("not found");
            res.send(cars);
        })
    })
    .post(function (req, res) {
        var newCar = new Car(req.body);
        newCar.save(function (err, car) {
            if (err) return res.status(500).send("not found");
            res.status(201).send(car);
        })
    });

carRouter.route("/:id")
    .get(function (req, res) {
        Car.findById(req.params.id, function (err, car) {
            if (err) return res.status(500).send("not found");
            res.send(car);
        })
    })
    .put(function (req, res) {
        Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedCar) {
            if (err) return res.status(500).send("not found");
            res.send(updatedCar);
        })
    })
    .delete(function (req, res) {
        Car.findByIdAndRemove(req.params.id, function (err) {
            if (err) return res.status(500).send("not found");
            res.send({searchAndDestroy: true});
        })
    });

module.exports = carRouter;