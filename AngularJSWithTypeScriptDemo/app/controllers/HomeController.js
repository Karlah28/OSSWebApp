/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController(NavbarService, HttpService, $scope) {
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                //$scope.getFavourites = () => {
                //    $scope.favorites = this.NavbarService.getPlayList();
                this.$scope = $scope;
                //};
                $scope.title = "Welcome to Outreach Storage System";
                $scope.image = "../../images/uta-image.jpg";
            }
            HomeController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope'
            ];
            return HomeController;
        })();
        controllers.HomeController = HomeController;
        angular.module("ossApp").controller("ossApp.controllers.HomeController", HomeController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=HomeController.js.map