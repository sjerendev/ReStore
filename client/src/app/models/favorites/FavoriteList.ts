import { ItemStatus } from "models/product/ItemStatus";

export class FavoriteList {
    id: number;
    listName: string;
    productExists: boolean;
    sorting: number;
    count: number;
    department: string;
    isShared: boolean;
    customerNo: string;
    productStatus: ItemStatus;
    saleBlocked: boolean;
    blocked: boolean;

    
    constructor(){
        this.id = null;
        this.listName = null;
        this.productExists = null;
        this.sorting = null;
        this.count = 0;
        this.department = null;
        this.isShared = null;
        this.customerNo = null;
        this.productStatus = null;
        this.saleBlocked = null;
        this.blocked = null;
    }

    static fromApi(list: FavoriteList) {
        return Object.assign(new FavoriteList(), list);
    }
}