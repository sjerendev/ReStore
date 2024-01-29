import { PriceType } from "models/product/PriceType";

export class WebShopItemUnit {
    name: string | null;
    description: string | null;
    quantityPerUnit: number;
    barCode: string | null;
    price: number;
    stdUnit: boolean;
    weighed: boolean;
    priceType: PriceType;
}