export class SearchSuggestion {
    searchTerm: string;
    imageLink: string;

    static fromApi(item: SearchSuggestion) {
        return Object.assign(new SearchSuggestion(), item);
    }
}
