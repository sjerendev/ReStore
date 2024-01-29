import { Order } from "models/order/Order";

export class PreviewOrder {
    orderId: number;
    itemCount: number;
    currentDeliveryDay: string;
    noOfTooLate: number;
    noOfDontExsist: number;
    noOfOutOfStock: number;
    noOfExpired: number;
    ecoPct: number;
    agreementPct: number;
    totalPrice: number;
    notes: string;
    name: string;

    constructor() {
        this.orderId = 0;
        this.itemCount = null;
        this.currentDeliveryDay = null;
        this.noOfTooLate = null;
        this.noOfDontExsist = null;
        this.noOfOutOfStock = null;
        this.noOfExpired = null;
        this.ecoPct = null;
        this.agreementPct = null;
        this.totalPrice = null;
        this.notes = null;
        this.name = null;
    }

    static fromApi(reviewOrder: PreviewOrder) {
        return Object.assign(new PreviewOrder(), reviewOrder);
    }
}