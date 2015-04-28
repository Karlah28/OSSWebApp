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


            $scope.allItems = [{ ItemName: "this", ItemQuantity: 4 }];
            $scope.allCrates = [
                { CrateID: 1, CrateStatus: 1, ItemList: [{ Label: "something", Quantity: 4 }, { Label: "something2", Quantity: 10 }, { Label: "something3", Quantity: 99 }] }
            ]//1 for status is available -1 for not available
            $scope.allProjects = [
                { ProjectName: "myname", Description: "some stuff about the project that might be too long", ItemList: ["this", "that", "the other thing"], QuantityNeeded: [1, 2, 3] }
                ]

            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FUNCTIONS FOR POPULATION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
            $scope.addItem = (item) => {
                $scope.itemArray.push(item);
                console.log($scope.itemArray);
            };

            $scope.removeItem = (item) => {
                for (var i = 0; i < $scope.itemArray.length; i++) {
                    //ATTENTION MOTHER TRUCKER >>>> THIS IS IMPORTANT
                    //need this attribute to be made relevant ($scope.itemArray[i]. << something proper here
                    //also need to add functions for adding and removing crates to the list
                    if ($scope.itemArray[i].name == item.name) {
                        console.log("omg");
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