import { Api } from "./Api";

export class ProductApi {
    static client = Api.client('/api/product');

    static getDepositProducts() {
        return this.client.get('/GetDepositProducts');
    }

    /* 
        Units
     */
    static getAllUnits() {
        return this.client.get('/GetUnits');
    }

    static getAllCategories() {
        return this.client.get('/GetProductCategories');
    }
    static getAlsoBoughtProducts(productId: string) {
        return this.client.get('/GetAlsoBoughtProducts/' + productId);
    }
    static getProduct(id: string) {
        let openShopParam = window.location.pathname.indexOf('sortiment') >= 0 ? '?openShop=true': '';
        return this.client.get('/GetProduct/' + id + openShopParam);
    }
    static getVendorProducts(purchaseDate: Date) {
        return this.client.get('/GetVendorProducts', {
            params: { purchaseDate: purchaseDate }
        });
    }
    static getProducts(productIds: string[]) {
        return this.client.post('/GetProducts', 
        {
            productIds: productIds
        });
    }
}