import { CampaignPlanningLineStatus, CampaignPlanningLineWaitingForStatus } from "./CampaignPlanningLineStatus";

export class CampaignPlanningLineVM {
    campaignCode: string;
    vendorNo: string;
    vendorItemNo: string;
    newVendorItemNo: string;
    itemNo: string;
    description: string;
    unit: string;
    campaignUnitCost: number;
    campaignDiscountPct: number;
    campaignDiscountLcy: number;
    campaignUnitPrice: number;
    campaignPrice: number;
    status: CampaignPlanningLineStatus;
    purchaseStartingDate: Date;
    purchaseEndingDate: Date;
    salesStartingDate: Date;
    salesEndingDate: Date;
    waitingFor: CampaignPlanningLineWaitingForStatus;
    unitCost: number;
    constructor() {
        this.campaignCode = '';
        this.vendorNo = '';
        this.vendorItemNo = '';
        this.newVendorItemNo = '';
        this.itemNo = '';
        this.description = '';
        this.unit = '';
        this.campaignUnitCost = null;
        this.campaignDiscountPct = 0;
        this.campaignDiscountLcy = 0;
        this.campaignUnitPrice = null;
        this.campaignPrice = null;
        this.unitCost = null;
    }
    static fromApi(item: CampaignPlanningLineVM) {
        return Object.assign(new CampaignPlanningLineVM(), item);
    }
}
