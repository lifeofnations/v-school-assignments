angular.module("myApp")

    .controller("submitController", ["$scope", "PonyService", "$location", function ($scope, PonyService, $location) {

        $scope.addPony = function (pony) {
            PonyService.addPony(pony)
                .then(function (response) {
                    $location.path("/ponies");
                    $scope.pony = {};
                    return response;
                })
        }

    }]);