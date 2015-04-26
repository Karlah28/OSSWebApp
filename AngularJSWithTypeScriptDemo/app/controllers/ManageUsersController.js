/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
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
                $scope.tempIndex = new Array();
                $scope.addTemp = function (value) {
                    //check if item is repeated
                    if ($scope.tempIndex.length > 0) {
                        //if element doesn't exist
                        if ($scope.tempIndex.indexOf(value) === -1) {
                            $scope.tempIndex.push(value);
                        }
                    }
                    else {
                        $scope.tempIndex.push(value);
                    }
                };
                $scope.removeTemp = function (value) {
                    //don't remove index if array is empty
                    if ($scope.tempIndex.length > 0) {
                        //if element exist
                        var index = $scope.tempIndex.indexOf(value);
                        if (index !== -1) {
                            //remove element
                            $scope.tempIndex.splice(index, 1);
                        }
                    }
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