export class DeliveryDates {
    deliveryDates: string[];
    pickupDates: string[];
    currentOrderPickup: boolean;
    
    
    constructor(){
        this.deliveryDates = [];
        this.pickupDates = [];
        this.currentOrderPickup = false;
    }

    static fromApi(deliveryDates: DeliveryDates) {
        var dates = Object.assign(new DeliveryDates(), deliveryDates);
        /*if (dates.deliveryDates) {
            dates.deliveryDates = dates.deliveryDates.map(x => new Date(x));
        }
        if (dates.pickupDates) {
            dates.pickupDates = dates.pickupDates.map(x => new Date(x));
        }*/
        return dates;
    }
}