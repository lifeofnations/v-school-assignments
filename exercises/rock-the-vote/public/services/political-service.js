angular.module("myApp")

.service("PoliticalService", ["$http", function ($http) {
    var self = this;
    this.issues = [];

    this.getIssues = function () {
        return $http.get("/issues")
            .then(function (response) {
                    self.issues = response.data.sort((a, b) => b.upVotes - a.upVotes);
                    return self.issues;
                },
                function (response) {
                    console.log("ERRRRRROR");
                })
    };

    this.voteIssue = function (index, isUp) {
        if (isUp) {
            self.issues[index].upVotes++;
        } else {
            self.issues[index].downVotes++;
        }
        return $http.put("/issues/" + self.issues[index]._id, self.issues[index])
            .then(function (response) {
                    return console.log("success");
                },
                function (response) {
                    console.log("error");
                })
    }
    
    this.addComment = function(comment, index) {
        self.issues[index].comments.push(comment);
        return $http.put("/issues/" + self.issues[index]._id, self.issues[index])
            .then(function (response) {
                    return response.data;
                },
                function (response) {
                    console.log("error");
                })
    }




}])