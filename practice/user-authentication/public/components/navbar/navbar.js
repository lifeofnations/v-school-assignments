angular.module("TodoApp")

.directive("navbar", [function () {
    return {
        templateUrl "components/navbar/navbar.html",
        controller: function ($scope) {
            $sope.userService = UserService
        }
    }
}]);