var app = angular.module("SteveApp", []);

app.controller("SteveControl", function ($scope) {
    $scope.person = {
        firstName: "Steve",
        lastName: "Davis"
    }
})