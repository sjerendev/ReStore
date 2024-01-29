import { ProductVM } from "models/product/ProductVM";
import { SearchFilters } from "./SearchFilters";

export class SearchOutput {
	totalProducts: number = 0;
	products: ProductVM[] = [];
	popularProducts: ProductVM[] = [];
	filters: SearchFilters = null;

	static fromApi(item: SearchOutput) {
        return Object.assign(new SearchOutput(), item);
    }
}