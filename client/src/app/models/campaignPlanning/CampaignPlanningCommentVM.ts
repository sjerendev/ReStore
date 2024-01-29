
export class CampaignPlanningCommentVM {
    campaignCode: string;
    vendorNo: string;
    vendorItemNo: string;
    comment: string;
    fromVendor: boolean;
    dateCreated: Date;
    dateCreatedLocal: Date;
    constructor() {
        this.campaignCode = '';
        this.vendorNo = '';
        this.vendorItemNo = '';
        this.comment = '';
        this.fromVendor = false;
    }
    static fromApi(comment: CampaignPlanningCommentVM) {
        return Object.assign(new CampaignPlanningCommentVM(), comment);
    }
}
