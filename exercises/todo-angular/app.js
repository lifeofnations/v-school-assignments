angular.module("myApp", [])

.controller("myController", ["$scope", "ToDoService", function ($scope, ToDoService) {
    

    ToDoService.list().then(function (response) {
        $scope.list = response;
    })


    $scope.addButton = function () {
        ToDoService.addButton($scope.addToDo)
            .then(function (response) {
                $scope.list.push($scope.addToDo);
                $scope.addToDo = {};
            })
    }

    $scope.deleteButton = function (id) {
        ToDoService.deleteButton(id)
            .then(function (response) {
                $scope.list.splice($scope.list.findIndex(a => a._id === id), 1);
            })
    }

    $scope.changeButton = function (id) {
        $scope.addToDo = $scope.list[$scope.list.findIndex(a => a._id === id)];
    }

    $scope.applyButton = function () {
        ToDoService.applyButton($scope.addToDo)
            .then(function (response) {
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
    $scope.strikeThrough = function (item, index) {
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



//shanmiller.tech


//   http://api.vschool.io/<yourname>/todo[/<todoId>]