var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var UserAdminController = (function () {
            function UserAdminController(NavbarService, HttpService, 
                //LoginService: ossApp.Services.LoginService,
                $scope, $location) {
                $scope.title = "Inventory Administration";
            }
            UserAdminController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$location'
            ];
            return UserAdminController;
        })();
        controllers.UserAdminController = UserAdminController;
        angular.module("ossApp").controller("ossApp.controllers.UserAdminController", UserAdminController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=ItemAdminController.js.map