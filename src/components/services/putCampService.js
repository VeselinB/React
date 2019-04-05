import { put } from './crud'
class UpdateCampSevice {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    UpdateCampSevice(id, data) {
        return put('http://localhost:3000/feed/update/' + id, data);

        //return promise, catch error in component...
    }
}

export default UpdateCampSevice;