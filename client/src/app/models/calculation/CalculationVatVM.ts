export class CalculationVatVM {
    calculationVatId: number;
    description: string;
    vat: number;
    static fromApi(item: CalculationVatVM) {
        return Object.assign(new CalculationVatVM(), item);
    }
}
