export class ProductGroup {
    id: string = null;
    description: string = null;
    categoryCode: string = null;
    active: boolean = false;

    //amount is for shop only
    amount?: number = null;

    static fromApi(item: ProductGroup) {
        return Object.assign(new ProductGroup(), item);
    }
}