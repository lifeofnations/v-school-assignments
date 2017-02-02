var app = angular.module("MyApp", []);

app.controller("MyController", function($scope) {
   $scope.person = {
       name: "Steve",
       age: 30,
       does: "coding"
   };
});