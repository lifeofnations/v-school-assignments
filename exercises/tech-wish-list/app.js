angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/computers", {
            templateUrl: "computers.html",
            controller: "computerController"
    })
        .when("/other", {
            templateUrl: "other.html",
            controller: "otherController"
    })
        .otherwise("/computers")
    
    
    
}])