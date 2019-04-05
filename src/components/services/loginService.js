import { post } from './crud'
class LoginService {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.allBooksUrl = `${this.baseUrl}/people`;
    }

    login(data) {
        return post('http://localhost:3000/auth/signin', data);

        //return promise, catch error in component...
    }
}

export default LoginService;