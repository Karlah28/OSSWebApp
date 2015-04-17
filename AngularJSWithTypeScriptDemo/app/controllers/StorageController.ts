/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.controllers {
    export class StorageController {

        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
            '$scope',
            '$localStorage'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            private $scope,
            $localStorage
            ) {

            //this is your local storage
            
            $scope.serverUrl = "yourLocalHost.com/port";
            
            //var favorites: Array<ossApp.Interfaces.ITrack>;
            //this.NavbarService = NavbarService;
            
            //$scope.cratesList: Array<ossApp.Interfaces.Item>;
            $scope.itemArray = [];
            $scope.title = "Storage Management";
            $scope.getCrates = () => {
                //this is the Route specified in the server's controllers 
                var urlController = "//ViewItems";
                HttpService.serverGet($scope.serverUrl+urlController,(response) => {
                    //parse the response here
                    //Add it to local storage
                    //$localStorage.Item= //some trimmed item from the response

                });
                //create a request object


                //$scope.crates = cratesList;

                //pull items from db


                       
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