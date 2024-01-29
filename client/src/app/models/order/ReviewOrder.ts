import { Order } from "models/order/Order";

export class ReviewOrder {
    orderId: number;
    selectedDeliveryDay: string;
    pickupOrder: boolean;
    totalOrderPrice: number;
    totalEcoPct: number;
    totalAgreementPct: number;
    splitOrders: Array<Order>;
    depositOrder: Order;
    obsoleteProducts: boolean;
    blockedProducts: boolean;
    expiryProducts: boolean;
    unitRemovedProducts: boolean;
    discountCodes: string[];
    punchOutForm: string;

    constructor() {
        this.orderId = 0;
        this.selectedDeliveryDay = null;
        this.pickupOrder = null;
        this.totalOrderPrice = null;
        this.totalEcoPct = null;
        this.totalAgreementPct = null;
        this.splitOrders = [];
        this.depositOrder = null;
        this.obsoleteProducts;
        this.blockedProducts;
        this.expiryProducts;
        this.unitRemovedProducts = false;
        this.discountCodes = [];
        this.punchOutForm = null;
    }

    static fromApi(reviewOrder: ReviewOrder) {
        return Object.assign(new ReviewOrder(), reviewOrder);
    }
}