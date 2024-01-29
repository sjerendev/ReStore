export class StockWarning
{
    productId: string;
    expiryRef: string;
    unit: string;
    stock: number;
    amount: number;
    expiryDate: Date | string | null;
    deliveryDate: Date | string;
    sellOutLineUnit: string;
}