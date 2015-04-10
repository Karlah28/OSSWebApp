/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var LoginController = (function () {
            function LoginController(NavbarService, HttpService, $scope, $location) {
                $scope.title = "Login or Register";
                var favorites;
                this.NavbarService = NavbarService;
                var url = "your local host";
                $scope.userEmail = "karla@mavs.uta";
                $scope.password = "admin";
                $scope.login = function (email, password) {
                    //create a registered user 
                    //Send it using the service
                    // $scope.user = new 
                    if (email == $scope.userEmail && password == $scope.password) {
                        console.log("login Success");
                        $location.url('/dashboard');
                    }
                    else {
                        console.log("login failed");
                        window.alert("Invalid Credentials, Please Try Again!");
                    }
                };
                $scope.register = function () {
                };
            }
            LoginController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$location'
            ];
            return LoginController;
        })();
        controllers.LoginController = LoginController;
        angular.module("ossApp").controller("ossApp.controllers.LoginController", LoginController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=LoginController.js.map