export class CheckOutMissingRatingVM {
    CheckoutId: number;
    ProductId: string;
    SampleProductId: string;
    Description: string;
    CustomerName: string;
    Date: any;
    PostponeDate: any;

    static fromApi(model: CheckOutMissingRatingVM) {
        return Object.assign(new CheckOutMissingRatingVM(), model);
    }
}