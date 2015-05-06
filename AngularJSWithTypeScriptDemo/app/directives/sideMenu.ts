/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module ossApp.directives {
    export function sideMenu($timeout): ng.IDirective {
        var timer;
        return {
            templateUrl: 'sideMenu.html',
            link: (scope: any, element, attrs) => {
                scope.$on("toggleAnimation", function (event, args) {
                    scope.broadcastedText = args;
                });

            }

        }
    }
    angular.module("ossApp").directive("ossApp.directives.sideMenu", sideMenu);
}    