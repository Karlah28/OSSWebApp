/// <reference path="homecontroller.ts" />
/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var LoginController = (function () {
            function LoginController(NavbarService, HttpService, 
                //LoginService: ossApp.Services.LoginService,
                $scope, $location, $localStorage, $rootScope) {
                $scope.title = "Login or Register";
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                this.NavbarService = NavbarService;
                var baseUrl = "http://localhost:51941/api";
                //$localStorage.message = "Karla";
                //$scope.karla = $localStorage.message;
                if ($localStorage.isLogged === null || $localStorage.isLogged === undefined) {
                    $localStorage.isLogged = false;
                }
                $scope.loginUser = function () {
                    //create a registered user
                    var methodUrl = '/Account/Login';
                    var user = {
                        Email: $scope.UserName,
                        Password: $scope.Password
                    };
                    var userType;
                    HttpService.serverPost(baseUrl + methodUrl, user, function (result, status) {
                        console.log('status', status);
                        if (status === 200) {
                            $localStorage.isLogged = true;
                            $rootScope.isLogged = $localStorage.isLogged;
                            if ($scope.UserName == 'joseph@gmail.com') {
                                $rootScope.isAdmin = true;
                            }
                            else {
                                $rootScope.isAdmin = false;
                            }
                            $location.url('/viewInventory');
                            window.alert("Log In Successful");
                        }
                        else {
                            console.log("login failed");
                            window.alert("Invalid Credentials, Please Try Again!");
                        }
                    });
                };
                $scope.register = function () {
                    var methodUrl = "/Account/RegisterUser";
                    var user = {
                        "Organization": $scope.userOrganization,
                        "PhoneNumber": $scope.userPhone,
                        "DOB": $scope.userDOB,
                        "UserType": 0,
                        "FirstName": $scope.userFirstName,
                        "LastName": $scope.userLastName,
                        "Password": $scope.userPassword,
                        "Email": $scope.registerEmail,
                        "ObjectType": 0
                    };
                    HttpService.serverPost(baseUrl + methodUrl, user, function (result, status) {
                        console.log('status', status);
                        if (status === 200) {
                            window.alert("Request Successfully Sent!");
                            $location.url('/home');
                        }
                        else {
                            console.log("login failed");
                            window.alert("An Error Occurred, Please Try Again Later!");
                        }
                    });
                };
                $rootScope.logout = function () {
                    $localStorage.isLogged = null;
                    $rootScope.isLogged = false;
                    $rootScope.isAdmin = false;
                };
            }
            LoginController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$location',
                '$localStorage',
                '$rootScope'
            ];
            return LoginController;
        })();
        controllers.LoginController = LoginController;
        angular.module("ossApp").controller("ossApp.controllers.LoginController", LoginController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=LoginController.js.map