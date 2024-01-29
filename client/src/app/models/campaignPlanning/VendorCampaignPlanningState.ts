import { ProductUnitType } from "models/product/ProductUnitType";
import { ProductVM } from "models/product/ProductVM";
import { CampaignPlanningVM } from "./CampaignPlanningVM";


export class VendorCampaignPlanningState {
    list: CampaignPlanningVM[] = [];
    selectedCampaign: CampaignPlanningVM = new CampaignPlanningVM();
    vendorProducts: ProductVM[] = [];
    units: ProductUnitType[] = [];
    loading: boolean = false;
}
