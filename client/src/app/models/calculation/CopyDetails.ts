export class CopyDetails {
    calculationId: number;
    deepCopying: boolean;
    constructor(calculationId: number, deepCopying: boolean) {
        this.calculationId = calculationId;
        this.deepCopying = deepCopying;
      }
}
