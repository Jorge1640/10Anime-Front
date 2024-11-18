import axios from 'axios';

const API_URL = 'http://localhost:8080/oauth/token';

class AuthService {
    login(username, password) {
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', username);
        params.append('password', password);

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa('client-id:client-secret')
        };

        return axios.post(API_URL, params, { headers });
    }
}

export default new AuthService();

// export default {
//   login() {
//     return axios.get(`${API_URL}/login`); // Cambiado a comillas invertidas
//   },
//   register(genre) {
//     return axios.post(`${API_URL}/registry`, genre); // Corregido: se añadió la comilla invertida que faltaba
//   }
// };
