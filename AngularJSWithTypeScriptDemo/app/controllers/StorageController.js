/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var StorageController = (function () {
            function StorageController(NavbarService, HttpService, $scope, $localStorage) {
                //this is your local storage
                this.$scope = $scope;
                $scope.serverUrl = "yourLocalHost.com/port";
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                //$scope.cratesList: Array<ossApp.Interfaces.Item>;
                $scope.itemArray = [];
                $scope.title = "Storage Management";
                $scope.getItems = function () {
                    //this is the Route specified in the server's controllers 
                    var urlController = "/ViewItems";
                    HttpService.serverGet($scope.serverUrl + urlController, function (response) {
                        //response is a variable that stores the data gotten from the server
                        //parse the response here
                        //Add it to local storage
                        //$localStorage.Item= //some trimmed item from the response
                    });
                    //create a request object
                    //$scope.crates = cratesList;
                    //pull items from db
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
                '$scope',
                '$localStorage'
            ];
            return StorageController;
        })();
        controllers.StorageController = StorageController;
        angular.module("ossApp").controller("ossApp.controllers.StorageController", StorageController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=StorageController.js.map