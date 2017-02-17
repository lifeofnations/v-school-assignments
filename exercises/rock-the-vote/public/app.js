angular.module("myApp", [])

.controller("myController", ["$scope", "PoliticalService", function ($scope, PoliticalService) {
    $scope.issues = [];
    $scope.update = function () {
        PoliticalService.getIssues()
            .then(function (response) {
                $scope.issues = response;
            })
    };

    $scope.vote = function (index, isUp) {
        PoliticalService.voteIssue(index, isUp)
            .then(function (response) {
//                $scope.update();
            })
    };

    $scope.addComment = function (comment, index) {
        $scope.newComment = "";
        $scope.commenting = false;
        PoliticalService.addComment(comment, index)
            .then(function (response) {
//                $scope.update();
            })
    }

    $scope.update();





}])