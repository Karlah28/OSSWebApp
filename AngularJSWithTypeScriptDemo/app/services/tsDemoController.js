/// <reference path="playlistservice.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var TSDemoController = (function () {
        function TSDemoController(playListService) {
            this.favorites = this.playListService.getPlayList();
            this.playListService = playListService;
        }
        return TSDemoController;
    })();
    angularWithTS.TSDemoController = TSDemoController;
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=tsDemoController.js.map