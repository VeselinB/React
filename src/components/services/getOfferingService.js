import { get } from './crud'
class OfferingSevice {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    getOffering(id) {

        return get('http://localhost:3000/offering/offering/' + id);

        //return promise, catch error in component...
    }
}

export default OfferingSevice;