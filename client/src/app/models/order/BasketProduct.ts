export class BasketProduct {
    amount: number;
    productId: string;
    description: string;
    unit: string;
    expiryRef: string;
    fromFavoriteList: boolean;
    checkoutId: number;
    list: string;
    depositLine?: boolean;
    orderlineUISource: string;
    searchPlacement: number;
    isFromSearch: boolean;
    image?: string;
    brand?: string;

    constructor(amount?, productId?, unit?){
        this.amount = null;
        this.productId = null;
        this.description = null;
        this.unit = null;
        this.expiryRef = null;
        this.fromFavoriteList = false;
        this.checkoutId = 0;
        this.list = null;
        this.image = null;
        this.brand = null;
    }

    static fromApi(product: BasketProduct) {
        return Object.assign(new BasketProduct(), product);
    }
}