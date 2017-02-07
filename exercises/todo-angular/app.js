var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function ($scope, $http) {
    $http.get("http://api.vschool.io/steve/todo/")
        .then(function (response) {
            $scope.list = response.data;
        })



    $scope.addButton = function () {
        $http.post("http://api.vschool.io/steve/todo/", $scope.addToDo)
            .then(function (response) {
                console.log(response);
                $scope.list.push($scope.addToDo);
                $scope.addToDo = {};
            })
    }

    $scope.deleteButton = function (id) {
        $http.delete("http://api.vschool.io/steve/todo/" + id)
            .then(function (response) {
                console.log(response);
                $scope.list.splice($scope.list.findIndex(a => a._id === id), 1);
            })
    }

    $scope.changeButton = function (id) {
        $scope.addToDo = $scope.list[$scope.list.findIndex(a => a._id === id)];
        console.log($scope.addToDo);
    }

    $scope.applyButton = function () {
        $http.put("http://api.vschool.io/steve/todo/" + $scope.addToDo._id, $scope.addToDo)
            .then(function (response) {
                console.log(response);
                $scope.addToDo = {};
            })
    }

//    $scope.strikeThrough = function (item, index) {
//        $scope.addToDo = $scope.list[index];
//        console.log($scope.addToDo.completed);
//        if ($scope.addToDo.completed === true) {
//            $scope.addToDo.completed = false;
//            $scope.list[index].completed = false;
//        } else {
//            $scope.addToDo.completed = true;
//            $scope.list[index].completed = true;
//            console.log($scope.addToDo.completed);
//        }
//        $http.put("http://api.vschool.io/steve/todo/" + item._id)
//            .then(function (response) {
//                console.log(response);
//                console.log($scope.addToDo.completed);
//                $scope.addToDo = {};
//            })
//    }
    $scope.strikeThrough = function(item, index) {
//        $scope.addToDo = $scope.list[index];
//        $scope.addToDo.completed = !$scope.addToDo.completed;
        $http.put("http://api.vschool.io/steve/todo/" + item._id, item)
            .then(function (response) {
                console.log(response);
//                console.log($scope.addToDo.completed);
                $scope.addToDo = {};
            })
    }


}]);






//.controller('myController', ["$scope", "$http", function ($scope, $http) {
//    var postData = {
//        msg: 'hello word!'
//    };
//
//    $http.post('/someUrl', postData)
//        .then(function (response) {
//            // do something with the results
//        });






//   http://api.vschool.io/<yourname>/todo[/<todoId>]