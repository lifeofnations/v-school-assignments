angular.module("myApp")

.service("BlueService", [function() {
    
    this.increment = (blueCount) => blueCount + 1;
    this.decrement = (blueCount) => blueCount - 1;
    this.reset = () => 100;
    
    
    
}])