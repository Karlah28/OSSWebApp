declare module ossApp.Interfaces {
    interface INavbarService {
        getPlayList: () => Array<ITrack>;
    }
    interface ITrack {
        title: string;
        artist: string;
        rating: number;
    }
    interface RegisteredUser {
        userName: string;
        password: string;
    }
    interface NewUser {
        username: string;
        password: string;
        organization: string;
        phoneNumber: number;
        DOB: string;
    }
    interface HttpService {
        serverGet(url: string, callback: (data: any, status: any) => void): void;
        serverPost(url: string, stratParams: any, callback: (data: any, status: any) => void): void;
    }
    interface IItem {
        status: number;
        location: string;
        project: string;
        quantity: number;
        epcDate: any;
    }
    interface ICrate {
        id: string;
        location: string;
        items: Array<IItem>;
    }
}
