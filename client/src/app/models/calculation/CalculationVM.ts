import { CalculationType } from "./CalculationType";
import { CalculationLineVM } from "./CalculationLineVM";
import { CalculationVatVM } from "./CalculationVatVM";

export class CalculationVM {
    calculationId: number;
    name: string;
    customerNo: string;
    priceToCustomer: number;
    numberOfPortions: number;
    calculationType: CalculationType;
    vatId: number;
    totalCost: number;
    coverage: number;
    grossProfit: number;
    calculationLines: CalculationLineVM[];
    vatList: CalculationVatVM[];
    isShared: boolean;
    imageUrl: string;
    recipeDescription: string;
    static fromApi(item: CalculationVM) {
        return Object.assign(new CalculationVM(), item);
    }
}
