var express = require("express");
var todoRoutes = express.Router();
var Todo = require("./todoSchema");

todoRoutes.route("/")
    .get(function (req, res) {
        Todo.find({user: req.user._id}, function (err, todos) {
            if (err) return res.status(500).send(err);
            res.send(todos);
        })
    })
    .post(function (req, res) {
        todo = new Todo(req.body);
        todo.user = req.body._id;
        todo.save(req.body).then(function (err, todo) {
            if (err) return res.status(500).send(err);
            res.status(201).send(todo);
        });
    });

todoRoutes.route("/:id")
    .get(function (req, res) {
        Todo.findOne({user: req.user._id, _id: req.params.todoId}, function (err, oneTodo) {
            if (err) return res.status(500).send(err);
            res.send(oneTodo);
        });
    })
    .put(function (req, res) {
        Todo.findOneAndUpdate({user: req.user._id, _id: req.params.todoId}, req.body, {new: true}, function (err, updatedTodo) {
            if (err) return res.status(500).send(err);
            res.send(updatedTodo);
        });
    })
    .delete(function (req, res) {
        Todo.findOneAndRemove({user: req.user._id, _id: req.params.todoId}, function (err) {
            if (err) return res.status(500).send(err);
            res.send({seekAndDestroy: "success!"});
        });
    });

module.exports = todoRoutes;