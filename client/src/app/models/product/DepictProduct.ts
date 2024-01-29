export class DepictProduct {
    productId: string;
    amount: number;
    unit: string;
    orderLineUISource?: string;
    image?: string;
    brand?: string;
    title?: string;

    static fromApi(item: DepictProduct) {
        return Object.assign(new DepictProduct(), item);
    }
}