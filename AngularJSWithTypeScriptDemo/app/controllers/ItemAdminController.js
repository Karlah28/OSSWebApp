var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var ViewInventoryController = (function () {
            function ViewInventoryController(NavbarService, HttpService, 
                //LoginService: ossApp.Services.LoginService,
                $scope, $location) {
                $scope.title = "Inventory Administration";
            }
            ViewInventoryController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$location'
            ];
            return ViewInventoryController;
        })();
        controllers.ViewInventoryController = ViewInventoryController;
        angular.module("ossApp").controller("ossApp.controllers.ViewInventoryController", ViewInventoryController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=ItemAdminController.js.map