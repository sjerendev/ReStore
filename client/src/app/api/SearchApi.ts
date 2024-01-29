import { SearchInput } from 'models/search/SearchInput';
import { Api } from './Api';

export class SearchApi {
    static client = Api.client('/api/search');

    /* 
        Search
     */
    static search(input: SearchInput) {
        return this.client.post('/search', input);
    }

    /*
        Get search suggestions
    */
   static getSuggestions(input: SearchInput){
       return this.client.post('/search?suggestions=true', input);
   }
}