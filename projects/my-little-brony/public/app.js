angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/views/home.html",
            controller: "homeController"
        })
        .when("/ponies", {
            templateUrl: "components/views/ponies.html",
            controller: "ponyController"
        })
        .when("/submit", {
            templateUrl: "components/views/submit.html",
            controller: "submitController"
        })
        .when("/edit/:index" , {
            templateUrl: "components/views/submit.html",
            controller: "editPonyController"
        })
        .otherwise("/home")
}]);