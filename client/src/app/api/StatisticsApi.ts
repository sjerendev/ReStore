import { Api } from './Api';
import { ProductStatisticsFilter } from 'models/statistics/ProductStatisticsFilter';

export class StatisticsApi {
    static client = Api.client('/api/Statistics');

    static getByDates(productStatisticsFilter: ProductStatisticsFilter) {
        return this.client.get('/GetByDates', { params:  productStatisticsFilter });
    }
    static getByDatesExcel(productStatisticsFilter: ProductStatisticsFilter) {
        return '/api/Statistics/GetByDatesExcel/?fromDate=' + 
        productStatisticsFilter.fromDate + '&toDate=' + 
        productStatisticsFilter.toDate;
    }
}