/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class IndexController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope',
            '$localStorage'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            private $scope,
            $localStorage
            ) {

            //angular.element(document).ready(function () {
            // isAdmin = false;
                           
            //});
           
            //$scope.$on('handleBroadcast', function () {
            //    $scope.loggedIn = NavbarService.isLogged    
            //});    
            
            //$scope.$on('LoginChanged', function (event, data) {
            //    console.log(data);
            //});    
            //var favorites: Array<ossApp.Interfaces.ITrack>;
            //this.NavbarService = NavbarService;
            //$scope.getFavourites = () => {
            //    $scope.favorites = this.NavbarService.getPlayList();

            //};
            
            //var baseUrl = "192.168.1.107:51941/api";

        }

    }

    angular.module("ossApp").controller("ossApp.controllers.IndexController", IndexController);
}   