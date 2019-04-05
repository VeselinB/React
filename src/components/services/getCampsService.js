import { get } from './crud'
class BooksSevice {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    getTopRatedBooks() {
        return get('http://localhost:3000/feed/camps');

        //return promise, catch error in component...
    }
}

export default BooksSevice;