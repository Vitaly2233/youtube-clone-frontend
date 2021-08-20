import axios from "axios";

export default class AuthService {
    static async register(username, password) {
        try {
            return await axios.post("http://localhost:8080/api/auth/registration", {
                username,
                password,
            });
        } catch (e) {
            return e;
        }
    }

    static async login(username, password) {
        try {
            return await axios.post("http://localhost:8080/api/auth/login", {
                username,
                password,
            });
        } catch (e) {
            return e;
        }
    }
}
