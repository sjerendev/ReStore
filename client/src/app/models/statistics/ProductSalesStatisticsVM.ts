import { ProductVM } from "models/product/ProductVM";

export class ProductSalesStatisticsVM {
    ProductId: string;
    Quantity: number;
    product: ProductVM;
    static fromApi(item: ProductSalesStatisticsVM) {
        return Object.assign(new ProductSalesStatisticsVM(), item);
    }
}