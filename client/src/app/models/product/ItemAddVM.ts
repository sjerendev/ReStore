import { ProductVM } from './ProductVM';

export class ItemAddVM {
    product: ProductVM;
    amount: number;
    selectedUnit: string;
    uiSource: string;
    position: number;
    constructor(product: ProductVM, amount: number, selectedUnit: string, uiSource: string = null, position: number = null) {
        this.product = product;
        this.amount = amount;
        this.selectedUnit = selectedUnit;
        this.uiSource = uiSource;
        this.position = position;
    }
}