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
        }

    }
    angular.module("ossApp").controller("ossApp.controllers.ViewInventoryController", ViewInventoryController);
}  