var express = require("express");
var todoRoutes = express.Router();
var uuid = require("uuid");

var toDos = [];

function ToDo(name, des, img) {
    this.name = name;
    this.description = des;
    this.imageUrl = img;
    this.completed = false;
    this._id = uuid.v4();
}

toDos.push(new ToDo("Crap", "waste money", "HTTP:www.img.com"));
toDos.push(new ToDo("More Crap", "waste more money", "HTTP:www.img.com"));
toDos.push(new ToDo("Something Usefull", "don't waste money", "HTTP:www.img.com"));
toDos.push(new ToDo("toilet", "you broke the last one", "HTTP:www.img.com"));
toDos.push(new ToDo("less beans", "so you don't break the toilet again", "HTTP:www.img.com"));
toDos.push(new ToDo("jetpack", "to fly", "HTTP:www.img.com"));
toDos.push(new ToDo("eagle", "illegal", "HTTP:www.img.com"));
toDos.push(new ToDo("orange", "sounded good..", "HTTP:www.img.com"));

todoRoutes.route("/")
    .get(function(req, res) {
        res.send(toDos);
    })
    .post(function(req, res) {
        var toAdd = req.body;
        toDos.push(new ToDo(toAdd.name, toAdd.des, toAdd.img));
        res.send(toDos);
    });

todoRoutes.route("/:id")
    .get(function(req, res) {
        for (var i = 0; i < toDos.length; i++) {
            if (req.params.id === toDos[i]._id) {
                return res.send(toDos[i]);
            }
        }
        res.status(404).send("not found");
    })
    .put(function(req, res) {
        for (var i = 0; i < toDos.length; i++) {
            if (req.params.id === toDos[i]._id) {
                for (key in req.body) {
                    toDos[i][key] = req.body[key];
                }
                return res.send(toDos[i]);
            }
        }
        res.send("not found");
    })
    .delete(function(req, res) {
        for (var i = 0; i < toDos.length; i++) {
            if (req.params.id === toDos[i]._id) {
                toDos.splice(i, 1);
                return res.send(toDos);
            }
        }
        res.send("not found");
    });

module.exports = todoRoutes;