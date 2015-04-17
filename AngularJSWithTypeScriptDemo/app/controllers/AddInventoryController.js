/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var AddInventoryController = (function () {
            function AddInventoryController(NavbarService, HttpService, 
                //LoginService: ossApp.Services.LoginService,
                $scope) {
                //$scope.isLoggedIn = LoginService.isLogged();
                this.$scope = $scope;
            }
            AddInventoryController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
            ];
            return AddInventoryController;
        })();
        controllers.AddInventoryController = AddInventoryController;
        angular.module("ossApp").controller("ossApp.controllers.AddInventoryController", AddInventoryController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=AddInventoryController.js.map