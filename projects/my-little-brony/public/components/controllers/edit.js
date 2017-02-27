angular.module("myApp")

.controller("editPonyController", ["$scope", "PonyService", "$routeParams", "$location", function ($scope, PonyService, $routeParams, $location) {

    $scope.pony = PonyService.ponies[$routeParams.index];
    console.log($routeParams.index);
    console.log($scope.pony);

    $scope.addPony = function (pony) {
        PonyService.addPony(pony, true)
            .then(function (response) {
                $location.path("/ponies");
                return response;
            })
    };

}]);