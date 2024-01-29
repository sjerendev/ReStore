import { InventorySlideTypes } from "./InventorySlideTypes";

export class InventoryModalSettings {
    activeSlide = 1;
    slide: InventorySlideTypes = InventorySlideTypes.dashboard;
    prefixedPeriod: number = null;
    searchQuery = '';
    hasSearchResult: boolean = false;
    //showSearch = false;
    //showOrder = false;
    //findMethod: null,
    //ordersVisible: true,
    //isAllSelected: false
}