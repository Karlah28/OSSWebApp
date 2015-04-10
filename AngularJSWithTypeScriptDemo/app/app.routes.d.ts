/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
declare module ossApp {
    class Routes {
        static $inject: string[];
        static configureRoutes($routeProvider: ng.route.IRouteProvider): void;
    }
}
