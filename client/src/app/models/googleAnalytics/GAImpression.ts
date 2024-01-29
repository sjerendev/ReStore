import { ProductVM } from "models/product/ProductVM";
import { GAProduct } from "./GAProduct";

export class GAImpression extends GAProduct {
    list: string;
    position: number;

    constructor(id: string, name: string, list: string, price?: number, brand?: string, category?: string, variant?: string, position?: number) {
        super(id, name, price, brand, category, variant);
        this.list = list;
        this.position = position;
    }

    public static ConvertFromProducts(products: ProductVM[], listName: string = '') {
        if (products && products.length) {

            return products.map((p: ProductVM, indx: number): GAImpression => {
                //let salesPrice = p.units.find(x => x.name == p.salesUnit).price;
                let gaImpression = new GAImpression(p.productId, p.description, listName, null, p.brand, '', '', indx);
                return gaImpression;
            })
        }
    }
}