module ossApp.Interfaces {

    export interface INavbarService {
        getPlayList: () => Array<ITrack>;
    }

    export interface ITrack {
        title: string;
        artist: string;
        rating: number;
    }

    export interface RegisteredUser {
        userName: string;
        password: string;
    }

    export interface NewUser {
        username: string;
        password: string;
        organization: string;
        phoneNumber: number;
        DOB: string;

    }

    export interface HttpService {
        serverGet(url: string, callback: (data: any, status: any) => void): void;
        serverPost(url: string, stratParams: any, callback: (data: any, status: any) => void): void;
    }

    export interface IItem {
        status: number;
        location: string;
        project: string;
        quantity: number;
        epcDate: any;
    }

    export interface ICrate {
        id: string;
        location: string;
        items: Array<IItem>;
    }
}                                                             