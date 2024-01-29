import { InventoryLine } from "./InventoryLine";

export class InventoryGroup {
    id: number;
    listId: number;
    name: string;
    sorting: number;
    created: Date;
    updated: Date;
    totalPrice: number;
    lines: InventoryLine[];

    constructor(){
        this.id = null;
        this.listId = null;
        this.name = null;
        this.sorting = null;
        this.created = null;
        this.updated = null;
        this.totalPrice = null;
        this.lines = [];
    }

    static fromApi(group: InventoryGroup) {
        return Object.assign(new InventoryGroup(), group);
    }
}