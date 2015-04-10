/// <reference path="../interfaces/interfaces.ts" />
var ossApp;
(function (ossApp) {
    var Services;
    (function (Services) {
        var NavbarService = (function () {
            function NavbarService($http) {
                this.getPlayList = function () {
                    //For the purpose of this demo I am returning the hard coded values, hoever in real world application
                    //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
                    var res = [
                        { title: "Numb", artist: "Linkin Park", rating: 5 },
                        { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                        { title: "Yellow", artist: "coldplay", rating: 4.5 },
                        { title: "Skyfall", artist: "Adele", rating: 4.5 }
                    ];
                    return res;
                };
                this.httpService = $http;
            }
            NavbarService.$inject = ["$http"];
            return NavbarService;
        })();
        Services.NavbarService = NavbarService;
        angular.module("ossApp").service("ossApp.Services.NavbarService", NavbarService);
    })(Services = ossApp.Services || (ossApp.Services = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=NavbarService.js.map