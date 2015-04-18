/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var StorageController = (function () {
            function StorageController(NavbarService, HttpService, $scope) {
                //this is your local storage
                this.$scope = $scope;
                $scope.serverUrl = "192.168.1.107:51941";
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                $scope.allItems = [
                    { ItemName: 'Scissors', ItemQuantity: 25, gender: 'boy' },
                    { ItemName: 'Tables', ItemQuantity: 1, gender: 'girl' },
                    { ItemName: 'Pencils', ItemQuantity: 30, gender: 'girl' },
                    { ItemName: 'Shirts', ItemQuantity: 2, gender: 'girl' },
                    { ItemName: 'Notebooks', ItemQuantity: 32, gender: 'girl' }
                ];
                $scope.allCrates = [
                    { ItemName: 'Crate 1', ItemQuantity: 25, gender: 'boy' },
                    { ItemName: 'Crate 2', ItemQuantity: 1, gender: 'girl' },
                    { ItemName: 'Crate 3', ItemQuantity: 30, gender: 'girl' },
                    { ItemName: 'Crate 4', ItemQuantity: 2, gender: 'girl' },
                    { ItemName: 'Crate 5', ItemQuantity: 32, gender: 'girl' }
                ];
                $scope.allProjects = [
                    { ItemName: 'Engineering Saturday', ItemQuantity: 25, gender: 'boy' },
                    { ItemName: 'Outreach Sunday', ItemQuantity: 1, gender: 'girl' },
                    { ItemName: 'UTA Career Fair', ItemQuantity: 30, gender: 'girl' },
                ];
                //$scope.cratesList: Array<ossApp.Interfaces.Item>;
                $scope.itemArray = [];
                $scope.title = "Storage Management";
                $scope.getItems = function () {
                    //this is the Route specified in the server's controllers 
                    var urlController = "/InventoryController/ViewItems";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        $scope.allItems.push(JSON.parse(response));
                        //response is a variable that stores the data gotten from the server
                        //parse the response here
                        //Add it to local storage
                        //$localStorage.Item= //some trimmed item from the response
                    });
                    //create a request object
                    //$scope.crates = cratesList;
                    //pull items from db
                };
                $scope.sendRequest = function () {
                    window.alert("Request Successfully Sent");
                };
                //this adds an item to the array for the button to pass
                $scope.addItem = function (item) {
                    $scope.itemArray.push(item);
                    console.log($scope.itemArray);
                };
                $scope.removeItem = function (item) {
                    for (var i = 0; i < $scope.itemArray.length; i++) {
                        //ATTENTION MOTHER TRUCKER >>>> THIS IS IMPORTANT
                        //need this attribute to be made relevant ($scope.itemArray[i]. << something proper here
                        //also need to add functions for adding and removing crates to the list
                        if ($scope.itemArray[i].name == item.name) {
                            console.log("omg");
                        }
                    }
                    ;
                };
            }
            StorageController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope'
            ];
            return StorageController;
        })();
        controllers.StorageController = StorageController;
        angular.module("ossApp").controller("ossApp.controllers.StorageController", StorageController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=StorageController.js.map