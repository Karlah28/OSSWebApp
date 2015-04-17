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
            //'$localStorage'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            public $scope
        //$localStorage
            ) {

            //this is your local storage
            
            $scope.serverUrl = "yourLocalHost.com/port";
            
            //var favorites: Array<ossApp.Interfaces.ITrack>;
            //this.NavbarService = NavbarService;
            $scope.allItems = [
            { ItemName: 'John', ItemQuantity: 25, gender: 'boy' },
            { ItemName: 'Jessie', ItemQuantity:30, gender:'girl' },
            { ItemName: 'Johanna', ItemQuantity: 28, gender: 'girl' }];


            //$scope.cratesList: Array<ossApp.Interfaces.Item>;
            $scope.itemArray = [];
            $scope.title = "Storage Management";
            $scope.getItems = () => {
                //this is the Route specified in the server's controllers 
                var urlController = "/ViewItems";
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
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
            //this adds an item to the array for the button to pass
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
                };

            }
        }
    }

    angular.module("ossApp").controller("ossApp.controllers.StorageController", StorageController);
}