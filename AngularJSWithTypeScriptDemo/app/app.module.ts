/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
((): void=> {
    var app = angular.module("ossApp", ['ngRoute', 'ngStorage']);
    app.config(ossApp.Routes.configureRoutes);
})() 