module ossApp.controllers {
    export class ViewInventoryController {
        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject = [
            "ossApp.Services.NavbarService",
            'ossApp.Services.HttpService',
        //'ossApp.Services.LoginService',
            '$scope',
            '$location'
            //'Login'
        ];
        constructor(
            NavbarService: ossApp.Interfaces.INavbarService,
            HttpService: ossApp.Interfaces.HttpService,
            //LoginService: ossApp.Services.LoginService,
            $scope,
            $location
        //Login                                                
            ) {

            $scope.allItems = [];
            $scope.allCrates = [];
            $scope.allProjects = [];
            $scope.title = "Outreach Inventory";

            $scope.sendRequest = () => {
                window.alert("Request Successfully Sent");
            };
            //OSS CALLS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            $scope.serverUrl = "http://localhost:51941/api";


            $scope.request = (request, checkedItems, checkedCrates) => {
                var urlController = "/Inventory/RequestInvForm";
                if (!checkedItems) {
                    checkedItems = [];
                }
                if (!checkedCrates) {
                    checkedCrates = [];
                }
                request.RequestedCrates = checkedCrates;
                request.RequestedItems = checkedItems;
                request.InventoryType = 0;
                request.ObjectType = 0;
                request.CheckOutDate = request.CheckOutDate + "T19: 12:33.5289978 s- 05:00";
                request.ReturnDate = request.ReturnDate + "T19: 12:33.5289978 - 05:00";
                console.log(request.ReturnDate);
                HttpService.serverPost($scope.serverUrl + urlController, request,(response) => {
                    var x = response;
                });
            };

            $scope.getItems = () => {
                //this is the Route specified in the server's controllers 
                var urlController = "/Inventory/ViewItems";
                $scope.allItems = [];
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
                    for (var i = 0; i < response.length; i++) {
                        $scope.allItems.push(response[i]);
                    }
                });
            };
            $scope.getCrates = () => {
                var urlController = "/Inventory/ViewCrates";
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
                    $scope.allCrates = [];
                    for (var i = 0; i < response.length; i++) {
                        $scope.allCrates.push(response[i]);
                    }
                });
            };
            $scope.getProjects = () => {
                //this is the Route specified in the server's controllers 
                var urlController = "/Inventory/ViewProjects";
                HttpService.serverGet($scope.serverUrl + urlController,(response) => {
                    $scope.allProjects = [];
                    for (var i = 0; i < response.length; i++) {
                        $scope.allProjects.push(response[i]);
                    }
                    console.log($scope.allProjects);
                });
            };



            //TOGGLE FUNCTIONS============================================
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

            $scope.clearAll = () => {
                $scope.checkedCrates = [];
                $scope.checkedItems = [];
            };

            //MODAL ITEMS STUFF===============================================
            $scope.modalItems = []
            $scope.compileModalItems = (itemList) => {
                $scope.modalItems = itemList;
            };

            $scope.compileModalItems = (itemList, quantityList) => {
                $scope.modalItems = [];
                for (var i = 0; i < itemList.length; i++) {
                    $scope.modalItems.push({ ItemName : itemList[i], Quantity: quantityList[i]});
                }
            };
            //END MODAL ITEMS STUFF===================================
        }
    }
    angular.module("ossApp").controller("ossApp.controllers.ViewInventoryController", ViewInventoryController);
}  