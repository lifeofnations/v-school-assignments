var app = angular.module("MyApp", []);

app.controller("MyController", function ($scope) {
    $scope.badges = [];

    $scope.addBadge = function () {
        $scope.badges.push($scope.newBadge);
        console.log($scope.newBadge)
        $scope.newBadge = {};
    }
})