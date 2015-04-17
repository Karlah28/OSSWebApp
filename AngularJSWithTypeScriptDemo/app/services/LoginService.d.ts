/// <reference path="../interfaces/interfaces.d.ts" />
declare module ossApp.Services {
    class LoginService {
        loggedIn: boolean;
        admin: boolean;
        login: (isAdmin: boolean) => void;
        logout: () => void;
        isLogged: () => {
            isLogged: boolean;
            isAdmin: boolean;
        };
    }
}
