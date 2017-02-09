angular.module("myApp", [])

.controller("myController", ["$scope", "HitService", function($scope, HitService) {
    HitService.hitList().then(function(response) {
        $scope.hits = response;
    })
    console.log($scope.hits);
    
}])