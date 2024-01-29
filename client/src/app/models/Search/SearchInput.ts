import { SearchSortBy } from './SearchSortBy';
import { MarkingTypes } from "./MarkingTypes";

export class SearchInput {
	searchQuery: string = "";
	categoryId: string = null;
	groupId: string = null;
	page: number = 1;
	pageSize: number = 99;
	storageTypes: number[] = [];
	vendorIds: string[] = [];
	brandIds: string[] = [];
	favoriteListId: number = null;
	department: string = null;
	markings: MarkingTypes[] = [];
	sortBy: SearchSortBy = SearchSortBy.Description;
	skipPopular: boolean = false;
	skipFilters: boolean = false;
	openShop: boolean = false;
}