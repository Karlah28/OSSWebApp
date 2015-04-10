/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var StorageController = (function () {
            function StorageController(NavbarService, HttpService, $scope) {
                this.$scope = $scope;
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                $scope.title = "Storage Management";
            }
            StorageController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope'
            ];
            return StorageController;
        })();
        controllers.StorageController = StorageController;
        angular.module("ossApp").controller("ossApp.controllers.StorageController", StorageController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=DashboardController.js.map