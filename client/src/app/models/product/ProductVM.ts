import { Unit } from './Unit';
import { Expiry } from './Expiry';
import { ItemMarkings } from './ItemMarkings';
import { ItemStatus } from './ItemStatus';

export class ProductVM {
    AltProduct: ProductVM;
    campaignLinetext: string;
    campaignTypeName: string;
    basicUnit: string;
    productId: string;
    description: string;
    longDescription: string;
    brand: string;
    salesUnit: string;
    postingGroup: string;
    postingGroupName: string;
    units: Unit[];
    supplierCode: string;
    supplierName: string;
    supplierProductId: string;
    keywords: string;
    foodInfo: boolean;
    foodInfoRequired: boolean;
    productSheet: boolean;
    image: string;
    discontinued: boolean;
    deadlineMessage: string;
    orderable: boolean;
    onSale: boolean;
    onSaleUntil: string;
    isOnFavoriteList: boolean;
    inBasket: boolean;
    discontinuedText: string;
    altProductId: string;
    comment: string;
    supplierApproved: boolean;
    blocked: boolean;
    blockedByProductInfo: boolean;
    countryCode: string;
    country: string;
    favoriteSort: number;
    favoriteUnit: string;
    deposit: boolean;
    comparisonPrice: string;
    comparisonUnit: string;
    expiry: Expiry;
    stopTime: any;
    canBeDeliveredBy: any;
    saleBlocked: boolean;
    saleBlockedDate: any;
    obsoleteProduct: boolean;
    replacementLogId: number;
    leadTime: number;
    depositProduct: boolean;
    blockedByDeadline: boolean;
    localCreateDateTime: any;
    eligibleOrderDate: any;
    isPostingGroup: false;
    status: ItemStatus;
    stock: number;
    clearAmount: boolean;

    markings: ItemMarkings;
    
    addedAmount: number;
    surchargePct: number;
    leftAmountWithSurcharge: number;
    negotiatedCost: number;
    factorPriceKgPiece: number;
    centralPurchasePrice: number;

    static fromApi(item: ProductVM) {
        return Object.assign(new ProductVM(), item);
    }
}



