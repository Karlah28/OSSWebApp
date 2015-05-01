var ossApp;
(function (ossApp) {
    var controllers;
    (function (controllers) {
        var ViewInventoryController = (function () {
            function ViewInventoryController(NavbarService, HttpService, 
                //LoginService: ossApp.Services.LoginService,
                $scope, $location) {
                $scope.title = "Outreach Inventory";
                $scope.sendRequest = function () {
                    window.alert("Request Successfully Sent");
                };
                //TOGGLE FUNCTIONS============================================
                $scope.checkedItems = [];
                $scope.toggleItem = function (item) {
                    var found = 0;
                    var index = 0;
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
                $scope.toggleCrate = function (crate) {
                    var found = 0;
                    var index = 0;
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
                $scope.toggleProject = function (project) {
                    var found = 0;
                    var index = 0;
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
                $scope.modalItems = [];
                $scope.compileModalItems = function (itemList) {
                    $scope.modalItems = itemList;
                };
                $scope.compileModalItems = function (itemList, quantityList) {
                    $scope.modalItems = [];
                    for (var i = 0; i < itemList.length; i++) {
                        $scope.modalItems.push({ ItemName: itemList[i], Quantity: quantityList[i] });
                    }
                };
                //END MODAL ITEMS STUFF===================================
            }
            ViewInventoryController.$inject = [
                "ossApp.Services.NavbarService",
                'ossApp.Services.HttpService',
                '$scope',
                '$location'
            ];
            return ViewInventoryController;
        })();
        controllers.ViewInventoryController = ViewInventoryController;
        angular.module("ossApp").controller("ossApp.controllers.ViewInventoryController", ViewInventoryController);
    })(controllers = ossApp.controllers || (ossApp.controllers = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=ViewInventoryController.js.map