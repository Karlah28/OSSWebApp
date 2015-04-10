/// <reference path="../interfaces/interfaces.ts" />
module ossApp.Services {

    

    export class NavbarService implements ossApp.Interfaces.INavbarService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getPlayList = () => {
            //For the purpose of this demo I am returning the hard coded values, hoever in real world application
            //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
            
            var res: Array<ossApp.Interfaces.ITrack> = [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
            return res;
        }
    }
    angular.module("ossApp").service("ossApp.Services.NavbarService", NavbarService);
} 