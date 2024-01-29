import { ProductVendor } from './ProductVendor';
import { ProductCategory } from 'models/product/ProductCategory';
import { FavoriteList } from 'models/favorites/FavoriteList';
export class SearchMenu {
    categories: ProductCategory[] = [];
    favoriteLists: FavoriteList[] = [];
    sharedFavoriteLists: FavoriteList[] = [];
    vendors: ProductVendor[] = [];
    brands: string[] = [];
    hasAgreement: boolean = false;
    
	static fromApi(item: SearchMenu) {
        return Object.assign(new SearchMenu(), item);
    }
}