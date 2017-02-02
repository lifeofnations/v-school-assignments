//Controller

var app = angular.module("MyAppName", []);

//first argument will 'get' the app
// adding a second second argument, will 'set' the app

app.controller("MainController", function($scope) {
    console.log("Hi There!");
    $scope.name = "Steve";
    $scope.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
});

//first argument is name of the controller
// the second will be a function that runs everything the controller controls
// add $scope to function argument to apply to view then call accordingly $scope.whatever; $scope is considered a service
// adding someting with $scope puts it in a box for  the view(html) to grab when needed.
//$scope it treated like the var keyword


//ng-repeat gets put in html to make elements for each item in arrays.
// ng-repeat="'something/anything' in 'name of array'"
// be sure to put ng-repeat in what you want to repeat. it could be any element..
// you can also nest ng-repeats