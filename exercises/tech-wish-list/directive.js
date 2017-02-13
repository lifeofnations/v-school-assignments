angular.module("myApp")

.directive("techDirective", [function () {

    return {
        templateUrl: "directive.html",
        scope: {
            tech: "="
        },
        restrict: "E"
    }



}])