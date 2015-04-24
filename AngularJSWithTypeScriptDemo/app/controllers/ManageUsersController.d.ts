declare module ossApp.controllers {
    class ManageUsersController {
        $scope: any;
        NavbarService: ossApp.Interfaces.INavbarService;
        static $inject: string[];
        constructor(NavbarService: ossApp.Interfaces.INavbarService, HttpService: ossApp.Interfaces.HttpService, $scope: any);
    }
}
