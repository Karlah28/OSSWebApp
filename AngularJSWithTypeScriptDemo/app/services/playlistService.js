/// <reference path="../interfaces/interfaces.ts" />
var angularWithTS;
(function (angularWithTS) {
    var Services;
    (function (Services) {
        var PlayListService = (function () {
            function PlayListService($http) {
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
            PlayListService.$inject = ["$http"];
            return PlayListService;
        })();
        Services.PlayListService = PlayListService;
        angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
    })(Services = angularWithTS.Services || (angularWithTS.Services = {}));
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=playlistService.js.map