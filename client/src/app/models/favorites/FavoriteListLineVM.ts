export class FavoriteListLineVM {
    listNo: number;
    productId: string;
    stdUnit: string;
    sorting: number;
    description: string;
    brand: string;
    id: number;

    
    constructor(){
        this.listNo = null;
        this.productId = null;
        this.stdUnit = null;
        this.sorting = null;
        this.description = null;
        this.brand = null;
        this.id = null;
    }

    static fromApi(product: FavoriteListLineVM) {
        return Object.assign(new FavoriteListLineVM(), product);
    }
}