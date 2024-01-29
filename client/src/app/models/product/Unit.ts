import { PriceType } from "./PriceType";

export class Unit {
    name: string;
    description: string;
    quantityPerUnit: number;
    barCode: string;
    price: number;
    stdUnit: boolean;
    selected: boolean;
    lastBought: boolean;
    weighed: boolean;
    priceBeforeCampaign: number;
    priceType: PriceType;
    excludedFromSurcharge: boolean;
    orderingUnit: boolean;
    static fromApi(item: Unit) {
        return Object.assign(new Unit(), item);
    }
}