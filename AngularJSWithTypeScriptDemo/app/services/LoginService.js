/// <reference path="../interfaces/interfaces.ts" />
var ossApp;
(function (ossApp) {
    var Services;
    (function (Services) {
        var LoginService = (function () {
            function LoginService() {
                var _this = this;
                this.login = function (isAdmin) {
                    var self = _this;
                    self.loggedIn = true;
                    self.admin = isAdmin;
                };
                this.logout = function () {
                    var self = _this;
                    self.loggedIn = false;
                    self.admin = false;
                };
                this.isLogged = function () {
                    var self = _this;
                    var response = {
                        isLogged: self.loggedIn,
                        isAdmin: self.admin
                    };
                    return response;
                };
            }
            return LoginService;
        })();
        Services.LoginService = LoginService;
        angular.module("ossApp").service("ossApp.Services.LoginService", LoginService);
    })(Services = ossApp.Services || (ossApp.Services = {}));
})(ossApp || (ossApp = {}));
//# sourceMappingURL=LoginService.js.map