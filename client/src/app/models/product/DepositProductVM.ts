import { ProductVM } from './ProductVM';

export class DepositProductVM {
    product: ProductVM;
    quantity: number;

    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}