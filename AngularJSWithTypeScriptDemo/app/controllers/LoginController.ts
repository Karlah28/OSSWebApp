/// <reference path="homecontroller.ts" />
/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class LoginController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope',
            '$location',
            '$localStorage',
            '$rootScope'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            //LoginService: ossApp.Services.LoginService,
            $scope,
            $location,
            $localStorage,
            $rootScope
        //Login                                                
            ) {

            $scope.title = "Login or Register";
            //var favorites: Array<ossApp.Interfaces.ITrack>;
            this.NavbarService = NavbarService;
            var url = "your local host"; 
            
            //$localStorage.message = "Karla";


            //$scope.karla = $localStorage.message;

            $scope.userEmail = "karla@mavs.uta"
            $scope.password = "admin";

            if ($localStorage.isLogged === null || $localStorage.isLogged === undefined) {
                $localStorage.isLogged = false;
            }
            

            $scope.loginUser = function() {
                //create a registered user 
              
                
                //Send it using the service
                
               // $scope.user = new 
                if ($scope.UserName == $scope.userEmail && $scope.Password == $scope.password) {
                    console.log("login Success");
                    alert("login success!");
                    //LoginService.login(true);
                    $localStorage.isLogged = true;
                    $rootScope.isLogged = $localStorage.isLogged;
                    $location.url('/storageManagement');
                    $rootScope.isAdmin = true;
                }
                
                else {                                                                
                    console.log("login failed");
                    window.alert("Invalid Credentials, Please Try Again!");
                }
            };

            $scope.register = () => {



            }

            $rootScope.logout = () => {
                $localStorage.isLogged = null;
                $rootScope.isLogged = false;

            }

        }

    }

    angular.module("ossApp").controller("ossApp.controllers.LoginController", LoginController);
} 