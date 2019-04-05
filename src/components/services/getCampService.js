import { get } from './crud'
class BooksSevice {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    getTopRatedBook(id) {
        return get('http://localhost:3000/feed/camp/' + id);

        //return promise, catch error in component...
    }
}

export default BooksSevice;