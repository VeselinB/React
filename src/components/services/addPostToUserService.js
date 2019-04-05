import { post } from './crud'
class addPostToService {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    addPostToService(id) {
        return post('http://localhost:3000/feed/add/' + id);

        //return promise, catch error in component...
    }
}

export default addPostToService;