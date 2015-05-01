/// <reference path="../interfaces/interfaces.ts" />

module ossApp.Services {


    export class HttpService implements ossApp.Interfaces.HttpService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        public serverGet(url: string, callback: (data: any, status: any) => void): void {
            console.log("URL -->", url);
            //this.httpService.get("http://localhost:51941/api/Inventory/ViewItems").
            this.httpService.get(url).
                success((data: any, status: any, headers: any, config: any) => {
                if (status === 200) {
                    callback(data, status);
                } else {
                    callback(data, status);
                }
            }).error((data: any, status: any, headers: any, config: any) => {
                console.log("error");
            });
        }

        public serverPost(url: string, data: any, callback: (data: any, status: any) => void): void {
            var self = this;

            self.httpService.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
            self.httpService.post(url, JSON.stringify(data))
                .success((data: any, status: any, headers: any, config: any) => {
                if (status === 200) {
                    callback(data, status);
                } else {
                    console.log("server call failed, Status - " + status.toString());
                    callback(data, status);
                }
            }).error((data: any, status: any, headers: any, config: any) => {
                callback(data, status);
            });
        }
    }
    angular.module("ossApp").service("ossApp.Services.HttpService", HttpService);
}  