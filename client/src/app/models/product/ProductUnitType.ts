export class ProductUnitType {
    name: string;
    description: string;
    weighed: string;

    constructor(){
        this.name = null;
        this.description = null;
        this.weighed = null;
    }

    static fromApi(unit: ProductUnitType) {
        return Object.assign(new ProductUnitType(), unit);
    }
}