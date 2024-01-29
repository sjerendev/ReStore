import { Api } from "./Api";

export class ExpiryApi {
    static client = Api.client('/api/Product');

    /* 
        LIST
    */
    static getExpiryProducts(){
        return this.client.get('/GetExpiryProducts');
    }
}