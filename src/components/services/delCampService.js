import { remove } from './crud'
class DeleteCampSevice {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    DeleteCampSevice(id) {
        return remove('http://localhost:3000/feed/delete/' + id);

        //return promise, catch error in component...
    }
}

export default DeleteCampSevice;