import { post } from './crud'
class RegisterService {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    register(data) {
        return post('http://localhost:3000/auth/signup', data);

        //return promise, catch error in component...
    }
}

export default RegisterService;