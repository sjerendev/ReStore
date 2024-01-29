export class UpdateOrderLineVM {
    lineNo: number;
    productId: string;
    quantity: number;
    selectedUnit: string; // 
    deliveryDate?: string; // Convert to date?
    description?: string;
    depositLine?: boolean;

    constructor(lineNo: number, productId: string, quantity: number, selectedUnit: string, deliveryDate?: string, description?: string, depositLine?: boolean) {
        this.lineNo = lineNo;
        this.productId = productId;
        this.quantity = quantity;
        this.selectedUnit = selectedUnit;
        this.deliveryDate = deliveryDate;
        this.description = description;
        this.depositLine = depositLine;
    }
}