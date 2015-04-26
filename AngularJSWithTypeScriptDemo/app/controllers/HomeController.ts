/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class HomeController {

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
            //var favorites: Array<ossApp.Interfaces.ITrack>;
            //this.NavbarService = NavbarService;
            //$scope.getFavourites = () => {
            //    $scope.favorites = this.NavbarService.getPlayList();

            //};
            
            var baseUrl = "192.168.1.107:51941/api";

            $scope.title = "Welcome to Outreach Storage System";
            $scope.image = "../../images/uta-image.jpg";

            $scope.getUsers = () => {
                var getUsersUrl = "";
                var recentUsers = HttpService.serverGet(baseUrl + getUsersUrl,(response) => {
                    //clear cache before populating
                    $localStorage.recentUsers = null;
                    $localStorage.recentUsers = response;
                });
            };


        }

    }

    angular.module("ossApp").controller("ossApp.controllers.HomeController", HomeController);
} 