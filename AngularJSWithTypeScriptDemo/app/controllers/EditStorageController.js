/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var EditStorageController = (function () {
            function EditStorageController(NavbarService, HttpService, $scope) {
                //this is your local storage
                this.$scope = $scope;
                $scope.serverUrl = "192.168.1.107:51941/api";
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                //these three variables contain the populating items
                $scope.allItems = [];
                $scope.allCrates = [];
                $scope.allProjects = [];
                $scope.itemArray = []; //array to contain all checkboxed items
                //$scope.cratesList: Array<ossApp.Interfaces.Item>;
                $scope.title = "Storage Management";
                $scope.allItems = [
                    { ItemName: "this", ItemQuantity: 4, EPCData: "l;aksjdflkj21" },
                    { ItemName: "this2", ItemQuantity: 20, EPCData: "al;sjoiwer" }
                ];
                $scope.allCrates = [
                    { CrateID: 1, CrateStatus: 1, ItemList: [{ Label: "something", Quantity: 4 }, { Label: "something2", Quantity: 10 }, { Label: "something3", Quantity: 99 }] },
                    { CrateID: 2, CrateStatus: 2, ItemList: [{ Label: "something2", Quantity: 2 }, { Label: "something3", Quantity: 3 }, { Label: "something4", Quantity: 4 }] }
                ]; //1 for status is available -1 for not available
                $scope.allProjects = [
                    { ProjectName: "myname", Description: "some stuff about the project that might be too long", ItemList: ["this", "that", "the other thing"], QuantityNeeded: [1, 2, 3] },
                    { ProjectName: "myname2", Description: "some stuff about the project that might be too long 2", ItemList: ["this2", "that2", "the other thing2"], QuantityNeeded: [2, 3, 4] }
                ];
                //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FUNCTIONS FOR POPULATION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                $scope.getItems = function () {
                    console.log("bs");
                    //this is the Route specified in the server's controllers 
                    var urlController = "/InventoryController/ViewItems";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        for (var i = 0; i < response.length; i++) {
                            $scope.allItems.push(response[i]);
                        }
                    });
                };
                $scope.getCrates = function () {
                    var urlController = "/InventoryController/ViewCrates";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        for (var i = 0; i < response.length; i++) {
                            $scope.allCrates.push(response[i]);
                        }
                    });
                };
                $scope.getItems = function () {
                    console.log("bs");
                    //this is the Route specified in the server's controllers 
                    var urlController = "/InventoryController/ViewProjects";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        for (var i = 0; i < response.length; i++) {
                            $scope.allItems.push(response[i]);
                        }
                    });
                };
                //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>VARIOUS FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                //use splice for this function... also make it toggle
                //this function is used to toggle items being added to an array when their checkbox is checked
                $scope.checkedItems = [];
                $scope.toggleItem = function (item) {
                    var found = 0;
                    var index = 0;
                    for (var i = 0; i < $scope.checkedItems.length; i++) {
                        if ($scope.checkedItems[i] == item) {
                            found = 1;
                            index = i;
                        }
                    }
                    if (found == 1) {
                        $scope.checkedItems.splice(index, 1);
                    }
                    else {
                        $scope.checkedItems.push(item);
                    }
                };
                //checkbox toggler
                $scope.checkedCrates = [];
                $scope.toggleCrate = function (crate) {
                    var found = 0;
                    var index = 0;
                    for (var i = 0; i < $scope.checkedCrates.length; i++) {
                        if ($scope.checkedCrates[i] == crate) {
                            found = 1;
                            index = i;
                        }
                    }
                    if (found == 1) {
                        $scope.checkedCrates.splice(index, 1);
                    }
                    else {
                        $scope.checkedCrates.push(crate);
                    }
                };
                //checkbox toggler
                $scope.checkedProjects = [];
                $scope.toggleProject = function (project) {
                    var found = 0;
                    var index = 0;
                    for (var i = 0; i < $scope.checkedProjects.length; i++) {
                        if ($scope.checkedProjects[i] == project) {
                            found = 1;
                            index = i;
                        }
                    }
                    if (found == 1) {
                        $scope.checkedProjects.splice(index, 1);
                    }
                    else {
                        $scope.checkedProjects.push(project);
                    }
                };
                $scope.crateItems = " ";
                $scope.printItems = function (itemList) {
                    $scope.crateItems = "";
                    for (var i = 0; i < itemList.length; i++) {
                        if (i == itemList.length - 1) {
                            $scope.crateItems = $scope.crateItems + itemList[i].Label;
                        }
                        else {
                            $scope.crateItems = $scope.crateItems + itemList[i].Label + ", ";
                        }
                    }
                };
                $scope.compileModalItems = function (itemList) {
                    $scope.modalItems = itemList;
                };
                $scope.modalItems = [];
                $scope.compileProjectModalItems = function (project) {
                    $scope.modalItems = [];
                    for (var i = 0; i < project.ItemList.length; i++) {
                        $scope.modalItems.push({ label: project.ItemList[i], quantity: project.QuantityNeeded[i] });
                    }
                };
            }
            EditStorageController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope'
            ];
            return EditStorageController;
        })();
        controllers.EditStorageController = EditStorageController;
        angular.module("ossApp").controller("ossApp.controllers.EditStorageController", EditStorageController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=EditStorageController.js.map