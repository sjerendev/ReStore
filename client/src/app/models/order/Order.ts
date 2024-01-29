import { Orderline } from "models/order/Orderline";
import { OrderType } from "models/order/OrderType";

export class Order {
    orderNo: number;
    created: Date;
    ended: Date;
    active: boolean;
    notes: string | null;
    deliveryDate: Date;
    procureOrder: boolean | false;
    orderlines: Array<Orderline> | [];
    orderType: OrderType;
    delayedDelivery: boolean | false;
    totalPrice: number;
    ecoPct: number;
    agreementPct: number;
    totalDeposit: number;
    name: string;
    totalDiscount: number;
}

export class CompleteOrderVM {
    comments: string;
    externalDocumentNo: string;
}
