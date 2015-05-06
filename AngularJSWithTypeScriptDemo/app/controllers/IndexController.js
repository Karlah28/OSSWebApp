/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var IndexController = (function () {
            function IndexController(NavbarService, HttpService, $scope, $localStorage) {
                //angular.element(document).ready(function () {
                // isAdmin = false;
                this.$scope = $scope;
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
            IndexController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$localStorage'
            ];
            return IndexController;
        })();
        controllers.IndexController = IndexController;
        angular.module("ossApp").controller("ossApp.controllers.IndexController", IndexController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=IndexController.js.map