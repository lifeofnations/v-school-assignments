angular.module("myApp")


.controller("computerController", ["$scope", function($scope) {
    
    $scope.computerTech = [
        {
            name: "GTX1080",
            brand: "Nvidia",
            color: "any",
            about: "Need at least two of these..."
        },
        {
            name: "Galaxy S8",
            brand: "Samsung",
            color: "Purple",
            about: "Hopefully there is a Note that doesn't blow up..."
        }
    ];
    
    
}])