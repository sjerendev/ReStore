import { CalculationType } from "./CalculationType";
import { ItemStatus } from "models/product/ItemStatus";
import { WebShopItemUnit } from "models/order/WebShopItemUnit";
import { ItemMarkings } from "models/product/ItemMarkings";
import { Unit } from "models/product/Unit";


export class CalculationLineVM {
    calculationLineId: number;
    name: string;
    calculationId: number;
    id: string;
    isItem: boolean;
    quantity: number;
    percentageWasted: number;
    price: number;
    calculationType: CalculationType;
    itemStatus: ItemStatus;
    supplierProductId: string;
    itemBrand: string;
    salesUnit: WebShopItemUnit;
    salesUnitName: string;
    itemDeleted: boolean;
    itemNetWeight: number;
    markings: ItemMarkings;
    units: Unit[];
    isCalculationAccessible: boolean;
    created: Date;
    isCustomerItem: boolean;
    editedPrice: boolean;
    updated: Date;
    static fromApi(item: CalculationLineVM) {
        return Object.assign(new CalculationLineVM(), item);
    }
}
