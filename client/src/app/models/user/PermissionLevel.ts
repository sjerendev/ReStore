export enum PermissionLevel
{
    None = 0, //For initial value

    EnableOrder = 1, //WebEnableOrder
    ShowPrice = 2, //WebShowPrice
    ShowAvailableQuantity = 4, //WebShowAvailableQuantity
    EnableInvoiceCopies = 8, //WebEnableInvoiceCopies
    EnableInventory = 16, //WebEnableInvoiceCopies
    EnablePortionPlanner = 32, //WebEnablePortionPlanner
    EnableStatistics = 64, //WebEnableStatistics

    //TODO New permissions needed creation in DB
    EnableBasket = 128,
    EnableFavoriteList = 256,
    EnableShareFavoriteList = 512,
    EnableSharePortionPlanner = 1024
}