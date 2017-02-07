angular.module("myApp")

.controller("homeController", ["$scope", function($scope) {
    console.log("Home");
    $scope.name = "Utah Home";
    
    
}])