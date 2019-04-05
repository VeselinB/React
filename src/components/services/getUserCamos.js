import { get } from './crud'
class getUserCamps {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    getCamps(id) {

        return get('http://localhost:3000/feed/getUserCamps/' + id);

        //return promise, catch error in component...
    }


}

export default getUserCamps;