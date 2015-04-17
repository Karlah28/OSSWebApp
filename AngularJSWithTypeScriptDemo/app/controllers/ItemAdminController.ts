module ossApp.controllers {
    export class UserAdminController {
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


            $scope.title = "Inventory Administration";
        }

    }
    angular.module("ossApp").controller("ossApp.controllers.UserAdminController", UserAdminController);
}  