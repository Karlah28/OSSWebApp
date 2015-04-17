/// <reference path="../services/NavbarService.d.ts" />
/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
declare module ossApp.controllers {
    class StorageController {
        private $scope;
        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject: string[];
        constructor(NavbarService: ossApp.Interfaces.INavbarService, HttpService: ossApp.Interfaces.HttpService, $scope: any);
    }
}
