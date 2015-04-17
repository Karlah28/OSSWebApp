/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class StorageController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            private $scope
            ) {
            //var favorites: Array<ossApp.Interfaces.ITrack>;
            //this.NavbarService = NavbarService;
            
            //$scope.cratesList: Array<ossApp.Interfaces.Item>;
            $scope.itemArray = [];
            $scope.title = "Storage Management";
            $scope.getCrates = () => {

                //$scope.crates = cratesList;

                       
            };
            //this adds an item to the array for the button to pass
            $scope.addItem = (item) => {
                $scope.itemArray.push(item);
                console.log($scope.itemArray);
            };

            $scope.removeItem = (item) => {
                for (var i = 0; i < $scope.itemArray.length; i++) {
                    if ($scope.itemArray[i].name == item.name) {
                        console.log("omg");
                    }
                };

            }
        }
    }

    angular.module("ossApp").controller("ossApp.controllers.StorageController", StorageController);
}