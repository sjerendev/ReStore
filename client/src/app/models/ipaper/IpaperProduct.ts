export class IpaperProduct {
    description: string;
    descriptionHtml: object;
    packageSize: number;
    pageIndex: number;
    price: number;
    productId: string;
    quantity: number;
    title: string;

    static fromApi(item: IpaperProduct) {
        return Object.assign(new IpaperProduct(), item);
    }
}



