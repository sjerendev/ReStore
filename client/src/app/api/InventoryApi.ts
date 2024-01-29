import { InventoryLine } from 'models/inventory/InventoryLine';
import { Api } from 'api/Api';
import { InventoryList } from 'models/inventory/InventoryList';
import { InventoryArchiveVM } from 'models/inventory/InventoryArchiveVM';

export class InventoryApi {
	static client = Api.client('/api/inventoryList');

    /* 
        LIST
    */
    static getAllLists(){
        return this.client.get('/GetInventoryLists');
    }

    static getListById(id: number) {
        return this.client.get('/GetInventoryListById/' + id);
    }

    static createList(name: string) {
        return this.client.post('/CreateInventoryList', { name: name });
    }

    static updateList(id: number, name: string) {
        return this.client.put('/UpdateInventoryList/' + id, { name: name });
    }

    static deleteList(id: number) {
        return this.client.delete('/deleteInventoryList/' + id);
    }

    static updatePricesOnList(id: number){
        return this.client.put('/updatePricesOnList/' + id);
    }
    static getArchiveList(){
        return this.client.get('/GetInventoryArchiveList');
    }
    static createInventoryArchive(inventoryArchive: InventoryArchiveVM) {
        return this.client.put('/CreateInventoryArchive', inventoryArchive);
    }
    static deleteInventoryArchive(id: number) {
        return this.client.delete('/DeleteInventoryArchive/' + id);
    }
    /*
    FAVORITE LIST
    */

    static createFavoriteList(id: number) {
        return this.client.post('/CreateFavoriteList/' + id);
    }

    /* 
        Group
    */
    static createGroup(listId: number, name: string) {
        return this.client.post('/CreateInventoryGroup', { 
            listId: listId, 
            name: name 
        });
    }

    static updateGroup(id: number, name:string, sorting: number) {
        return this.client.put('/UpdateInventoryListGroup/' + id, { 
            name: name,
            sorting: sorting
        });
    }

    static deleteGroup(id: number) {
        return this.client.delete('/DeleteInventoryListGroup/' + id);
    }

    /*
        Line
    */
    static createLine(listId: number, line: InventoryLine) {
        return this.client.post('/CreateInventoryListLine/' + listId, line);
    }

    static createLines(listId: number, lines: InventoryLine[]) {
        return this.client.post('/CreateInventoryListLines/' + listId, lines);
    }

    static updateLine(id: number, line: InventoryLine, forcePriceUpdate: boolean) {
        return this.client.put('/UpdateInventoryListLine/' + id + '/?forcePriceUpdate=' + forcePriceUpdate, line);
    }

    static updateLineSort(id: number, list: InventoryList) {
        return this.client.put('/UpdateInventoryListSort/' + id, list);
    }

    static deleteLine(id: number) {
        return this.client.delete('/DeleteInventoryListLine/' + id);
    }

    static resetLineToDefault(id: number){
        return this.client.post('/ResetLineToDefault/' + id);
    }

    /* Own Lines */
    static createOwnLine(listId: number, line: InventoryLine) {
        return this.client.post('/CreateInventoryListLineForNewProduct/' + listId, line);
    }

    static updateOwnLine(line: InventoryLine) {
        return this.client.put('/UpdateNewProductOnInventoryListLine/' + line.id, line);
    }

    /* Reset Lines Amount */
    static resetAmounts(listId: number) {
        return this.client.post('/ResetAmountOnAllLines/' + listId);
    }

    /* CSV List */
    static getUrlForExcel(listId: number) {
        return '/api/inventoryList/GetListAsExcel/' + listId;
    }

    /* Send Email */
    static sendListAsEmail(listId: number, emails: string[]) {
        return this.client.post('/SendList/' + listId, { emails: emails});
    }

    /*
        Orders
    */
    static getLinesByOrderDate(fromDate: string) {
        return this.client.get('/GetOrderLinesByDate?fromDate=' + fromDate);
    }
    static getSaleStatisticsLinesByDate(fromDate: string, listId: number) {
        return this.client.get('/GetSaleStatisticsLinesByDate?fromDate=' + fromDate + '&listId=' + listId);
    }

    /*
        FavoriteList
    */
    static addProductsFromFavoritelist(listId: number, favoriteListIds: number[], groupId?: number) {
        return this.client.post('/AddProductsByFavoritelists/', {
            listId: listId,
            favoriteListIds: favoriteListIds,
            groupId: groupId
        });
    }

    /* 
        Search
    */
    static search(query: string, listId: number) {
        return this.client.get('/Search', { 
            params: {
                query: query,
                listId: listId
            }
        });
    }

    /*
        Autolager
    */
    static autolager(fromDate: Date) {
        return this.client.post('/Autolager', fromDate);
    }
}