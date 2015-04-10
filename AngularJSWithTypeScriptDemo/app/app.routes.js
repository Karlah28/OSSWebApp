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
            }).when("/storageManagement", {
                controller: "ossApp.controllers.StorageController",
                templateUrl: "/app/views/storageManagement.html"
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