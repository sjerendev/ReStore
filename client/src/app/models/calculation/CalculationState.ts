import { CalculationSearchSortBy } from "models/search/SearchSortBy";
import { CalculationVM } from "./CalculationVM";


export class CalculationState {
    list: CalculationVM[];
    selectedCalculation: CalculationVM;
    loading: boolean;
    sortBy: CalculationSearchSortBy;
    constructor() {
        this.list = [];
        this.selectedCalculation = new CalculationVM();
        this.loading = false;
        this.sortBy = CalculationSearchSortBy.Date;
    }
}
