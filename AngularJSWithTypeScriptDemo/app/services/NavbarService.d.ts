/// <reference path="../interfaces/interfaces.d.ts" />
declare module ossApp.Services {
    class NavbarService implements ossApp.Interfaces.INavbarService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        getPlayList: () => Interfaces.ITrack[];
    }
}
