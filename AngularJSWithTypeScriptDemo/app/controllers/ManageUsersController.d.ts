/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
declare module ossApp.controllers {
    class ManageUsersController {
        $scope: any;
        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject: string[];
        constructor(NavbarService: ossApp.Interfaces.INavbarService, HttpService: ossApp.Interfaces.HttpService, $scope: any, $localStorage: any);
    }
}
