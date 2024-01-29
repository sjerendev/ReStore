import { Api } from './Api';
import { CampaignPlanningLineVM } from 'models/campaignPlanning/CampaignPlanningLineVM';
import { CampaignPlanningCommentVM } from 'models/campaignPlanning/CampaignPlanningCommentVM';

export class VendorApi {
    static client = Api.client('/api/Vendor');

    static GetCampaignPlanningList() {
        return this.client.get('/GetCampaignPlanningList');
    }
    static GetCampaignPlanningById(id: number) {
        return this.client.get('/GetCampaignPlanningById/' + id);
    }

    static GetCampaignPlanningLine(id: number) {
        return this.client.get('/GetCampaignPlanningLine/' + id);
    }
    static CreateCampaignPlanningLine(campaignLine: CampaignPlanningLineVM) {
        return this.client.post('/CreateCampaignPlanningLine/', campaignLine);
    }
    static UpdateCampaignPlanningLine(campaignLine: CampaignPlanningLineVM) {
        return this.client.put('/UpdateCampaignPlanningLine/', campaignLine);
    }
    static DeleteCampaignPlanningLine(campaignLine: CampaignPlanningLineVM) {
        return this.client.delete('/DeleteCampaignPlanningLine/', {
            params: {
                campaignCode: campaignLine.campaignCode,
                vendorItemNo: campaignLine.vendorItemNo
            }
        });
    }
    static GetCampaignPlanningComments(campaignCode: string, vendorNo: string, vendorItemNo: string) {
        return this.client.get('/GetCampaignPlanningComments', {
            params: {
                campaignCode: campaignCode,
                vendorNo: vendorNo,
                vendorItemNo: vendorItemNo
            }
        });
    }
    static WriteComment(comment: CampaignPlanningCommentVM) {
        return this.client.put('/WriteComment', comment);
    }
    static GetHomePageContent() {
        return this.client.get('/GetHomePageContent');
    }
    static ChangeCampaignPlanningLineWaitingFor(campaignLines: CampaignPlanningLineVM[]) {
        return this.client.put('/ChangeCampaignPlanningLineWaitingFor/', campaignLines);
    }
}