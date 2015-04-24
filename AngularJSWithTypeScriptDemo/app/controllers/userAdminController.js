var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var UserManagementController = (function () {
            function UserManagementController(NavbarService, HttpService, $scope) {
                //var prospectUsers: Array<ossApp.Interfaces.ProspectUser>;
                this.$scope = $scope;
                $scope.prospects = new Array();
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