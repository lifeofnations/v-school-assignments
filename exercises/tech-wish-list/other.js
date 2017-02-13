angular.module("myApp")


.controller("otherController", ["$scope", function ($scope) {

    $scope.otherTech = [
        {
            name: "Drone",
            brand: "Awesome Drones inc.",
            color: "Stelth Black",
            about: "Super cool fun toy!"
        },
        {
            name: "LAZER Gun",
            brand: "LAZER Guns R Us",
            color: "I don't think it matters..",
            about: "I need it for... plans.."
        }
    ];



}])