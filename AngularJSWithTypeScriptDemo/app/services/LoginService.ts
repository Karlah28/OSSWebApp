/// <reference path="../interfaces/interfaces.ts" />
module ossApp.Services {

    export class LoginService {
        loggedIn: boolean;
        admin: boolean;
        

        public login = (isAdmin: boolean) => {
            var self = this;
            self.loggedIn = true;
            self.admin = isAdmin;
        };

        logout = () => {
            var self = this;
            self.loggedIn = false;
            self.admin = false;
        };

        isLogged = () => {
            var self = this;
            var response = {
                isLogged:self.loggedIn,
                isAdmin: self.admin
            };
            return response;
        };


    }
    angular.module("ossApp").service("ossApp.Services.LoginService", LoginService);
}  