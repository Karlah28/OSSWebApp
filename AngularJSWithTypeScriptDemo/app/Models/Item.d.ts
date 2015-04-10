/// <reference path="../interfaces/interfaces.d.ts" />
declare module ossApp.Models {
    class Item implements ossApp.Interfaces.IItem {
        status: number;
        location: string;
        project: string;
        quantity: number;
        epcDate: any;
        constructor(rawData: {});
    }
}
