/// <reference path="../interfaces/interfaces.ts" />
var ossApp;
(function (ossApp) {
    var Services;
    (function (Services) {
        var HttpService = (function () {
            function HttpService($http) {
                this.httpService = $http;
            }
            HttpService.prototype.serverGet = function (url, callback) {
                console.log("URL -->", url);
                //this.httpService.get("http://localhost:51941/api/Inventory/ViewItems").
                this.httpService.get(url).success(function (data, status, headers, config) {
                    if (status === 200) {
                        callback(data, status);
                    }
                    else {
                        callback(data, status);
                    }
                }).error(function (data, status, headers, config) {
                    console.log("error");
                });
            };
            HttpService.prototype.serverPost = function (url, data, callback) {
                var self = this;
                console.log('url', url);
                self.httpService.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
                self.httpService.post(url, JSON.stringify(data)).success(function (data, status, headers, config) {
                    if (status === 200) {
                        callback(data, status);
                    }
                    else {
                        console.log("server call failed, Status - " + status.toString());
                        callback(data, status);
                    }
                }).error(function (data, status, headers, config) {
                    callback(data, status);
                });
            };
            HttpService.$inject = ["$http"];
            return HttpService;
        })();
        Services.HttpService = HttpService;
        angular.module("ossApp").service("ossApp.Services.HttpService", HttpService);
    })(Services = ossApp.Services || (ossApp.Services = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=HttpService.js.map