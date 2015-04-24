var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var ManageUsersController = (function () {
            function ManageUsersController(NavbarService, HttpService, $scope) {
                this.$scope = $scope;
                $scope.prospects = new Array();
            }
            ManageUsersController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope'
            ];
            return ManageUsersController;
        })();
        controllers.ManageUsersController = ManageUsersController;
        angular.module("ossApp").controller("ossApp.controllers.ManageUsersController", ManageUsersController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=ManageUsersController.js.map