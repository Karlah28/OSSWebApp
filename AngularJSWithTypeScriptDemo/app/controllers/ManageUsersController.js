var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var ManageUsersController = (function () {
            function ManageUsersController(NavbarService, HttpService, $scope, $localStorage) {
                this.$scope = $scope;
                var baseUrl = "http://localhost:51941/api";
                //make call on page load
                angular.element(document).ready(function () {
                    var getUsersUrl = "/Account/ViewUnregisteredUsers";
                    HttpService.serverGet(baseUrl + getUsersUrl, function (results) {
                        $localStorage.potentialUsers = results;
                        $scope.setProspects();
                    });
                });
                var prospects = $localStorage.potentialUsers;
                $scope.title = "User Management";
                $scope.prospects = new Array();
                $scope.TempProspects = new Array();
                $scope.setProspects = function () {
                    for (var i = 0; i < $localStorage.potentialUsers.length; i++) {
                        $scope.prospects.push($localStorage.potentialUsers[i]);
                    }
                };
                var tempIndex = new Array();
                $scope.addTemp = function (index) {
                    //check if item is repeated
                    //if (tempIndex.length != 0) {
                    //    if (tempIndex[index] !== undefined || tempIndex[index] !== null) {
                    //        tempIndex.splice(tempIndex[index], 1);
                    //    }
                    //}
                    //do something in array
                    //$scope.TempProspects.push(prospect);
                };
                $scope.removeTemp = function (index) {
                    //don't remove index if array is empty
                    //if (tempIndex.length != 0) {
                    //    if (tempIndex[index] !== undefined || tempIndex[index] !== null) {
                    //        tempIndex.splice(tempIndex[index], 1);
                    //    }
                    //}
                    //do something in array
                    //$scope.TempProspects.push(prospect);
                };
                //send approved users
                $scope.approve = function () {
                    //clear temp array
                    var x = $scope.TempProspects;
                    var methodUrl = "/Account/ViewUnregisteredUsers";
                    HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects, function (results) {
                        var x = results;
                    });
                };
                //send denied users
                $scope.deny = function () {
                    //clear temp array
                    var x = $scope.TempProspects;
                    var methodUrl = "/Account/something";
                    HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects, function (results) {
                        var x = results;
                    });
                };
            }
            ManageUsersController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$localStorage'
            ];
            return ManageUsersController;
        })();
        controllers.ManageUsersController = ManageUsersController;
        angular.module("ossApp").controller("ossApp.controllers.ManageUsersController", ManageUsersController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=ManageUsersController.js.map