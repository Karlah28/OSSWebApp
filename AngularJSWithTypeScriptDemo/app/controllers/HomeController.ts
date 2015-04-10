/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class HomeController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope'            
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            private $scope
            ) {
            //var favorites: Array<ossApp.Interfaces.ITrack>;
            //this.NavbarService = NavbarService;
            //$scope.getFavourites = () => {
            //    $scope.favorites = this.NavbarService.getPlayList();

            //};
            $scope.title = "Welcome to Outreach Storage System";
            $scope.image = "../../images/uta-image.jpg";
        }
      
    }

    angular.module("ossApp").controller("ossApp.controllers.HomeController", HomeController);
} 