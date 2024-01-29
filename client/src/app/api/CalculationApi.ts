import { Api } from './Api';
import { CalculationVM } from 'models/calculation/CalculationVM';
import { CalculationLineVM } from 'models/calculation/CalculationLineVM';
import { Orderline } from 'models/order/Orderline';
import { CopyDetails } from 'models/calculation/CopyDetails';

export class CalculationApi {
    static client = Api.client('/api/Calculation');

    static GetCalculations() {
        return this.client.get('/GetCalculations');
    }
    static GetPossibleCalculations(id: number) {
        return this.client.get('/GetPossibleCalculations/' + id);
    }
    static GetCalculationById(id: number) {
        return this.client.get('/GetCalculationById/' + id);
    }
    static CopyCalculation(copyDetails: CopyDetails) {
        return this.client.get('/CopyCalculation/' + copyDetails.calculationId, {
            params: {
                deepCopying: copyDetails.deepCopying
            }
        });
    }
    static GetCalculationTreeStructure(id: number) {
        return this.client.get('/GetCalculationTreeStructure/' + id);
    }
    static ShareCalculation(id: number, share: boolean, deepSharing: boolean) {
        return this.client.get('/ShareCalculation/' + id, {
            params: {
                share: share,
                deepSharing: deepSharing
            }
        });
    }
    static UploadImage(calculationId: number, formData: FormData) {
        return this.client.post('/UploadImage/' + calculationId, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    }
    static CreateCalculation(calculation: CalculationVM) {
        return this.client.post('/CreateCalculation/', calculation);
    }
    static UpdateCalculation(calculation: CalculationVM) {
        return this.client.put('/UpdateCalculation/', calculation);
    }
    static UpdateCalculationCoverage(calculation: CalculationVM, grossProfit: boolean = false) {
        return this.client.put('/UpdateCalculationCoverage/', calculation, {
            params: {
                grossProfit: grossProfit
            }
        });
    }
    static DeleteCalculation(id: number) {
        return this.client.delete('/DeleteCalculation/' + id);
    }
    static AddProductLines(calculationId: number, productIds: string[]) {
        return this.client.post('/AddProductLines/' + calculationId, productIds);
    }
    static AddCustomerItem(calculationId: number, customerItem: CalculationLineVM) {
        return this.client.post('/AddCustomerItem/' + calculationId, customerItem);
    }
    static AddFromFavoriteLists(calculationId: number, favoriteLists: number[]) {
        return this.client.post('/AddFromFavoriteLists/' + calculationId, favoriteLists);
    }
    static AddCalculationLines(calculationId: number, calculationIds: string[]) {
        return this.client.post('/AddCalculationLines/' + calculationId, calculationIds);
    }
    static UpdateCalculationLine(calculationLine: CalculationLineVM) {
        return this.client.put('/UpdateCalculationLine/', calculationLine);
    }
    static DeleteCalculationLine(calculationLineId: number) {
        return this.client.delete('/DeleteCalculationLine/' + calculationLineId);
    }
    static GetConvertedOrderlines(id: number, multiplier: number) {
        return this.client.get('/GetConvertedOrderlines/' + id, {
            params: {
                multiplier: multiplier
            }
        });
    }
    static CreateOrderFromCalculation(calculationId: number, orderlines: Orderline[]) {
        return this.client.post('/CreateOrderFromCalculation/' + calculationId, orderlines);
    }
    static AddCalculationInActiveOrder(calculationId: number, orderlines: Orderline[]) {
        return this.client.post('/AddCalculationInActiveOrder/' + calculationId, orderlines);
    }

    static searchNewProductsByQuery(query: string, listId: number) {
        return this.client.get('/SearchNewProductsByQuery', {
            params: { 
                query: query, 
                listId: listId
            }
        });
    }

    static searchNewProductsBySales(fromDate: Date, listId: number) {
        return this.client.get('/SearchNewProductsBySales', {
            params: { 
                fromDate: fromDate,
                listId: listId
            }
        });
    }
}