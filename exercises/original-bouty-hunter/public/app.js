angular.module("myApp", [])

.controller("myController", ["$scope", "HitService", function($scope, HitService) {
    $scope.bounties = [];
    
    $scope.getList = function() {
        HitService.find()
            .then(function(response) {
            $scope.bounties = response;
        });
        console.log("hi", $scope.bounties)
    };
    
    $scope.addBounty = function(toAdd) {
        HitService.add(toAdd)
            .then(function(response) {
                $scope.bounties.push(toAdd);
                $scope.new = {};
                $scope.adding = false;
        });
        console.log("new", $scope.bounties);
    }
    
    $scope.getList();
    
    
}]);