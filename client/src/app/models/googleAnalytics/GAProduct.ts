import { BasketProduct } from "models/order/BasketProduct";
import { Orderline } from "models/order/Orderline";
import { UpdateOrderLineVM } from "models/order/UpdateOrderLineVM";
import { ProductVM } from "models/product/ProductVM";
import { GABase } from "./GABase";

export class GAProduct extends GABase {
    price: number;
    brand: string;
    category: string;
    variant: string;
    quantity: number;
    dimension1: string = 'SvenskCater';

    constructor(id: string, name: string, price: number = null, brand: string = '', category: string = '', variant: string = '', quantity: number = null, dimension1: string = 'SvenskCater') {
        super(id, name);
        //this.price = price;
        this.brand = brand;
        this.category = category;
        this.variant = variant;
        this.quantity = quantity;
        this.dimension1 = dimension1;
    }
    /** 
     * @params products {ProductVM[] | Orderline[]}
    */
    public static ConvertFromProducts(products: any[]) {
        if (products && products.length) {

            return products.map((p: any): GAProduct => {
                //let salesPrice = p.units.find(x => x.name == p.salesUnit || x.name == p.unit).price;
                let gaProduct = new GAProduct(p.productId, p.description, null, p.brand, '', '');
                return gaProduct;
            })
        }
    }

    public static ConvertFromBasketProducts(products: any[]) {
        if (products && products.length) {

            return products.map((p: any): GAProduct => {
                let gaProduct = new GAProduct(p.productId, p.description, null, '', '', '', p.amount);
                return gaProduct;
            })
        }
    }
    public static ConvertFromBasketUpdateOrderLines(products: UpdateOrderLineVM[]) {
        if (products && products.length) {

            return products.map((p: UpdateOrderLineVM): GAProduct => {
                let gaProduct = new GAProduct(p.productId, p.description, null, '', '', '', p.quantity);
                return gaProduct;
            })
        }
    }
    public static ConvertFromOrderlines(products: Orderline[], listName: string = '') {
        if (products && products.length) {

            return products.map((p: Orderline): GAProduct => {
                // let price = p.discountPrice > 0 ? p.discountPrice: p.price;
                let gaProduct = new GAProduct(p.productId, p.description, null, '', '', '', p.amount);

                return gaProduct;
            })
        }
    }
}