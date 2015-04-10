/// <reference path="../services/playlistService.d.ts" />
/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
declare module angularWithTS.controllers {
    class TSDemoController {
        playListService: angularWithTS.Interfaces.IPlaylistService;
        static $inject: string[];
        constructor(playListService: angularWithTS.Interfaces.IPlaylistService);
        favorites: Array<angularWithTS.Interfaces.ITrack>;
        getFavourites: () => void;
    }
}
