/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var ossApp;
(function (ossApp) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "ossApp.controllers.HomeController",
                templateUrl: "/app/views/landingPage.html"
            }).when("/login", {
                controller: "ossApp.controllers.LoginController",
                templateUrl: "/app/views/login.html"
            }).when("/editStorage", {
                controller: "ossApp.controllers.EditStorageController",
                templateUrl: "/app/views/editStorage.html"
            }).when("/userAdministration", {
                controller: "ossApp.controllers.ManageUsersController",
                templateUrl: "/app/views/manageUsers.html"
            }).when("/viewInventory", {
                controller: "ossApp.controllers.ViewInventoryController",
                templateUrl: "/app/views/viewInventory.html"
            }).when("/addInventory", {
                controller: "ossApp.controllers.AddInventoryController",
                templateUrl: "/app/views/addInventory.html"
            }).when("/manageInventoryForms", {
                controller: "ossApp.controllers.ManageFormController",
                templateUrl: "/app/views/manageInventoryForms.html"
            }).otherwise({
                redirectTo: '/home'
            });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    ossApp.Routes = Routes;
})(ossApp || (ossApp = {}));
//# sourceMappingURL=app.routes.js.map