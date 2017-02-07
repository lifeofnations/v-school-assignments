var app = angular.module("myApp", []);

app.controller("myController", ["$scope", function ($scope) {

    if (JSON.parse(localStorage.getItem("uglyThings"))) {
        $scope.uglyThings = JSON.parse(localStorage.getItem("uglyThings"));
    } else {
        $scope.uglyThings = [];
    }

    $scope.store = function () {
        var data = JSON.stringify($scope.uglyThings);
        localStorage.setItem("uglyThings", data);
    }


    $scope.addUgly = function () {
        $scope.uglyThings.push($scope.uglyThing);
        $scope.store();
        $scope.uglyThing = {};
    }

    $scope.removeUgly = function (index) {
        $scope.uglyThings.splice(index, 1);
        $scope.store();
    }

    $scope.uglyComment = function (index, comment) {
        if (!$scope.uglyThings[index].comments) {
            $scope.uglyThings[index].comments = [];
        }
        if (comment !== "") {
            $scope.uglyThings[index].comments.push(comment);
            console.log($scope.uglyThings[index].comments);
            $scope.store();
        }
    }

    $scope.deleteComment = function (pIndex, index) {
        $scope.uglyThings[pIndex].comments.splice(index, 1);
        $scope.store();
    }




            }]);