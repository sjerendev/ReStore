
export class InventoryArchiveVM {
    id: number;
    name: string;
    created: Date;
    customerNo: Date;
    total: number;

    constructor(id: number = null){
        this.id = id;
        this.name = null;
        this.created = null;
        this.customerNo = null;
        this.total = null;
    }

    static fromApi(list: InventoryArchiveVM) {
        return Object.assign(new InventoryArchiveVM(), list);
    }
}