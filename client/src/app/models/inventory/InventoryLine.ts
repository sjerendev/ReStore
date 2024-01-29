import { Unit } from "models/product/Unit";
import { ItemStatus } from "models/product/ItemStatus";
import { ItemMarkings } from "models/product/ItemMarkings";

export class InventoryLine {
    id: number;
    listId: number;
    groupId: number;
    productId: string;
    amount: number;
    unit: string;
    units: Unit[];
    sorting: number;
    description: string;
    brand: string;
    postingGroup: string;
    pricePrUnit: number;
    created: Date;
    updated: Date;
    productInfoLink: string;
    supplierProductId: string;
    editedUnit: boolean;
    editedPrice: boolean;
    productStatus: ItemStatus;
    markings: ItemMarkings;

    _selected: boolean = false;

    constructor(){
        this.id = null;
        this.listId = null;        
        this.groupId = null;
        this.productId = null;
        this.amount = null;
        this.unit = null;
        this.units = null;
        this.sorting = null;
        this.description = null;
        this.brand = null;
        this.postingGroup = null;
        this.pricePrUnit = null;
        this.created = null;
        this.updated = null;
        this.productInfoLink = null;
        this.supplierProductId = null;
        this.editedUnit = null;
        this.editedPrice = null;
        this.productStatus = null;
        this.markings = null;
    }

    static fromApi(line: InventoryLine) {
        return Object.assign(new InventoryLine(), line);
    }
}