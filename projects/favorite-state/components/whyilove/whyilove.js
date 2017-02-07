angular.module("myApp")

.controller("whyILoveController", ["$scope", function($scope) {
    console.log("whyilove");
    $scope.name = "Why I Love Utah";
    
    
}])