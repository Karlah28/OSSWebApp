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
                $scope.serverUrl = "http://localhost:51941/api";
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                //these three variables contain the populating items
                $scope.QuantityNeeded = 0;
                $scope.currentProject = {};
                $scope.checkedBuilder = [];
                $scope.allItems = [];
                $scope.allCrates = [];
                $scope.allProjects = [];
                $scope.itemArray = []; //array to contain all checkboxed items
                $scope.currentCrate = {};
                //$scope.cratesList: Array<ossApp.Interfaces.Item>;
                $scope.title = "Storage Management";
                //BE SURE AND CONVERT ITEM STATUSES TO A PROPER STRING TO DISPLAY WHEN YOU IMPORT THEM
                /*
                $scope.allItems = [
                    { ItemName: "this", ItemQuantity: 4, EPCData: "l;aksjdflkj21" },
                    { ItemName: "this2", ItemQuantity: 20, EPCData: "al;sjoiwer" }
                ];
                $scope.allCrates = [
                    { CrateID: 1, CrateStatus: 1, ItemList: [{ Label: "something", Quantity: 4 }, { Label: "something2", Quantity: 10 }, { Label: "something3", Quantity: 99 }] },
                    { CrateID: 2, CrateStatus: 2, ItemList: [{ Label: "something2", Quantity: 2 }, { Label: "something3", Quantity: 3 }, { Label: "something4", Quantity: 4 }] }
                ]//1 for status is available -1 for not available
                $scope.allProjects = [
                    { ProjectName: "myname", Description: "some stuff about the project that might be too long", ItemList: ["this", "that", "the other thing"], QuantityNeeded: [1, 2, 3] },
                    { ProjectName: "myname2", Description: "some stuff about the project that might be too long 2", ItemList: ["this2", "that2", "the other thing2"], QuantityNeeded: [2, 3, 4] }
                ];
                
                $scope.newItems = [
                    { EPCData: { EPC: "3B", Timestamp: "1984-11-24T00:00:00", ObjectType: 0 } },
                    { EPCData: { EPC: "3C", Timestamp: "1984-11-24T00:00:00", ObjectType: 0 } },
                    { EPCData: { EPC: "3D", Timestamp: "1984-11-24T00:00:00", ObjectType: 0 } },
                    { EPCData: { EPC: "3E", Timestamp: "1984-11-24T00:00:00", ObjectType: 0 } },
                    { EPCData: { EPC: "3F", Timestamp: "1984-11-24T00:00:00", ObjectType: 0 } }
                ];
                */
                //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>OSS CALLS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                $scope.deleteItems = function (items) {
                    var urlController = "/Inventory/DeleteItem";
                    for (var i = 0; i < items.length; i++) {
                        HttpService.serverPost($scope.serverUrl + urlController, items[i].EPCData.EPC, function (response) {
                            var x = response;
                        });
                    }
                };
                $scope.deleteCrates = function (crates) {
                    var urlController = "/Inventory/DeleteCrate";
                    for (var i = 0; i < crates.length; i++) {
                        HttpService.serverPost($scope.serverUrl + urlController, { CrateEPC: crates[i].EPCData.EPC, DeleteItems: true }, function (response) {
                            var x = response;
                        });
                    }
                };
                $scope.deleteProjects = function (projects) {
                    var urlController = "/Inventory/DeleteProject";
                    for (var i = 0; i < projects.length; i++) {
                        HttpService.serverPost($scope.serverUrl + urlController, projects[i].ProjectName, function (response) {
                            var x = response;
                        });
                    }
                };
                $scope.addItems = function (items) {
                    //this function is unfinished
                    var urlController = "/Inventory/AddItem";
                    for (var i = 0; i < items.length; i++) {
                        items[i].InventoryType = 0;
                        items[i].ObjectType = 0;
                        items[i].ItemLocation = "";
                        if (!items[i].ItemProject) {
                            items[i].ItemProject = null;
                        }
                        if (!items[i].CrateID) {
                            items[i].CrateID = -1;
                        }
                        HttpService.serverPost($scope.serverUrl + urlController, items[i], function (response) {
                            var x = response;
                        });
                    }
                };
                $scope.addCrates = function (crates) {
                    var urlController = "/Inventory/AddCrate";
                    for (var i = 0; i < crates.length; i++) {
                        HttpService.serverPost($scope.serverUrl + urlController, crates[i], function (response) {
                            var x = response;
                        });
                    }
                };
                $scope.addProject = function (project, nameQuanObjectList) {
                    var urlController = "/Inventory/AddProject";
                    project.ItemList = [];
                    project.QuantityNeeded = [];
                    project.InventoryType = 0;
                    project.ObjectType = 0;
                    for (var i = 0; i < nameQuanObjectList.length; i++) {
                        project.ItemList.push(nameQuanObjectList[i].ItemName);
                        project.QuantityNeeded.push(parseInt(nameQuanObjectList[i].QuantityNeeded));
                    }
                    HttpService.serverPost($scope.serverUrl + urlController, project, function (response) {
                        var x = response;
                    });
                };
                $scope.editItems = function (items) {
                    var urlController = "/Inventory/EditItem";
                    for (var i = 0; i < items.length; i++) {
                        HttpService.serverPost($scope.serverUrl + urlController, items[i], function (response) {
                            var x = response;
                        });
                    }
                };
                $scope.editCrates = function (crates) {
                    var urlController = "/Inventory/EditCrate";
                    for (var i = 0; i < crates.length; i++) {
                        HttpService.serverPost($scope.serverUrl + urlController, crates[i], function (response) {
                            var x = response;
                        });
                    }
                };
                $scope.editCrateItems = function (items, crate) {
                    crate.ItemList = items;
                    var urlController = "/Inventory/EditCrate";
                    HttpService.serverPost($scope.serverUrl + urlController, crate, function (response) {
                        var x = response;
                    });
                };
                $scope.setCurrentCrate = function (crate) {
                    $scope.currentCrate = crate;
                };
                $scope.editProjectItems = function (nameQuanObjectList, project) {
                    project.ItemList = [];
                    project.QuantityNeeded = [];
                    for (var i = 0; i < nameQuanObjectList.length; i++) {
                        project.ItemList.push(nameQuanObjectList[i].ItemName);
                        project.QuantityNeeded.push(parseInt(nameQuanObjectList[i].QuantityNeeded));
                    }
                    var urlController = "/Inventory/EditProject";
                    HttpService.serverPost($scope.serverUrl + urlController, project, function (response) {
                        var x = response;
                    });
                };
                $scope.editProject = function (project) {
                    var urlController = "/Inventory/EditProject";
                    HttpService.serverPost($scope.serverUrl + urlController, project, function (response) {
                        var x = response;
                    });
                };
                $scope.setCurrentProject = function (project) {
                    $scope.currentProject = project;
                };
                $scope.newItems = [];
                $scope.getNewInventory = function () {
                    var urlController = "/Inventory/ViewEPCs";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        $scope.newItems = [];
                        for (var i = 0; i < response.length; i++) {
                            $scope.newItems.push(response[i]);
                        }
                    });
                };
                $scope.getItems = function () {
                    //this is the Route specified in the server's controllers 
                    var urlController = "/Inventory/ViewItems";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        $scope.allItems = [];
                        for (var i = 0; i < response.length; i++) {
                            $scope.allItems.push(response[i]);
                        }
                    });
                };
                $scope.getCrates = function () {
                    var urlController = "/Inventory/ViewCrates";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        $scope.allCrates = [];
                        for (var i = 0; i < response.length; i++) {
                            $scope.allCrates.push(response[i]);
                        }
                    });
                };
                $scope.getProjects = function () {
                    //this is the Route specified in the server's controllers 
                    var urlController = "/Inventory/ViewProjects";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        $scope.allProjects = [];
                        for (var i = 0; i < response.length; i++) {
                            $scope.allProjects.push(response[i]);
                        }
                    });
                };
                //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>VARIOUS FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                //use splice for this function... also make it toggle
                //this function is used to toggle items being added to an array when their checkbox is checked
                $scope.forceReload = function (item) {
                    location.reload(true);
                };
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
                $scope.clearCheckedItems = function () {
                    $scope.checkedItems = [];
                };
                //checkbox toggler used for crates tab
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
                $scope.clearCheckedCrates = function () {
                    $scope.checkedCrates = [];
                };
                //checkbox toggler used for projects tab
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
                $scope.clearCheckedProjects = function () {
                    $scope.checkedProjects = [];
                };
                //used for the new items tab
                $scope.checkedNewItems = [];
                $scope.toggleNewItem = function (item) {
                    var tempItem = {};
                    if (item.EPC) {
                        tempItem = item;
                    }
                    var found = 0;
                    var index = 0;
                    for (var i = 0; i < $scope.checkedNewItems.length; i++) {
                        if ($scope.checkedNewItems[i] == item) {
                            found = 1;
                            index = i;
                        }
                    }
                    if (found == 1) {
                        $scope.checkedNewItems.splice(index, 1);
                    }
                    else {
                        $scope.checkedNewItems.push(item);
                    }
                };
                $scope.clearCheckedNewItems = function () {
                    $scope.checkedNewItems = [];
                };
                //used for checkboxes in modals.. checked stuff in modals will be stored in checkedBuilder
                $scope.toggleBuilder = function (item) {
                    var found = 0;
                    var index = 0;
                    for (var i = 0; i < $scope.checkedBuilder.length; i++) {
                        if ($scope.checkedBuilder[i] == item) {
                            found = 1;
                            index = i;
                        }
                    }
                    if (found == 1) {
                        $scope.checkedBuilder.splice(index, 1);
                    }
                    else {
                        $scope.checkedBuilder.push(item);
                    }
                };
                $scope.toggleBuilder = function (ItemName, QuantityNeeded) {
                    var found = 0;
                    var index = 0;
                    var tempObject = { ItemName: ItemName, QuantityNeeded: QuantityNeeded };
                    for (var i = 0; i < $scope.checkedBuilder.length; i++) {
                        if ($scope.checkedBuilder[i] == tempObject) {
                            found = 1;
                            index = i;
                        }
                    }
                    if (found == 1) {
                        $scope.checkedBuilder.splice(index, 1);
                    }
                    else {
                        $scope.checkedBuilder.push(tempObject);
                    }
                };
                //clears the checkedBuilder variable.. call it when you close a modal
                $scope.clearBuilder = function () {
                    $scope.checkedBuilder = [];
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
                $scope.clearAllChecks = function () {
                    $scope.checkedBuilder = [];
                    $scope.checkedItems = [];
                    $scope.checkedCrates = [];
                    $scope.checkedProjects = [];
                    $scope.checkedNewItems = [];
                    $scope.checkedBuilder = [];
                };
                $scope.modalItems = [];
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