angular.module("myApp")

.service("RedService", [function() { 
    this.increment = (redCount) => redCount + 1;
    this.decrement = (redCount) => redCount - 1;
    this.reset = () => 100;   
}])