/// <reference path="../interfaces/interfaces.d.ts" />
declare module angularWithTS.Services {
    class PlayListService implements angularWithTS.Interfaces.IPlaylistService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        getPlayList: () => Interfaces.ITrack[];
    }
}
