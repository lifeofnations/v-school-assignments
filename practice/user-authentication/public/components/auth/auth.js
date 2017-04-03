angular.module("TodoApp.Auth", ["ngStorage"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            template: "",
            controller: "LogoutController"
        })
        .when("/forgot", {
            templateUrl: "components/auth/forgot/forgot.html",
            controller: "ForgotPasswordController"
        })
}])

    //way to handle the incoming token
    .service("TokenService", ["$localStorage", function ($localStorage) {

        this.setToken = function (token) {
            $localStorage.token = token;
        };

        this.getToken = function () {
            return $localStorage.token;
        };

        this.removeToken = function () {
            delete $localStorage.token;
        };

    }])

//way to handle calls for authentication endpoints
.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService) {

    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("/auth/login", user)
            .then(function (response) {
                TokenService.setToken(response.data.token);
                return response.data;
            });
    };

    this.logout = function () {
        TokenService.removeToken();
        $location.path("/");
    };

    this.isAuthenticated = function () {
        return
    }

}])

.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    
    this.request = function (config) {  //any request will pass through here
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };
    
    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response)
    }
    
}])

.config(["$httpProvider", function ($httpProvider) {

    $httpProvider.interceptors.push("AuthInterceptor");

}]);