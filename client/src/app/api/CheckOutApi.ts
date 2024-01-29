import { Api } from './Api';

export class CheckOutApi {
    static client = Api.client('/api/Checkout/');

    static getCheckoutCampaigns(code: string) {
        return this.client.get('GetCheckoutCampaigns', {
            params: { code: code }
        })
    }

    static setRating(id: number, rating: number) {
        return this.client.post('SetRating', { id: id, rating: rating});
    }

    static setComment(id: number, comment: string){
        return this.client.post('SetComment', { id: id, comment: comment });
    }

    static declineRating(id: number) {
        return this.client.delete('DeclineRating', { params: { id: id}});
    }

    static declineCheckout(id: number) {
        return this.client.post('DeclineCheckout/'  + id);
    }
}