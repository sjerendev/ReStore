import { Api } from './Api';

export class PdfReportApi {
    static client = Api.client('/api/pdfReport');
    
    static getAlcoholReport(fromDate: Date, toDate: Date){
        return this.client.post('/GetAlcoholReport', {fromDate: fromDate, toDate: toDate}, {responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }

    static getFavoriteList(listId: number){
        return this.client.post('/GetFavoriteList/' + listId, null, {responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }
    static printTopN(topN: number){
        return this.client.post('/PrintTopN/', {topN: topN}, {responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }

    static getInventoryList(listId: number, countingsheet: boolean){
        return this.client.post('/GetInventoryList/' + listId + '?countingsheet=' + countingsheet, null, {responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }

    static printAllLists(countingSheets: boolean, listIds: number[]){
        return this.client.post('/PrintAllLists', { listIds: listIds, countingSheets: countingSheets }, { responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }

    static printInventoryArchive( archiveId: number){
        return this.client.post('/PrintInventoryArchive/' + archiveId, null, { responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }

    static printCalculations(calculationIds: number[]){
        return this.client.post('/PrintCalculations', { listIds: calculationIds }, { responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }

    static printCalculationRecipes(calculationIds: number[], numberOfPortions: number, showSubDescription: boolean = true){
        return this.client.post('/PrintCalculationRecipes', { listIds: calculationIds, numberOfPortions: numberOfPortions, showSubDescription: showSubDescription }, { responseType: 'arraybuffer', headers: { 'Content-Disposition': 'attachment; filename="file.pdf"'} });
    }
}