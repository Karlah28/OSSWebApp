/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
module ossApp {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/home", {
                controller: "ossApp.controllers.HomeController",
                templateUrl: "/app/views/landingPage.html"
                })
                .when("/login", {
                controller: "ossApp.controllers.LoginController",
                templateUrl: "/app/views/login.html"
                })
                .when("/storageManagement", {
                controller: "ossApp.controllers.StorageController",
                templateUrl: "/app/views/storageManagement.html"
            })
                .otherwise({
                redirectTo: '/home'
            });
                
           
        }
    }
}