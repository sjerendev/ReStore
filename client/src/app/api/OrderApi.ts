import { BasketProduct } from 'models/order/BasketProduct';
import { Api } from './Api';
import { Order } from 'models/order/Order';

export class OrderApi {
    static client = Api.client('/api/Order/');

    static completeOrder(data) {
        return this.client.post('CompleteOrder', data);
    }

    static reviewOrder() {
        return this.client.get('ReviewOrder');
    }

    static updateOrderLine(data) {
        return this.client.post('UpdateOrderLine', data);
    }

    static replaceProduct(data) {
        return this.client.post('ReplaceProduct', data);
    }

    static emptyBasket(data) {
        return this.client.post('EmptyBasket?date=' + data);
    }

    static getOrders() {
        return this.client.get('GetNotSubmittedOrders');
    }
    static setActive(orderNo: number) {
        return this.client.post('SetActiveOrder/' + orderNo);
    }
    static createOrder(order: Order) {
        return this.client.put('CreateOrder', order);
    }
    static updateOrder(orderNo: number, order: Order) {
        return this.client.post('UpdateOrder/' + orderNo, order);
    }
    static deleteOrder(order: Order) {
        return this.client.delete('DeleteOrder/' + order.orderNo);
    }
    static addDiscountCode(orderNo: number, discountCode: string) {
        return this.client.post('AddDiscountCode/' + orderNo, null, {
            params: {
                discountCode: discountCode
            }
        });
    }
    static removeDiscountCode(orderNo: number, discountCode: string) {
        return this.client.delete('RemoveDiscountCode/' + orderNo, {
            params: {
                discountCode: discountCode
            }
        });
    }
    /* 
        LIST
    */
    static addProductToBasket(products: BasketProduct[]) {
        return this.client.post('AddToOrder', { input : products });
    }
}