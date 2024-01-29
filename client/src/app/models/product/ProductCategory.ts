import { ProductGroup } from "./ProductGroup";

export class ProductCategory {
    code: string;
    description: string;
    groups: ProductGroup[];
    imageNode: number;
    active: boolean;

    //amount is for shop only
    amount?: number;

    static fromApi(item: ProductCategory) {
        return Object.assign(new ProductCategory(), item);
    }
}