/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var AddInventoryController = (function () {
            function AddInventoryController(NavbarService, HttpService, LoginService, $scope) {
                this.$scope = $scope;
                $scope.isLoggedIn = LoginService.isLogged();
            }
            AddInventoryController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                'ossApp.Services.LoginService',
                '$scope',
            ];
            return AddInventoryController;
        })();
        controllers.AddInventoryController = AddInventoryController;
        angular.module("ossApp").controller("ossApp.controllers.AddInventoryController", AddInventoryController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=AddInventoryController.js.map