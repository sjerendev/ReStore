export enum PriceType {
    ListPrice = 0,  // No discounts of any kind just the default list price
    CustomerPrice = 1, // The price is from a pricelist
    FixedPrice = 2, // The price is a fixed price from a pricelist
    CampaignPrice = 3, // The price is from a campaign
    InvoiceDiscount = 4, // The price is from Invoice Discount
}