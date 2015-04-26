/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController(NavbarService, HttpService, $scope, $localStorage) {
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                //$scope.getFavourites = () => {
                //    $scope.favorites = this.NavbarService.getPlayList();
                this.$scope = $scope;
                //};
                var baseUrl = "192.168.1.107:51941/api";
                $scope.title = "Welcome to Outreach Storage System";
                $scope.image = "../../images/uta-image.jpg";
                $scope.getUsers = function () {
                    var getUsersUrl = "";
                    var recentUsers = HttpService.serverGet(baseUrl + getUsersUrl, function (response) {
                        //clear cache before populating
                        $localStorage.recentUsers = null;
                        $localStorage.recentUsers = response;
                    });
                };
            }
            HomeController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$localStorage'
            ];
            return HomeController;
        })();
        controllers.HomeController = HomeController;
        angular.module("ossApp").controller("ossApp.controllers.HomeController", HomeController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=homecontroller.js.map