enum SearchSortBy {
    Relevance,
    Description,
    DescriptionDesc,
    ProductId,
    ProductIdDesc,
    Favorite, //TODO add then ready - (then favorite administration page made)
    ComparisonPrice,
    ComparisonPriceDesc,
    ProductGroup,
    ProductGroupDesc
}
enum CalculationSearchSortBy {
    Description,
    DescriptionDesc,
    ProductId,
    ProductIdDesc,
    Date,
    DateDesc
}

export { SearchSortBy, CalculationSearchSortBy }