/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class ManageFormController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope',
            '$localStorage',
            '$location'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            private $scope,
            $localStorage,
            $location
            ) {

            var baseUrl = "http://localhost:51941/api";
            $scope.title = "Manage Inventory Forms";

            $scope.forms = new Array<UserForm>();
            $scope.tempIndex = new Array();
            $scope.isItemEmpty = false;
            $scope.isCrateEmpty = false;

            //make call on page load
            angular.element(document).ready(function () {
                var getUsersUrl = "/Inventory/ViewRequestInvForms";
                //var getUsersUrl = "/Inventory/ViewItems";
                HttpService.serverGet(baseUrl + getUsersUrl,(results) => {
                    $scope.forms = results;
                });
            });

            $scope.addTemp = (value: any) => {
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

            $scope.removeTemp = (value: any) => {
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
            $scope.deny = () => {
                //clear temp array
                var x = $scope.tempIndex;
                var methodUrl = "/Inventory/AprroveInvForm";
                for (var i = 0; i < $scope.tempIndex.length; i++) {
                    var index = $scope.tempIndex[i];
                    var form = $scope.forms[index];
                    HttpService.serverPost(baseUrl + methodUrl, form,(results, status) => {
                        window.alert('Processed successfully');
                        $scope.prospects.splice(index, 1);
                        $location.path('/manageInventoryForms');
                    });

                }
            };

            $scope.openCrateModal = (index) => {
                $scope.crateModalData = [];
                $scope.crateModalData = $scope.forms[index].RequestedCrates;
                if ($scope.crateModalData.length === 0) {
                    $scope.isCrateEmpty = true;
                }
                else {
                    $scope.isCrateEmpty = false;
                }
            };

            $scope.openItemModal = (index) => {
                $scope.itemModalData =[];
                $scope.itemModalData = $scope.forms[index].RequestedItems;
                if ($scope.itemModalData.length === 0) {
                    $scope.isItemEmpty = true;
                }
                else {
                    $scope.isItemEmpty = false;
                }
            };
        }
    }

    class UserForm {
        RegisteredUser: string;
        Requester: string;
        Organization: string;
        Reason: string;
        CheckOutDate: string;
        ReturnDate: string;
        RequestedCrates: any;
        RequestedItems: any;
    }

    angular.module("ossApp").controller("ossApp.controllers.ManageFormController", ManageFormController);
}    