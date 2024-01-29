import { InventoryGroup } from "./InventoryGroup";
import { InventoryLine } from "./InventoryLine";

export class InventoryList {
    id: number;
    name: string;
    created: Date;
    updated: Date;
    groups: InventoryGroup[];
    linesNotInGroup: InventoryLine[];
    autoList: boolean;
    totalValue: number;
    totalProducts: number;
    totalPriceLinesNotInGroup: number;

    _showOverlay: boolean = false;

    /* constructor(){
        this.id = null;
        this.name = null;
        this.created = null;
        this.updated = null;
        this.groups = [];
        this.linesNotInGroup = [];
        this.autoList = false;
        this.totalValue = null;
        this.totalProducts = null;
    } */
    constructor(id: number = null, groups: InventoryGroup[] = [], linesNotInGroup: InventoryLine[] = []){
        this.id = id;
        this.name = null;
        this.created = null;
        this.updated = null;
        this.groups = groups;
        this.linesNotInGroup = linesNotInGroup;
        this.autoList = false;
        this.totalValue = null;
        this.totalProducts = null;
        this.totalPriceLinesNotInGroup = null;
    }

    static fromApi(list: InventoryList) {
        return Object.assign(new InventoryList(), list);
    }
}