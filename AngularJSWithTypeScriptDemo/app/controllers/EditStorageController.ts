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
            /*$scope.allItems = [
            { ItemName: 'Scissors', ItemQuantity: 25, gender: 'boy' },
            { ItemName: 'Tables', ItemQuantity:1, gender:'girl' },
            { ItemName: 'Pencils', ItemQuantity: 30, gender: 'girl' },
            { ItemName: 'Shirts', ItemQuantity: 2, gender: 'girl' },
            { ItemName: 'Notebooks', ItemQuantity: 32, gender: 'girl' }
            ];
            */
            $scope.allItems = []

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
            $scope.getItems = () => {
                console.log("bs")
                //this is the Route specified in the server's controllers 
                var urlController = "/InventoryController/ViewItems";
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
                    //$scope.theItems.push(JSON.parse(response));
                    for (var i = 0; i < response.length; i++) {
                        $scope.allItems.push(response[i]);
                        //console.log($scope.allItems)
                    } 
                });

                       
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

    angular.module("ossApp").controller("ossApp.controllers.EditStorageController", EditStorageController);
}