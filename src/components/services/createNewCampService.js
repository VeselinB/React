import { post } from './crud'
class CreateCampSevice {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    CreateCampSevice(data) {
        return post('http://localhost:3000/feed/create/', data);

        //return promise, catch error in component...
    }
}

export default CreateCampSevice;