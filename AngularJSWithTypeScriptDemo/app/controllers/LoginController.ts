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
            //'ossApp.Services.LoginService',
            '$scope',
            '$location',
            '$localStorage'
            //'Login'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            //LoginService: ossApp.Services.LoginService,
            $scope,
            $location,
            $localStorage
            //Login                                                
            ) {

            $scope.title = "Login or Register";
            var favorites: Array<ossApp.Interfaces.ITrack>;
            this.NavbarService = NavbarService;
            var url = "your local host"; 
            
            //$localStorage.message = "Karla";


            //$scope.karla = $localStorage.message;

            $scope.userEmail = "karla@mavs.uta"
            $scope.password = "admin";

            $scope.loginUser = function() {
                //create a registered user 
              
                
                //Send it using the service
                
               // $scope.user = new 
                if ($scope.UserName == $scope.userEmail && $scope.Password == $scope.password) {
                    console.log("login Success");
                    alert("login success!");
                    //LoginService.login(true);
                    $location.url('/storageManagement');
                }
                else {                                                                
                    console.log("login failed");
                    window.alert("Invalid Credentials, Please Try Again!");
                }
            };

            $scope.register = () => {



            }

        }

    }

    angular.module("ossApp").controller("ossApp.controllers.LoginController", LoginController);
} 