/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class AddInventoryController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            'ossApp.Services.LoginService',
            '$scope',

        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            LoginService: ossApp.Services.LoginService,
            private $scope
            ) {

            $scope.isLoggedIn = LoginService.isLogged();

        }

    }

    angular.module("ossApp").controller("ossApp.controllers.AddInventoryController", AddInventoryController);
} 