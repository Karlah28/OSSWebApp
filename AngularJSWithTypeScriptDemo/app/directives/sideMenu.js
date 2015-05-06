/// <reference path="../services/NavbarService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var ossApp;
(function (ossApp) {
    var directives;
    (function (directives) {
        function sideMenu($timeout) {
            var timer;
            return {
                templateUrl: 'sideMenu.html',
                link: function (scope, element, attrs) {
                    scope.$on("toggleAnimation", function (event, args) {
                        scope.broadcastedText = args;
                    });
                }
            };
        }
        directives.sideMenu = sideMenu;
        angular.module("ossApp").directive("ossApp.directives.sideMenu", sideMenu);
    })(directives = ossApp.directives || (ossApp.directives = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=sideMenu.js.map