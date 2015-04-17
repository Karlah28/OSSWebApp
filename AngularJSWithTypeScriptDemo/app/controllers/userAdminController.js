var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var UserManagementController = (function () {
            function UserManagementController(NavbarService, HttpService, $scope) {
                this.$scope = $scope;
                $scope.allUsers = [{}];
            }
            UserManagementController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope'
            ];
            return UserManagementController;
        })();
        controllers.UserManagementController = UserManagementController;
        angular.module("ossApp").controller("ossApp.controllers.userAdminController", UserManagementController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=UserAdminController.js.map