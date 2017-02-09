angular.module("myApp")

.service("ToDoService", ["$http", function($http) {
    this.list = function() {
        return $http.get("http://api.vschool.io/steve/todo/")
            .then(function (response) {
                return response.data;
            })
    }
    
    this.addButton = function (addToDo) {
        return $http.post("http://api.vschool.io/steve/todo/", addToDo)
            .then(function (response) {
            return response;
            })
    }
    
    this.deleteButton = function (id) {
        return $http.delete("http://api.vschool.io/steve/todo/" + id)
            .then(function (response) {
                return response;
            })
    }
    
    this.applyButton = function (addToDo) {
        return $http.put("http://api.vschool.io/steve/todo/" + addToDo._id, addToDo)
            .then(function (response) {
                return response;
            })
    }
    
    
    
}])