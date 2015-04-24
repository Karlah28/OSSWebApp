module ossApp.controllers {
    export class ManageUsersController {
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

            $scope.prospects = new Array<ossApp.Interfaces.ProspectUser>();






        }
    }
    angular.module("ossApp").controller("ossApp.controllers.ManageUsersController", ManageUsersController);
} 