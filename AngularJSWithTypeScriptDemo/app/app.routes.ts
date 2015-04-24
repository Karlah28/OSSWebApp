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
                controller: "ossApp.controllers.EditStorageController",
                templateUrl: "/app/views/editStorageController.html"
                })
                .when("/userAdministration", {
                controller: "ossApp.controllers.UserAdminController",
                templateUrl: "/app/views/userAdministration.html"
                })
                .when("/itemAdministration", {
                controller: "ossApp.controllers.ViewInventoryController",
                templateUrl: "/app/views/viewInventory.html"
                })
                .when("/addInventory", {
                controller: "ossApp.controllers.AddInventoryController",
                templateUrl: "/app/views/addInventory.html"
            })

                .otherwise({
                redirectTo: '/home'
            });
                
           
        }
    }
}