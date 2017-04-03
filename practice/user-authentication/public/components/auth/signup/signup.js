angular.module("TodoApp.Auth")

.controller("SignupController", ["$scope","UserService","$location", function ($scope, UserService, $location) {

    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match!";
        } else {
            UserService.signup(user)
                .then(function (response) {
                    $location.path("/login")
                }, function (response) {
                    alert("there was a proplem, oh noes!" + response.data);
                });
        }
    };

}])