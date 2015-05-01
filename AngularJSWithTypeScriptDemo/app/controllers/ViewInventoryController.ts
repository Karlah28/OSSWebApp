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

            $scope.title = "Outreach Inventory";

            $scope.sendRequest = () => {
                window.alert("Request Successfully Sent");
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