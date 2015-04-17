module ossApp.controllers {
    export class UserManagementController {
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

            $scope.allUsers = [{}];
        }


    }
    angular.module("ossApp").controller("ossApp.controllers.userAdminController", UserManagementController);
} 