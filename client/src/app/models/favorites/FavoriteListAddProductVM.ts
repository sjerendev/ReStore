export class FavoriteListAddProductVM {
    listId: number;
    productId: string;
    stdUnit: string;
    checkoutId?: number;
    
    constructor(){
        this.listId = null;
        this.productId = null;
        this.stdUnit = null;
        this.checkoutId = null;
    }

    static fromApi(product: FavoriteListAddProductVM) {
        return Object.assign(new FavoriteListAddProductVM(), product);
    }
}