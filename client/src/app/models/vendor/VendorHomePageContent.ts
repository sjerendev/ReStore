import { CampaignPlanningVM } from "models/campaignPlanning/CampaignPlanningVM";

export class VendorHomePageContent {
    campaignDeadlines: CampaignPlanningVM[];
    static fromApi(item: VendorHomePageContent) {
        return Object.assign(new VendorHomePageContent(), item);
    }
}
