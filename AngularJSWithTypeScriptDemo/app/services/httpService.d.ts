/// <reference path="../interfaces/interfaces.d.ts" />
declare module ossApp.Services {
    class HttpService implements ossApp.Interfaces.HttpService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        serverGet(url: string, callback: (data: any, status: any) => void): void;
        serverPost(url: string, data: any, callback: (data: any, status: any) => void): void;
    }
}
