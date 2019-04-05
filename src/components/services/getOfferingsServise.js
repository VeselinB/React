import { get } from './crud'
class OfferingService {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    getOfferings(id) {
        return get('http://localhost:3000/offering/offerings/');

        //return promise, catch error in component...
    }
}

export default OfferingService;