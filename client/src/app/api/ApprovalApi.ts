import axios from 'axios';
import { Api } from './Api';

export class ApprovalApi {
    static client = Api.client('/api/approval');
    
    static getWaitingForApproval(forLogin: boolean){
        return this.client.get('/WaitingForApproval?forLogin=' + forLogin);
    }
    
    static acceptApprovals(types: number[]){
        return this.client.post('/AcceptApprovals', { types: types });
    }
}