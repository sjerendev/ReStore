import { CampaignPlanningLineVM } from "./CampaignPlanningLineVM";

export class CampaignPlanningVM {
    code: string;
    description: string;
    active: boolean;
    exported: boolean;
    purchaseStartingDate: Date;
    purchaseEndingDate: Date;
    salesStartingDate: Date;
    salesEndingDate: Date;
    campaignPlaningLines: CampaignPlanningLineVM[];
    waitingForVendor: number;
    static fromApi(item: CampaignPlanningVM) {
        return Object.assign(new CampaignPlanningVM(), item);
    }
}
