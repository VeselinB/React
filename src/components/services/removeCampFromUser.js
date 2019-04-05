import { post } from './crud'
class removeCampFromUser {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    removeCampFromUser(id) {
        return post('http://localhost:3000/feed/remove/' + id);

        //return promise, catch error in component...
    }
}

export default removeCampFromUser;