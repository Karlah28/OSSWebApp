/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var StorageController = (function () {
            function StorageController(NavbarService, HttpService, $scope) {
                //var favorites: Array<ossApp.Interfaces.ITrack>;
                //this.NavbarService = NavbarService;
                this.$scope = $scope;
                //$scope.cratesList: Array<ossApp.Interfaces.Item>;
                $scope.itemArray = [];
                $scope.title = "Storage Management";
                $scope.getCrates = function () {
                    //$scope.crates = cratesList;
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