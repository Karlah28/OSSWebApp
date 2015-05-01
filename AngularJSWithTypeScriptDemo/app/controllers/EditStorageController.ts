/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class EditStorageController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope'
            //'$localStorage'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            public $scope
            //$localStorage
            ) {

            //this is your local storage
            
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


            //BE SURE AND CONVERT ITEM STATUSES TO A PROPER STRING TO DISPLAY WHEN YOU IMPORT THEM
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
                { EPCData: "lkjaskdiouwerklj" },
                { EPCData: "l;kjsdlkjiowuerkmlx" },
                { EPCData: "i3141234lkjkl" }
            ];

            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>OSS CALLS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            $scope.addItems = (item) => {
                console.log("bs")
                //this is the Route specified in the server's controllers 
                console.log($scope.myItem);
                var urlController = "/InventoryController/AddItem";
                HttpService.serverPost($scope.serverUrl + urlController, item, (response) => {
                    var x = response;
                });
            };

  


            $scope.getItems = () => {
                console.log("bs")
                //this is the Route specified in the server's controllers 
                var urlController = "/InventoryController/ViewItems";
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
                    for (var i = 0; i < response.length; i++) {
                        $scope.allItems.push(response[i]);
                    } 
                });         
            };
            $scope.getCrates = () => {
                var urlController = "/InventoryController/ViewCrates";
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
                    for (var i = 0; i < response.length; i++) {
                        $scope.allCrates.push(response[i]);
                    }
                });
            };
            $scope.getItems = () => {
                console.log("bs")
                //this is the Route specified in the server's controllers 
                var urlController = "/InventoryController/ViewProjects";
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
                    for (var i = 0; i < response.length; i++) {
                        $scope.allItems.push(response[i]);
                    }
                });
            };

            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>VARIOUS FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            
            //use splice for this function... also make it toggle
            //this function is used to toggle items being added to an array when their checkbox is checked


            $scope.checkedItems = [];
            $scope.toggleItem = (item) => {
                var found = 0
                var index = 0
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

            //checkbox toggler used for crates tab
            $scope.checkedCrates = [];
            $scope.toggleCrate = (crate) => {
                var found = 0
                var index = 0
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


            //checkbox toggler used for projects tab
            $scope.checkedProjects = [];
            $scope.toggleProject = (project) => {
                var found = 0
                var index = 0
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

            //used for the new items tab
            $scope.checkedNewItems = [];
            $scope.toggleNewItem = (item) => {
                var found = 0
                var index = 0
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


            //used for checkboxes in modals
            $scope.checkedBuilder = [];
            $scope.toggleBuilder = (item) => {
                var found = 0
                var index = 0
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

            //clears the checkedBuilder variable.. call it when you close a modal
            $scope.clearBuilder = () => {
                $scope.checkedBuilder = [];
            };


            $scope.crateItems = " ";
            $scope.printItems = (itemList) => {
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
            
           
            $scope.compileModalItems = (itemList) => {
                $scope.modalItems = itemList;
            };

            $scope.modalItems = [];
            $scope.compileProjectModalItems = (project) => {
                $scope.modalItems = [];
                for (var i = 0; i < project.ItemList.length; i++) {
                    $scope.modalItems.push({label: project.ItemList[i], quantity: project.QuantityNeeded[i]});
                }
            };
        }
    }

    angular.module("ossApp").controller("ossApp.controllers.EditStorageController", EditStorageController);

}