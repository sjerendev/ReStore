export class InventoryAutoListResultVM {
    listId: number = null;
    listName: string = null;
    created: boolean = null;
    added: number = null;
    updated: number = null;
    deleted: number = null;
    ignored: number = null;

    static fromApi(list: InventoryAutoListResultVM) {
        return Object.assign(new InventoryAutoListResultVM(), list);
    }
}