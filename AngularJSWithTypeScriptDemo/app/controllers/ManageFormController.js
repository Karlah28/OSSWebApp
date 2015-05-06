/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var ManageFormController = (function () {
            function ManageFormController(NavbarService, HttpService, $scope, $localStorage, $location) {
                this.$scope = $scope;
                var baseUrl = "http://localhost:51941/api";
                $scope.title = "Manage Inventory Forms";
                $scope.forms = new Array();
                $scope.tempIndex = new Array();
                $scope.isItemEmpty = false;
                $scope.isCrateEmpty = false;
                //make call on page load
                angular.element(document).ready(function () {
                    var getUsersUrl = "/Inventory/ViewRequestInvForms";
                    //var getUsersUrl = "/Inventory/ViewItems";
                    HttpService.serverGet(baseUrl + getUsersUrl, function (results) {
                        $scope.forms = results;
                    });
                });
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
                    var x = $scope.tempIndex;
                    var methodUrl = "/Inventory/AprroveInvForm";
                    for (var i = 0; i < $scope.tempIndex.length; i++) {
                        var index = $scope.tempIndex[i];
                        var form = $scope.forms[index];
                        HttpService.serverPost(baseUrl + methodUrl, form, function (results, status) {
                            var x = results;
                            console.log('status->', status);
                            window.alert('Processed successgfully');
                            $location.path('/userAdministration');
                        });
                    }
                    HttpService.serverPost(baseUrl + methodUrl, $scope.TempProspects.Email, function (results) {
                        var x = results;
                    });
                };
                $scope.openCrateModal = function (index) {
                    $scope.crateModalData = [];
                    $scope.crateModalData = $scope.forms[index].RequestedCrates;
                    if ($scope.crateModalData.length === 0) {
                        $scope.isCrateEmpty = true;
                    }
                    else {
                        $scope.isCrateEmpty = false;
                    }
                };
                $scope.openItemModal = function (index) {
                    $scope.itemModalData = [];
                    $scope.itemModalData = $scope.forms[index].RequestedItems;
                    if ($scope.itemModalData.length === 0) {
                        $scope.isItemEmpty = true;
                    }
                    else {
                        $scope.isItemEmpty = false;
                    }
                };
            }
            ManageFormController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$localStorage',
                '$location'
            ];
            return ManageFormController;
        })();
        controllers.ManageFormController = ManageFormController;
        var UserForm = (function () {
            function UserForm() {
            }
            return UserForm;
        })();
        angular.module("ossApp").controller("ossApp.controllers.ManageFormController", ManageFormController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=ManageFormController.js.map