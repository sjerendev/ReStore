import { FavoriteList } from 'models/favorites/FavoriteList';
import { FavoriteListAddProductVM } from 'models/favorites/FavoriteListAddProductVM';
import { FavoriteListLineVM } from 'models/favorites/FavoriteListLineVM';
import { Api } from './Api';

export class FavoriteApi {
    
    static client = Api.client('/api/FavoriteLists');

    /* 
        LIST
    */
    static getAllLists(productId?:string){
        let params = productId ? { productId: productId } : {};
        return this.client.get('/GetAll', {
            params: params
        });
    }
    static getFavoriteListLines(listId: number){
        return this.client.get('/GetFavoriteListLines/' + listId);
    }
    static sortFavoriteListLines(id: number, lines: FavoriteListLineVM[]) {
        return this.client.put('/SortFavoriteListLines/' + id, lines);
    }

    static addProduct(listId: number, productId: string, stdUnit: string, checkoutId: number) {
        var ajaxData = {
            listId: listId,
            productId: productId,
            stdUnit: stdUnit,
            checkoutId: checkoutId
        };
        return this.client.post('/AddProduct', ajaxData);
    }

    static addProducts(listId: number, products: FavoriteListAddProductVM[]) {
        var ajaxData = {
            listId: listId,
            products: products
        };
        return this.client.post('/AddProducts', ajaxData);
    }

    static createList(listName: string, shared: boolean) {
        return this.client.post('/CreateFavoriteList', { listName: listName, shared: shared});
    }

    static createListFromHistory(listName: string, shared: boolean, from: Date, to: Date) {
        return this.client.post('/CreateFavoriteListFromHistory', { 
            listName: listName, 
            shared: shared,
            from: from,
            to: to
        });
    }

    static deleteProductFromList(listId: number, productId: string){
        return this.client.delete('/DeleteProductFromList', { params: {id: listId, productId: productId}});
    }

    static replaceObsolete(oldId: string, newId: string){
        return this.client.post('/ReplaceObsolete', { oldId: oldId, newId: newId });
    }
    
    static updateList(list: FavoriteList) {
        return this.client.put('/UpdateFavoriteList', list);
    }
    
    static startStopSharing(list: FavoriteList) {
        return this.client.put('/StartStopSharingFavoriteList', list);
    }
    static copyList(list: FavoriteList) {
        return this.client.post('/CopyFavoriteList', list);
    }
    static createInventoryList(list: FavoriteList) {
        return this.client.post('/CreateInventoryList', list);
    }
    
    static deleteList(listId: number) {
        return this.client.delete('/DeleteFavoriteList/' + listId);
    }

    static searchNewProductsBySales(fromDate: Date, listId: number) {
        return this.client.get('/SearchNewProductsBySales', {
            params: { 
                fromDate: fromDate, 
                listId: listId
            }
        });
    }

    static searchNewProductsByQuery(query: string, listId: number) {
        return this.client.get('/SearchNewProductsByQuery', {
            params: { 
                query: query, 
                listId: listId
            }
        });
    }
}