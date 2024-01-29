export enum EventTypes {
  InventoryListUpdated = "inventory-list-updated",
  InventoryLineChangedGroup = "inventory-line-changed-group",
  InventoryListDeleted = "inventory-list-deleted",
  InventoryLineUpdated = "inventory-line-updated",
  InventoryLineAdded = "inventory-line-added",
  InventoryLineDeleted = "inventory-line-deleted",
  InventorySearchChanged = "inventory-search-changed",
  InventoryRouteChanged = "inventory-route-changed",
  InventoryReloadList = "inventory-reload-list",  
  InventoryGroupUpdated= "inventory-group-updated",
  InventoryReloadAllLists = "inventory-reload-all-lists",
  InventoryScrollToList = "inventory-scroll-to-list",

  //Modals
  InventoryModalProductOpen = "inventory-modal-product-open",
  InventoryModalProductClose = "inventory-modal-product-close",
  InventoryModalProductSelected = "inventory-modal-product-selected",
  InventoryModalFavoriteSelected = "inventory-modal-favorite-selected",
  InventoryModalOwnProductEditOpen = "inventory-modal-own-product-edit-open",
  InventoryModalOwnProductEditClose = "inventory-modal-own-product-edit-close",
  InventoryModalProductDeleteOpen = "inventory-modal-product-delete-open",
  InventoryModalProductDeleteClose = "inventory-modal-product-delete-close",
  InventoryModalEmailOpen = "inventory-modal-email-open",
  InventoryModalEmailClose = "inventory-modal-email-close",
  
  InventoryModalConfirmOpen = "inventory-modal-confirm-open",
  InventoryModalConfirmClose = "inventory-modal-confirm-close",
  InventoryModalAutolagerOpen = "inventory-modal-autolager-open",
  InventoryModalAutolagerClose = "inventory-modal-autolager-close",
  InventoryModalProductSortOpen = "inventory-modal-product-sort-open",
  InventoryModalProductSortClose = "inventory-modal-product-sort-close",
  InventoryArchiveDeleteModalClose = "inventory-archive-delete-modal-close",

  //Login
  LoginModalOpen = "login-modal-open",
  
  //DeliveryDate
  DeliveryDateModalOpen = "delivery-date-modal-open",

  //Shop search
  ShopSearchStart = "shop-search-start",
  ShopSearchDone = "shop-search-done",
  ShopRemoveProductFromFavoriteList = "shop-remove-product-from-favorite-list",
  ShopSetProductOnFavoriteList = "shop-set-product-on-favorite-list",
  ShopCategoriesLoad = "shop-categories-load",
  ShopStorageLoad = "shop-storage-load",
  ShopMarkingsLoad = "shop-marks-load",
  ShopBrandsLoad = "shop-brands-load",
  ShopVendorsLoad = "shop-vendors-load",
  ShopFavoriteListsLoad = "shop-favorite-lists-load",
  ShopCustomListsLoad = "shop-custom-lists-load",
  ShopAddedProductToBasket = "shop-added-product-to-basket",
  ShopAddedProductsToBasket = "shop-added-products-to-basket",
  ShopReplaceProductOnFavoriteList = "shop-replace-product-on-favoritelist",
  ShopSearchRefresh = "shop-search-refresh",

  //Favorite 
  FavoriteCreatedList = "favorite-created-list",
  FavoriteReplaceModalSuccess = "favorite-replace-modal-success",
  FavoriteProductLoading = "favorite-product-loading",
  FavoriteReplaceModalError = "favorite-replace-modal-error",
  FavoriteListUpdate = "favorite-list-update",
  FavoriteListInsert = "favorite-list-insert",

  // Header
  MiniCartUpdate = 'mini-cart-update',

  //Basket
  BasketHasExpiryProduct = "basket-has-expiry-product",
  BasketModalDeleteConfirm = 'basket-modal-delete-confirm',
  BasketUpdate = 'basket-update',

  BasketOpenDepositsModal = 'basket-open-deposit-products-modal',
  BasketCloseDepositsModal = 'basket-close-deposit-products-modal',
  BasketDepositProductAdded = 'basket-deposit-product-added',

  //Statistics
  ProductStatisticsLoad = "product-statistics-load",

  // Multiple items
  ShopMultipleItemsItemAdded = 'shop-multiple-items-item-added',
  ShopMultipleItemsItemRemoved = 'shop-multiple-items-item-removed',

  //Orders
  OrdersOrderModal = 'orders-order-modal',
  OrdersOrderModalClose = 'orders-order-modal-close',
  //Campaign planning comments
  ShowComment = 'show-comment'
}