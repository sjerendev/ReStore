export class ProductStatisticsFilter {
    fromDate: Date;
    toDate: Date;
    constructor(fromDate: Date = null, toDate: Date = null) {
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}