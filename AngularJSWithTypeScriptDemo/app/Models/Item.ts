/// <reference path="../interfaces/interfaces.ts" />
module ossApp.Models {

    export class Item implements ossApp.Interfaces.IItem {
        //0 for checked in
        //1 for checked out
        status: number;
        location: string;
        project: string;
        quantity: number;
        epcDate: any;

        constructor(rawData: {}) {
            this.status = rawData[""];
        //    this.ProfitPerBar = data["ProfitPerBar"];
        //    this.Commission = data["Commission"];
        //    this.WinningTrades = data["WinningTrades"];
        //    this.LosingTrades = data["LosingTrades"];
        //    if (data["Trades"] !== null) {
        //        var tradeHolder = [];
        //        var trades = data["Trades"];
        //        trades.forEach(trade => {
        //            var t = new Trade(trade);
        //            tradeHolder.push(t);
        //        });
        //        this.Trades = tradeHolder;
        //    }
        //    this.BuyAlertCount = 0;
        //    this.SellAlertCount = 0;
        //    if (data["Alerts"] !== undefined || data["Alerts"] !== null || data["Alerts"].length !== 0) {
        //        for (var i = 0; i < data["Alerts"].length; i++) {
        //            if (data["Alerts"][i]["AlertType"] == 0) {
        //                this.BuyAlertCount += 1;
        //            } else if (data["Alerts"][i]["AlertType"] == 1) {

        //                this.SellAlertCount += 1;
        //            }
        //        }
        //    }
        //    switch (data["PerformanceResultType"]) {
        //        case 0:
        //            this.resultsType = "All Trades";
        //            break;
        //        case 1:
        //            this.resultsType = "Buy and Hold";
        //            break;
        //        default:
        //            this.resultsType = "Performance";
        //    }

        }



    }
}  