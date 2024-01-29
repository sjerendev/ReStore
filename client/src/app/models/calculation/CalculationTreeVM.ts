import { CalculationType } from "./CalculationType";
import { CalculationLineVM } from "./CalculationLineVM";
import { CalculationVatVM } from "./CalculationVatVM";
import { CalculationVM } from "./CalculationVM";

export class CalculationTreeVM extends CalculationVM {
    calculationTreeVMs: CalculationTreeVM[];
    
    static fromApi(item: CalculationTreeVM) {
        return Object.assign(new CalculationTreeVM(), item);
    }
    static toCalculationVM(item: CalculationTreeVM) {
        let calculationVM = new CalculationVM();
        calculationVM.calculationId = item.calculationId;
        calculationVM.calculationLines = item.calculationLines;
        calculationVM.calculationType = item.calculationType;
        calculationVM.coverage = item.coverage;
        calculationVM.customerNo = item.customerNo;
        calculationVM.isShared = item.isShared;
        calculationVM.name = item.name;
        calculationVM.numberOfPortions = item.numberOfPortions;
        calculationVM.priceToCustomer = item.priceToCustomer;
        calculationVM.totalCost = item.totalCost;
        calculationVM.vatId = item.vatId;
        calculationVM.vatList = item.vatList;
        return calculationVM;
    }
}
