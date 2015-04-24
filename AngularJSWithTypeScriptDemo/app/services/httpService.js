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
                this.httpService.get("http://localhost:51941/api/Inventory/ViewItems").success(function (data, status, headers, config) {
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
                self.httpService.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                self.httpService.post(url, data).success(function (data, status, headers, config) {
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